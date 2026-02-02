const Note = require("../models/Note");
const { generateSummary, suggestTags } = require("../config/ai");

// @desc    Create a new note
// @route   POST /api/notes
// @access  Private
exports.createNote = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    console.log(title, content, tags);

    // Generate summary using AI
    const summary = await generateSummary(content);

    // Create note
    const note = await Note.create({
      user: req.user._id,
      title,
      content,
      summary,
      tags: tags || [],
    });

    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get all notes for a user
// @route   GET /api/notes
// @access  Private
exports.getNotes = async (req, res) => {
  try {
    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Get notes for the user
    const notes = await Note.find({ user: req.user._id })
      .sort({ updatedAt: -1 })
      .skip(skip)
      .limit(limit);

    // Get total count
    const count = await Note.countDocuments({ user: req.user._id });

    res.json({
      notes,
      page,
      pages: Math.ceil(count / limit),
      total: count,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get a note by ID
// @route   GET /api/notes/:id
// @access  Private
exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    // Check if note exists
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    // Check if user owns the note
    if (note.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Update a note
// @route   PUT /api/notes/:id
// @access  Private
exports.updateNote = async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    let note = await Note.findById(req.params.id);

    // Check if note exists
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    // Check if user owns the note
    if (note.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    // Generate summary if content changed
    let summary = note.summary;
    if (content && content !== note.content) {
      summary = await generateSummary(content);
    }

    // Update note
    note = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title: title || note.title,
        content: content || note.content,
        summary,
        tags: tags || note.tags,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    res.json(note);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Delete a note
// @route   DELETE /api/notes/:id
// @access  Private
exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    // Check if note exists
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    // Check if user owns the note
    if (note.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await Note.deleteOne({ _id: req.params.id });
    res.json({ message: "Note removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Search notes
// @route   GET /api/notes/search
// @access  Private
exports.searchNotes = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: "Query parameter is required" });
    }

    // Search by title, content, or tags
    const notes = await Note.find({
      user: req.user._id,
      $or: [
        { title: { $regex: query, $options: "i" } },
        { content: { $regex: query, $options: "i" } },
        { tags: { $in: [new RegExp(query, "i")] } },
      ],
    }).sort({ updatedAt: -1 });

    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Suggest tags for a note
// @route   POST /api/notes/suggest-tags
// @access  Private
exports.suggestTagsForNote = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ message: "Content is required" });
    }

    // Get suggested tags
    const tags = await suggestTags(content);

    res.json({ tags });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
