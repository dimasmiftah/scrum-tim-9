module.exports = {
  home(req, res) {
    res.render("index", {
      url: "http://localhost:3000/",
      userName: req.session.username,
    });
  },
};
