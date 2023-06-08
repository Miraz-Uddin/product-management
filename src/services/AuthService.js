import dotenv from "dotenv";
import generateToken from "../utils/token/generateToken.js";

// making .env available to Use
dotenv.config({
  path: "./.env",
});

export async function Login(userId) {
  let status = "failed";
  let code = 400;
  let message = "";
  let data = {};

  // Generate a JWT token with the User Payload
  const token = generateToken(userId, process.env.SECRET_KEY);

  if (token) {
    status = "success";
    code = 201;
    message = "Logged In Successful";
    data = { jwt: token, user: { id: userId } };
  }

  return {
    code,
    status,
    message,
    data,
  };
}
