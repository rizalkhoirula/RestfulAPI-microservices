const Penjualan = require("../models/penjualan");

async function getAllPenjualan() {
  try {
    const penjualan = await Penjualan.findAll();
    return penjualan;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getPenjualanById(id) {
  try {
    const penjualan = await Penjualan.findByPk(id);
    return penjualan;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function createPenjualan(data) {
  try {
    const penjualan = await Penjualan.create(data);
    return penjualan;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function updatePenjualanById(id, data) {
  try {
    const penjualan = await Penjualan.findByPk(id);
    if (penjualan) {
      await penjualan.update(data);
      return penjualan;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deletePenjualanById(id) {
  try {
    const penjualan = await Penjualan.findByPk(id);
    if (penjualan) {
      await penjualan.destroy();
      return penjualan;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  getAllPenjualan,
  getPenjualanById,
  createPenjualan,
  updatePenjualanById,
  deletePenjualanById,
};
