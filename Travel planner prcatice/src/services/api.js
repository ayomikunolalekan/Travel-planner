export const userLogin = async (email, password) => {
    if (email === 'bigboy@gmail.com' && password === 'bigdaddy'){
        return {
            success: true,
            token: 'user_token'
        };
    }
    return {
        success: false, 
        message: 'Invalid Details'
    };
}

export const userRegistration = async (email, password) => {
    if (email === 'bigboy@gmail.com' && password === 'bigdaddy'){
        return {
            success: true,
            message: 'User Registration Successful'
        };
    }
    return {
        success: false,
        message: 'User Registration Failed'
    };
};