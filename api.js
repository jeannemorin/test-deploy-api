const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory user data
let user = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
};

// GET route to retrieve user information
app.get('/user', (req, res) => {
    res.json(user);
});

// POST route to modify user information
app.post('/user', (req, res) => {
    const { name, email } = req.body;

    if (name) {
        user.name = name;
    }

    if (email) {
        user.email = email;
    }

    res.json({
        message: 'User updated successfully',
        user
    });
});

app.listen(port, () => {
    console.log(`Time to Krrruuummble on : http://localhost:${port}`);
});
