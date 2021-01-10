import firebase from './firebase'
/* Constants */
const USER_DIRECTORY                = 'users'


/**
 * a database util class,
 *   firebase should only be called inside this class
 */
class DB {

  lookupUser(email) {
    
    const data = firebase.database().ref(USER_DIRECTORY).get(email).then(()=>{
      console.log(data)
    })
    console.log(data)
    if (data == null || data == undefined) return false
    return true

  }

  signinUser(email, password) {
    console.log(email);
  }

  signupUser(email, password) {
    const dbRoot = firebase.database().ref()
    
  }
}

const db = new DB()
export default db;