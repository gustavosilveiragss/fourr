import { IoMdStar } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";

const CarlosFonsecaCard = () => {
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
            src="/images/artists/carlos_fonseca/1.png"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/carlos_fonseca/2.png"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/carlos_fonseca/3.png"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/carlos_fonseca/4.png"
          />
        </Carousel>
      </figure>
      <a href="/artists/carlos-fonseca">
        <div className="card-body text-gray-700">
          <h2 className="flex flex-wrap card-title">
            <img
              alt="."
              className="rounded-full w-8 h-8"
              src="/images/artists/carlos_fonseca/p.jpeg"
            />{" "}
            Carlos Fonseca
          </h2>
          <p className="text-gray-500">
            <span className="text-yellow-600 inline-flex items-baseline font-bold">
              <IoMdStar size={14} /> 4.7
            </span>{" "}
            (20)
            <br />
            R$ 200,00 - R$ 600,00
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Ilustração Digital</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CarlosFonsecaCard;
