import { useEffect, useState } from 'react';
import { getBooks, addBook, updateBook, deleteBook, Book } from '../api/books';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import { removeToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

const Dashboard = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [editing, setEditing] = useState<Book | null>(null);
  const navigate = useNavigate();

  const loadBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const handleAddOrUpdate = async (book: Book) => {
    if (editing && editing._id) {
      await updateBook(editing._id, book);
      setEditing(null);
    } else {
      await addBook(book);
    }
    loadBooks();
  };

  const handleDelete = async (id: string) => {
    await deleteBook(id);
    loadBooks();
  };

  const handleLogout = () => {
    removeToken();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 space-y-6">
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-3xl font-bold text-indigo-700">📚 My Book Collection</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded transition"
          >
            <FiLogOut size={18} />
            Logout
          </button>
        </div>
        <BookForm onSubmit={handleAddOrUpdate} book={editing} />
        <BookList books={books} onEdit={setEditing} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Dashboard;
