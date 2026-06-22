
interface RegisterFormData {
  name: string;
  email: string;
  password: string;
};

interface LoginFormData {
  email: string;
  password: string;
};

interface PostFormData {
  postContent: string;
};

interface FormData<T> {
  isValid: boolean;
  data: T;
};

const registerForm: FormData<RegisterFormData> = {
  isValid: true,
  data: {
    name: "sujal",
    email: "sujal@gmail.com",
    password: "123456",
  },
};

const loginForm: FormData<LoginFormData> = {
  isValid: true,
  data: {
    email: "sujal@gmail.com",
    password: "123456",
  },
};

const postForm: FormData<PostFormData> = {
  isValid: true,
  data: {
    postContent: "Hello World",
  },
}; 

export {};
