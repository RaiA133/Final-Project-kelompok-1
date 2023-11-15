import { instance } from '../axios/index';

// Function for register user endpoint
async function register(name, email, password) {
  try {
    const response = await instance.post('/register', { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for login user endpoint
async function login(email, password) {
  try {
    const response = await instance.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}


export { register, login };
