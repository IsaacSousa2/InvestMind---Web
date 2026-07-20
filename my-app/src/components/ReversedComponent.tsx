import Image from "next/image";

interface ComumComponentProps {
  comment: string;
  tittle: string;
  subtittle: string;
  text: string;
  image: {
    src: string;
    alt: string;
  };
}

export default function ReversedComponent({ comment, tittle, subtittle, text, image }: ComumComponentProps) {
  return (
    <div className="bg-(--section) px-6 flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 md:px-24 py-24">
      <div className="w-full max-w-125 md:max-w-180">
        <Image
          src={image.src}
          alt={image.alt}
          width={900}
          height={500}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-2 max-w-125">
        <h4 className="text-(--green-t) uppercase font-semibold text-[clamp(13px,1vw+10px,16px)]">{comment}</h4>
        <h1 className="font-bold text-(--tittle) text-[clamp(25px,1.8vw+18px,33px)]">{tittle}</h1>
        <h2 className="text-(--texts) text-[clamp(14px,0.8vw+12px,18px)]">{subtittle}</h2>
        <h3 className="text-(--tittle) text-[clamp(15px,0.9vw+12px,19px)]">{text}</h3>
      </div>
    </div>
  );
}