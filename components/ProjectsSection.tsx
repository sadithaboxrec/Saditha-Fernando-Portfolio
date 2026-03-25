"use client";

import { useMemo, useState } from "react";
import { projectFilters, projects, type ProjectCategory } from "@/data/projects";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
      <section id="projects" className="py-10">
        <div className="mx-auto w-full max-w-[1440px] px-4">
          <h2 className="text-5xl text-center font-bold tracking-tight text-slate-900">My Projects</h2>

          {/* Filters */}
          <div className="mt-6 justify-center flex flex-wrap gap-3">
            {projectFilters.map((filter) => {
              const active = filter === activeFilter;
              return (
                  <button
                      key={filter}
                      type="button"
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                          active
                              ? "border-slate-900 bg-slate-900 text-white"
                              : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                      onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
                <article
                    key={project.title}
                    className="animate-fade-in rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md w-full"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                        <li
                            key={item}
                            className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-700"
                        >
                          {item}
                        </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center gap-4 text-sm">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-slate-700 underline-offset-2 transition hover:text-slate-900 hover:underline"
                        >
                            <i className="fab fa-github text-3xl"></i>
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-slate-700 underline-offset-2 transition hover:text-slate-900 hover:underline"
                        >
                          Demo
                        </a>
                    )}
                  </div>
                </article>
            ))}
          </div>
        </div>
      </section>
  );
}