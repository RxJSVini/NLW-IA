import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useEffect, useState } from "react"
import { api } from "@/lib/axios"

interface Prompts {
    id: string;
    title: string;
    template: string;
}

interface PromptSelect {
    onPromptSelected:(prompt:string) => void;
}




export function PromptSelect( props : PromptSelect){
    const [prompts, setPrompts] = useState<Prompts[] | null>(null)
    useEffect(() =>{
        api.get('/prompts').then((response) =>{
            setPrompts(response.data)
            console.log(prompts)
        })
    }, [])


    function handlePromptSelected(promptId: string) {
        const selectedPrompt = prompts?.find(prompt => prompt.id === promptId)
    
        if (!selectedPrompt) {
          return
        }
    
        props.onPromptSelected(selectedPrompt.template)
      }


    return (
        <Select onValueChange={handlePromptSelected}>
        <SelectTrigger>
            <SelectValue placeholder='Selecione um prompt ...'/>
        </SelectTrigger>
        <SelectContent>
        {prompts?.map(prompt =>{
            return(
            
                <SelectItem value={prompt.id} key={prompt.id}>{prompt.title}</SelectItem>
 
            )
        })}
         </SelectContent>   
    </Select>
    )
}