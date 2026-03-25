"use client";

export default function Footer() {
  return (
      <footer className="border-t border-slate-500 bg-slate-50 py-8">
        <div className="mx-auto w-full max-w-[1440px] px-4 flex flex-col items-center justify-between gap-4 sm:flex-row">


          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Saditha Fernando. All rights reserved.
          </p>


          <div className="flex gap-4">
            <a
                href="https://github.com/sadithaboxrec"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition transform hover:-translate-y-0.5 hover:shadow-md hover:bg-slate-100"
            >
              <i className="fa-brands fa-github text-lg" />
              GitHub
            </a>

            <a
                href="https://www.linkedin.com/in/sadithafernando"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition transform hover:-translate-y-0.5 hover:shadow-md hover:bg-slate-100"
            >
              <i className="fa-brands fa-linkedin text-lg" />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
  );
}