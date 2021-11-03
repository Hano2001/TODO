const express = require("express");
const {
  createList,
  updateList,
  deleteList,
  getLists,
  getSingleList,
  itemDone,
  deleteItem,
} = require("../controllers/listController");

const router = express.Router();

router.route("/").get(getLists).post(createList);

router.route("/:id").get(getSingleList).post(updateList).delete(deleteList);

router.route("/content/:id").post(itemDone);
router.route("/content/delete/:id").post(deleteItem)
module.exports = router;
