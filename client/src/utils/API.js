import axios from 'axios';

export default {
  // Gets books from the Google API
  getBooks: q => {
    return axios.get('/api/google', { params: { q: 'title:' + q } });
  },
  // Gets all saved books
  getSavedBooks: () => {
    return axios.get('/api/books');
  },
  // Deletes the saved book with the given id
  deleteBook: id => {
    return axios.delete('/api/books/' + id);
  },
  // Saves an book to the database
  saveBook: bookData => {
    return axios.post('/api/books', bookData);
  }
};
