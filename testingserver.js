const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5100;

app.use(cors());
app.use(express.json());

// 🔁 Users stored in a variable so we can modify it
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

app.get('/', (req, res) => {
  res.send('<h2>✅ Backend is running. Visit <code>/api/users</code> for user data.</h2>');
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

// 🗑️ DELETE user by ID
app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const originalLength = users.length;
  users = users.filter(user => user.id !== id);

  if (users.length < originalLength) {
    res.json({ message: `User with ID ${id} deleted.` });
  } else {
    res.status(404).json({ error: 'User not found.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});

