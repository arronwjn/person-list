var Person = require('./modle/index');

module.exports = function (app) {
  app.get('/all', function (req, res) {
    Person.find(function (err, people) {
      if (err) {return console.log(err)}
      res.json({people})
    })
  });
  app.delete('/del/:_id',function (req, res) {
    var _id = req.params._id;
    Person.findByIdAndRemove(_id,function (err) {
      if (err) {return console.log(err)};
      res.json({status:'success'})
    })
  });
  app.post('/new', function (req, res) {
    var person = new Person(req.body);
    person.save(function (err, person) {
      if (err) {return console.log(err)};
      res.json({person})
    })
  })
  app.put('/edit/:_id', function (req, res) {
    var _id = req.params._id;
    Person.findByIdAndUpdate(_id, req.body, function (err, person) {
      if (err) {return console.log(err)};
      // 注意这里返回的是未更新前的文档
      res.json({person})
    })
  })
}
