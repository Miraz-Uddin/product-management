import { Login } from "../services/AuthService.js";

/**
 * Login
 */
export async function login(req, res) {
  try {
    const { id } = req.body;
    const { status, code, message, data } = await Login(id);
    res.status(code).send({ status, message, data });
  } catch (error) {
    console.log(error);
  }
}
