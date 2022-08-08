import {User} from "@/models/User";
import http from "./http.client";
import {CreateUserDto} from "@/dto/CreateUserDto";
import {LoginUserDto} from "@/dto/LoginUserDto";

export class UserService {

    async createUser(
        createUserDto: CreateUserDto
    ) {
        const { username, password, email} = createUserDto
        return await http.post<User>("/users/register", { username, password, email })
    }

    async logInUser(
        loginDto: LoginUserDto
    ): Promise<User>{
        const { username, password} = loginDto
        const res = await http.post("/users/login", {
            username: username,
            password: password
        })
        return res.data
    }
}