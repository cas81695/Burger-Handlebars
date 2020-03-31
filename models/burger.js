var orm = require('../config/orm.js');

var burger_call = {
  insert: function(some_val, cb){
    orm.insert('burger_tbl', 'burger_name', some_val, function(res){
      cb(res);
    });
  },
  read: function(cb){
    orm.read('burger_tbl', function(res){
      cb(res);
    });
  },
  update: function(user_id, cb){
    orm.update('burger_tbl', 'devoured', 1 , 'id', user_id, function(res){
      cb(res);
    });
  },
  delete: function(user_id, cb){
    orm.delete('burger_tbl', 'id', user_id, function(res){
      cb(res);
    });
  }
}

module.exports = burger_call;