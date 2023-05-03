import { IoMdStar } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";

const BrenoOliveiraCard = () => {
  return (
    <div className="card card-compact rounded-md border border-gray-700 border-opacity-50 w-full md:w-[350px] shadow-lg bg-slate-200">
      <figure>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          swipeable={true}
          emulateTouch={true}
          className="max-h-[400px]"
        >
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/breno_oliveira/1.jpeg"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/breno_oliveira/2.jpeg"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/breno_oliveira/3.jpeg"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/breno_oliveira/4.jpeg"
          />
        </Carousel>
      </figure>
      <div className="card-body text-gray-700">
        <h2 className="flex flex-wrap card-title">
          <img
            alt="."
            className="rounded-full w-8 h-8"
            src="/images/artists/breno_oliveira/p.jpeg"
          />{" "}
          Breno Oliveira
        </h2>
        <p className="text-gray-500">
          <span className="text-yellow-600 inline-flex items-baseline font-bold">
            <IoMdStar size={14} /> 4.0
          </span>{" "}
          (13)
          <br />
          R$ 100,00 - R$ 160,00
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Ilustração Digital</div>
        </div>
      </div>
    </div>
  );
};

export default BrenoOliveiraCard;
