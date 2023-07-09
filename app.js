// const express = require("express");
// const expressGateway = require("express-gateway");
// const iklanRoutes = require("./routes/iklanRoutes");
// const penjualanRoutes = require("./routes/penjualanRoutes");

// // Inisialisasi gateway
// const gateway = express();

// // Konfigurasi gateway
// const gatewayConfig = {
//   apiEndpoints: [
//     {
//       name: "iklan",
//       host: "http://localhost:3000",
//       methods: ["GET", "POST", "PUT", "DELETE"],
//       paths: ["/iklan/**"],
//     },
//     {
//       name: "penjualan",
//       host: "http://localhost:3001",
//       methods: ["GET", "POST", "PUT", "DELETE"],
//       paths: ["/penjualan/**"],
//     },
//   ],
//   serviceEndpoints: {
//     iklan: "http://localhost:3000",
//     penjualan: "http://localhost:3001",
//   },
// };

// // Konfigurasi dan jalankan Express Gateway
// expressGateway(gatewayConfig, gateway);

// // Gunakan route yang ada pada iklanRoutes dan penjualanRoutes
// gateway.use("/iklan", iklanRoutes);
// gateway.use("/penjualan", penjualanRoutes);

// // Jalankan gateway pada port 8080
// gateway.listen(8080, () => {
//   console.log("Gateway berjalan pada port 8080");
// });

const express = require("express");
const expressGateway = require("express-gateway");
const iklanRoutes = require("./routes/iklanRoutes");
const penjualanRoutes = require("./routes/penjualanRoutes");
const gateway = express();

gateway.use(express.json());
// Inisialisasi gateway

// Konfigurasi gateway
const gatewayConfig = {
  apiEndpoints: [
    {
      name: "iklan",
      host: "http://localhost:3000",
      methods: ["GET", "POST", "PUT", "DELETE"],
      paths: ["/iklan/**"],
    },
    {
      name: "penjualan",
      host: "http://localhost:3001",
      methods: ["GET", "POST", "PUT", "DELETE"],
      paths: ["/penjualan/**"],
    },
  ],
  serviceEndpoints: {
    iklan: "http://localhost:3000",
    penjualan: "http://localhost:3001",
  },
};

// Konfigurasi dan jalankan Express Gateway
expressGateway(gatewayConfig, gateway);

// Gunakan router yang ada pada iklanRoutes dan penjualanRoutes
gateway.use("/iklan", iklanRoutes);
gateway.use("/penjualan", penjualanRoutes);

// Jalankan gateway pada port 8080
gateway.listen(8080, () => {
  console.log("Gateway berjalan pada port 8080");
});
