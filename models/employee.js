'use strict';

module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define('employee', {
    id: {type:DataTypes.INTEGER, primarykey:true},
    age:DataTypes.INTEGER,
      first:DataTypes.STRING,
      last:DataTypes.STRING
  }, {
      timestamps:false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Employee;
};