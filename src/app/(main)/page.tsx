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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-amber-100 to-purple-100 py-24 md:py-32">
          <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-6">
            <div className="space-y-4">
              <h1 className="text-4xl  md:text-5xl tracking-wide font-black text-balance">
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
                <Button variant="primary">
                  Empieza a crear
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/assets/images/home-hero.png"
                alt="Libros personalizados para niños"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Age Categories */}
        <section className="py-6 text-center max-w-7xl mx-auto">
          <h2 className="mb-8 text-xl font-medium text-balance md:text-2xl">
            Cuentos únicos para todas las edades
          </h2>
          <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
              <AgeCard image="/assets/images/bebe.png" title="Bebés" description="0-1 año" />
              <AgeCard image="/assets/images/toddlers.png" title="Toddlers" description="1-3 años" />
              <AgeCard image="/assets/images/preescolar.png" title="Preescolar" description="3-5 años" />
              <AgeCard image="/assets/images/niños.png" title="Niños" description="+6 años" />
            </div>
          </div>
        </section>

        {/* How to Create */}
        <section className="bg-white py-12 max-w-7xl mx-auto">
          <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
            <h2 className="mb-2 text-center text-2xl font-bold text-balance md:text-3xl">
              ¿Cómo crear tu libro con PictoBooks?
            </h2>
            <p className="mx-auto mb-8 max-w-prose text-center text-pretty text-gray-600">
              Solo sigue estos pasos para tener tu PictoBook listo en un abrir y
              cerrar de ojos.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <div className="flex flex-col items-center text-center">
                <div className="rounded-xl bg-orange-500 h-42 w-full mb-4" />
                <h3 className="font-bold">Elige tu libro</h3>
                <p className="text-sm text-pretty">
                  Escoge según la temática, la ocasión o la edad.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="rounded-xl bg-orange-500 h-42 w-full mb-4" />
                <h3 className="font-bold">Personalízalo</h3>
                <p className="text-sm text-pretty">
                  Hazlo único con nombres, características y dedicatoria.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="rounded-xl bg-orange-500 h-42 w-full mb-4" />
                <h3 className="font-bold">Formato</h3>
                <p className="text-sm text-pretty">
                  Selecciona el tamaño, libro físico, Audiolibro o eBook.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="rounded-xl bg-orange-500 h-42 w-full mb-4" />
                <h3 className="font-bold">Listo</h3>
                <p className="text-sm text-pretty">
                  Tu PictoBook se descargará y llegará a la puerta de tu hogar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="bg-white py-12 max-w-7xl mx-auto">
          <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
            <h2 className="mb-2 text-2xl text-center font-bold text-balance md:text-3xl">
              Descubre los más vendidos
            </h2>
            <p className="mb-8  text-center text-gray-600">
              Aquí te dejamos los favoritos más buscados por nuestros clientes.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <BestSellerCard
                title="¿Dónde está el perrito"
                price={29.99}
                imageSrc="/assets/images/libro-1.png"
                tag="Educativo"
              />
              <BestSellerCard
                title="¿Dónde está el perrito"
                price={29.99}
                imageSrc="/assets/images/libro-2.png"
                tag="Animales"
                bgColor="bg-sky-300"
              />
              <BestSellerCard
                title="¿Dónde está el perrito"
                price={29.99}
                imageSrc="/assets/images/libro-1.png"
                tag="Familia"
                bgColor="bg-violet-300"
              />
              <BestSellerCard
                title="¿Dónde está el perrito"
                price={29.99}
                imageSrc="/assets/images/libro-2.png"
                tag="Superhéroes"
                bgColor="bg-rose-300"
              />
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="py-12 max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-amber-400 mx-auto rounded-xl flex gap-18 items-center py-12 px-18">
            <div className="space-y-4 text-white w-1/2">
              <h2 className="text-3xl font-bold text-balance md:text-4xl">
                Libro, Audiolibro y Merchandising:
                <br />
                Tu historia cobra vida
              </h2>
              <p className="max-w-prose text-pretty">
                Tu PictoBook personalizado es el regalo perfecto para cualquier
                ocasión. No querrás nada igual para tu pequeño.
              </p>
              <Button
                variant="ghost"
                className="border-2 border-white rounded-full"
              >
                Crea el tuyo
              </Button>
            </div>
            <div className="relative grow h-[250px] md:h-[300px] w-1/2">
              <Image
                src="/assets/images/niños-banner.png"
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
            <div className="flex flex-col justify-center rounded-xl bg-emerald-500 p-6 text-white w-[400px] h-[477px]">
              <h3 className="mb-4 text-xl font-semibold md:text-5xl">
                Un cuento a medida para cada niño
              </h3>
              <p className="font-light">
                Más que un cuento, libros personalizados hechos llenos de magia,
                pasión y sonrisas.
              </p>
            </div>
            <Image src="/assets/images/historia-1.png" alt="Historia" height={477} width={400} />
            <Image src="/assets/images/historia-2.png" alt="Historia" height={477} width={400} />
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-12">
          <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
              FAQ
            </h2>
            <Accordion type="single" collapsible className="mx-auto">
              {[1, 2, 3, 4, 5].map((item) => (
                <AccordionItem key={item} value={`item-${item}`}>
                  <AccordionTrigger className="font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </AccordionTrigger>
                  <AccordionContent className="font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse venenatis, ex ac aliquot. Fusce magna nuncipat
                    massa et lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Cras elementum quam. Morbi quis fusce felis,
                    vestibulum fermentum arcu vel, sollicitudin tempor sapien.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div >
  );
}
