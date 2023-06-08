import jwt from "jsonwebtoken";

export default function generateToken(userId, secretKey) {
  let response = null;
  try {
    return jwt.sign({ id: userId }, secretKey, { expiresIn: "1h" });
  } catch (error) {
    console.log(error);
    return response;
  }
  return response;
}
