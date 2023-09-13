import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Label  } from "@/components/ui/label"
import { Github, FileVideo, Upload } from "lucide-react";
export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Upload.ia</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvimento com 💜 no NLW da Rocketseat{" "}
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
              placeholder="Inclua o prompt para IA ..."
              readOnly
              className="resize-none p-4 leading-relaxed"
            />
            <Textarea
              placeholder="Resultado gerado pela IA"
              readOnly
              className="resize-none p-4 leading-relaxed"
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode usar a variável{" "}
            <code className="text-violet-400">{"{transcription}"}</code> prompt
            para adicionar o conteúdo da transcrição do seu video.
          </p>
        </div>

        <aside className="w-80 space-y-4">
          <form className="space-y-6">

            <label
              className="border flex rounded-md aspect-video cursor-pointer 
              border-dashed text-sm flex-col gap-2 items-center justify-center
              text-muted-foreground hover:bg-primary/10"
            >
              <FileVideo className="w-4 h-4" />
              Selecione um video
            </label>
            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />

            <Separator/>


            <div className="space-y-1">
              <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
              <Textarea id="transcription_prompt" className="min-h-20 leading-relaxed resize-none" placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)">

              </Textarea>
            </div>


            <Button type="submit" className="w-full">
              <Upload className="w04 h-4 ml-2"/>
              Executar
              {/* <Wand2 className="h-4 w-4 ml-2" /> */}
            </Button>
          </form>
          <Separator/>
          <form className="space-y-6">

          </form>

        </aside>
      </main>
    </div>
  );
}
