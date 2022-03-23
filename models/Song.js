const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

class Song extends Model { }

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
    defaultValue: 'Unknown'
  },
  
}, { sequelize, modelName: 'song' })

module.exports = Song
