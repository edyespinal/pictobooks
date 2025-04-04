import { cn } from "@/lib/utils"
import Image from "next/image"

function BestSellerCard(props: {
  imageSrc: string,
  title: string,
  price: number
  tag: string
  bgColor?: string
}) {
  return (
    <div>
      <div
        className={cn("overflow-hidden rounded-xl pt-6 pb-1 px-2", props.bgColor ? props.bgColor : "bg-orange-300")}
      >
        <div className="relative h-48 md:h-64">
          <Image
            src={props.imageSrc}
            alt={props.title}
            fill
            className="object-contain"
          />
          <div className="absolute bottom-2 right-2 rounded bg-violet-500 px-2 py-1 text-white">
            {props.tag}
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-bold md:text-base">
          {props.title}
        </h3>
        <p className="text-sm text-gray-600">Desde $29.99</p>
      </div>

    </div>
  )

}

export { BestSellerCard }