const express = require('express'),
bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
    res.send('hello');
});

app.post('/api/auth', (req, res) => {
    const { username, password } = req.body
    if(username === 'admin' && password === 'admin') {
        res.json({
            success: true,
            message: 'This is the secret no one knows but the admin'
        });
    } else {
        res.json({
            success: false,
            message: 'Invalid credentials'
        });
    }
})

app.get('/api/data', (req, res) => {
    res.json({
        success: true,
        message: 'TOP SECRET MESSAGE'
    })
})

app.listen(7000, () => {
    console.log('started');
});
