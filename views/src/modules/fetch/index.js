import { instance } from '../axios/index';

// Function for register user endpoint
async function register(name, username, email, password) {
  try {
    const response = await instance.post('/register', { name, username, email, password });
    return response.data
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

//Function profile
async function user(userId) {
  try {
    const response = await instance.get(`/user/${userId}/profile`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}


export { register, login, user };
