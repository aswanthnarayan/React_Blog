export const LoginStart = (userCredentials) =>({
    type:"LOGIN_START",
});

export const LoginSucsess = (user)=>({
    type:"LOGIN_SUCSESS",
    payload:user,
})

export const LoginFailure = ()=>({
    type:"LOGIN_FAILURE"
})

export const Logout = ()=>({
    type:"LOGOUT"
})