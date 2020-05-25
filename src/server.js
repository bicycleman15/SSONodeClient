import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import auth from './routes/auth';
import profile from './routes/profile';

const app = express();

app.use(cors());
app.use(cookieParser()); // pass a string inside function to encrypt cookies

// only for debugging purposes
const db_url = 'mongodb+srv://jatin:jatin@cluster0-fyl7v.mongodb.net/test?retryWrites=true&w=majority';

// Connect to database
mongoose
    .connect(db_url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to the database...');
    })
    .catch((err) => {
        console.log(err);
    });

// Root page
app.get('/', (req, res) => {
    res.send('Root page');
});

app.use('/auth', auth);
app.use('/profile', profile);

const port = 4000;

app.listen(port, () => {
    console.log(`Server listening on ${port}!`);
});