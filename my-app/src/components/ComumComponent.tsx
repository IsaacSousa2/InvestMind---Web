import Image from "next/image";

interface ComumComponentProps {
  comment: string;
  tittle: string;
  subtittle: string;
  text: string;
  buttonText?: string;
  image: {
    src: string;
    alt: string;
  };
}

export default function ComumComponent({ comment, tittle, subtittle, text, image, buttonText }: ComumComponentProps) {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 px-6 md:px-24 py-24">
      <div className="flex flex-col gap-2 max-w-125">
        <h4 className="text-(--green-t) uppercase font-semibold text-[clamp(13px,1vw+10px,16px)]">{comment}</h4>
        <h1 className="font-bold text-(--tittle) text-[clamp(25px,1.8vw+18px,33px)]">{tittle}</h1>
        <h2 className="text-(--texts) text-[clamp(14px,0.8vw+12px,18px)]">{subtittle}</h2>
        <h3 className="text-(--tittle) text-[clamp(15px,0.9vw+12px,19px)]">{text}</h3>
        {buttonText && (
          <button className="flex gap-1 items-center justify-center text-center bg-(--green-t) px-3 py-6 rounded-2xl hover:bg-(--green-d) transition duration-300 ease-in-out cursor-pointer">
            <div className="font-medium text-white text-xl flex items-center justify-center">
              <h1>{buttonText}</h1>
            </div>
          </button>
        )}
      </div>

      <div className="w-full max-w-125 md:max-w-180">
        <Image
          src={image.src}
          alt={image.alt}
          width={900}
          height={500}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}