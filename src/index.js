const express = require("express");

const app = express();

app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(5000, () => console.log(`App is listening on port 5000...`));
