import { useRef, useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const scrollRef = useRef();

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImages((prev) => [...prev, url]);
    }
  };

  const scroll = (dir) => {
    const offset = dir === "left" ? -220 : 220;
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  const buttonStyle =
    "bg-white/10 backdrop-blur-sm border border-white/20 shadow-[0_4px_6px_rgba(0,0,0,0.5)] text-xl w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_16px_#ffffff33] active:translate-y-0";

  return (
    <div className="font-mono bg-[#1C1C21] text-white rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.4)] p-6 w-[420px] mt-6 border border-[#2A2A32]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">Gallery</h2>

        <div className="flex items-center gap-2">
          <label className="cursor-pointer bg-[#2A2A32] hover:bg-[#35353C] px-4 py-1 rounded-[10px] text-sm transition">
            + Add Image
            <input
              type="file"
              accept="image/*"
              onChange={handleAddImage}
              className="hidden"
            />
          </label>

          <button onClick={() => scroll("left")} className={buttonStyle}>
            ‹
          </button>

          <button onClick={() => scroll("right")} className={buttonStyle}>
            ›
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pt-2 pb-2"
      >
        {images.length ? (
          images.map((src, i) => (
            <div
              key={i}
              className="relative group flex-shrink-0 snap-center rounded-[12px] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-shadow duration-500 animate-fadeIn"
            >
              <img
                src={src}
                alt="uploaded"
                className="w-28 h-28 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
              />
            </div>
          ))
        ) : (
          <div className="text-gray-400 text-sm italic pl-2">
            No images added yet
          </div>
        )}
      </div>
    </div>
  );
}
