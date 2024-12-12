const { Schema, model } = require("mongoose");

const TotColoSchema = Schema({
  mov: {
    type: Number,
  },
  total: {
    type: String,
  },
  fechalit: {
    type: String,
  },
  descripcion_detallada: {
    type: String,
  },
  imp_final: {
    type: String,
  },
});

module.exports = model("totcolonias", TotColoSchema);
