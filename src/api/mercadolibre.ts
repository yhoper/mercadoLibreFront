import axios from 'axios';
import { BASE, PATCH } from '../utils/constant';

export const getProductDetails = async (id:string) => {
    const url = `${BASE}/items/${id}`
    try {
        const response = await axios(`${url}`);
        return response.data
    } catch(error) {
        console.log(error)
    }
}

export const searchProductDescription = async (id:string) => {
    const url = `${PATCH}/items/${id}/description`
    try {
        const response = await axios(`${url}`);
        return response.data
    } catch(error) {
        console.log(error)
    }
};

export const searchBoxProducts = async (txtToSearchs:string) => {
    const url = `${BASE}/${txtToSearchs}`
    try {
        const response = await axios(`${url}`);
        return response?.data?.items
    } catch(error) {
        console.log(error)
    }
};

export const searchListProducts = async (txtToSearchs:string) => {
    const url = `${BASE}/list/${txtToSearchs}`
    try {
        const response = await axios(`${url}`);
        return response.data
    } catch(error) {
        console.log(error)
    }
};
