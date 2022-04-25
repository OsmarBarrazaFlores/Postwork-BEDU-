const {login} = require("./Login");

const alphabet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "8"];
const validEmail = "myemail@mail.com"
const validPasswordEnding = "Password"
const successMessage = "Bienvenido al sistema"

const findValidPassword = () => {
    for (let i1 = 0; i1 < alphabet.length; i1++) {
        for (let i2 = 0; i2 < alphabet.length; i2++) {
            for (let i3 = 0; i3 < alphabet.length; i3++) {
                for (let i4 = 0; i4 < alphabet.length; i4++) {
                    for (let i5 = 0; i5 < alphabet.length; i5++) {
                        for (let i6 = 0; i6 < alphabet.length; i6++) {
                            const password = alphabet[i1] + alphabet[i2] + alphabet[i3] + alphabet[i4] + alphabet[i5] + alphabet[i6] + validPasswordEnding

                            if (login({email: validEmail, password}) === successMessage) {
                                console.log("Contraseña encontrada: " + password)
                                return 0
                            }
                        }
                    }
                }
            }
        }
    }
}

findValidPassword()

