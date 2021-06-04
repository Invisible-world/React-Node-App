const express = require('express');
const app = express();
const cors=require('cors')


const PORT = process.env.PORT || 5000;
app.use(cors())

app.get('/api', (req, res) => res.json({message:'Hello from server'}));

app.listen(PORT, () => console.log(` app listening at http://localhost:${PORT }`));