export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-black text-white text-center px-4">
      
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Hi, I'm <span className="text-gray-400">Shahzad</span>
      </h1>

      <p className="mt-6 text-lg text-gray-400 max-w-xl">
        I build modern, responsive web applications using Next.js and React.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition">
          View Work
        </button>

        <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
          Contact Me
        </button>
      </div>

    </section>
  );
}