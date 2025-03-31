const API = import.meta.env.VITE_AUTH_API_URL;

export const login = (email: string, password: string) =>
  fetch(`${API}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }).then(res => res.json());

export const register = (name: string, email: string, password: string) =>
  fetch(`${API}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  }).then(res => res.json());
