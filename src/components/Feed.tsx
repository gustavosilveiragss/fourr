import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  FaExternalLinkAlt,
  FaExternalLinkSquareAlt,
  FaGithub,
} from "react-icons/fa";

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
              <div className="card card-compact rounded-md border border-gray-700 border-opacity-50 w-full md:w-[300px] shadow-lg bg-slate-200">
                <Carousel
                  showThumbs={false}
                  infiniteLoop={true}
                  showStatus={false}
                  swipeable={true}
                  emulateTouch={true}
                >
                  <div className="self-center h-max flex items-center">
                    <img
                      alt="."
                      className="rounded-2xl"
                      style={{ scale: "40%" }}
                      src="/flavicon.ico"
                    />
                  </div>
                  <img
                    alt="."
                    className="rounded-2xl mt-[60px]"
                    src="/images/projects/blog/1.png"
                  />
                </Carousel>
                <div className="card-body text-gray-700">
                  <h2 className="flex flex-wrap card-title">
                    Carlos Fonseca
                    <a
                      href="https://github.com/gustavosilveiragss/blog"
                      className="btn border-opacity-0 ml-2 gap-2 bg-[#0D1117]"
                    >
                      <FaGithub size={20} /> GitHub
                    </a>
                    <a
                      href="https://blog.gustavosilveira.codes"
                      className="btn border-opacity-0 gap-2 bg-violet-800"
                    >
                      <FaExternalLinkSquareAlt size={16} /> visit
                    </a>
                  </h2>
                  <p>
                    
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Rust</div>
                    <div className="badge badge-outline">Actix Web</div>
                    <div className="badge badge-outline">Docker</div>
                    <div className="badge badge-outline">Google Cloud</div>
                    <div className="badge badge-outline">TypeScript</div>
                    <div className="badge badge-outline">Next.js</div>
                    <div className="badge badge-outline">PostgreSQL</div>
                    <div className="badge badge-outline">React</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feed;
