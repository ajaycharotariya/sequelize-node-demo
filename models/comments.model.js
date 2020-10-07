module.exports = (sequelize, DataTypes) => {
    const comments = sequelize.define('Comments', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        articleId: {
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        comments: {
            type: DataTypes.STRING,
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

    return comments;
};