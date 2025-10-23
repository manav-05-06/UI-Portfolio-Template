import About from "../components/About";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#131316] flex flex-col md:flex-row transition-all duration-500 items-center px-4 md:px-12 lg:px-16 py-12">

<div
  className="
    hidden sm:flex relative shadow-[0_8px_30px_rgba(0,0,0,0.6)] rounded-xl
    sm:w-1/4 md:w-1/3 lg:w-1/2
    h-[400px] md:h-[500px] lg:h-[600px]
    self-center
    p-6 m-4
    bg-[#1C1C21]
  " style={{
    backgroundImage: `radial-gradient(#2A2A32 1px, transparent 1px)`,
    backgroundSize: "20px 20px",
  }}
>
  <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"></div>
</div>
      <div className="flex flex-1 justify-center items-center px-4 md:px-8 lg:px-16 transition-all duration-500">
        <div className="flex flex-col space-y-6 w-full max-w-[440px]">
          <About />
          <Gallery />
        </div>
      </div>
    </div>
  );
}
