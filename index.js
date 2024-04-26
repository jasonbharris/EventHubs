import express from 'express';
import bodyParser from 'body-parser';
// import { useQuery, useMutation } from "convex/react";
// import { api } from "../convex/_generated/api";
const app = express();

let port = 3000;

const events = [];


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