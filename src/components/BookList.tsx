import { Book } from '../api/books';
import { FiEdit2, FiTrash2, FiBook } from 'react-icons/fi';

interface Props {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: string) => void;
}

const BookList = ({ books, onEdit, onDelete }: Props) => (
  <div className="space-y-4">
    {books.length === 0 ? (
      <div className="text-center text-gray-500 italic">No books found. Add your first one!</div>
    ) : (
      books.map((book) => (
        <div
          key={book._id}
          className="border border-gray-200 bg-white rounded-lg p-4 shadow-sm transition hover:shadow-md"
        >
          <div className="flex items-center gap-2 mb-2 text-indigo-600">
            <FiBook />
            <h2 className="text-xl font-semibold">{book.title}</h2>
          </div>
          <p className="text-sm text-gray-700 mb-1"><strong>Author:</strong> {book.author}</p>
          <p className="text-gray-600 text-sm">{book.description}</p>
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => onEdit(book)}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition text-sm"
            >
              <FiEdit2 />
              Edit
            </button>
            <button
              onClick={() => onDelete(book._id!)}
              className="flex items-center gap-1 text-red-600 hover:text-red-800 transition text-sm"
            >
              <FiTrash2 />
              Delete
            </button>
          </div>
        </div>
      ))
    )}
  </div>
);

export default BookList;
