import 'whatwg-fetch';

const baseUrl = "";

var HTTP = {
  getPost (url) {
    fetch(baseUrl+url)
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('parsed json', json)
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  },
  postJson(url,data){
    fetch(baseUrl+url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
}

module.exports = HTTP;
