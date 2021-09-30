export const hosts ={
    mongoDB_main : {
        host : `mongodb://localhost:27017/commerce`
        // options : {
            //TERMINAR
        // }
    }
}

export const auth = { //TE ASEGURA QUE SI ALGUIEN METE MANO SE INVALIDE EL TOKEN
    jwtKey : '123'
}