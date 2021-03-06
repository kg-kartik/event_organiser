const express = require("express");
const router = express.Router();
// Bring in Owner's user model
const OwnerUser = require("../../models/OwnerUser");
//Bring in bcrypt to encrypt the password
const bcrypt = require("bcryptjs");
//Bring in json web tokens
const jwt = require("jsonwebtoken");
// Bring in passport
const passport = require("passport");
// Bring in connection keys
const keys = require("../../config/keys");

// @route GET /api/ownerUsers/register
// @description Register Owners of events
// @access Public

router.post("/register", (req, res) => {
  OwnerUser.findOne({
    email: req.body.email
  }).then(owner => {
    if (owner) {
      res.status(400).json("Owner already exists!");
    } else {
      const newOwner = new OwnerUser({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // Hash the password before storing into the database
      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newOwner.password, salt, (error, hash) => {
          if (error) {
            throw error;
          } else {
            newOwner.password = hash;
            newOwner
              .save()
              .then(savedOwner => {
                res.json(savedOwner);
                console.log("New Owner has been registered successfully!");
              })
              .catch(error => {
                console.log(error);
              });
          }
        });
      });
    }
  });
});

// @route POST /api/ownerUsers/login
// @description Login Owner -> Returs JSON Web Token
// @access Public
router.post("/login", (req, res) => {
  // Get email and password from request body header
  const email = req.body.email;
  const password = req.body.password;

  // Check if user exists or not,
  OwnerUser.findOne({
    email
  })
    .then(owner => {
      if (!owner) {
        res.status(403).json("No user is registered with this email address!");
      }
      console.log(password, owner.password);
      // If user exists, decrypt the password from the database and compare
      bcrypt
        .compare(password, owner.password)
        .then(isMatch => {
          if (isMatch) {
            // Create jwt payload once password matched
            const payload = {
              id: owner.id,
              email: owner.email,
              name: owner.name
            };
            console.log("Owner logged in successfully!");
            jwt.sign(
              payload,
              keys.secretOrkey,
              {
                expiresIn: 10000
              },
              (error, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token,
                  payload: payload
                });
              }
            );
          } else {
            res.status(400).json("Incorrect password");
          }
        })
        .catch(error => {
          res.status(400).json("Password does not match!");
        });
    })
    .catch(error => {
      return res.status(404).json(error);
    });
});

module.exports = router;
