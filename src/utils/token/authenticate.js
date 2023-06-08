import dotenv from "dotenv";
import jwt from "jsonwebtoken";

// making .env available to Use
dotenv.config({
  path: "./.env",
});

export default function authenticate(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "No Token Provided" });
  }

  try {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .json({ message: "Failed to Authenticated Token" });
      }

      // save the decoded token payload in the request object for further use
      req.user = decoded;
      next();
    });
  } catch (error) {
    console.log(error);
  }
}
