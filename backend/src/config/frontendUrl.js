import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// dotenv.config()
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: `${__dirname}/../../.env` });

const FRONTEND_URL = process.env.FRONTEND_URL || "https://think-india-mnit.vercel.app";

export default FRONTEND_URL;
