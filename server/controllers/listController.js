const List = require("../models/todoList");

function editDate() {
  let currentDate = new Date();
  let today =
    currentDate.getDate() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getFullYear();
  return today;
}
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
  const title = req.body.title;

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
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateList = async (req, res) => {
  const id = req.params.id;
  const item = req.body.item;

  try {
    const list = await List.findByIdAndUpdate(
      {
        _id: id,
      },

      {
        edited: editDate(),
        $push: {
          content: {
            title: item,
          },
        },
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        item,
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

exports.itemDone = async (req, res) => {
  const listId = req.params.id;
  const { itemId, doneStatus } = req.body;

  try {
    const list = await List.findOneAndUpdate(
      {
        _id: listId,
        "content._id": itemId,
      },
      {
        $set: {
          "content.$.done": !doneStatus,
        },
      },

      {
        edited: editDate(),
      }
    );
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

exports.deleteItem = async (req, res) => {
  const listId = req.params.id;
  const itemId = req.body.itemId;

  try {
    const list = await List.findOneAndUpdate(
      {
        _id: listId,
      },
      {
        edited: editDate(),
        $pull: {
          content: {
            _id: itemId,
          },
        },
      }
    );

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
