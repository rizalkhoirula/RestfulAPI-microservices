const express = require("express");
const router = express.Router();
const Penjualan = require("../models/penjualan");


router.get('/', async (req, res) => {
    res.send("tes");
});
// Read all penjualan
router.get("/penjualan", async (req, res) => {
  try {
    const penjualan = await Penjualan.findAll();
    res.status(200).json(penjualan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read single penjualan by ID
router.get("/penjualan/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const penjualan = await Penjualan.findByPk(id);
    if (penjualan) {
      res.status(200).json(penjualan);
    } else {
      res.status(404).json({ message: "Penjualan not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new penjualan
router.post("/penjualan", async (req, res) => {
  const { nama_produk, deskripsi, harga, image } = req.body;
  try {
    const penjualan = await Penjualan.create({
      nama_produk,
      deskripsi,
      harga,
      image,
    });
    res.status(201).json(penjualan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update penjualan by ID
router.put("/penjualan/:id", async (req, res) => {
  const id = req.params.id;
  const { nama_produk, deskripsi, harga, image } = req.body;
  try {
    const penjualan = await Penjualan.findByPk(id);
    if (penjualan) {
      await penjualan.update({ nama_produk, deskripsi, harga, image });
      res.status(200).json({ message: "Penjualan updated successfully" });
    } else {
      res.status(404).json({ message: "Penjualan not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete penjualan by ID
router.delete("/penjualan/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const penjualan = await Penjualan.findByPk(id);
    if (penjualan) {
      await penjualan.destroy();
      res.status(200).json({ message: "Penjualan deleted successfully" });
    } else {
      res.status(404).json({ message: "Penjualan not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
