import { cn } from "@/lib/utils";
import Image from "next/image";

function BestSellerCard(props: {
  imageSrc: string;
  title: string;
  price: number;
  tag: string;
  bgColor?: string;
}) {
  return (
    <div>
      <div
        className={cn(
          "relative overflow-hidden rounded-4xl px-12 pt-4 pb-12",
          props.bgColor ? props.bgColor : "bg-orange-300",
        )}
      >
        <div className="relative h-48 md:h-64">
          <Image
            src={props.imageSrc}
            alt={props.title}
            fill
            className="object-contain"
          />
        </div>
        <div className="bg-morado absolute right-8 bottom-4 rounded-lg px-2 py-1 text-white">
          {props.tag}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium md:text-2xl">{props.title}</h3>
        <p className="text-lg text-gray-500">Desde $29.99</p>
      </div>
    </div>
  );
}

export { BestSellerCard };
