const {
  addNoteHandler,
  getNoteHandler,
  getOneNoteHandler,
  editNoteHandler,
  deleteNoteHandler,
} = require("./handlers");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getNoteHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getOneNoteHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteHandler,
  },
];

module.exports = routes;
