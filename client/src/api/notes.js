import axios from "./axios";
import { BASE_URL } from "../baseurl";
// Get all notes with pagination
export const getNotes = async (page = 1, limit = 10) => {
  const response = await axios.get(`${BASE_URL}/api/notes?page=${page}&limit=${limit}`);
  return response.data;
};

// Get note by id
export const getNoteById = async (id) => {
  const response = await axios.get(`${BASE_URL}/api/notes/${id}`);
  return response.data;
};

// Create a new note
export const createNote = async (noteData) => {
  const response = await axios.post(`${BASE_URL}/api/notes`, noteData);
  return response.data;
};

// Update a note
export const updateNote = async (id, noteData) => {
  const response = await axios.put(`${BASE_URL}/api/notes/${id}`, noteData);
  return response.data;
};

// Delete a note
export const deleteNote = async (id) => {
  const response = await axios.delete(`${BASE_URL}/api/notes/${id}`);
  return response.data;
};

// Search notes
export const searchNotes = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/api/notes/search?query=${encodeURIComponent(query)}`
  );
  return response.data;
};

// Get suggested tags
export const getSuggestedTags = async (content) => {
  const response = await axios.post(`${BASE_URL}/api/notes/suggest-tags`, { content });
  return response.data.tags;
};
