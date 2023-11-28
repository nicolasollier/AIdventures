const connectDB = require('./config/db');
const express = require('express');
const routes = require('./routes/routes');

const PORT = process.env.PORT || 3000;
const app = express();

connectDB();

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));