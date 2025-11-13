import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../services/api';
import { useNotification } from '../context/NotificationContext';

interface User {
  id: number;
  username: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
}

export const useAuth = () => {
  const navigate = useNavigate();
  const { showNotification, setIsLoading } = useNotification();
  const [authState, setAuthState] = useState<AuthState>(() => ({
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    token: localStorage.getItem('token'),
  }));

  const login = useCallback(async (username: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await authApi.login({ username, password });
      const { token, user } = response.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      setAuthState({ user, token });
      showNotification(`Welcome back, ${user?.username}!`, 'success');
      navigate('/dashboard');
      return { success: true };
    } catch (error) {
      showNotification('Invalid credentials', 'error');
      return { success: false, error: 'Invalid credentials' };
    } finally {
      setIsLoading(false);
    }
  }, [navigate, showNotification, setIsLoading]);

  const signup = useCallback(async (username: string, password: string, email: string) => {
    setIsLoading(true);
    try {
      const response = await authApi.signup({ username, password, email });
      const { token, user } = response.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      setAuthState({ user, token });
      showNotification(`Welcome to SimpleBank, ${user?.username}!`, 'success');
      navigate('/dashboard');
      return { success: true };
    } catch (error) {
      showNotification('Registration failed. Please try again.', 'error');
      return { success: false, error: 'Registration failed' };
    } finally {
      setIsLoading(false);
    }
  }, [navigate, showNotification, setIsLoading]);

  const logout = useCallback(async () => {
    try {
      await authApi.logout();
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setAuthState({ user: null, token: null });
      navigate('/login');
    }
  }, [navigate]);

  return {
    user: authState.user,
    token: authState.token,
    isAuthenticated: !!authState.token,
    login,
    signup,
    logout,
  };
};

export default useAuth;