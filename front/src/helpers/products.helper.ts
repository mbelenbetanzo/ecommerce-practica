import { IProducts } from "@/interfaces/Interfaces"

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function getProductsDB(): Promise<IProducts[]>  {
    try {
        const res = await fetch(`${APIURL}/products`, {
            next: { revalidate: 1200}
        })
        const products: IProducts[] = await res.json()
        return products;
        
    } catch (error: any) {
        throw new Error(error)  
    }
}

export async function getProductsById(id: string): Promise<IProducts>{
    try {
        const products: IProducts[] = await getProductsDB();
            const productFiltrado = products.find((item) => item.id.toString() === id);
            if (!productFiltrado) throw new Error("Not found")
                return productFiltrado; 
            } catch (error: any) {
        throw new Error(error)
    }
}