const { DataTypes } = require("sequelize");
// const sequelize = require("../config/database");

const Penjualan = sequelize.define("Penjualans", {
  nama_produk: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deskripsi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  harga: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Penjualan;
