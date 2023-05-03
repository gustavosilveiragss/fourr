import { IoMdStar } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";

const ManoelGomesCard = () => {
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
            src="/images/artists/manoel_gomes/3.jpeg"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/manoel_gomes/4.jpeg"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/manoel_gomes/5.jpeg"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/manoel_gomes/2.jpeg"
          />
          <img
            alt="."
            className="rounded-md pt-[50px]"
            src="/images/artists/manoel_gomes/1.jpg"
          />
        </Carousel>
      </figure>
      <div className="card-body text-gray-700">
        <h2 className="flex flex-wrap card-title">
          <img
            alt="."
            className="rounded-full w-8"
            src="/images/artists/manoel_gomes/1.jpg"
          />{" "}
          Manoel Gomes
        </h2>
        <p className="text-gray-500">
          <span className="text-yellow-600 inline-flex items-baseline font-bold">
            <IoMdStar size={14} /> 3.2
          </span>{" "}
          (11)
          <br />
          R$ 60,00 - R$ 140,00
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Social Media</div>
        </div>
      </div>
    </div>
  );
};

export default ManoelGomesCard;
