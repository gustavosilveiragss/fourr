import Head from "next/head";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import DrawerLayout from "../components/NavBar/DrawerLayout";
import Footer from "../components/Footer";
import ManoelGomesCard from "../components/cards/ManoelGomesCard";

export default function logos() {
  return (
    <>
      <Head>
        <title>fourr</title>
        <meta name="description" content="fourr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/logo.ico" />
      </Head>

      <main>
        <div className="bg-slate-200 flex-col">
          <DrawerLayout>
            <section id="feed">
              <div className="projects w-full min-h-screen bg-slate-200">
                <div className="p-8 md:p-20 gap-4 flex flex-col items-stretch">
                  <div>
                    <div className="flex flex-row w-full">
                      <h3 className="text-lg text-gray-700 mr-1 md:whitespace-nowrap">
                        ARTISTAS DE SOCIAL MEDIA
                      </h3>
                      <div className="h-[1px] w-full bg-secondary block relative top-3"></div>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-700 mb-4">
                      Alguns dos artistas que trabalham com social media
                    </h1>

                    <div className="flex flex-wrap gap-5 pt-4 items-stretch justify-around">
                      <ManoelGomesCard />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Footer />
          </DrawerLayout>
        </div>
      </main>
    </>
  );
}
