const express = require("express");
const app = express();

console.log('_' + Math.random().toString(36).substr(2, 9));
const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port http://localhost:${port} 🔥`));