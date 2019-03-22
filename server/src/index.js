import express from 'express';
import router from './server/router/index';
import cors from 'cors';
import morgan from 'morgan';
import {errorHandler} from "./server/utils/errors/errorHandler";


const PORT = process.env.PORT || 9632;
const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', router);

app.use(errorHandler);

app.listen(PORT);


