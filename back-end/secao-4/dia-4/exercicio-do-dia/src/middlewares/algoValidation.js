const descriptionValidation = (req, res, next) => {
  const { description } = req.body;

  const { createdAt, rating, difficulty } = description;

  const descriptionKeys = [ "createdAt", "rating", "difficulty"];

  const compareKeys = descriptionKeys.every(createdAt, rating, difficulty)

  if (!description) {
    return res.status(400).json({"message": "O campo price é obrigatório" })
  }

  if (description < 0) {
    return res.status(400).json({"message": "O campo price deve ser um número maior ou igual a zero" })
  }
  next();
}