const request = require('request');
const apiOptions = {
  server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://fast-reef-45489.herokuapp.com/';
}


const createUser = function(req, res) {
    
    const path = `/register`;
    const postdata = {
      uname: req.body.name,
      email: req.body.email,
      password: req.body.password
    };
    
    const requestOptions = {
      url : apiOptions.server + path,
      method : 'POST',
      json : postdata
    };
      request(
        requestOptions,
        (err, response, body) => {
          if(err){console.log(err);}
          if (!err && response.statusCode == 200) {
            res.redirect('/login');
        } else if (response.statusCode === 400 && body.name && body.name === 'ValidationError' ) {
            res.redirect(`/form`);
          } else {
            _showError(req, res, response.statusCode);
          }
        }
      );
    };

    const _showError = function (req, res, status) {
      let title = '';
      let content = '';
      if (status === 404) {
        title = '404, page not found';
        content = 'Oh dear. Looks like we can\'t find this page. Sorry.'; 
      } else {
        title = `${status}, something's gone wrong`;
        content = 'Something, somewhere, has gone just a little bit wrong.';
      }
      res.status(status);
      res.render('generic-text', {
        title : title,
        content : content
      });
    };

  module.exports = {createUser};
  