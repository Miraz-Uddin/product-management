import dotenv from "dotenv";

// making .env available to Use
dotenv.config({
  path: "./.env",
});

export async function GetProfileInfo(user) {
  let status = "failed";
  let code = 400;
  let message = "";
  let data = {};
  if (user) {
    status = "success";
    code = 200;
    message = "User Reached to Protected Route !!";
    data = { user };
  }
  return {
    code,
    status,
    message,
    data,
  };
}
