import {defineStore} from "pinia";
import {ItemService} from "@/service/item.service";
import {Item} from "@/models/Item";


const itemService: ItemService = new ItemService();

export const ItemStore = defineStore(
{
    id: "itemStore",
    state: () => {
       return {
           cart: [] as Item[]
       }
    },
    getters: {
        getAllItems(): Promise<Item[]> {
            return itemService.getAllItems()
        },
        getCartItems(): Item[]{
            return this.cart
        }
    },
    actions:{
        addItemToCart(item: Item) {
            this.cart.push({ ...item})
        }
    }
}
)