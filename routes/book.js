get = (req, res, next) => {
  let query;
  if(req.query.author) {
    query = req.models.Book.find({author: req.query.author})
  } else {
    query = req.models.Book.find()
  }
  query.exec()
    .then(books => res.send(books))
    .catch(error => next(error));
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
      city: req.body.location.city,
      street: req.body.location.street,
    }
  }).then((book) => {
    return res.status(201).send(book)
  }).catch((error) => {
    next(error)
  })
};

put = (req, res, next) => {
  req.models.Book.updateOne({_id: req.params.id},
    {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      selleremail: req.body.selleremail,
      used: req.body.used,
      location: {
        city: req.body.location.city,
        street: req.body.location.street,
      },
    }, {
      new: true,
      upsert: true,
      runvalidators: true,
    }).then((status) => {
      if(status.upserted)
        res.status(201)
      else if (status.nModified)
        res.status(200)
      else 
        res.status(204)
    res.send()
    }).catch(error => next(error))
}

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
  put,
  postBook,
  deleteBookById,
}