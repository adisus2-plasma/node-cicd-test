const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Im express NOw im dev')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running in ${PORT}`));
