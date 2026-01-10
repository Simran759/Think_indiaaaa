import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: `${__dirname}/../../.env` });

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

export default FRONTEND_URL;
