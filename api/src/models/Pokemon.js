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
      allowNull: false,
    },
    life: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    attack: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    defense: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    speed: {
      type: DataTypes.STRING, 
      allowNull: true,
    },
    height: {
      type: DataTypes.FLOAT, 
      allowNull: true,
    },
    weight: {
      type: DataTypes.FLOAT, 
      allowNull: true,
}
}, { timestamps: false });
};
