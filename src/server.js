const express = require("express");

// lay tu thu vien dotenv
require("dotenv").config();

const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
// import express from "express";

const app = express(); //app of express
const port = process.env.PORT; //port number
const hostname = process.env.HOST_NAME;

//conlig template engine
configViewEngine(app);

// route
app.use("/", webRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
