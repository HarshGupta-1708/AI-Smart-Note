const express = require("express");
const {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
  searchNotes,
  suggestTagsForNote,
} = require("../controllers/noteController");
const auth = require("../middleware/auth");

const router = express.Router();

// Protect all routes
router.use(auth);

// Get all notes and create a note
router.route("/").get(getNotes).post(createNote);

// Search notes
router.get("/search", searchNotes);

// Suggest tags
router.post("/suggest-tags", suggestTagsForNote);

// Get, update, and delete a note
router.route("/:id").get(getNoteById).put(updateNote).delete(deleteNote);

module.exports = router;
