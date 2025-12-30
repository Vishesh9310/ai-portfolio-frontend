const express = require('express');
const projectRoutes = require('./routes/projectRoutes');
const certificateRoutes = require('./routes/certificateRoutes');
const chatRoutes = require('./routes/chatRoutes');

const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(process.cwd(), "public")));

app.use('/api/projects', projectRoutes);
app.use('/api/certificates', certificateRoutes);
app.use("/api/chat", chatRoutes);


module.exports = app;