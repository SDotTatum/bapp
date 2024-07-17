import express, { Router } from 'express';
import axios from 'axios';

const router: Router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const response = await axios.post('http://auth-service:3001/api/auth/register', req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const response = await axios.post('http://auth-service:3001/api/auth/login', req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error logging in' });
  }
});

export default router;