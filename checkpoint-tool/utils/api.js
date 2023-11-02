import axios from 'axios';

const BASE_URL = "http://localhost:3000/api/v1";

// Function to make a GET request
async function get(endpoint) {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response;
  } catch (error) {
    throw error;
  }
}

// Function to make a POST request
async function post(endpoint, data) {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
    return response;
  } catch (error) {
    throw error;
  }
}

// Function to make a PUT request
async function put(endpoint, data) {
  try {
    const response = await axios.put(`${BASE_URL}/${endpoint}`, data);
    return response;
  } catch (error) {
    throw error;
  }
}

// Function to make a DELETE request
async function del(endpoint) {
  try {
    const response = await axios.delete(`${BASE_URL}/${endpoint}`);
    return response;
  } catch (error) {
    throw error;
  }
}

export { get, post, put, del };
