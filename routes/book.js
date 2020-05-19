get = (req, res, next) => {
  req.models.Book.find().then((books) => {
      return res.send(books);
    }).catch((error) => next(error))
};
// get = (req, res, next) => {
//   let query;
//   if(req.query.title) {
//     query = req.models.Book.findOne({title: req.query.title})
//   } else {
//     query = req.models.Book.find()
//   }
//   query.exec()
//     .then(books => res.send(books))
//     .catch(error => next(error));
// };

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

deleteBookById = (req, res, next) => {
  req.models.Book.findByIdAndDelete(
    req.params.id
  ).then((book) => {
    if(book)
      return res.status(200).send(`${book.title} has been deleted`)
      res.sendStatus(204) 
  }).catch(error => next(error))
};

module.exports = {
  get,
  getBookById,
  postBook,
  deleteBookById,
}