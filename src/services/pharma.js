import axios from 'axios'
import { retrieveData } from '../asyncStorage';

const apiUri = 'http://pharmacaretestapi.herokuapp.com/b2cweb';
// let token;
// let instance;

// retrieveData('token').then((response) => {
//     token = response;
//     instance = axios.create({
//         baseURL: `${apiUri}`,
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': token
//         },
//     })
// })
const instance = axios.create({
    baseURL: `${apiUri}`,
    'Content-Type': 'application/json'
})

//users
const authenticate = (phone, password) => {
    const url = '/api/users/testLogin'
    return instance.post(url, { phone, password })
}

const registration = (username, password, phone) => {
    const url = '/api/users/testRegister'
    return instance.post(url, { username, password, phone })
}

const confirmCode = (phone, passcode) => {
    const url = '/api/users/confirm' + '/' + phone + '/' + passcode
    return instance.post(url)
}

const verifyPhone = (phone) => {
    const url = '/api/users/verify/' + phone
    return instance.post(url)
}

const addAddress = (address) => {
    const url = '/api/users/findAllByAddress/' + address
    return instance.get(url)
}

const updatePass = (password) => {
    const url = '/api/users/update' + password
    return instance.patch(url)
}

const logout = () => {
    const url = '/api/users/update'
    return instance.delete(url)
}

const showServices = () => {
    const url = '/treatments/list'
    return instance.post(url)
}
const getUsers = () => {
    const url = '/api/users/all'
    return instance.get(url)
}
const generateCode = () => {
    const url = '/api/users/code'
    return instance.post(url)
}
const getPharmacy = (d, lat, long) => {
    const url = '/api/pharmacy/find'
    return instance.get(url, { d, lat, long })
}
const getUserInfo = () => {
    const url = '/api/users/info/'
    return instance.post(url)
}
//treatments
const getTreatments = () => {
    const url = '/api/treatments/all'
    return instance.get(url)
}
const getAllTreatments = (userInfo) => {
    const url = '/api/treatments/given' + userInfo
    return instance.post(url)
}

getAllServices = () => {
    const url = '/api/services/all'
    return instance.get(url)
}
getServicesList = () => {
    const url = '/services/list'
    return instance.get(url);
}
export default {
    //users
    authenticate,
    registration,
    verifyPhone,
    addAddress,
    updatePass,
    logout,
    showServices,
    confirmCode,
    getUsers,
    generateCode,
    getPharmacy,
    getUserInfo,
    //treatments
    getTreatments,
    getServicesList,
    getAllServices,
    getAllTreatments,

}
