const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Im express NOw im dev TEST PRODssssssssssssssssssssss')
})

app.get('/books', (req, res) => {
  res.send('shit shit shit')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running in ${PORT}`));
