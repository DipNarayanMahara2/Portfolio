import Link from "next/link";

export default function Home() {
  return (
    <section id="CallMe" className="relative py-14 mt-[100px] bg-black">
      <div className="z-10 absolute opacity-90 rounded-full blur-[200px] w-[40%] h-[40%] bg-blue-600 top-[200px] ml-[20%]" />
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 ml-6">
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Welcome to My Portfolio
          </h2>
          <p className="text-3xl font-semibold mb-4 text-white">
            I am Dip Narayan Mahara
          </p>
          <p className="mb-3">
            <span className="mr-2">Full Stack Developer |</span>
            <span>FrontEnd Developer</span>
          </p>
          <Link href="/about">
            <button className="bg-white cursor-pointer text-indigo-600 font-bold py-3 px-6 rounded hover:bg-indigo-600 hover:text-white">
              Get Started
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 mr-5">
          <img
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713"
            alt="Hero Image"
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
