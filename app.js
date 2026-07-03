const express = require("express");

const app = express();


// Middleware
app.use(express.json());


// Routes
const userRoutes=require("./src/routes/userRoute");

app.use("/users",userRoutes);

// Default Route
app.get("/", (req, res) => {

    res.status(200).json({
        success: true,
        message: " API Running"
    });

});


module.exports = app;