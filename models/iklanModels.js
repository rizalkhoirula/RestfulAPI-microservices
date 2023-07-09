const mongoose = require("mongoose");
const iklanSchema = mongoose.Schema(
  {
    judul: {
      type: String,
      required: [true, "mohon masukkan judul iklan"],
    },
    deskripsi: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Iklan = mongoose.model("Iklan", iklanSchema);
module.exports = Iklan;
