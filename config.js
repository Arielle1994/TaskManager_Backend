const Sequelize= require('sequelize');
const config= new Sequelize("taskmanager", "root", "Evanar22",{dialect:'mariadb'});
//(name of the database, username, password,dialect/name of database).

module.exports= config;

//allows to use everything within VS outside of here