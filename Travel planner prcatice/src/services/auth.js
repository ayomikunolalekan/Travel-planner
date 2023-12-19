import { userLogin, userRegistration } from "./api";


export const auth = {
    login: async(email, password) => {
        try{
            const response = await userLogin(email, password);

            if (response.success){
                return {
                    success: true,
                    token: 'user_token'
                };
            }else{
                return {
                    success: false,
                    message: response.message
                };
            }
        }catch(error) {
            console.error("Login error: " + error)
            return{
                success: false,
                message: "An error occurred"
            };
        }
    },

    signUp: async(email, password) => {
        try{
            const response = await userRegistration(email, password);

            if (response.success){
                return {
                    success: true,
                    message: 'User Registered successfully'
                };
            }else{
                return {
                    success: false,
                    message: response.message
                };
            }
        }catch(error) {
            console.error("Registration error: " + error)
            return{
                success: false,
                message: "An error occurred"
            };
        }
    },
};