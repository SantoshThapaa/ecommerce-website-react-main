import { API } from "../config";

//  for sign up
export const signUp = user =>{
    return fetch(`${API}/register`,{
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
}

//  for sign in
export const signIn = user =>{
    return fetch(`${API}/signin`,{
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
}

// authenticate and store token in local storage
export const authenticate = (data,next) =>{
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt',JSON.stringify(data))
        next()
    }
}

// redirect user by role if authenticated (authorized) 
export const isAuthenticated = () =>{
    if(typeof window === 'undefined'){
        return false
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else{
        return false
    }
}

// to sign out
export const signOut = next =>{
    if(typeof window !== 'undefined'){
        localStorage.removeItem('jwt')
        next()
        return fetch(`${API}/signout`,{
            method:'POST'
        })
        .then(res=>{
            console.log('signout',res)
        })
        .catch(err => console.log(err))
    }
}

//  for forgot password
export const forgotPassword = user =>{
    return fetch(`${API}/forgotpassword`,{
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
}

