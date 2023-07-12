const express = require("express");
const mongoose = require("mongoose");
const Iklan = require("../models/iklanModels");
const app = express();
app.use(express.json());

async function getAllIklan() {
  try {
    const iklan = await Iklan.find({});
    return iklan;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getIklanById(id) {
  try {
    const iklan = await Iklan.findById(id);
    return iklan;
  } catch (error) {
    throw new Error(error.message);
  }
}


async function createIklan(data) {
  try {
    const iklan = new Iklan(data);
    await iklan.save();
    return iklan;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function updateIklanById(id, data) {
  try {
    const iklan = await Iklan.findByIdAndUpdate(id, data);
    if (!iklan) {
      throw new Error(`cannot find any iklan with ID ${id}`);
    }
    const updatedIklan = await Iklan.findById(id);
    return updatedIklan;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deleteIklanById(id) {
  try {
    const iklan = await Iklan.findByIdAndDelete(id);
    if (!iklan) {
      throw new Error(`cannot find any iklan with ID ${id}`);
    }
    return { message: "Data iklan telah dihapus" };
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  getAllIklan,
  getIklanById,
  createIklan,
  updateIklanById,
  deleteIklanById,
};

mongoose
  .connect(
    "mongodb+srv://rizal_be:CnL8eVMsswCVn10V@ascbetest.pugbkl5.mongodb.net/rizal_be?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"));

