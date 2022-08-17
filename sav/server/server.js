const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./Models/DbUser.js");
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
  
var corsOptions = {
    origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require("./Routes/Routes.js")(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

