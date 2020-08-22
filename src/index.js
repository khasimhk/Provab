import express from 'express';
const app = express();
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
import dotenv from 'dotenv';
dotenv.config();

app.use(bodyParser.json());
const Port = process.env.PORT;

require('../src/route/userRoute')(app);

app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});
