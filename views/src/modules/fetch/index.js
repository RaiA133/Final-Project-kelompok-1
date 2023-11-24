import { instance } from "../axios/index";

// Function for test-session user endpoint
async function testSession() {
  try {
    const response = await instance.get('/test-session');
    return response.data
  } catch (error) {
    const cekSesi = JSON.parse(error.request.response)
    throw new Error(cekSesi?.message || error?.message || 'Something went wrong');
  }
}

// Function for register user endpoint
async function register(name, username, email, password) {
  try {
    const response = await instance.post("/register", { name, username, email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function for login user endpoint
async function login(email, password) {
  try {
    const response = await instance.post("/login", { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

async function getAllPostingan() {
  try {
    const response = await instance.get("/post"); // Adjust the endpoint accordingly
    return response.data; // Assuming response.data contains the necessary data
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

//Function profile
async function userProfile() {
  try {
    const response = await instance.get(`/profile`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}


//Update Profile
async function updateProfile (formData) {
  const formDataObject = Object.fromEntries(formData.entries());
  try {
    const response = await instance.put('/profile/update', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } 
  catch (error) {
    if (formDataObject.file.size > 2000000) { // cek jika yg diterima di formData sebelum dikirim ke axios lebih dari 2MB
      throw new Error('File Tidak Boleh Lebih Dari 2MB')
    }
    const cekSesi = JSON.parse(error.request.response) // cek jika sesi login berakhir
    throw new Error(cekSesi?.message || error?.message || 'Something went wrong');
  }
}

// get user by id
async function getUserbyId(id) {
  try {
    const response = await instance.get(`/profile/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// get user by slug | slug otomatis dari title
async function getPostDetailBySlug(slug) {
  try {
    const response = await instance.get(`/post/${slug}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function for create post endpoint
async function createPost(formData) {
  const formDataObject = Object.fromEntries(formData.entries());
  try {
    const response = await instance.post('/post/create', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  }
  catch (error) {
    if (formDataObject.file.size > 2000000) { // cek jika yg diterima di formData sebelum dikirim ke axios lebih dari 2MB
      throw new Error('File Tidak Boleh Lebih Dari 2MB')
    }
    // console.error(error) // code dibawah didapat dari error Axios dari sini
    const cekSesi = JSON.parse(error.request.response) // cek jika sesi login berakhir
    throw new Error(cekSesi?.message || error?.message || 'Something went wrong');
  }
}

async function logout() {
  try {
    const response = await instance.post('/logout');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}


export { register, login, userProfile, updateProfile, getUserbyId, getPostDetailBySlug, getAllPostingan, createPost, testSession, logout };
