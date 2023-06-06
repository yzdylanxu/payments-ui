import axios from 'axios';

export const getAllPaymentsForCountry = (country) => {
    const transactionsPromise = axios({url : `https://paymentgateway-standalone-payment-gateway.apps.openshift4demo.xqzk.p1.openshiftapps.com/api/cctransaction?country=${country}`, method: "GET", headers : {'Accept': 'application/json'} });
    return transactionsPromise;
}

export const getAllPaymentsForOrderId = (orderId) => {
    const transactionsPromise = axios({url : `https://paymentgateway-standalone-payment-gateway.apps.openshift4demo.xqzk.p1.openshiftapps.com/api/cctransaction?order=${orderId}`, method: "GET", headers : {'Accept': 'application/json'} });
    return transactionsPromise;
}

export const getCountries = () => {
    return axios.request({url : "http://paymentgateway-standalone-payment-gateway.apps.openshift4demo.xqzk.p1.openshiftapps.com/api/countries", method: "GET", headers : {'Accept': 'application/json'} });
}

export const addNewTransaction = (payment) => {
    return axios({url : "http://paymentgateway-standalone-payment-gateway.apps.openshift4demo.xqzk.p1.openshiftapps.com/api/cctransaction",
        method: "POST",
        headers : {'Accept': 'application/json', 'Content-Type' : 'application/json'},
        data: payment});
}
