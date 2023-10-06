import { prisma } from "../src/lib/prisma";

type dataTypeFields = {
    title: string,
    template: string
}
interface ISeed {
    data: dataTypeFields[];
}
const dada = [{
    title: 'Titulo do Youtube',
    template: 'title'
}, {
    title: 'Descrição do Youtube',
    template: 'description'
},
{
    title: 'Descrição do Ticktok',
    template: 'description'
},
{
    title: 'Titulo do Ticktok',
    template: 'title'
}]

function main({ data }: ISeed): void{
    data.forEach(async (item) =>{
        await prisma.prompt.create({
            data:{
                template: item.template,
                title: item.title
            }
        })

        console.log('Dados importados com sucesso!')
    })
}

main({ data: dada})