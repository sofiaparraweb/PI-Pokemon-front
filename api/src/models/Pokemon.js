const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    life: {
      type: DataTypes.STRING, 
      allowNull: false,
      defaultValue: 5,
    },
    attack: {
      type: DataTypes.STRING, 
      allowNull: false,
      defaultValue: 5,
    },
    defense: {
      type: DataTypes.STRING, 
      allowNull: false,
      defaultValue: 5,
    },
    speed: {
      type: DataTypes.STRING, 
      allowNull: true,
      defaultValue: 5,
    },
    height: {
      type: DataTypes.FLOAT, 
      allowNull: true,
      defaultValue: 1,
    },
    weight: {
      type: DataTypes.FLOAT, 
      allowNull: true,
      defaultValue: 1,
}
}, { timestamps: false });
};
