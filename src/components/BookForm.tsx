import { useEffect, useState } from 'react';
import { Book } from '../api/books';
import { FiBookOpen, FiUser, FiAlignLeft } from 'react-icons/fi';

interface Props {
  onSubmit: (book: Book) => void;
  book?: Book | null;
}

const BookForm = ({ onSubmit, book }: Props) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setDescription(book.description);
    }
  }, [book]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, author, description });
    setTitle('');
    setAuthor('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <FiBookOpen className="absolute left-3 top-3 text-gray-400" />
        <input
          className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Title"
          required
        />
      </div>
      <div className="relative">
        <FiUser className="absolute left-3 top-3 text-gray-400" />
        <input
          className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />
      </div>
      <div className="relative">
        <FiAlignLeft className="absolute left-3 top-3 text-gray-400" />
        <textarea
          className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows={4}
        />
      </div>
      <button
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition"
        type="submit"
      >
        {book ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
};

export default BookForm;
