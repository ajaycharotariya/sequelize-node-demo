module.exports = (sequelize, DataTypes) => {
    const articleTags = sequelize.define('ArticleTags', {
        articleId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tagId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    });

    return articleTags;
};