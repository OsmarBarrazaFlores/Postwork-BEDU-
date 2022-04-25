const request = require("supertest");
const app = require("./app");
const Investment = require("./Investment");
const InvestmentRepository = require("./InvestmentRepository");
const repository = new InvestmentRepository();  


describe('get-details endpoint', () => {
    it('get details by id', async () => {
        expect().toEqual("Cognizant Ejemplo");
    });
})