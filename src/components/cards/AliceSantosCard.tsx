import { IoMdStar } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";

const AliceSantosCard = () => {
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
            src="/images/artists/alice_santos/1.jpg"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/alice_santos/2.jpg"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/alice_santos/3.jpg"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/alice_santos/4.jpg"
          />
        </Carousel>
      </figure>
      <a href="/artists/alice-santos">
        <div className="card-body text-gray-700">
          <h2 className="flex flex-wrap card-title">
            <img
              alt="."
              className="rounded-full w-8 h-8"
              src="/images/artists/alice_santos/p.jpeg"
            />{" "}
            Alice Santos
          </h2>
          <p className="text-gray-500">
            <span className="text-yellow-600 inline-flex items-baseline font-bold">
              <IoMdStar size={14} /> 4.8
            </span>{" "}
            (18)
            <br />
            R$ 120,00 - R$ 650,00
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Retratos</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AliceSantosCard;
