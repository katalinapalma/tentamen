get = (req, res, next) => {
  req.models.Book.find().then((books) => {
      return res.send(books);
    }).catch((error) => next(error))
};

getBookById = (req, res, next) => {
  req.models.Book.findById(req.params.id).then((book) => {
    return res.send(book)
  }).catch((error) => {
    next(error)
  })
};

postBook = (req, res, next) => {
  req.models.Book.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
    selleremail: req.body.selleremail,
    used: req.body.used,
    location: {
      city: req.body.city,
      street: req.body.street,
    }
  }).then((book) => {
    return res.status(201).send(book)
  }).catch((error) => {
    next(error)
  })
};

module.exports = {
  get,
  getBookById,
  postBook,
}