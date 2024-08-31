export interface IProducts {
id: number;
name: string;
description: string;
price: number;
stock: number;
image: string;
categoryId: number;
}

export interface IProductCardProps {
    product: IProducts;
}

export interface IProductsComponent {
    products: IProducts[]
}

export interface ICategory {
    id: number;
    name: string;
}

export interface ICredential {
    id: number;
    password: string;
}

export interface IOrder {
    id: number;
    status: string;
    date: Date;
    user: IUser;
    products: IProducts[];
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    //credential?: ICredential;
    orders?: IOrder[];
}

export interface CreateOrder {
    userId: number;
    products: number[];
  }

 export interface ILogin {
    email: string
    password: string
}

//export interface ILoginProps {
 //   login: ILogin
//}

export interface ILoginError {
    email?: string
    password?: string

}

export interface IRegister {
    name: string
    email: string
    password: string
    address: string
    phone: string
}

export type IRegisterErrors = Partial<IRegister> 

export interface ICreateCredential {
    password: string;
}

export interface IUserSession {
    token: string;
    user: {
        address: string,
        name: string,
        email: string, 
        id: number, 
        phone: string,
        role: string,
        orders: []
    }
}



/////////////////////


