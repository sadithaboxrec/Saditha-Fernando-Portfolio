import Image from "next/image";

export default function HeroSection() {
  return (
      <section className="flex min-h-screen items-center pt-16 md:pt-20" id="home" >
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 md:grid-cols-2">

          <div className="flex justify-center ">
            {/*<div className="relative h-60 w-60 overflow-hidden rounded-full border-4 border-white shadow-md sm:h-72 sm:w-72">*/}
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-white shadow-md sm:h-96 sm:w-96 lg:h-[480px] lg:w-[480px]">
              <Image
                src="/images/hero/saditha.jpeg"
                alt=" Saditha"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>


          <div className="animate-fade-in text-center md:text-left">
            <p className="mb-3 text-4xl font-semibold uppercase tracking-[0.2em] text-slate-500">
              Hello, I am
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Saditha Fernando
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              I’m an MIS undergraduate at NSBM Green University. I’m interested in backend development specially
              using Spring Boot and I’m also learning automation testing and  Machine Learning.
            </p>

            <div className="mt-8">
              <a
                href="/Saditha%20Fernando.pdf"
                className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-l font-semibold text-white transition hover:bg-slate-700"
                download
              >
                <i className="fa-solid fa-download  pr-3 text-sm font-semibold text-white transition hover:bg-slate-700"></i>
                Download CV


              </a>
            </div>
          </div>

      </div>
    </section>
  );
}
