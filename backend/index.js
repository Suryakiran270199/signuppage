const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require('./Passport')
const passport = require("passport");
const authRoute = require('./routes/Auth');
const app = express();

app.use(
  cookieSession({ name: "session", keys: ["hippi"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("2500", () => {
  console.log("Server is running!");
});