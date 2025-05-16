import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AgeCard } from "./(home)/_components/age-cards";
import { BestSellerCard } from "./(home)/_components/best-seller-card";
import { Footer } from "@/components/layout/footer/footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section>
          <div className="mx-auto grid w-full gap-6 md:grid-cols-2">
            <div className="space-y-4 py-24 pl-4 md:py-32 md:pl-16">
              <h1 className="text-4xl font-black text-balance md:text-6xl">
                Libros <br /> personalizados:
                <br />
                niños protagonistas
                <br />
                de sus historias
              </h1>
              <p className="max-w-prose text-pretty text-gray-600">
                Descubre, crea y disfruta de libros y audiolibros donde cada
                niño se convierte en el héroe de su propia historia.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="lg">
                  Ver todos los libros
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[650px]">
              <Image
                src="/assets/images/home-hero.png"
                alt="Libros personalizados para niños"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Age Categories */}
        <section className="mx-auto max-w-7xl py-6 text-center">
          <h2 className="mb-8 text-2xl font-bold text-balance md:text-3xl">
            Cuentos únicos para todas las edades
          </h2>
          <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
              <AgeCard
                image="/assets/images/bebe.png"
                title="Bebés"
                description="0-1 año"
              />
              <AgeCard
                image="/assets/images/toddlers.png"
                title="Toddlers"
                description="1-3 años"
              />
              <AgeCard
                image="/assets/images/preescolar.png"
                title="Preescolar"
                description="3-5 años"
              />
              <AgeCard
                image="/assets/images/niños.png"
                title="Niños"
                description="+6 años"
              />
            </div>
          </div>
        </section>

        {/* How to Create */}
        <section className="mx-auto max-w-7xl bg-white py-12">
          <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
            <h2 className="mb-2 text-center text-4xl font-bold text-balance md:text-5xl">
              ¿Cómo crear tu libro con PictoBooks?
            </h2>
            <p className="mx-auto mb-8 max-w-prose text-center text-lg text-pretty text-gray-600">
              Solo sigue estos pasos para tener tu PictoBook listo en un abrir y
              cerrar de ojos:
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-60 w-60">
                  <Image
                    src="/assets/images/step-1.png"
                    alt="Elige tu libro"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-3xl font-medium">Elige tu libro</h3>
                <p className="text-lg leading-tight font-light text-pretty">
                  Escoge según la temática, la ocasión o la edad.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="relative h-60 w-60">
                  <Image
                    src="/assets/images/step-2.png"
                    alt="Personalízalo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-3xl font-medium">Personalízalo</h3>
                <p className="text-lg leading-tight font-light text-pretty">
                  Hazlo único con nombres, características y dedicatoria.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="relative h-60 w-60">
                  <Image
                    src="/assets/images/step-3.png"
                    alt="Formato"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-3xl font-medium">Formato</h3>
                <p className="text-lg leading-tight font-light text-pretty">
                  Selecciona el tamaño, libro físico, Audiolibro o eBook.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="relative h-60 w-60">
                  <Image
                    src="/assets/images/step-4.png"
                    alt="Listo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-3xl font-medium">Listo</h3>
                <p className="text-lg leading-tight font-light text-pretty">
                  Tu PictoBook se descargará y llegará a la puerta de tu hogar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="mx-auto max-w-7xl bg-white py-12">
          <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
            <h2 className="mb-2 text-center text-3xl font-bold text-balance md:text-5xl">
              Descubre los más vendidos
            </h2>
            <p className="mb-8 text-center text-lg text-pretty text-gray-600">
              Aquí te dejamos los favoritos de todos. ¡Descubre por qué son los
              más vendidos!
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <BestSellerCard
                title="Amigos para siempre"
                price={29.99}
                imageSrc="/assets/images/libro-1.png"
                tag="Familia"
                bgColor="bg-sky-300/80"
              />
              <BestSellerCard
                title="El laboratorio de los inventos locos"
                price={29.99}
                imageSrc="/assets/images/libro-2.png"
                tag="Animales"
                bgColor="bg-yellow-500/60"
              />
              <BestSellerCard
                title="La aventura de la valentía"
                price={29.99}
                imageSrc="/assets/images/libro-3.png"
                tag="Familia"
                bgColor="bg-purple-800/40"
              />
              <BestSellerCard
                title="La misión secreta para salvar al mundo"
                price={29.99}
                imageSrc="/assets/images/libro-4.png"
                tag="Superhéroes"
                bgColor="bg-green-600/50"
              />
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <div className="relative mx-auto flex items-center gap-18 rounded-xl bg-purple-900/60 pl-18">
            <div className="w-1/2 space-y-4 py-16 text-white">
              <h2 className="text-4xl font-bold text-balance md:text-5xl">
                Libro, Audiolibro y Merchandising:
                <br />
                Tu historia cobra vida
              </h2>
              <p className="max-w-prose text-xl text-pretty">
                Tu PictoBook personalizado es el regalo perfecto para cualquier
                ocasión. ¡No esperes más para crear tu propio libro!
              </p>
              <Button
                variant="ghost"
                className="rounded-full border-2 border-white"
              >
                Crea el tuyo
              </Button>
            </div>
            <div className="absolute -right-16 -bottom-20 -mb-[1px] h-[400px] w-1/2 grow md:h-[600px]">
              <Image
                src="/assets/images/cta-banner.png"
                alt="Niños con libros personalizados"
                fill
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </section>

        {/* Testimonials/Features */}
        <section className="bg-white py-12">
          <div className="mx-auto grid w-full max-w-screen-xl gap-6 px-4 md:grid-cols-3 md:px-6">
            <div className="flex h-[477px] w-[400px] flex-col justify-center rounded-xl bg-emerald-600/80 px-12 text-white">
              <h3 className="mb-4 text-xl font-semibold md:text-5xl">
                Un cuento a medida para cada niño
              </h3>
              <p className="font-light">
                Más que un cuento, libros personalizados hechos llenos de magia,
                pasión y sonrisas.
              </p>
            </div>
            <Image
              src="/assets/images/historia-1.png"
              alt="Historia"
              height={477}
              width={400}
            />
            <Image
              src="/assets/images/historia-2.png"
              alt="Historia"
              height={477}
              width={400}
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white pt-16 pb-24">
          <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-5xl">
              FAQ
            </h2>
            <Separator />
            <Accordion type="single" collapsible className="mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-bold">
                  ¿Cómo funciona PictoBooks?
                </AccordionTrigger>
                <AccordionContent className="text-base font-light">
                  En PictoBooks puedes crear un libro único eligiendo la
                  historia y personalizando el protagonista con su nombre,
                  género, edad, apariencia física, ropa y accesorios. También
                  puedes subir una foto, elegir el idioma, agregar audio con la
                  voz de un familiar, seleccionar el formato (digital +
                  audiolibro o impreso) y añadir dedicatoria, packaging o
                  merchandising opcional. ¡Y listo! <br /> <br /> Recibirás un
                  cuento único, creado solo para ese niño o niña especial.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-bold">
                  ¿En qué idiomas es disponibles los libros?
                </AccordionTrigger>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-bold">
                  ¿Puedo escuchar una muestra del audiolibro antes de comprarlo?
                </AccordionTrigger>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-bold">
                  ¿Cuánto tiempo tarda en llegar un libro impreso?
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
