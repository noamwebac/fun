const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./Models/DbUser");
  
var corsOptions = {
    origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require("./Routes/Routes")(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

