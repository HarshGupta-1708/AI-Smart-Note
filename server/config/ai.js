// /**
//  * This file will contain the AI integration for summarizing notes and suggesting tags.
//  * For a simple implementation, we'll just use basic text processing,
//  * but this can be replaced with actual AI services like OpenAI's API.
//  */

// // Simple function to generate a summary from content
// exports.generateSummary = async (content) => {
//   // Simple implementation: take the first 100 characters
//   if (!content) return "";

//   // Split text into sentences and take the first 1-2 sentences
//   const sentences = content.match(/[^.!?]+[.!?]+/g) || [];
//   let summary = "";

//   if (sentences.length > 0) {
//     summary = sentences
//       .slice(0, Math.min(2, sentences.length))
//       .join(" ")
//       .trim();

//     // If summary is still too long, truncate
//     if (summary.length > 150) {
//       summary = summary.substring(0, 147) + "...";
//     }
//   } else {
//     // If no sentences found, take first 100 chars
//     summary = content.substring(0, Math.min(100, content.length));
//     if (content.length > 100) summary += "...";
//   }

//   return summary;
// };

// // Simple function to suggest tags based on content
// exports.suggestTags = async (content) => {
//   if (!content) return [];

//   // List of common note categories
//   const commonCategories = [
//     "work",
//     "personal",
//     "idea",
//     "todo",
//     "meeting",
//     "project",
//     "learning",
//     "journal",
//     "important",
//     "finance",
//     "health",
//   ];

//   // Convert content to lowercase for easier matching
//   const lowercaseContent = content.toLowerCase();

//   // Check if content contains keywords related to categories
//   const suggestedTags = commonCategories.filter((category) => {
//     // Simple check: if the category word appears in the content
//     return lowercaseContent.includes(category);
//   });

//   // If no tags found, provide some defaults
//   if (suggestedTags.length === 0) {
//     suggestedTags.push("note");

//     // Add a length-based tag
//     if (content.length < 100) {
//       suggestedTags.push("short");
//     } else if (content.length > 500) {
//       suggestedTags.push("detailed");
//     }
//   }

//   // Limit to 2 tags
//   return suggestedTags.slice(0, 2);
// };
// ai.js (CommonJS-compatible)



const axios = require('axios');

const HF_API_KEY = process.env.HF_API_KEY // Replace with your Hugging Face API key

// Summary Function with API Key
exports.generateSummary = async (content) => {
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
      { inputs: content, parameters: { max_length: 100, min_length: 30 } },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${HF_API_KEY}`, // Add the API key here
        },
      }
    );

    return response.data[0]?.summary_text || content.slice(0, 150) + '...';
  } catch (err) {
    console.error('Summary API error:', err.message);
    return content.slice(0, 150) + '...';
  }
};

// Tag Suggestion Function
exports.suggestTags = async (content) => {
  try {
    const words = content
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(
        (word) =>
          word.length > 3 &&
          !['this', 'that', 'with', 'from', 'have', 'there', 'their', 'about'].includes(word)
      );

    const wordFrequency = {};
    words.forEach((word) => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    const tags = Object.entries(wordFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .map(([word]) => word);

    return tags;
  } catch (err) {
    console.error('Tag extraction error:', err.message);
    return [];
  }
};
