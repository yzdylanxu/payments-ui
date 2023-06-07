import axios from 'axios';

let serverURL = "https://payment-gateway-mattt-payments.apps.openshift4demo.xwun.p1.openshiftapps.com";

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

