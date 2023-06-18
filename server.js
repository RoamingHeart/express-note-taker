//requires linked
const express = require('express');
const apiRoute = require('./routes/api');
const htmlRoute = require('./routes/html');

const PORT = process.env.PORT || 3001;
const app = express();

//middleware to run
app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.use(express.static('public'));
app.use(htmlRoute);
app.use(apiRoute);

app.listen(PORT, () => {
    console.log(`server running oh https://localhost:${PORT}`);
})