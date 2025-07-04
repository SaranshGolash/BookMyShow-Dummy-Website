import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = 4000;
const _dirname = dirname(fileURLToPath(import.meta.url));

app.use('/public', express.static(path.join(_dirname, 'public')));
app.use('/views', express.static(path.join(_dirname, 'views')));

// Views engine

app.set('views', path.join(_dirname, 'views'));
app.set('view engine', 'ejs');

// Home page route

app.get('/', async (req, res) => {
    res.render('index');
});

// Sign in page route

app.get('/signup', async (req, res) => {
    res.render('signup');
});

// Movies page route

app.get('/movies', async (req, res) => {
    res.render('movies');
});

// Stream page route

app.get('/stream', async (req, res) => {
    res.render('stream');
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});