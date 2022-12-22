import { defineStore } from 'pinia'
import { getCart } from "../service/cart"

// 仓库必须以use打头
let useStore = defineStore("cart", {
    state: () => {
        return {
            cart: 0
        }
    },

    actions: {
        async updateCart(params) {
            const res = await getCart(params)
            this.cart = res.data.length
        },
    }
})

export default useStore