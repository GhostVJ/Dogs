const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Defino el modelo
  sequelize.define('Dogs', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      //allowNull: false,
    },
    image: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    lifespan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {timestamps: false}
  );
};
