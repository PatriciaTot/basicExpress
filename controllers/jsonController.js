
module.exports.json =
  (req, res) => {
    const params = {
      message: req.query.message,
      date: new Date(),
      value: req.query.value,
      color: req.query.color
    };
    res.json(params);
}


module.exports.random =
  (req, res) => {
  const some_int = Math.floor(Math.random() * 10);
  res.json({ randomValue: some_int });
}