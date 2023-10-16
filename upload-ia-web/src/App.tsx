import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {  useCompletion } from 'ai/react';

import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectValue,
    SelectItem,
} from '@/components/ui/select';

import { Github, Wand2 } from 'lucide-react';
import { VideoInputForm } from './components/video-input-form';
import { PromptSelect } from './components/prompt-select';
import { useState } from 'react';

export function App() {

    const [temperature, setTemperature ] = useState(0.5)
    const [videoId, setVideoId] = useState<string | null>()

    const { input, setInput, handleInputChange, handleSubmit, completion, isLoading } = useCompletion({
        api: 'http://localhost:3333/ai/complete',
        body: {
          videoId,
          temperature,
        },
        headers: {
          'Content-Type': 'application/json',
        }
    })
    return (
        <div className="min-h-screen flex flex-col">
            <header className="px-6 py-3 flex items-center justify-between border-b">
                <h1 className="text-xl font-bold">Upload.ia</h1>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
            Desenvolvimento com 💜 no NLW da Rocketseat{' '}
                    </span>

                    <Separator orientation="vertical" className="h-6" />
                    <Button variant="outline">
                        <Github className="w-4 h-4 mr-2" />
            Github
                    </Button>
                </div>
            </header>

            <main className="flex-1 p-6 flex gap-6">
                <div className="flex flex-col flex-1 gap-4">
                    <div className="grid grid-rows-2 gap-4 flex-1">

                        <Textarea
                        className="resize-none p-4 leading-relaxed"
                        placeholder="Inclua o prompt para a IA..."
                        value={input}
                        onChange={handleInputChange}
                        />
                        <Textarea
                            placeholder="Resultado gerado pela IA"
                            readOnly
                            className="resize-none p-4 leading-relaxed"
                            value={completion}
                        />
                    </div>

                    <p className="text-sm text-muted-foreground">
            Lembre-se: você pode usar a variável{' '}
                        <code className="text-violet-400">{'{transcription}'}</code> prompt
            para adicionar o conteúdo da transcrição do seu video.
                    </p>
                </div>

                <aside className="w-80 space-y-4">
                    <VideoInputForm onVideoUploaded={setVideoId}/>
                    <Separator />
                    <form className="space-y-6" onSubmit={handleSubmit}>

                        <div className="space-y-2">
                            <Label>Prompt</Label>
                            <PromptSelect onPromptSelected={setInput}/>
                        </div>


                        <div className="space-y-2">
                            <Label>Modelo</Label>
                            <Select disabled defaultValue="gpt3.5">
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="gpt3.5">gpt-3.5-turbo 16k</SelectItem>
                                </SelectContent>
                            </Select>
                            <span className="block text-xs text-muted-foreground italic">
                Você poderá customizar essa opção em breve
                            </span>
                        </div>

                        <Separator />
                        <div className="space-y-2">
                            <Label>Temperatura</Label>
                            <Slider 
                                min={0} 
                                max={1} 
                                step={0.1}
                                value={[temperature]}
                                onValueChange={value => setTemperature(value[0])}
                            >

                            </Slider>
                            <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Valores mais altos tendem a deixar o resultado mais criativo e
                mais surpreendente
                            </span>
                        </div>
                        <Separator />
                        <Button className="w-full" disabled={isLoading}>
              Executar
                            <Wand2 className="w-4 h-4 ml-2" />
                        </Button>
                    </form>
                    <Separator />
                </aside>
            </main>
        </div>
    );
}
