import "react-responsive-carousel/lib/styles/carousel.min.css";
import YuChenCard from "./cards/YuChenCard";
import CarlosFonsecaCard from "./cards/CarlosFonsecaCard";
import AliceSantosCard from "./cards/AliceSantosCard";
import BrenoOliveiraCard from "./cards/BrenoOliveiraCard";
import ClaraCostaCard from "./cards/ClaraCostaCard";
import JadeMendesCard from "./cards/JadeMendes";
import ManoelGomesCard from "./cards/ManoelGomesCard";
import OliverCastroCard from "./cards/OliverCastroCard";
import PippaBakerCard from "./cards/PIppaBakerCard";
import RobertoPereiraCard from "./cards/RobertoPereiraCard";

const Feed = () => {
  return (
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
  );
};

export default Feed;
