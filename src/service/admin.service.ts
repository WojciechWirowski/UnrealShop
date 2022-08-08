import {Question} from "@/models/Question";
import http from "./http.client"
import {QuestionDto} from "@/dto/QuestionDto";


export class AdminService{

    async getAllQuestions(): Promise<Question[]>{
        const questions = await http.get("/questions")
        return questions.data()
    }

    async answer(questionDto: QuestionDto): Promise<Question>{
        const { id, name, message, answer} = questionDto
        const x = await http.post<Question>("/questions/answer", {id ,name ,message ,answer})
        return x.data
    }

    async remove(questionDto: QuestionDto): Promise<Question>{
        const { id, name, message, answer} = questionDto
        const x = await http.post<Question>("/questions/remove", {id ,name ,message ,answer})
        return x.data
    }
}