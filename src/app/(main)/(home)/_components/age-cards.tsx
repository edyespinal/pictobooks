import Image from "next/image"

function AgeCard(props: { title: string, description: string, image: string }) {
  return (
    <div className="flex items-center gap-4 border border-neutral-200 rounded-xl px-4 py-1">
      <Image src={props.image} alt={props.title} height={60} width={60} />
      <div>
        <h3 className="text-base font-bold -mb-2">{props.title}</h3>
        <p className="">{props.description}</p>
      </div>
    </div>
  )
}

export { AgeCard }