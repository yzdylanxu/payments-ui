import axios from 'axios';

let serverURL = "localhost";
if (process.env.COMPONENT_QUARKUS_BACKEND_HOST) {
   serverURL=process.env.COMPONENT_QUARKUS_BACKEND_HOST
}

export const getAllPaymentsForCountry = (country) => {
    const transactionsPromise = axios({url : `https://${serverURL}/api/cctransaction?country=${country}`, method: "GET", headers : {'Accept': 'application/json'} });
    return transactionsPromise;
}

export const getAllPaymentsForOrderId = (orderId) => {
    const transactionsPromise = axios({url : `https://${serverURL}/api/cctransaction?order=${orderId}`, method: "GET", headers : {'Accept': 'application/json'} });
    return transactionsPromise;
}

export const getCountries = () => {
    return axios.request({url : "http://${serverURL}/api/countries", method: "GET", headers : {'Accept': 'application/json'} });
}

export const addNewTransaction = (payment) => {
    return axios({url : "http://${serverURL}/api/cctransaction",
        method: "POST",
        headers : {'Accept': 'application/json', 'Content-Type' : 'application/json'},
        data: payment});
}

