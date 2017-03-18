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
  },
  postCors(url){
    console.log(url);
    fetch(url,
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
    ).then(function(response){
      return response;
    })
  }
}

module.exports = HTTP;
