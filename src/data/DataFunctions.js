import axios from 'axios';

let serverURL = "http://localhost";

if (process.env.REACT_APP_SERVER_URL) {
    serverURL = process.env.REACT_APP_SERVER_URL;
}

export const getAllPaymentsForCountry = (country) => {
    return axios({url : `${serverURL}/api/payment?country=${country}`, method: "GET", headers : {'Accept': 'application/json'} });
}

export const getAllPaymentsForOrderId = (orderId) => {
    return axios({url : `${serverURL}/api/payment?order=${orderId}`, method: "GET", headers : {'Accept': 'application/json'} });
}

export const getCountries = () => {
    return axios.request({url : `${serverURL}/api/country`, method: "GET", headers : {'Accept': 'application/json'} });
}

export const addNewTransaction = (payment) => {
    return axios({url : `${serverURL}/api/payment`,
        method: "POST",
        headers : {'Accept': 'application/json', 'Content-Type' : 'application/json'},
        data: payment});
}

