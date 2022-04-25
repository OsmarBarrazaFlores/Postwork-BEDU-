const InvestmentRepositoryContract = require("./InvestmentRepositoryContract");
const { v4: uuidv4 } = require('uuid');
const db = require("./database");

class InvestmentRepository extends InvestmentRepositoryContract {
    constructor(dbConnection) {
        super();
        this.dbConnection = dbConnection;
    }
    getId() {
        return uuidv4();
    }

    save(investment) {
        const sql = "INSERT INTO investment (id,name,description,interest,starting_amount,final_amount,start_date,end_date) VALUES (?,?,?,?,?,?,?,?)";
        const params = [investment.id, investment.name, investment.description, investment.interest, investment.startingAmount, investment.finalAmount, investment.startDate]
        db.run(sql, params, (err, result) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log(sql)
            console.log(params)
            console.log('Sucess register generated: ' + investment.id)
        })
    }
    getInvestmentFromDB(id) {
        const sql = `SELECT * FROM investment where id = '${id}'`;
        const params = []
        console.log(sql)
        return new Promise((resolve, reject) => {
            db.get(sql, params, (err, result) => {
                if (err) {
                    reject(err)
                    console.log(err)
                    return;
                }
                console.log(result)
                resolve(result);
            })
        })
    }

    getInvestmentFromDBByNombre(name) {
        const sql = `SELECT * FROM investment where name = '${name}'`;
        const params = []
        console.log(sql);

    }
}


module.exports = InvestmentRepository