const orm = require("../config/orm.js");

const burger = {
    all: function(cb){
        orm.all("burgers", function(res){
           console.log(res)
            cb(res);
        })
    },
    create: function(vals, cb){
        orm.create(vals, function(res){
            cb(res);
        })

    },
    update: function(vals, cb){
        orm.update(vals, function(res){
            cb(res)
        })
    }
}

module.exports = burger;