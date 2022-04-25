const InvestmentRepository = require("./InvestmentRepository");

class Investment {
    id;
    name;
    description;
    interest;
    startingAmount;
    finalAmount;
    startDate;
    endDate;
    finalInvesment;

    constructor(id, name, description, interest, startingAmount, finalAmount, startDate, endDate, finalInvesment) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.interest = interest;
        this.startingAmount = startingAmount;
        this.finalAmount = finalAmount;
        this.startDate = startDate;
        this.endDate = endDate;
        this.finalInvesment  = this.finalInvesment;
    }

    static addInvestment(name, description, interest, startingAmount, startDate, duration, repository) {
        const endDate = startDate;
        endDate.setDate(endDate.getDate() + duration);

        const finalAmount = Investment._calculateFinalAmount(interest, startingAmount, duration);

        const finalInvesment = Investment.getFinalInvesment(startingAmount, interest);
        const ir = new InvestmentRepository()
        const id = repository.getId();
        ir.save(new Investment(id, name, description, interest, startingAmount, finalAmount, startDate, endDate, finalInvesment));
        return new Investment(id, name, description, interest, startingAmount, finalAmount, startDate, endDate, finalInvesment);
    }

    static _calculateFinalAmount(interest, startingAmount, duration) {
        const bankingYear = 360;
        const interestAsPercentage = interest / 100;
        return startingAmount * (1 + (((interestAsPercentage) / bankingYear) * duration));
    }

    static getFinalInvesment(startingAmount, interest) {
        const taxes = 1000;
        const toPay =  (startingAmount + interest) - taxes;
        return "Final invesment "+toPay;
    }
}


module.exports = Investment;