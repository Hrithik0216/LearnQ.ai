const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/recruitment', (req, res) => {
    const { first_name, last_name, email, phone_number, platform_name, cover_letter, urls } = req.body;

    console.log('Received data:', req.body);

    const id = '12345';
    res.status(201).json({ id });
});

app.listen(port, () => {
    console.log(`Server running at${port}`);
});
