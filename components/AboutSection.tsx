"use client";

import { useState,useEffect  } from "react";
import { currentSkills, learningSkills } from "@/data/skills";
import { clubs, type Club } from "@/data/clubs";

export default function AboutSection() {
  // const [selectedClub, setSelectedClub] = useState<any>(null);

  const [selectedClub, setSelectedClub] = useState<Club | null>(clubs[0]);

  const [mounted, setMounted] = useState(false);  // to prevent automatically loading

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
      <section id="about" className="py-5">
        <div className="mx-auto w-full max-w-[1440px] px-4">

          <h1 className="text-5xl font-bold text-center tracking-tight text-slate-900">
            About Me
          </h1>

          {/*  about dev */}
          <div className="mt-8 grid w-full max-w-[1440px] gap-10 rounded-3xl bg-white p-8 shadow-sm sm:p-10 md:grid-cols-2">

            {/*  about me dev */}
            <div>
              <p className="leading-7 text-slate-600">
                I’m a passionate Spring Boot developer focused on building efficient and scalable backend applications.
                I actively participate in hackathons, constantly learning and applying innovative solutions to real-world problems.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                I also contribute to university events, bringing strong leadership and planning skills to every team I work with.
              </p>

              {/* clubs */}
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Clubs & Activities
              </h3>

              <ul className="relative mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {clubs.map((club) => (
                    <li
                        key={club.name}
                        onClick={() => setSelectedClub(club)}
                        className="relative z-10 flex cursor-pointer items-center justify-between rounded-lg border border-slate-200
                        bg-slate-50 px-4 py-3 transition hover:border-slate-300 hover:bg-slate-100"
                    >
                      {/* LEFT */}
                      <div className="flex items-center gap-3">
                        <img
                            src={club.logo}
                            alt={club.name}
                            className="h-12 w-12 rounded-md object-cover"
                        />

                        <div>
                          <p className="text-sm font-semibold text-slate-800">
                            {club.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {club.role}
                          </p>
                        </div>
                      </div>


                      <i className="fa-solid fa-eye text-slate-800 text-2xl"></i>
                    </li>
                ))}
              </ul>
            </div>

            {/* right */}
            <div>
              <h3 className="text-xl text-center font-semibold text-slate-900">Skills</h3>

              {/* current skills */}
              <p className="mt-4 text-sm text-slate-500">Current Skills</p>
              {/*<ul className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3">*/}
              {/*  {currentSkills.map((skill) => (*/}
              {/*      <li*/}
              {/*          key={skill.name}*/}
              {/*          className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"*/}
              {/*      >*/}
              {/*        <img src={skill.icon} className="h-4 w-4" />*/}
              {/*        {skill.name}*/}
              {/*      </li>*/}
              {/*  ))}*/}
              {/*</ul>*/}
              <ul className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {currentSkills.map((skill) => (
                    <li
                        key={skill.name}
                        className="flex items-center gap-8 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-semibold text-slate-700"
                    >
                      <img src={skill.icon} className="h-5 w-5" />
                      {skill.name}
                    </li>
                ))}
              </ul>

              {/* bucket skills */}
              <p className="mt-6 text-sm text-slate-500">
                Skills Bucket List
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {learningSkills.map((skill) => (
                    <li
                        key={skill.name}
                        className="flex items-center gap-8 rounded-lg border border-dashed border-slate-300 px-4 py-3 text-base text-slate-600"
                    >
                      <img src={skill.icon} className="h-5 w-5" />
                      {skill.name}
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/*  MODAL */}
        {selectedClub && mounted && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
              <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <img
                      src={selectedClub.logo}
                      className="h-14 w-14 rounded-md object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{selectedClub.name}</h3>
                    <p className="text-sm text-slate-500">{selectedClub.role}</p>
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-200 pt-4">
                  <h4 className="text-sm font-medium text-slate-800 mb-2 text-center">Timeline</h4>
                  <ul className="space-y-2">
                    {selectedClub.timeline.map((item: any) => (
                        <li key={item.year} className="flex items-center gap-12">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold">
                      {item.year}
                    </span>
                          <span className="text-slate-600">{item.position}</span>
                        </li>
                    ))}
                  </ul>
                </div>

                <button
                    onClick={() => setSelectedClub(null)}
                    className="mt-6 w-full rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
                >
                  Close
                </button>
              </div>
            </div>
        )}
      </section>
  );
}