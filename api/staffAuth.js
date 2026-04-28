import { BASE_URL } from './config';

/**
 * Staff Login API
 * @param {string} email 
 * @param {string} password 
 */
export const staffLogin = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/staff/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Login Error:', error);
    return { status: 0, message: 'Connection failed. Please check your internet.' };
  }
};
