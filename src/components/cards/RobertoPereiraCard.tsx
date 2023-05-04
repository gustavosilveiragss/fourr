import { IoMdStar } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";

const RobertoPereiraCard = () => {
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
            src="/images/artists/roberto_pereira/5.jpeg"
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
            src="/images/artists/roberto_pereira/1.jpeg"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/roberto_pereira/6.jpeg"
          />
        </Carousel>
      </figure>
      <a href="/artists/roberto-pereira">
        <div className="card-body text-gray-700">
          <h2 className="flex flex-wrap card-title">
            <img
              alt="."
              className="rounded-full w-8 h-8"
              src="/images/artists/roberto_pereira/p.jpeg"
            />{" "}
            Roberto Pereira
          </h2>
          <p className="text-gray-500">
            <span className="text-yellow-600 inline-flex items-baseline font-bold">
              <IoMdStar size={14} /> 2.9
            </span>{" "}
            (6)
            <br />
            R$ 40,00 - R$ 150,00
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Tatuagens</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default RobertoPereiraCard;
