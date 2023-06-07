export function home(req, res) {
  res.status(200).json({
    status: "success",
    data: "Welcome to Landing Page",
  });
}
