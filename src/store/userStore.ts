import {defineStore} from "pinia";
import {User} from "@/models/User";
import {UserService} from "@/service/user.service";
import {CreateUserDto} from "@/dto/CreateUserDto";
import {LoginUserDto} from "@/dto/LoginUserDto";

const userService: UserService = new UserService();

export const UserStore = defineStore({
    id: "userStore",
    state: () => ({
        loggedInUser: { username: "" } as User,
    }),
    getters: {
        userName: (state) => {
            if (state.loggedInUser.username != undefined) return state.loggedInUser.username;
            return ""
        }
    },
    actions: {
        createUser(createUserDto: CreateUserDto){
            userService
                .createUser(createUserDto)
                .catch((err) => console.log(err))
        },
        logInUser(loginDto: LoginUserDto): boolean{
            userService.logInUser(loginDto).then((user)=>(this.loggedInUser = user))
                .catch((err) => console.log(err))
            return !!this.loggedInUser;
        },
        logOut(){
            this.$reset()
        },
    }
})