import { instance } from "../axios/index";

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
            const response = await instance.get("/post");
            return response.data;
      } catch (error) {
            throw new Error(error.response.data.message || "Something went wrong");
      }
}

async function getPostDetailById(id) {
      try {
            const response = await instance.get(`/post/${id}`);
            return response.data;
      } catch (error) {
            throw new Error(error.response.data.message || "Something went wrong");
      }
}

export { register, login, getAllPostingan, getPostDetailById };
