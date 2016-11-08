var Sequelize = require('sequelize');

var sequelize = new Sequelize('seq', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

var Company = sequelize.define('company', {
  Name: {
    type: Sequelize.STRING,
    field: 'name'
  },
}, {
  freezeTableName: true
});

Company.sync({force: true}).then(function () {
  // Table created
  return Company.create({
    Name: 'sony'
  });
});


var Group = sequelize.define('group', {
  Name: {
    type: Sequelize.STRING,
    field: 'name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

Group.sync({force: true}).then(function () {
  // Table created
  return Group.create({
    Name: 'Nodejs Group',
  });
});

sequelize.close() 
