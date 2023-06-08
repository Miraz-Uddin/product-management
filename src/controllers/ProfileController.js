import { GetProfileInfo } from "../services/ProfileService.js";

/**
 * getProfileData
 */
export async function getProfileData(req, res) {
  try {
    const { status, code, message, data } = await GetProfileInfo(req.user);
    res.status(code).send({ status, message, data });
  } catch (error) {
    console.log(error);
  }
}
