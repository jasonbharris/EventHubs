import express from 'express';
import bodyParser from 'body-parser';
const app = express();

let port = 3000;


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});