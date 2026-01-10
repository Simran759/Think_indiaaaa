import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

export default FRONTEND_URL;
