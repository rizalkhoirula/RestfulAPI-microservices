const express = require("express");
const router = express.Router();
const penjualanService = require("../services/penjualanService");


// Read all penjualan
router.get("/", async (req, res) => {
  try {
    const penjualan = await penjualanService.getAllPenjualan();
    res.status(200).json(penjualan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read single penjualan by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const penjualan = await penjualanService.getPenjualanById(id);
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
router.post("/", async (req, res) => {
  const { nama_produk, deskripsi, harga, image } = req.body;
  try {
    const penjualan = await penjualanService.createPenjualan({
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
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { nama_produk, deskripsi, harga, image } = req.body;
  try {
    const penjualan = await penjualanService.updatePenjualanById(id, {
      nama_produk,
      deskripsi,
      harga,
      image,
    });
    if (penjualan) {
      res.status(200).json(penjualan);
    } else {
      res.status(404).json({ message: "Penjualan not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete penjualan by ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const penjualan = await penjualanService.deletePenjualanById(id);
    if (penjualan) {
      res.status(200).json({ message: "Data Penjualan deleted successfully" });
    } else {
      res.status(404).json({ message: "Data Penjualan not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;