import Head from "next/head";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import DrawerLayout from "../components/NavBar/DrawerLayout";
import Footer from "../components/Footer";
import YuChenCard from "../components/cards/YuChenCard";
import CarlosFonsecaCard from "../components/cards/CarlosFonsecaCard";
import AliceSantosCard from "../components/cards/AliceSantosCard";
import BrenoOliveiraCard from "../components/cards/BrenoOliveiraCard";
import ClaraCostaCard from "../components/cards/ClaraCostaCard";
import JadeMendesCard from "../components/cards/JadeMendes";
import ManoelGomesCard from "../components/cards/ManoelGomesCard";
import OliverCastroCard from "../components/cards/OliverCastroCard";
import PippaBakerCard from "../components/cards/PippaBakerCard";
import RobertoPereiraCard from "../components/cards/RobertoPereiraCard";

export default function Index() {
  return (
    <>
      <Head>
        <title>XP</title>
        <meta name="description" content="XP" />
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
                      <h3 className="text-lg text-gray-700 mr-1">ARTISTAS</h3>
                      <div className="h-[1px] w-full bg-secondary block relative top-3"></div>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-700 mb-4">
                      Alguns dos artistas mais populares
                    </h1>

                    <div className="flex flex-wrap gap-5 pt-4 items-stretch justify-around">
                      <YuChenCard />
                      <CarlosFonsecaCard />
                      <AliceSantosCard />
                      <ClaraCostaCard />
                      <JadeMendesCard />
                      <OliverCastroCard />
                      <BrenoOliveiraCard />
                      <ManoelGomesCard />
                      <PippaBakerCard />
                      <RobertoPereiraCard />
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
