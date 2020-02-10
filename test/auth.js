const express = require('express'),
bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('hello');
});

app.post('/api/auth', (req, res) => {
    const { username, password } = req.body
    if(username === 'admin' && password === 'admin') {
        res.json({
            success: true,
            secret: 'This is the secret no one knows but the admin'
        });
    } else {
        res.json({
            success: false,
            secret: 'Invalid credentials'
        });
    }
})

app.listen(7000, () => {
    console.log('started');
});
