import axios from 'axios';

const request = axios.create({
  baseURL: 'https://sandbox-quickbooks.api.intuit.com/',
  headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` },
});

export default request;
