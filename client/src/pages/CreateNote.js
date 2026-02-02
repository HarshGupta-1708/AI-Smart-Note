import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNote, getSuggestedTags } from '../api/notes';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [suggestedTags, setSuggestedTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  
  // Get tag suggestions when content changes
  useEffect(() => {
    const getTagSuggestions = async () => {
      if (content.length > 20) {
        try {
          const suggestions = await getSuggestedTags(content);
          setSuggestedTags(suggestions.filter(tag => !tags.includes(tag)));
        } catch (error) {
          console.error('Error getting tag suggestions:', error);
        }
      }
    };
    
    const debounce = setTimeout(() => {
      getTagSuggestions();
    }, 1000);
    
    return () => clearTimeout(debounce);
  }, [content, tags]);
  
  // Add a new tag
  const handleAddTag = (e) => {
    e.preventDefault();
    
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };
  
  // Add a suggested tag
  const handleAddSuggestedTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
      setSuggestedTags(suggestedTags.filter(t => t !== tag));
    }
  };
  
  // Remove a tag
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  
  // Submit the note
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      setError('Title and content are required');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const newNote = await createNote({ title, content, tags });
      setLoading(false);
      navigate(`/notes/${newNote._id}`);
    } catch (error) {
      setError('Failed to create note. Please try again.');
      setLoading(false);
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Create New Note</h2>
      </div>
      
      {error && <div style={styles.error}>{error}</div>}
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            placeholder="Enter note title"
            required
          />
        </div>
        
        <div style={styles.formGroup}>
          <label htmlFor="content" style={styles.label}>Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={styles.textarea}
            placeholder="Enter note content"
            rows="10"
            required
          />
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Tags</label>
          
          <div style={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <div key={index} style={styles.tag}>
                <span>{tag}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  style={styles.removeTagButton}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          
          <div style={styles.tagInputContainer}>
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              style={styles.tagInput}
              placeholder="Add a tag"
            />
            <button
              type="button"
              onClick={handleAddTag}
              style={styles.addTagButton}
            >
              Add
            </button>
          </div>
          
          {suggestedTags.length > 0 && (
            <div style={styles.suggestedTags}>
              <p style={styles.suggestedTitle}>Suggested Tags:</p>
              <div style={styles.suggestedTagsContainer}>
                {suggestedTags.map((tag, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleAddSuggestedTag(tag)}
                    style={styles.suggestedTagButton}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div style={styles.buttonContainer}>
          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            style={styles.cancelButton}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={styles.submitButton}
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Note'}
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
  },
  header: {
    marginBottom: '2rem',
  },
  title: {
    color: '#2c3e50',
    margin: 0,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontWeight: 'bold',
    color: '#34495e',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  textarea: {
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    fontFamily: 'inherit',
    resize: 'vertical',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '0.5rem',
  },
  tag: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    color: '#0097a7',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    fontSize: '0.9rem',
  },
  removeTagButton: {
    background: 'none',
    border: 'none',
    color: '#0097a7',
    marginLeft: '0.25rem',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagInputContainer: {
    display: 'flex',
    gap: '0.5rem',
  },
  tagInput: {
    flex: 1,
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '0.9rem',
  },
  addTagButton: {
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
  },
  suggestedTags: {
    marginTop: '1rem',
  },
  suggestedTitle: {
    margin: '0 0 0.5rem 0',
    fontSize: '0.9rem',
    color: '#7f8c8d',
  },
  suggestedTagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  suggestedTagButton: {
    backgroundColor: '#f0f0f0',
    color: '#34495e',
    border: '1px dashed #bdc3c7',
    borderRadius: '4px',
    padding: '0.25rem 0.5rem',
    fontSize: '0.8rem',
    cursor: 'pointer',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1rem',
    marginTop: '1rem',
  },
  cancelButton: {
    backgroundColor: '#95a5a6',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '0.75rem 1.5rem',
    cursor: 'pointer',
  },
  submitButton: {
    backgroundColor: '#27ae60',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '0.75rem 1.5rem',
    cursor: 'pointer',
  },
  error: {
    backgroundColor: '#ffebee',
    color: '#c62828',
    padding: '0.75rem',
    borderRadius: '4px',
    marginBottom: '1rem',
  },
};

export default CreateNote; 