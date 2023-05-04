import { IoMdStar } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";

const YuChenCard = () => {
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
            src="/images/artists/yu_chen/1.png"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/yu_chen/2.png"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/yu_chen/3.png"
          />
          <img
            alt="."
            className="rounded-md"
            src="/images/artists/yu_chen/4.png"
          />
        </Carousel>
      </figure>
      <a href="/artists/yu-chen">
        <div className="card-body text-gray-700">
          <h2 className="flex flex-wrap card-title">
            <img
              alt="."
              className="rounded-full w-8 h-8"
              src="/images/artists/yu_chen/p.jpeg"
            />
            Yu Chen
          </h2>
          <p className="text-gray-500">
            <span className="text-yellow-600 inline-flex items-baseline font-bold">
              <IoMdStar size={14} /> 5.0
            </span>
            (35)
            <br />
            R$ 300,00 - R$ 600,00
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Concept Art</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default YuChenCard;
