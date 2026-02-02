import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getNotes, deleteNote, searchNotes } from "../api/notes";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  // Load notes
  useEffect(() => {
    if (!isSearching) {
      fetchNotes(page);
    }
  }, [page, isSearching]);

  // Fetch notes from API
  const fetchNotes = async (pageNum) => {
    setLoading(true);
    try {
      const data = await getNotes(pageNum);
      setNotes(data.notes);
      setTotalPages(data.pages);
      setLoading(false);
    } catch (error) {
      setError("Failed to load notes. Please try again.");
      setLoading(false);
    }
  };

  // Handle search
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      setIsSearching(false);
      return fetchNotes(1);
    }

    setLoading(true);
    setIsSearching(true);

    try {
      const results = await searchNotes(searchQuery);
      setNotes(results);
      setLoading(false);
    } catch (error) {
      setError("Search failed. Please try again.");
      setLoading(false);
    }
  };

  // Handle note deletion
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        await deleteNote(id);
        // Update the notes list after deletion
        setNotes(notes.filter((note) => note._id !== id));
      } catch (error) {
        setError("Failed to delete note. Please try again.");
      }
    }
  };

  // Clear search and show all notes
  const clearSearch = () => {
    setSearchQuery("");
    setIsSearching(false);
    setPage(1);
    fetchNotes(1);
  };

  // Handle pagination
  const changePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>My Notes</h2>
        <Link to="/notes/new" style={styles.createButton}>
          Create New Note
        </Link>
      </div>

      {/* Search form */}
      <div style={styles.searchContainer}>
        <form onSubmit={handleSearch} style={styles.searchForm}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search notes by title, content, or tags"
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchButton}>
            Search
          </button>
          {isSearching && (
            <button
              type="button"
              onClick={clearSearch}
              style={styles.clearButton}
            >
              Clear
            </button>
          )}
        </form>
      </div>

      {/* Error message */}
      {error && <div style={styles.error}>{error}</div>}

      {/* Loading state */}
      {loading ? (
        <div style={styles.loading}>Loading notes...</div>
      ) : (
        <>
          {/* No notes message */}
          {notes.length === 0 ? (
            <div style={styles.emptyMessage}>
              <p>You don't have any notes yet.</p>
              <Link to="/notes/new" style={styles.link}>
                Create your first note
              </Link>
            </div>
          ) : (
            <>
              {/* Notes grid */}
              <div style={styles.grid}>
                {notes.map((note) => (
                  <div key={note._id} style={styles.noteCard}>
                    <div style={styles.noteHeader}>
                      <h3 style={styles.noteTitle}>{note.title}</h3>
                      <div style={styles.actions}>
                        <Link
                          to={`/notes/${note._id}`}
                          style={styles.viewButton}
                        >
                          View
                        </Link>
                        <Link
                          to={`/notes/edit/${note._id}`}
                          style={styles.editButton}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(note._id)}
                          style={styles.deleteButton}
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    <p style={styles.summary}>{note.summary}</p>

                    {note.tags.length > 0 && (
                      <div style={styles.tagsContainer}>
                        {note.tags.map((tag, idx) => (
                          <span key={idx} style={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div style={styles.noteFooter}>
                      <span style={styles.date}>
                        Created: {new Date(note.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {!isSearching && totalPages > 1 && (
                <div style={styles.pagination}>
                  <button
                    onClick={() => changePage(page - 1)}
                    disabled={page === 1}
                    style={styles.pageButton}
                  >
                    Previous
                  </button>
                  <span style={styles.pageInfo}>
                    Page {page} of {totalPages}
                  </span>
                  <button
                    onClick={() => changePage(page + 1)}
                    disabled={page === totalPages}
                    style={styles.pageButton}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },
  title: {
    color: "#2c3e50",
    margin: 0,
  },
  createButton: {
    backgroundColor: "#27ae60",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    borderRadius: "4px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  searchContainer: {
    marginBottom: "2rem",
  },
  searchForm: {
    display: "flex",
    gap: "0.5rem",
  },
  searchInput: {
    flex: 1,
    padding: "0.75rem",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "1rem",
  },
  searchButton: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
  clearButton: {
    backgroundColor: "#95a5a6",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  noteCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
  },
  noteHeader: {
    marginBottom: "1rem",
  },
  noteTitle: {
    margin: "0 0 0.5rem 0",
    color: "#2c3e50",
    fontSize: "1.25rem",
  },
  summary: {
    color: "#7f8c8d",
    fontSize: "0.9rem",
    margin: "0 0 1rem 0",
    flexGrow: 1,
  },
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: "1rem",
  },
  tag: {
    backgroundColor: "#e0f7fa",
    color: "#0097a7",
    padding: "0.25rem 0.5rem",
    borderRadius: "4px",
    fontSize: "0.75rem",
  },
  actions: {
    display: "flex",
    gap: "0.5rem",
    marginTop: "1rem",
  },
  viewButton: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "0.5rem 0.75rem",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "0.75rem",
  },
  editButton: {
    backgroundColor: "#f39c12",
    color: "#fff",
    padding: "0.5rem 0.75rem",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "0.75rem",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    padding: "0.5rem 0.75rem",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    fontSize: "0.75rem",
  },
  noteFooter: {
    marginTop: "auto",
    paddingTop: "1rem",
    borderTop: "1px solid #ecf0f1",
    fontSize: "0.75rem",
    color: "#95a5a6",
  },
  date: {
    fontSize: "0.75rem",
  },
  emptyMessage: {
    textAlign: "center",
    padding: "3rem",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    color: "#6c757d",
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
    fontWeight: "bold",
  },
  error: {
    backgroundColor: "#ffebee",
    color: "#c62828",
    padding: "0.75rem",
    borderRadius: "4px",
    marginBottom: "1rem",
  },
  loading: {
    textAlign: "center",
    padding: "2rem",
    color: "#7f8c8d",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    marginTop: "2rem",
  },
  pageButton: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
  pageInfo: {
    color: "#34495e",
  },
};

export default Dashboard;
