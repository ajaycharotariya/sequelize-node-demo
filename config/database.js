const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    logging: true,  //sequelize query logging to console
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);


// Connect all the models/tables in the database to a db object, 
// so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


// models // tables
db.users = require('../models/users.model')(sequelize, Sequelize);
db.articles = require('../models/articles.model')(sequelize, Sequelize);
db.comments = require('../models/comments.model')(sequelize, Sequelize);
db.articleTags = require('../models/articleTags.model')(sequelize, Sequelize);
db.tags = require('../models/tags.model')(sequelize, Sequelize);
// relations / associations
db.articles.belongsTo(db.users, { foreignKey: 'userId', as: 'user' });
db.users.hasMany(db.articles, { foreignKey: 'userId', as: 'articles' });
db.articles.hasMany(db.comments,{ foreignKey: 'articleId', as: 'comments' })
// db.comments.belongsTo(db.articles)
db.articles.belongsToMany(db.tags, { as: 'articleTags', through: db.articleTags, foreignKey: 'articleId'});
db.tags.belongsToMany(db.articles, { as: 'tagInArticles', through: db.articleTags, foreignKey: 'tagId'})
db.articleTags.belongsTo(db.articles, { foreignKey: 'id', targetKey: 'id', as: 'articles' });
db.articleTags.belongsTo(db.tags, { foreignKey: 'id', targetKey: 'id', as: 'tags' });
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

(async () => {
  await sequelize.sync();
})();

module.exports = db;
