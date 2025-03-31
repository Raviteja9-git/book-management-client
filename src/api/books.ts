import { getToken } from '../utils/auth';

const API = import.meta.env.VITE_BOOK_API_URL;

export interface Book {
  _id?: string;
  title: string;
  author: string;
  description: string;
}

export const getBooks = (): Promise<Book[]> =>
  fetch(API, {
    headers: { Authorization: `Bearer ${getToken()}` }
  }).then(res => res.json());

export const addBook = (book: Book): Promise<Book> =>
  fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify(book)
  }).then(res => res.json());

export const updateBook = (id: string, book: Book): Promise<Book> =>
  fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify(book)
  }).then(res => res.json());

export const deleteBook = (id: string): Promise<{ message: string }> =>
  fetch(`${API}/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${getToken()}` }
  }).then(res => res.json());
