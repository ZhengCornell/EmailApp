const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(foundUser => {
    done(null, foundUser);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      //同意之后送到哪里
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // 这是一个异步操作 不能直接assign， 要promise 准备给token by serialize
      // 第二次来， 用 cookies deserialize
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (!existingUser) {
          new User({
            googleId: profile.id
          })
            .save()
            .then(newUser => {
              done(null, newUser);
            }); // 创建好了
        } else {
          done(null, existingUser);
        }
      });
    }
  )
);
