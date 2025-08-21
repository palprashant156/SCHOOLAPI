//BOTH CODE ARE WORKING



// const express = require('express');
// const cors = require('cors');

// const app = express();
// const PORT = 5100;

// app.use(cors());
// app.use(express.json());


// app.get('/', (req, res) => {
//   res.send('<h2>✅ Backend is running. Visit <code>/api/users</code> for user data.</h2>');
// });


// app.get('/api/users', (req, res) => {
//   res.json([
//     { id: 1, name: 'Alice', email: 'alice@example.com' },
//     { id: 1, name: 'Alice', email: 'alice@example.com' },

//   ]);
// });

// app.listen(PORT, () => {
//   console.log(`✅ Backend running on http://localhost:${PORT}`);
// });

const express=require('express');
const cors=require('cors');
const app=express();
const PORT=5100;

app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
  res.send('server is running');
});
app.get('/api/users',(req,res)=>{
  res.json([
    {id:1,name:'apple'}
  ]);
});
app.listen(PORT,()=>{
  console.log('backend is running')
})