import { Redirect } from 'react-router-dom';
import request from 'request';

const CLIENT_ID     = '9ef3e244910947899595d2a5774d5cf0'
const CLIENT_SECRET = '5b3521938d08457b9b4e748959f449a9'

class Nutrition {
  constructor() {

    this.options = {

      method: 'POST',
      url: 'https://oauth.fatsecret.com/connect/token',
      auth : {
          user :      CLIENT_ID,
          password :  CLIENT_SECRET
      },
      headers: { 'content-type': 'application/json'},
      form: {
          'grant_type': 'client_credentials',
          'scope' : 'basic'
      },
      json: true
    }

    // this.fetchConfig = {
    //   method: 'POST',
    //   headers: {'content-type' : 'application/json'},
    //   body: JSON.stringify(data),
    //   redirect: 'follow'
      
    // }

    this.getResponse = this.getResponse.bind(this)
  }

  getResponse() {
    console.log(2)
    request(this.options, (error, response, body) => {
      if (error) throw new Error(error)

      console.log(body)
      console.log(response)
    })
  }
  
}


export default Nutrition