const request = require('request');
const apiOptions = {
  server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://pure-temple-67771.herokuapp.com';
}
const doAddUser = function(req, res) {
   
    const path = `/api/users`;
    const postdata = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };
    const requestOptions = {
      url : apiOptions.server + path,
      method : 'POST',
      json : postdata
    };
    if (!postdata.name || !postdata.email || !postdata.password) {
      res.redirect(`/register/err=val`);
    } else {
      request(
        requestOptions,
        (err, response, body) => {
          if (response.statusCode === 201) {
            res.redirect(`/login`);
          } else if (response.statusCode === 400 && body.name && body.name === 'ValidationError' ) {
            res.redirect(`/register/err=val`);
          } else {
            _showError(req, res, response.statusCode);
          }
        }
      );
    }
  };

  module.exports = {doAddUser};
  