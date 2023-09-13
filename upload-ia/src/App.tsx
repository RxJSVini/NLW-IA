import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-separator';
import { Github } from 'lucide-react';
export function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="px-6 py-3 flex itens-center justify-between border-b">
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
            
            </div>

            <main className='flex-1 p-6 flex gap-6'>
                <div className='flex flex-col flex-1 gap-4'>

                </div>
                <p>Lembre-se você pode utilizar a variável transcription no seu prompt para adicionar a transcrição do video selecionado</p>
                <aside className='w-80'>
                    <div className='grid grid-rows-2 gap-4 flex-1'>

                    </div>
                </aside>
            </main>
        </div>
    );
}
