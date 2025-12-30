require('dotenv').config();
const app = require('./src/app');
const PORT = 5000;

console.log("GROQ_API_KEY Key:", process.env.GROQ_API_KEY);
 
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
