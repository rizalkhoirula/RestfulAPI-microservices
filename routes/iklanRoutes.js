const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const iklanService = require("../services/iklanservice");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
router.get("/", async (req, res) => {
  try {
    const iklan = await iklanService.getAllIklan();
    res.status(200).json(iklan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const iklan = await iklanService.getIklanById(id);
    res.status(200).json(iklan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

});


// ...

router.post("/", async (req, res, next) => {
  try {
    const iklan = await iklanService.createIklan(req.body);
    res.status(201).json(iklan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const iklan = await iklanService.updateIklanById(id, req.body);
    res.status(200).json(iklan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await iklanService.deleteIklanById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const Iklan = require("../models/iklanModels");
// const router = express.Router();

// app.use(express.json());

// router.get("/iklan", async (req, res) => {
//   try {
//     const iklan = await Iklan.find({});
//     res.status(200).json(iklan);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.get("/iklan/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const iklan = await Iklan.findById(id);
//     res.status(200).json(iklan);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     const iklan = await Iklan.create(req.body);
//     res.status(200).json(iklan);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
// });

// router.put("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const iklan = await Iklan.findByIdAndUpdate(id, req.body);
//     if (!iklan) {
//       return res
//         .status(404)
//         .json({ message: `cannot find any iklan with ID ${id}` });
//     }
//     const updatediklan = await Iklan.findById(id);
//     res.status(200).json(updatediklan);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const iklan = await Iklan.findByIdAndDelete(id);
//     if (!iklan) {
//       return res
//         .status(404)
//         .json({ message: `cannot find any iklan with ID ${id}` });
//     }
//     res.status(200).json({ message: "Data iklan telah dihapus" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;

// mongoose
//   .connect(
//     "mongodb+srv://rizal_be:CnL8eVMsswCVn10V@ascbetest.pugbkl5.mongodb.net/rizal_be?retryWrites=true&w=majority"
//   )
//   .then(() => console.log("Connected!"));
