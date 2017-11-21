export default (req, res) => {
  let errResponse = {
    "status": "404",
    "message": "Invalid API endpoint"
  };
  return res.status(404).send(errResponse);
}