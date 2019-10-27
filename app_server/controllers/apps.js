const request = require('request');
const apiOptions = {
  server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://fast-reef-45489.herokuapp.com/';
}


 const AppList = function(req, res, callback){
    let message = null;
    if (!(callback instanceof Array)) {
      message = 'API lookup error';
      responseBody = [];
    } else {
      if (!callback.length) {
        message = 'No apps found';
      }
    }
    const path = '/reviews';
    const requestOptions = {
      url : apiOptions.server + path,
      method : 'GET',
      json : {}
    };
    console.log('HERE');
    request(
      requestOptions,
      (err, response, body) => {
        let appList = body;
        if (response.statusCode === 200) {
        
            console.log(applist)
          
        }
        console.log(appList);
        if(err){
            throw err;
        }
        console.log('hereeee');
      }
    );
  };

module.exports = {AppList}