// type RegisterForm = {
//     isValid : boolean;
//     data : {
//         name : string;
//         email : string;
//         password : string;
//     }
// }

// type LoginForm = {
//     isValid : boolean;
//     data : {
//         email : string;
//         password : string;
//     }
// }

// type PostForm = {
//     isValid : boolean;
//     data : {
//         postContent : string;
//     }
// }

// ? these are forms

// const registerForm : RegisterForm = {
//     isValid : true,
//     data : {
//         name : "sujal",
//         email : "sujal@gmail.com",
//         password : "123456"
//     }
// }

// const loginForm : LoginForm = {
//     isValid : true,
//     data : {
//         email : "sujal@gmail.com",
//         password : "123456"
//     }
// }

// const postForm : PostForm = {
//     isValid : true,
//     data : {
//         postContent : "Hello World"
//     }
// }

// ************************************************************************************************

// * now we're creating a generic form data type so that , can work with all types of forms
// * generic is nothing but its also a type, but its not fixed, its dynamic
// * we can use any type of data inside it

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

type LoginFormData = {
  email: string;
  password: string;
};

type PostFormData = {
  postContent: string;
};

type FormData<T> = {
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
