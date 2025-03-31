import { Navigate } from 'react-router-dom';
import { getToken } from '../utils/auth';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  return getToken() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
