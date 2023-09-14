import { fastify } from 'fastify';
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/uploads-video'

const app = fastify();

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)

app.listen({
    port: 3000,
}).then(() =>{
    console.log('HTTP server running!')
})