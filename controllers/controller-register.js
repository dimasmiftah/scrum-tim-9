const config = require("../configs/database");
const User = require("../models/User");
let mysql = require("mysql");
let pool = mysql.createPool(config);

pool.on("error", (err) => {
  console.error(err);
});

module.exports = {
  formRegister(req, res) {
    res.render("auth/register", {
      url: "http://localhost:3000/",
    });
  },

  saveRegister: async (req, res) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.pass;
    await User.create({
      username: username,
      email: email,
      password: password,
    });
    req.flash("color", "success");
    req.flash("status", "Yes..");
    req.flash("message", "Registrasi berhasil");
    res.redirect("/login");
  },
};
