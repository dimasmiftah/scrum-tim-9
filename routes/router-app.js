const router = require("express").Router();
const homeController = require("../controllers").home;
const profileController = require("../controllers").profile;
const galeryController = require("../controllers").galery;
const tempatController = require("../controllers").tempat;
const kulinerController = require("../controllers").kuliner;
const rumahController = require("../controllers").rumah;
const verifyUser = require("../configs/verify");

router.get("/", verifyUser.isLogin, homeController.home);
router.get("/profile", verifyUser.isLogin, profileController.profile);
router.get("/galeri", galeryController.index);
router.get("/tempat", tempatController.index);
router.get("/kuliner", kulinerController.index);
router.get("/rumahadat", rumahController.index);

module.exports = router;
