<<<<<<< HEAD

=======
const express = require("express");
const passport = require('passport');
const User = require("../models/User");
const Wine = require("../models/Wine")
const router = express.Router();


router.get('/wines', (req, res, next) => {

  Wine.find()
  .then(wines => {
    // console.log(wines)
    res.render('social', {wines})
  });

});






module.exports = router;
>>>>>>> 243058755846e1fb04310240087fcea7a4026a78
