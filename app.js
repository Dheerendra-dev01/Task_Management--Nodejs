const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tasksRouter = require('./routes/taskRoute');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const mongourl = process.env.MONGO_URL;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/task', tasksRouter);

mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
