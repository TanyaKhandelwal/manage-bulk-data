const express = require("express");
const dotenv = require("dotenv");
const dataRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();

app.use(express.json()); // Parse JSON body
app.use("/api", dataRoutes);

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }

  module.exports = app;