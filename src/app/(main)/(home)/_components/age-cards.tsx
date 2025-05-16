import Image from "next/image";

function AgeCard(props: { title: string; description: string; image: string }) {
  return (
    <div className="flex items-center gap-4 rounded-3xl border border-neutral-200 px-4 py-1">
      <Image src={props.image} alt={props.title} height={80} width={80} />
      <div className="text-left">
        <h3 className="-mb-2 text-2xl font-bold">{props.title}</h3>
        <p className="text-xl">{props.description}</p>
      </div>
    </div>
  );
}

export { AgeCard };
