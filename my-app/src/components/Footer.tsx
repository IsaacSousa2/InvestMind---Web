import { Heart } from "lucide-react"

export default function Footer(){
    return(
        <footer className="w-full py-6 flex justify-center items-center">
            <p className="flex items-center gap-1.5 text-xs text-(--texts) font-mono">
                Made with
                <Heart className="w-3.5 h-3.5 fill-(--green-t) text-(--green-t)" />
                by Cícero Isaac
            </p>
        </footer>
    )
}