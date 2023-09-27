import { Label } from "@radix-ui/react-label";
import { Separator } from "@radix-ui/react-separator";
import { FileVideo, Upload } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { ChangeEvent, useState, useMemo, FormEvent, useRef } from 'react';

export function VideoInputForm() {
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const promptInputRef = useRef<HTMLTextAreaElement>(null);

    function handleFileSelected(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        const { files } = e.currentTarget;
        if (!files) {
            return;
        }
        const selectedFile = files[0];

        setVideoFile(selectedFile)

    }

    function handleUploadVideo(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        const prompt = promptInputRef.current?.value;

        if(!videoFile){
            return;
        }


    }

    const previewURL = useMemo(() => {
        if (!videoFile) {
            return null;
        }

        return URL.createObjectURL(videoFile)
    }, [videoFile])

    return (
        <form className="space-y-6" onSubmit={handleUploadVideo}>
            <label
                htmlFor="video"
                className="relative border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"

            >
                {previewURL ? (
                    <video src={previewURL} controls={false} className="pointer-events-none absolute inset-0" />
                ) : (
                    <>
                    <FileVideo className="w-4 h-4" />
                        Selecione um video
                    </>
                )}
            </label>
            <input type="file" id="video" accept="video/mp4" className="sr-only" onChange={handleFileSelected} />
            <Separator />

            <div className="space-y-2">
                <Label htmlFor="transcription_prompt">
                    Prompt de transcrição
                </Label>
                <Textarea
                    ref={promptInputRef}
                    id="transcription_prompt"
                    className="h-20 leading-relaxed resize-none"
                    placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)"
                ></Textarea>
            </div>

            <Button type="submit" className="w-full">
                <Upload className="w04 h-4 ml-2" />
                Carregar video
                {/* <Wand2 className="h-4 w-4 ml-2" /> */}
            </Button>
        </form>
    )
}