import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import initRoutes from './routes';
import './core/db-client';

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }));

app.use('/api', initRoutes());

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`);
});
