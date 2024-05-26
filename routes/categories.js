  const categoriesRouter = require('express').Router();
  const createCategory = require("../middlewares/categories");
  const sendCategoryCreated = require("../controllers/categories");
  const findCategoryById = require("../middlewares/categories");
  const sendCategoryById = require("../controllers/categories");
  const updateCategory = require("../middlewares/categories");
  const sendCategoryUpdated = require("../controllers/categories");
  const deleteCategory = require("../middlewares/categories");
  const sendCategoryDeleted = require("../controllers/categories");
  const checkIsCategoryExists = require("../middlewares/categories");
  const checkEmptyName = require("../middlewares/categories");
  const { checkAuth } = require("../middlewares/auth");

  const findAllCategories = require('../middlewares/categories');
  
  categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
  categoriesRouter.post("/categories", findAllCategories, checkIsCategoryExists, checkEmptyName, checkAuth, createCategory, sendCategoryCreated);
  categoriesRouter.put("/categories/:id", checkEmptyName, checkAuth, updateCategory, sendCategoryUpdated); 
  categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);

  module.exports = categoriesRouter;
  