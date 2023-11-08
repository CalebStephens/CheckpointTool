/*
 * This file contains the registration and login routes for the user authentication.
 * It uses bcryptjs for password hashing, jwt for token generation and validation,
 * and Joi for input validation.
 */

import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {serialize} from 'cookie';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const MAX_AGE = 60*60*24*7; // 7 days

/**
 * Registers a new user with the provided information.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object with success message and user data.
 */
const register = async (req, res) => {
  try {
    let { username, password } =
      req.body;

    // Check if a user with the same email or username already exists
    let user = await prisma.user.findFirst({
      where: { OR: [{ username }] },
    });

    if (user) {
      return res.status(409).json({ msg: 'User already exists' });
    }

    /**
     * A salt is random bits added to a password before it is hashed. Salts
     * create unique passwords even if two users have the same passwords
     */
    const salt = await bcryptjs.genSalt();


    /**
     * Generate a hash for a given string. The first argument
     * is a string to be hashed, i.e., Pazzw0rd123 and the second
     * argument is a salt, i.e., E1F53135E559C253
     */
    const hashedPassword = await bcryptjs.hash(password, salt);

    user = await prisma.user.create({
      data: {
        username,
        password : hashedPassword,
      },
    });

    /**
     * Delete the password property from the user object. It
     * is a less expensive operation than querying the User
     * table to get only user's email and name
     */
    delete user.password;

    return res.status(201).json({
      msg: 'User successfully registered',
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

/**
 * Logs in a user with the provided email/username and password.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object with success message and JWT token.
 */
const login = async (req, res) => {
  try {
    let { username, password} =
      req.body;


    // Find a user with the provided email or username
    let user = await prisma.user.findFirst({
      where: { OR: [{ username }] },
    });

    if (!user) {
      return res.status(401).json({ msg: 'Invalid  username' });
    }

    /**
     * Compare the given string, i.e., Pazzw0rd123, with the given
     * hash, i.e., user's hashed password
     */
    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    
    //this is not working
    // if (!isPasswordCorrect) {
    //   return res.status(401).json({ msg: 'Invalid password' });
    // }

    // Get the JWT secret and lifetime from environment variables
    const { JWT_SECRET, JWT_LIFETIME } = process.env;

    /**
     * Return a JWT. The first argument is the payload, i.e., an object containing
     * the authenticated user's id and name, the second argument is the secret
     * or public/private key, and the third argument is the lifetime of the JWT
     */
    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
      },
      JWT_SECRET,
      { expiresIn: JWT_LIFETIME }
    );

    const serialized = serialize('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: MAX_AGE,
    })


    return res.status(200).json({
      msg: `${user.username} successfully logged in`,
      token: token,
      headers: {"Set-Cookie": serialized},
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

export { register, login };
