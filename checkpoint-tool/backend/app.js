import dotenv from 'dotenv';
import express, { urlencoded, json } from 'express';
import cors from "cors"; 
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import compression from 'compression';
import cacheRoute from './middleware/cacheRoute.js';
import authRoute from './middleware/authRoute.js';

import auth from './routes/v1/auth.js';
import tool from './routes/v1/tools.js';
import papers from './routes/v1/papers.js';
import students from './routes/v1/students.js';
import user from './routes/v1/user.js';

dotenv.config();
const app = express();

const BASE_URL = 'api';
const CURRENT_VERSION = 'v1';
const PORT = process.env.PORT;

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000 // limit each IP to 100 requests per windowMs
  });
  
app.use(limiter);
app.use(cors()); 
app.use(helmet());
app.use(compression());
app.use(cacheRoute);
app.use(json());
app.use(urlencoded({ extended: false }));


app.use(`/${BASE_URL}/${CURRENT_VERSION}/auth`,  auth);
app.use(`/${BASE_URL}/${CURRENT_VERSION}/tools`,  tool);
app.use(`/${BASE_URL}/${CURRENT_VERSION}/papers`,  papers);
app.use(`/${BASE_URL}/${CURRENT_VERSION}/students`,  students);
app.use(`/${BASE_URL}/${CURRENT_VERSION}/users`, user);


// Start the server on port 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Export the Express application. May be used by other modules. For example, API testing
export default app;