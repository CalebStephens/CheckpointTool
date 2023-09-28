// Import the Express module
import express from 'express';
import cors from "cors"; 
import helmet from "helmet";
import rateLimit from "express-rate-limit";

// Create an Express application
const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  });
  
  app.use(limiter);

app.use(cors()); 
app.use(helmet());

// Create a GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000.');
});

// Export the Express application. May be used by other modules. For example, API testing
export default app;