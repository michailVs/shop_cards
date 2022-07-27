import axios from "axios";

export default class CardService {
    static async getAll() {
        const response = await axios.get('https://62cd28a1a43bf78008529b98.mockapi.io/api/admin/shop_card')
        return response
    }
    static async getById(id) {
        const response = await axios.get('https://62cd28a1a43bf78008529b98.mockapi.io/api/admin/shop_card/' + id)
        return response
    }
}