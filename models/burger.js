var orm = require("../config/orm.js");

var burger = {
  all: function(br) {
    orm.all('burgers', function(res) {
      br(res);
    });
  },
  
  create: function(cols, vals, br) {
    orm.create('burgers', cols, vals, function(res) {
      br(res);
    });
  },

  update: function(objColVals, condition, br) {
    orm.update('burgers', objColVals, condition, function(res) {
      br(res);
    });
  },
  
  delete: function(condition, br) {
    orm.delete('burgers', condition, function(res) {
      br(res);
    });
  },
};

module.exports = burger;