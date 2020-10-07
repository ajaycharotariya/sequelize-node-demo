const db = require('../config/database');

const createUser = async (req, res) => {
    try {
      const user = await db.users.create(req.body);
      return res.status(201).json({
        user,
      });
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }

  const updateUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const [ updated ] = await db.users.update(req.body, {
        where: { id: userId }
      });
      if (updated) {
        const updatedUsers = await db.users.findOne({ where: { id: userId } });
        return res.status(200).json({ users: updatedUsers });
      }
      throw new Error('User not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const deleteUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const deleted = await db.users.destroy({
        where: { id: userId }
      });
      if (deleted) {
        return res.status(204).json("User deleted");
      }
      throw new Error("User not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const getUsers = async (req, res) => {
    try {
      const users = await db.users.findAll({});
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const addArticle = async (req, res) => {
    try {
      const articles = await db.articles.create(req.body);
      return res.status(201).json({
        articles,
      });
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }

  const innerJoin = async (req, res) => {
    try {
      let joinedData = await db.articles.findAll({
        include: [{
          model: db.users,
          required: true,
          as: 'user'
         }]
      })
      return res.status(200).json({ joinedData });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const leftJoin = async (req, res) => {
    try {
      let joinedData = await db.articles.findAll({
        include: [{
          model: db.users,
          required: false,
          as: 'user'
         }]
      })
      return res.status(200).json({ joinedData });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const rightJoin = async (req, res) => {
    try {
      let joinedData = await db.articles.findAll({
        include: [{
          model: db.users,
          right: true,
          as: 'user'
         }]
      })
      return res.status(200).json({ joinedData });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const addComments = async (req, res) => {
    try {
      const comments = await db.comments.create(req.body);
      return res.status(201).json({
        comments,
      });
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }

  const getComments = async (req, res) => {
    try {
      let joinedData = await db.users.findAll({
        include: [{
          model: db.articles,
          as: 'articles',
          attributes: ['title'],
          include: [{
            model: db.comments,
            as: 'comments',
            attributes: ['comments']
          }]
         }]
      })
      return res.status(200).json({ joinedData });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const restoreSoftDelRecords = async (req, res) => {
    try {
      let restoredRecords = await db.users.restore({ where: { id: req.body.id }})
      return res.status(200).json({ restoredRecords });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const addTag = async (req, res) => {
    try {
      const tags = await db.tags.create(req.body);
      return res.status(201).json({
        tags
      });
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }

  const addArticleTags = async (req, res) => {
    try {
      const articleTags = await db.articleTags.create(req.body);
      return res.status(201).json({
        articleTags
      });
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }

  const articleTags = async (req, res) => {
    try {
      let joinedData = await db.articles.findAll({
        attributes: ['title', 'content'],
        include: [{
          model: db.tags,
          // through: {
          //   attributes: [],
          // },
          attributes: ['tagName'],
          as: 'articleTags'
         }]
      })
      return res.status(200).json({ joinedData });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  
  module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    addArticle,
    innerJoin,
    leftJoin,
    rightJoin,
    addComments,
    getComments,
    restoreSoftDelRecords,
    addTag,
    addArticleTags,
    articleTags,
  }