import { IoMdStar } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";

const JadeMendesCard = () => {
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
            src="/images/artists/jade_mendes/1.jpg"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/jade_mendes/2.jpg"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/jade_mendes/3.jpg"
          />
        </Carousel>
      </figure>
      <a href="/artists/jade-mendes">
        {" "}
        <div className="card-body text-gray-700">
          <h2 className="flex flex-wrap card-title">
            <img
              alt="."
              className="rounded-full w-8 h-8"
              src="/images/artists/jade_mendes/p.jpeg"
            />{" "}
            Jade Mendes
          </h2>
          <p className="text-gray-500">
            <span className="text-yellow-600 inline-flex items-baseline font-bold">
              <IoMdStar size={14} /> 3.9
            </span>{" "}
            (17)
            <br />
            R$ 80,00 - R$ 270,00
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Logos</div>
          </div>
        </div>
      </a>{" "}
    </div>
  );
};

export default JadeMendesCard;
