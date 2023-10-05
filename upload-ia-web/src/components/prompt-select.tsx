import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useEffect, useState } from "react"
import { api } from "@/lib/axios"

export function PromptSelect(){
    const [prompts, setPrompts] = useState(null)


    useEffect(() =>{
        api.get('/prompts').then((response) =>{
            setPrompts(response.data)
        })
    }, [])

    return (
        <Select>
        <SelectTrigger>
            <SelectValue placeholder='Selecione um prompt ...'/>
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="title">Titulo do Youtube</SelectItem>
            <SelectItem value="description">Descrição do Youtube</SelectItem>
        </SelectContent>
    </Select>
    )
}