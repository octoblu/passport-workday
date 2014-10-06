# passport-workday

NOT COMPLETE!!!

[Passport](http://passportjs.org/) strategy for authenticating with [Workday](http://workday.com/)
using the OAuth 2.0a API.

This module lets you authenticate using Workday in your Node.js applications.
By plugging into Passport, Workday authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-workday

## Usage

#### Configure Strategy

    passport.use(new SmartsheetStrategy({
        clientID : WORKDAY_CLIENT_KEY,
        clientSecret: WORKDAY_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/workday/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ workdayId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'workday'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/workday',
      passport.authenticate('workday'));

    app.get('/auth/workday/callback',
      passport.authenticate('workday', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## License

[The MIT License](http://opensource.org/licenses/MIT)