import axios from 'axios'

export const signup = newUser => {
    return axios
        .post('users/signup', {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            deaprtment: newUser.department,
            contact: newUser.contact
        })
        .then(response => {
            console.log('Registered')
        })
}

export const login = user => {
    return axios
        .post('users/studentlogin', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
