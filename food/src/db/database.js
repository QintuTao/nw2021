import firebase from './firebase'
/* Constants */
const USER_DIRECTORY                = 'users'


/**
 * a database util class,
 *   firebase should only be called inside this class
 */
class DB {

  /**
   * @returns true if email exists in db 
   * @param {string} email 
   */
  async lookupUser(email) {
    
    const uid = this.emailSerialize(email)

    const data = (await firebase.database().ref(USER_DIRECTORY).get()).child(uid)
    return !(data.key == undefined || data.val() == null) 

  }

  /* an exist email account required */ 
  async signinUser(email, password) {
    
    const uid = this.emailSerialize(email)

    const data = (await firebase.database().ref(USER_DIRECTORY).get()).child(uid)
  }

  signupUser(email, password) {
    const dbRoot = firebase.database().ref()
    
  }

  /** Helpers */
  emailSerialize(email) {
    return email.split('').map(char => {
      return (char == '.') ? "%dot%" : (char == '@') ? "%at%" : char
    }).join("")
  }
}

const db = new DB()
export default db;