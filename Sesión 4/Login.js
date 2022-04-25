const users = [{email: "myemail@mail.com", password: "123456Password"}];
let cont = 0; 

const login = (userCreds) => {
    for(let i = 0; i < users.length; i++) {
        if (userCreds.email === users[0].email && userCreds.password === users[0].password) {
           const cod =  btoa(userCreds.email);
           return cod;
        }else if(userCreds.email === users[0].email && userCreds.password !== users[0].password){
            cont++;
            if(cont > 3){
                setTimeout("myGreeting", 5000);
                return "Attempt max reach";
            }
            return "Invalid credentials"    
        }
    }
    return "Not user found";
}
module.exports = {login};