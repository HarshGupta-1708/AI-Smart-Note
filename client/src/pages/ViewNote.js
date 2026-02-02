import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getNoteById, deleteNote } from "../api/notes";

const ViewNote = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch note data
  useEffect(() => {
    const fetchNote = async () => {
      setLoading(true);
      try {
        const data = await getNoteById(id);
        setNote(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load note. Please try again.");
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  // Handle note deletion
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        await deleteNote(id);
        navigate("/dashboard");
      } catch (error) {
        setError("Failed to delete note. Please try again.");
      }
    }
  };

  if (loading) {
    return <div style={styles.loading}>Loading note...</div>;
  }

  if (error) {
    return <div style={styles.error}>{error}</div>;
  }

  if (!note) {
    return <div style={styles.notFound}>Note not found</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>{note.title}</h2>
        <div style={styles.actions}>
          <Link to={`/notes/edit/${note._id}`} style={styles.editButton}>
            Edit
          </Link>
          <button onClick={handleDelete} style={styles.deleteButton}>
            Delete
          </button>
          <Link to="/dashboard" style={styles.backButton}>
            Back to Dashboard
          </Link>
        </div>
      </div>

      <div style={styles.dates}>
        <span>Created: {new Date(note.createdAt).toLocaleString()}</span>
        <span>Updated: {new Date(note.updatedAt).toLocaleString()}</span>
      </div>

      {note.tags.length > 0 && (
        <div style={styles.tagsContainer}>
          {note.tags.map((tag, index) => (
            <span key={index} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <div style={styles.summaryContainer}>
        <h3 style={styles.summaryTitle}>Summary</h3>
        <p style={styles.summary}>{note.summary}</p>
      </div>

      <div style={styles.contentContainer}>
        <h3 style={styles.contentTitle}>Content</h3>
        <div style={styles.content}>
          {note.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "2rem",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "1.5rem",
    flexWrap: "wrap",
    gap: "1rem",
  },
  title: {
    color: "#2c3e50",
    margin: 0,
    fontSize: "1.8rem",
  },
  actions: {
    display: "flex",
    gap: "0.5rem",
  },
  editButton: {
    backgroundColor: "#f39c12",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "0.9rem",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
  backButton: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "0.9rem",
  },
  dates: {
    display: "flex",
    justifyContent: "space-between",
    color: "#7f8c8d",
    fontSize: "0.8rem",
    marginBottom: "1.5rem",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: "2rem",
  },
  tag: {
    backgroundColor: "#e0f7fa",
    color: "#0097a7",
    padding: "0.25rem 0.5rem",
    borderRadius: "4px",
    fontSize: "0.8rem",
  },
  summaryContainer: {
    backgroundColor: "#f8f9fa",
    padding: "1.5rem",
    borderRadius: "8px",
    marginBottom: "2rem",
  },
  summaryTitle: {
    color: "#2c3e50",
    margin: "0 0 0.5rem 0",
    fontSize: "1.2rem",
  },
  summary: {
    margin: 0,
    color: "#34495e",
    lineHeight: 1.5,
  },
  contentContainer: {
    borderTop: "1px solid #ecf0f1",
    paddingTop: "1.5rem",
  },
  contentTitle: {
    color: "#2c3e50",
    margin: "0 0 1rem 0",
    fontSize: "1.2rem",
  },
  content: {
    color: "#34495e",
    lineHeight: 1.6,
    whiteSpace: "pre-line",
  },
  loading: {
    textAlign: "center",
    padding: "2rem",
    color: "#7f8c8d",
    fontSize: "1.2rem",
  },
  error: {
    backgroundColor: "#ffebee",
    color: "#c62828",
    padding: "1rem",
    borderRadius: "4px",
    margin: "2rem auto",
    maxWidth: "800px",
  },
  notFound: {
    textAlign: "center",
    padding: "2rem",
    color: "#e74c3c",
    fontSize: "1.2rem",
  },
};

export default ViewNote;
