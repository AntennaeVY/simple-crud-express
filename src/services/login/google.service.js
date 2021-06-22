const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const { getOneByEmail } = require("../users/read.service");
const { createUser } = require("../users/create.service");
const { createToken } = require("../../utils/token");

module.exports.authenticateGoogleUser = async (token) => {

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  
  const payload = ticket.getPayload();
  
  const googleUser = {
    name: payload.name,
    email: payload.email,
    img: payload.img,
    google: true,
    password: 'null'
  }

  if (!googleUser.email) {
    throw new Error("User must have an email");
  }
  
  const userDB = await getOneByEmail(googleUser.email);

  if (userDB) {
    
    if (userDB.google == false) {
      throw new Error("User is not google authenticated, must login normally")
    }

    return createToken(userDB.toJSON());
    
  } else {
    const newUser = await createUser(googleUser);
    
    return createToken(newUser.toJSON());
  }

}
