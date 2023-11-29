const connectDB = require('./config/db');
const express = require('express');
const routes = require('./routes/routes');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cookieParser());

connectDB();

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));