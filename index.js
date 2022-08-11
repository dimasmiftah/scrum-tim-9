const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const flash = require("req-flash");

const config = require("./configs/config.js");
const loginRoutes = require("./routes/router-login.js");
const registerRoutes = require("./routes/router-register");
const appRoutes = require("./routes/router-app");
const db = require("./configs/database");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "t@1k0ch3ng",
    name: "secretName",
    cookie: {
      sameSite: true,
      maxAge: 60000,
    },
  })
);

app.use(flash());
app.use(function (req, res, next) {
  res.setHeader(
    "Cache-Control",
    "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
  );
  res.setHeader("Pragma", "no-cache");
  next();
});
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/login", loginRoutes);
app.use("/register", registerRoutes);
app.use("/", appRoutes);

db.authenticate()
  .then(() => console.log("[DB] Connection has been established successfully."))
  .catch((error) =>
    console.error("[DB] Unable to connect to the database:", error)
  );

db.sync({
  alter: true,
})
  .then(() => console.log("[DB] Database synced successfully."))
  .catch((error) => console.error("[DB] Error:", error));

app.listen(config.port, () => {
  console.log("Server is running on port " + config.port);
  console.log("Visit http://localhost:" + config.port + "/");
});
