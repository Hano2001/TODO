const List = require("../models/todoList");

exports.getLists = async (req, res) => {
  const query = req.query;

  try {
    const list = await List.find(query);
    res.status(200).json({
      status: "success",
      data: {
        list,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createList = async (req, res) => {
  try {
    const list = await List.find(query);
    res.status(200).json({
      status: "success",
      data: {
        list,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createList = async (req, res) => {
  try {
    const listExists = await List.exists({ title: req.body.title });
    if (listExists) {
      throw Error("List already exists");
    } else {
      const newList = await List.create(req.body);
      res.status(201).json({
        status: "success",
        data: {
          newList,
        },
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateList = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  console.log(data);
  try {
    const list = await List.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        list,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getSingleList = async (req, res) => {
  const id = req.params.id;
  try {
    const list = await List.findById(id);
    res.status(200).json({
      status: "success",
      data: {
        list,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteList = async (req, res) => {
  const id = req.params.id;
  try {
    await List.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
