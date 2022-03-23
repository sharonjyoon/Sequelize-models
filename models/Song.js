const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

Song.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Unknown'
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'NR'
  },
  
}, { sequelize, modelName: 'song' })

module.exports = Song
