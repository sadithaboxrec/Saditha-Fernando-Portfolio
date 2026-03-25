"use client";
import { useState } from "react";
import { socialLinks } from "@/data/socialLinks";

export default function ContactSection() {

  const [result, setResult] = useState({ message: "", type: "" });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setResult({ message: "Sending...", type: "loading" });

    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      let data;
      try {
        data = await response.json();
      } catch {
        data = { success: false, message: "Invalid response from Web3Forms" };
      }

      if (data.success) {
        setResult({ message: "Form Submitted Successfully!", type: "success" });
        form.reset();
      } else {
        setResult({ message: data.message || "Something went wrong", type: "error" });
      }
    } catch (err) {
      console.error(err);
      setResult({ message: "Server error. Try again later.", type: "error" });
    }

    setTimeout(() => setResult({ message: "", type: "" }), 5000);
  };
    return (
      <section id="contact" className="py-8">
        <div className="mx-auto w-full max-w-[1440px] px-4">
          {/*  header outside the box */}
          <h2 className="text-5xl font-bold text-center tracking-tight text-slate-900">
            Contact Me
          </h2>

          <div className="mt-8 grid w-full gap-8 rounded-3xl bg-white p-8 shadow-sm sm:p-10 md:grid-cols-12">
            {/* Contact Form */}
            <div className="md:col-span-8">
              <p className="text-slate-700 text-center">
                Do you want to contact me, just fill out the form.
              </p>

              <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                    Name
                  </label>
                  <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                      placeholder="Your name"
                      required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                      placeholder="your@email.com"
                      required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                      placeholder="Write your message..."
                      required
                  />
                </div>

                <button
                    type="submit"
                    className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Send Message
                </button>

                {result.message && (
                    <p className={`mt-4 text-center font-medium ${
                        result.type === "loading" ? "text-blue-500" :
                            result.type === "success" ? "text-green-600" :
                                "text-red-600"
                    }`}>
                      {result.message}
                    </p>
                )}

              </form>
            </div>

            {/* Social Links */}
            {/*<div className="md:pl-10">*/}
            {/*  <h3 className="text-xl font-semibold text-slate-900">Connect with me</h3>*/}

            {/*  <ul className="mt-5 grid grid-cols-1 gap-4">*/}
            {/*    {socialLinks.map((link) => (*/}
            {/*        <li key={link.name}>*/}
            {/*          <a*/}
            {/*              href={link.href}*/}
            {/*              target="_blank"*/}
            {/*              rel="noreferrer"*/}
            {/*              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"*/}
            {/*          >*/}
            {/*            <i className={`${link.iconClass} text-2xl`}></i>*/}
            {/*            {link.name}*/}
            {/*          </a>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*  </ul>*/}
            {/*</div>*/}

            <div className="md:col-span-4 md:pl-10">
              <h3 className="text-xl text-center font-semibold text-slate-900">Connect with me</h3>

              <ul className="mt-4 flex flex-col gap-4">
                {socialLinks.map((link) => (
                    <li key={link.name}>
                      <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className={`flex items-center gap-9 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-base font-semibold text-slate-800 
                          shadow-sm transition transform hover:-translate-y-1 hover:shadow-lg max-w-[350px]`}
                          style={{ borderLeft: `4px solid #000` }}
                      >
                        <img src={link.icon} alt={link.name} className="h-12 w-12" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
  );
}