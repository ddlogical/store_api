import express from 'express';
import { CorsOptions } from 'cors';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;
const whiteListCors = process.env.WHITELIST!.split(',');

const corsOptions: CorsOptions  = {
  origin: function (origin, callback) {
    if (whiteListCors.indexOf(origin!) !== -1 || !origin) {     
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}

app.use(cors(corsOptions));  
app.use(express.json());

app.listen(port, () => console.log(`Server starts on port ${port}`))