'use strict';

module.exports = (sequelize, DataTypes) => {
    let Searching = sequelize.define('searching', {
        searchingId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        radius: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'searching',
        paranoid: true,
        timestamps: true,
        freezeTableName: true
    });
    return Searching
};