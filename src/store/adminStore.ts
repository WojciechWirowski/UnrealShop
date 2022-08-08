import {AdminService} from "@/service/admin.service";
import {defineStore} from "pinia";
import {Question} from "@/models/Question";

const adminService: AdminService = new AdminService();


export const AdminStore = defineStore(
    {
        id: "adminStore",
        state: () => {
            return {

            }
        },
        getters: {
            getAllQuestions(): Promise<Question[]> {
                return adminService.getAllQuestions()
            },
        },
        actions: {
            answer(question: Question): Promise<Question> {
                return adminService.answer(question)
            },
            remove(question: Question): Promise<Question> {
                return adminService.remove(question)
            }
        }
    })