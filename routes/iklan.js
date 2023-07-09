const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const Iklan = require("../models/iklanModels");

app.use(express.json())
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

app.get("/iklan", async (req, res) => {
  try {
    const iklan = await Iklan.find({});
    res.status(200).json(iklan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/iklan/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const iklan = await Iklan.findById(id);
    res.status(200).json(iklan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/iklan', async(req, res) => {
  try {
    const iklan = await Iklan.create(req.body);
    res.status(200).json(iklan);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
app.put("/iklan/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const iklan = await Iklan.findByIdAndUpdate(id, req.body);
    // we cannot find any product in database
    if (!iklan) {
      return res
        .status(404)
        .json({ message: `cannot find any iklan with ID ${id}` });
    }
    const updatediklan = await Iklan.findById(id);
    res.status(200).json(updatediklan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/iklan/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const iklan = await Iklan.findByIdAndDelete(id);
    if (!iklan) {
      return res
        .status(404)
        .json({ message: `cannot find any iklan with ID ${id}` });
    }
    res.status(200).json({message: 'Data iklan telah dihapus'});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


mongoose
  .connect(
    "mongodb+srv://rizal_be:CnL8eVMsswCVn10V@ascbetest.pugbkl5.mongodb.net/rizal_be?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"));