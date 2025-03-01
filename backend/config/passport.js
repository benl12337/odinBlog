const { ExtractJwt, Strategy } = require("passport-jwt");
const passport = require("passport");
const db = require("../db/queries");

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.ACCESS_TOKEN_SECRET,
}

passport.use(
    new Strategy(opts, async (payload, done) => {
        try {
            const user = await db.getUserById(payload.id);
            console.log('this is the username: ', user);
            if (user) return done(null,user);
        } catch (error) {
            console.log('error in authenticating');
            return done(error);
        }
    })
);
