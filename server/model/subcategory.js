const mongoose = require("mongoose");

const SubcategorySchema = new mongoose.Schema({
    name: String,
    categoryId: String
});

module.exports = mongoose.model("subcategory", SubcategorySchema);