import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Linkedin,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  Youtube,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-neutral-800 py-12 text-white">
      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/assets/images/logo-blanco.png"
              alt="PictoBooks logo"
              width={174}
              height={37}
              className="mb-6"
            />
            <p className="mb-10 text-sm text-gray-400">
              Preservamos la magia de la infancia a través de la lectura.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white p-1.5"
              >
                <Facebook className="h-5 w-5 fill-black stroke-[1.5] text-black" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white p-1.5"
              >
                <Instagram className="h-5 w-5 stroke-[1.5] text-black" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white p-1.5"
              >
                <Linkedin className="h-5 w-5 fill-black stroke-[1.5] text-black" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white p-1.5"
              >
                <Youtube className="h-5 w-5 stroke-[1.5] text-black" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold">PictoBooks</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Libros
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Merchandising
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold">Edades</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Bebés
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Toddlers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Preescolar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Niños
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <div className="mr-2 rounded-full bg-white p-1.5">
                  <PhoneIcon className="size-5 stroke-[1.5] text-black" />
                </div>
                +000 0000 0000
              </li>
              <li className="flex items-center">
                <div className="mr-2 rounded-full bg-white p-1.5">
                  <MailIcon className="size-5 stroke-[1.5] text-black" />
                </div>
                hola@picto-books.com
              </li>
              <li className="flex items-center">
                <div className="mr-2 rounded-full bg-white p-1.5">
                  <MapPinIcon className="size-5 stroke-[1.5] text-black" />
                </div>
                Barcelona, Cataluña
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-neutral-300" />

        <div className="flex flex-col-reverse items-center gap-y-4 pt-8 text-sm text-gray-400 lg:flex-row lg:justify-between">
          <p>
            © PictoBooks 2023 | Todos los derechos reservados | Desarrollado
            por Diana Bardales :)
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              Términos y Condiciones
            </Link>
            <span className="text-neutral-300">|</span>
            <Link href="#" className="hover:text-white">
              Aviso de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
