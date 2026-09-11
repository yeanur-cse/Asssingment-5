
import bannerImage from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div>
            <section className="bg-gray-100">
      <div className="mx-auto flex min-h-400px max-w-7xl flex-col items-center justify-between px-6 py-10 md:flex-row lg:px-12">
        
       
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-tight text-slate-800 md:text-5xl">
            Build Your Ideal
            <br />
            <span className= "bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-md text-gray-600">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and pick the stack that fits your
            next project.
          </p>

          
          <div className="mt-8 flex gap-3">
            <button className="rounded-lg bg-[#DB2777] px-5 py-3 text-sm font-semibold text-white">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-gray-300 px-7 py-3 text-sm text-gray-600">
              Learn More
            </button>
          </div>
        </div>

        
        <div className="mt-8 md:mt-0">
          <img
            src={bannerImage}
            alt="Development Stack"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
        </div>
    );
};

export default Banner;