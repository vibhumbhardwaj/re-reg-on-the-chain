export var notFountError = (req, res) => {
  let errResponse = {
    "status": "404",
    "message": "Invalid API endpoint"
  };
  return res.status(404).json(errResponse);
}

export var internalServerError = (err, req, res, next) => {
  console.error(err.stack);
  let errResponse = {
    "status": "500",
    "message": "Something happened back there"
  }
  res.status(500).json(errResponse);
}