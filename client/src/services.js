// import axios from "axios";
// import AppConfig from "./AppConfig";
// import { getQuery } from "./utils";

// let token =
//   "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiI5MDQ0MTU1NzIzIiwiaWQiOjEwNiwiaWF0IjoxNTk4NTQyNjM1LCJleHAiOjE2MTQwOTQ2MzV9.qd0Em2fdu4ecgAZ_tiUHLJIC06RetNIBDJMeDbSIRUAeTSboqM1v6-DeLybr1dD4";
// if (process.env.NODE_ENV === "development") {
//   token =
//     "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiI5MDQ0MTU1NzIzIiwiaWQiOjEwNiwiaWF0IjoxNTk4NTQyNjM1LCJleHAiOjE2MTQwOTQ2MzV9.qd0Em2fdu4ecgAZ_tiUHLJIC06RetNIBDJMeDbSIRUAeTSboqM1v6-DeLybr1dD4";
// } else {
//   if (process.env.REACT_APP_BUILD_ENV === "staging") {
//     token =
//       "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiI5MDQ0MTU1NzIzIiwiaWQiOjEwNiwiaWF0IjoxNTk4NTQyNjM1LCJleHAiOjE2MTQwOTQ2MzV9.qd0Em2fdu4ecgAZ_tiUHLJIC06RetNIBDJMeDbSIRUAeTSboqM1v6-DeLybr1dD4";
//   }
// }

// const promoHeaders = {
//   'Content-Type': 'application/json',
//   "Api-Version": 3,
//   "x-access-token": getQuery()["hash"] ? getQuery()["hash"] : token,
// };

// const getApiCall = (path, params) => {
//   return axios
//     .get(`${AppConfig.BASE_URL}/${path}`, {
//       headers: promoHeaders,
//     })
//     .then((response) => {
//       return response;
//     });
// };

// const postApiCall = (path, data) => {
//   return axios
//     .post(`${AppConfig.BASE_URL}/${path}`, data, {
//       headers: promoHeaders,
//     })
//     .then((response) => {
//       return response;
//     });
// };

// const services = {
//   getApiCall,
//   postApiCall,
// };

// export default services;

//eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUzNzMzLCJvcmdJZCI6MSwibmFtZSI6IkNMUCBNYXN0ZXIiLCJlbWFpbCI6ImRldmFuc2hAY2xhc3NwbHVzLmNvIiwibW9iaWxlIjoiOTE4MDc2NzY3MzE1IiwidHlwZSI6MywiaWF0IjoxNTk1NDAyMDg2LCJleHAiOjE1OTcxMzAwODZ9.VxDbFl6wUHsAPeej84_5gBp3sYWawzcJU5JOJ1stodKgQXk24s9fnhbyvovxW6Uh
