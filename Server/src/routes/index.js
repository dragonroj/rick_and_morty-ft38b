const { Router } = require("express");
const { postFav, getFavs, deleteFav } = require("../controllers/favs");
const { getCharById } = require ("../controllers/getCharById");
const { getCharDetail } = require ("../controllers/getCharDetail");
const { getLogin } = require ("../controllers/getLogin");

const router = Router();
router.get("/onsearch/:id", getCharById );
router.get("/character/:id", getCharDetail );
router.get("/login", getLogin );
router.post("/favs", postFav);
router.get("/favs", getFavs);
router.delete("/favs/:id", deleteFav)

module.exports = router;