const {axiosInstance} = require('./index');

// register new user function

export const RegisterUser = async (value) => {
    try {
        const res = await axiosInstance.post('api/users/register',value)
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
}

// login user function

export const LoginUser = async (value) => {
    try {
        const res = await axiosInstance.post('api/users/login',value)
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
}

// get user details function from frontend

export const GetCurrentUser = async () => {
    try {
        const res = await axiosInstance.get('api/users/get-current-user')
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
}

