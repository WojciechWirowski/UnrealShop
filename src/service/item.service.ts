import {Item} from "@/models/Item";
import http from "./http.client";
import {CreateItemDto} from "@/dto/CreateItemDto";

export class ItemService {

    async createItem(
        createItemDto: CreateItemDto
    ) {
        const { name, photoPath, price} = createItemDto
        return await http.post<Item>("/items/register", { name, photoPath, price })
    }

    async getAllItems(): Promise<Item[]> {
        const items =  await http.get("/items")
        return items.data
    }

    // async getItem(
    //     id: number
    // ): Promise<Item>{
    //     const res = await http.post("/items", {
    //         id: id
    //     })
    //     return res.data
    // }
}