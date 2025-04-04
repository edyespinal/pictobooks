import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, MailIcon, MapPinIcon, PhoneIcon, Twitter, Youtube } from "lucide-react";


function Footer() {
  return (
    <footer className="bg-neutral-800 py-12 text-white">
      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/assets/images/logo-blanco.png" alt="PictoBooks logo" width={174} height={37} className="mb-6" />
            <p className="mb-10 text-sm text-gray-400">
              Libros infantiles y juveniles personalizados
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-1.5">
                <Facebook className="h-5 w-5 text-black stroke-[1.5] fill-black" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-1.5">
                <Instagram className="h-5 w-5 text-black stroke-[1.5] " />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-1.5">
                <Linkedin className="h-5 w-5 text-black stroke-[1.5] fill-black" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-1.5">
                <Youtube className="h-5 w-5 text-black stroke-[1.5] " />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase">Sobre</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Preguntas
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Reviews
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
            <h4 className="mb-4 text-sm font-bold uppercase">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <div className="bg-white rounded-full p-1.5 mr-2">
                  <PhoneIcon className="size-5 text-black stroke-[1.5]" />
                </div>
                +000 0000 0000
              </li>
              <li className="flex items-center">
                <div className="bg-white rounded-full p-1.5 mr-2">
                  <MailIcon className="size-5 text-black stroke-[1.5] " />
                </div>
                info@pictobooks.com
              </li>
              <li className="flex items-center">
                <div className="bg-white rounded-full p-1.5 mr-2">
                  <MapPinIcon className="size-5 text-black stroke-[1.5] " />
                </div>
                Barcelona, Cataluña
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Devoluciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-neutral-300" />

        <div className="flex flex-col-reverse items-center gap-y-4 lg:justify-between pt-8 text-sm text-gray-400 lg:flex-row">
          <p>
            © PictoBooks 2023 | Todos los derechos reservados | Desarrollado por Diana Bardales :)
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
  )
}

export { Footer }