const axios = require('axios');
const {login} = require("./Login");

const makePostApiCall = async (userCredentials) => {
    const response = await axios.post('http://localhost:3000/login', userCredentials)
    return response.data
}

const executeTest = async (input, expectedOutput, functionToExecute) => {
    const actualOutput = await functionToExecute(input)
    const decod = atob(actualOutput);
    if (decod !== input.email) {
        console.log("Test failed");
    } else {
        console.log("Test pass \n"+expectedOutput);
    }
}

const correoTestCodificado = () => {
    const userCredentials = {email: "myemail@mail.com", password: "123456Password"}
    const successMessage = "Bienvenido al sistema";
    executeTest(userCredentials, successMessage, login);
}

correoTestCodificado();
