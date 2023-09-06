const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.json({
        msg: "Hola"
    })
});

app.listen(port, () => {console.log(`APi running on port ${port}`)})