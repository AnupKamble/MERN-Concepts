
const express = require('express');
const app = express();
require('dotenv').config();
const userRoutes = require('./routes/routes.userRoutes');



app.use(express.json())
app.use('/home/users', userRoutes );


// app.get('/', (req, res) => {
//     res.status(200).json({ status: 'OK' });
//   });
  


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server is running on port http://localhost:${PORT}`)) 