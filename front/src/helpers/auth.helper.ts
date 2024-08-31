import { ILogin, IRegister } from "@/interfaces/Interfaces"

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function register(userData: IRegister) {
    try {
        const res = await fetch(`${APIURL}/users/register`, {
            method: `POST`,
            headers: {
                "Content-type": "application/json"
            },
           body: JSON.stringify(userData)
        })
       if(res.ok) {
        return res.json();
       } else {
        throw Error("Fallo el registro")
       }       
    } catch (error: any) {
        throw new Error(error)  
    }
}

export async function login(userData: ILogin) {
    try {
        const res = await fetch(`${APIURL}/users/login`, {
            method: `POST`,
            headers: {
                "Content-type": "application/json"
            },
           body: JSON.stringify(userData)
        })
       if(res.ok) {
        return res.json();
       } else {
        throw Error("Fallo el inicio de sesion")
       }       
    } catch (error: any) {
        throw new Error(error)  
    }
}