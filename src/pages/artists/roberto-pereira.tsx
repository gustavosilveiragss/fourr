import Head from "next/head";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import DrawerLayout from "../../components/NavBar/DrawerLayout";
import Footer from "../../components/Footer";
import { IoMdStar } from "react-icons/io";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";

export default function Index() {
  return (
    <>
      <Head>
        <title>fourr | Roberto Pereira</title>
        <meta name="description" content="fourr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/logo.ico" />
      </Head>

      <main>
        <div className="bg-slate-200 flex-col">
          <DrawerLayout>
            <section id="artist">
              <div className="grid grid-cols-3 gap-0 justify-start w-full min-h-screen p-10">
                <div className="border-r  border-r-slate-300">
                  <div className="text-3xl font-bold text-gray-500 flex flex-col border-b justify-center items-center text-center border-b-slate-300 pb-2 mr-4">
                    <img
                      alt="."
                      className="rounded-full w-20 h-20"
                      src="/images/artists/roberto_pereira/p.jpeg"
                    />
                    <span>Roberto Pereira</span>
                    <span className="text-lg pl-2">
                      <span className="text-yellow-600 inline-flex items-baseline font-bold">
                        <IoMdStar size={18} className="self-center" /> 2.9
                      </span>{" "}
                      (6 avaliações)
                    </span>
                    <span className="my-2 badge badge-outline">
                      Tatuagens
                    </span>
                  </div>
                  <div className="text-md text-gray-800 flex flex-col border-b justify-start text-start border-b-slate-300 p-2 mr-4">
                    <span className="font-bold">Descrição</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="text-md text-gray-800 flex flex-col border-b justify-start text-start border-b-slate-300 p-2 mr-4">
                    <span className="font-bold">Redes Sociais</span>
                    <a
                      href="https://www.instagram.com/"
                      className="flex flex-row text-gray-800 pb-2 justify-start"
                    >
                      <FaInstagram size={20} />
                      <span className="ml-1">Instagram</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      className="flex flex-row text-gray-800 pb-2 justify-start"
                    >
                      <FaLinkedin size={20} />
                      <span className="ml-1">LinkedIn</span>
                    </a>
                  </div>
                </div>
                <div className="col-span-2 flex flex-col">
                  <div className="px-4">
                    <div className="flex flex-row w-full">
                      <h3 className="text-lg text-gray-700 mr-1 md:whitespace-nowrap">
                        Portfólio
                      </h3>
                      <div className="h-[1px] w-full bg-secondary block relative top-3"></div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-700">
                      Algumas das artes de Roberto Pereira
                    </h1>
                  </div>

                  <div className="artboard scale-90">
                    <Carousel
                      showThumbs={false}
                      infiniteLoop={true}
                      showStatus={false}
                      swipeable={true}
                      emulateTouch={true}
                    >
                      <img
                        alt="."
                        className="rounded-md"
                        src="/images/artists/roberto_pereira/1.jpeg"
                      />
                      <img
                        alt="."
                        className="rounded-md"
                        src="/images/artists/roberto_pereira/2.jpeg"
                      />
                      <img
                        alt="."
                        className="rounded-md"
                        src="/images/artists/roberto_pereira/3.jpeg"
                      />
                      <img
                        alt="."
                        className="rounded-md"
                        src="/images/artists/roberto_pereira/4.jpeg"
                      />
                      <img
                        alt="."
                        className="rounded-md"
                        src="/images/artists/roberto_pereira/5.jpeg"
                      />
                      <img
                        alt="."
                        className="rounded-md"
                        src="/images/artists/roberto_pereira/6.jpeg"
                      />
                    </Carousel>
                  </div>

                  <div className="px-4">
                    <div className="flex flex-row w-full">
                      <h3 className="text-lg text-gray-700 mr-1 md:whitespace-nowrap">
                        Preços
                      </h3>
                      <div className="h-[1px] w-full bg-secondary block relative top-3"></div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-700 mb-4">
                      Os pacotes que Roberto Pereira disponibiliza
                    </h1>
                  </div>

                  <div className="flex flex-row disable-hover flex-wrap gap-5 pt-4 items-stretch justify-around">
                    <div className="card card-compact  border-opacity-50 w-full md:w-80 bg-slate-200 border border-slate-500">
                      <div className="card-body text-gray-800 text-center">
                        <h2 className="card-title text-2xl font-bold self-center">
                          Pacote 1
                        </h2>
                        <div className="text-gray-600 px-4 h-full text-lg text-left">
                          <li>especificação do pacote</li>
                        </div>
                        <h2 className="font-bold text-xl">R$ 40,00</h2>
                        <div className="card-actions justify-end">
                          <button className="btn btn-success w-full">
                            Contratar Serviço
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="card card-compact  border-opacity-50 w-full md:w-80 bg-slate-200 border border-slate-500">
                      <div className="card-body text-gray-800 text-center">
                        <h2 className="card-title text-2xl font-bold self-center">
                          Pacote 2
                        </h2>
                        <div className="text-gray-600 px-4 h-full text-lg text-left">
                          <li>especificação do pacote</li>
                          <li>especificação do pacote</li>
                          <li>especificação do pacote</li>
                        </div>
                        <h2 className="font-bold text-xl">R$ 80,00</h2>
                        <div className="card-actions justify-end">
                          <button className="btn btn-success w-full">
                            Contratar Serviço
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="card card-compact  border-opacity-50 w-full md:w-80 bg-slate-200 border border-slate-500">
                      <div className="card-body text-gray-800 text-center">
                        <h2 className="card-title text-2xl font-bold self-center">
                          Pacote 3
                        </h2>
                        <div className="text-gray-600 px-4 h-full text-lg text-left">
                          <li>especificação do pacote</li>
                          <li>especificação do pacote</li>
                          <li>especificação do pacote</li>
                          <li>especificação do pacote</li>
                          <li>especificação do pacote</li>
                          <li>especificação do pacote</li>
                        </div>
                        <h2 className="font-bold text-xl">R$ 150,00</h2>
                        <div className="card-actions justify-end">
                          <button className="btn btn-success w-full">
                            Contratar Serviço
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="px-4 mb-8">
              <div className="flex flex-row w-full">
                <h3 className="text-lg text-gray-700 mr-1 md:whitespace-nowrap">
                  Avaliações
                </h3>
                <div className="h-[1px] w-full bg-secondary block relative top-3"></div>
              </div>
              <h1 className="text-xl font-bold text-gray-700">
                O que os clientes acharam dos serviços de Roberto Pereira?
              </h1>
            </div>

            <div className="flex flex-col px-8">
              <div className="text-gray-800 mb-8">
                <h2 className="flex flex-wrap">
                  <img
                    alt="."
                    className="rounded-full w-8 h-8 mr-2"
                    src="/images/randoms/roberto_alves.jpeg"
                  />
                  <span className="self-center">Roberto Alves</span>
                </h2>
                <p>
                  <span className="text-yellow-600 mr-2 inline-flex items-baseline font-bold">
                    <IoMdStar className="self-center mr-0.5" size={14} /> 5.0
                  </span>
                  | 2 meses atrás | Pacote 2
                  <br />
                  Entrega veloz de serviço. Resultados ultrapassaram expectativas.
                </p>
              </div>
              <div className="text-gray-800 mb-10">
                <h2 className="flex flex-wrap">
                  <img
                    alt="."
                    className="rounded-full w-8 h-8 mr-2"
                    src="/images/randoms/arnoldo_santana.jpeg"
                  />
                  <span className="self-center">Arnoldo Santana</span>
                </h2>
                <p>
                  <span className="text-yellow-600 mr-2 inline-flex items-baseline font-bold">
                    <IoMdStar className="self-center mr-0.5" size={14} /> 5.0
                  </span>
                  | 7 meses atrás | Pacote 1
                  <br />
                  O trabalho de Yu contribuiu muito ao nosso projeto.
                </p>
              </div>
            </div>

            <Footer />
          </DrawerLayout>
        </div>
      </main>
    </>
  );
}
