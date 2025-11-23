"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Home,
  User,
  ClipboardList,
  FolderOpen,
  Mail,
  Briefcase,
  BookOpen,
  Award,
  CheckCircle,
  Github,
  Linkedin,
  Phone,
  FileText,
} from "lucide-react";

export default function home() {
  const [sent, setSent] = useState(false);
  const projects = [
    {
      title: "E-Commerce System",
      stack: ["Spring Boot", "MySQL", "JWT"],
      desc: "Full backend for e-commerce: products, carts, orders, payments (mock).",
      repo: "https://github.com/JavaDeveloper-Sinku/ecom-Microservice_CodeBase",
      demo: "",
      features: [
        "User authentication (JWT)",
        "Product & inventory management",
        "Order processing with mock payments",
      ],
    },
    {
      title: "Restaurant POS System",
      stack: ["Next.js", "Spring Boot", "IndexedDB"],
      desc: "Offline-capable POS with local DB, sync and printable invoices.",
      repo: "https://github.com/JavaDeveloper-Sinku/Restaurant-pos_SystemUi",
      demo: "",
      features: ["Offline mode", "Receipt generation", "Inventory sync"],
    },
    {
      title: "Smart Attendance System",
      stack: ["Spring Boot", "React", "Face Recognition"],
      desc: "Attendance using face recognition, role-based access, and reports.",
      repo: "https://github.com/JavaDeveloper-Sinku/SmartSeat_AlloactionSystem-with-Ai",
      demo: "",
      features: ["Face-based check-in", "Classroom reports", "CSV export"],
    },
    {
      title: "Video → Short + Subtitles (AI)",
      stack: ["FFmpeg", "Python", "Streamlit"],
      desc: "AI pipeline for trimming long videos to shorts plus automatic subtitle generation.",
      repo: "https://github.com/yourname/video-shortener",
      demo: "",
      features: ["Keyframe detection", "Auto-subtitles", "Export presets"],
    },
  ];

  const experience = [
    {
      year: "2024 - Present",
      role: "Backend Developer (Freelance)",
      company: "Self / Clients",
      points: ["Built microservices for e-commerce clients", "Designed REST APIs and DB schemas"],
    },
    {
      year: "2022 - 2024",
      role: "Junior Backend Engineer",
      company: "Acme Tech (example)",
      points: ["Maintained Spring Boot services", "Improved performance and CI/CD"],
    },
  ];

  const certifications = [
    "Java Programming Certificate",
    "Spring Boot — Intermediate",
    "SQL & Databases",
    "AWS Cloud Practitioner (optional)",
  ];

  function handleContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* NAVBAR */}
      <nav className="fixed w-full z-40 bg-black/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold">SS</div>
            <div className="hidden md:block">
              <span className="font-semibold">Sinku Singh</span>
              <div className="text-xs text-gray-300">Java Backend Developer</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-purple-400">Home</a>
            <a href="#about" className="hover:text-purple-400">About</a>
            <a href="#skills" className="hover:text-purple-400">Skills</a>
            <a href="#projects" className="hover:text-purple-400">Projects</a>
            <a href="#experience" className="hover:text-purple-400">Experience</a>
            <a href="#contact" className="hover:text-purple-400">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#contact" className="px-3 py-1 bg-purple-600 rounded-md text-sm hidden md:inline">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-20">
        {/* HERO */}
        <header id="home" className="max-w-6xl mx-auto px-6 pt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Hi, I'm <span className="text-purple-400">Sinku Singh</span>
              </h1>
              <p className="mt-3 text-xl text-gray-300">Java Backend Developer | Spring Boot | Microservices | System Design</p>

              <p className="mt-6 text-gray-300 max-w-xl">
                Building scalable backend systems with clean architecture & high performance. I focus on APIs,
                microservices, and production-ready engineering.
              </p>

              <div className="mt-6 flex gap-3">
                <a href="/resume.pdf" className="px-5 py-3 bg-purple-600 rounded-lg font-semibold inline-flex items-center gap-2">
                  <FileText size={18} /> Resume
                </a>
                <a href="#contact" className="px-5 py-3 border border-gray-700 rounded-lg">Contact Me</a>
                <a href="#projects" className="px-5 py-3 bg-gray-800/60 rounded-lg">View Projects</a>
              </div>

              <div className="mt-6 flex items-center gap-4 text-gray-300">
                <a href="https://github.com/JavaDeveloper-Sinku" aria-label="github" className="hover:text-purple-400"><Github /></a>
                <a href="https://www.linkedin.com/in/sinku-singh-7a22ab233/" aria-label="linkedin" className="hover:text-purple-400"><Linkedin /></a>
                <a href="#" aria-label="phone" className="hover:text-purple-400"><Phone /></a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-600 shadow-2xl">
                <Image src="/profile.jpg" alt="Rishi" width={900} height={900} 
                className="w-200 h-130 object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </header>

        {/* ABOUT */}
        <section id="about" className="max-w-6xl mx-auto px-6 mt-20">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-gray-800 p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold flex items-center gap-3"><User /> About Me</h3>
              <p className="text-gray-300 mt-4">I’m a Java Backend Developer passionate about building scalable APIs, secure authentication systems, and production-level microservices.</p>

              <ul className="mt-4 text-sm text-gray-300 space-y-2">
                <li><strong>Focus:</strong> Spring Boot, Microservices, JPA/Hibernate</li>
                <li><strong>DBs:</strong> MySQL, PostgreSQL</li>
                <li><strong>Other:</strong> DSA, System Design, Multithreading</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-6 rounded-2xl">
                <h4 className="font-semibold">Experience / Training</h4>
                <p className="text-gray-300 mt-2">2+ years building backend systems, internships and freelance projects. Strong foundation in algorithms and system design.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-2xl">
                <h4 className="font-semibold">Short Bio</h4>
                <p className="text-gray-300 mt-2">I build production-ready microservices with performance and security in mind. I enjoy problem solving and system design challenges.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="max-w-6xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-2xl">
              <h4 className="font-semibold mb-3 flex items-center gap-2"><ClipboardList /> Backend</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>Java 8+</li>
                <li>Spring Boot</li>
                <li>Spring MVC / Security</li>
                <li>JPA / Hibernate</li>
                <li>REST API design</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl">
              <h4 className="font-semibold mb-3 flex items-center gap-2"><FolderOpen /> Databases & DevOps</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>MySQL / PostgreSQL</li>
                <li>MongoDB (optional)</li>
                <li>Docker</li>
                <li>Git & GitHub</li>
                <li>CI/CD basics</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl">
              <h4 className="font-semibold mb-3 flex items-center gap-2"><BookOpen /> Other Tools</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>Postman</li>
                <li>IntelliJ</li>
                <li>VS Code</li>
                <li>DSA & System Design</li>
                <li>Multithreading, OOPs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-6xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <motion.article key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.15 }} className="bg-gray-800 p-6 rounded-2xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="text-gray-300 mt-2">{p.desc}</p>

                    <div className="flex gap-2 mt-3 flex-wrap">
                      {p.stack.map((s) => (
                        <span key={s} className="text-xs bg-gray-700 px-2 py-1 rounded">{s}</span>
                      ))}
                    </div>

                    <ul className="mt-3 text-sm text-gray-300 list-disc list-inside">
                      {p.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-sm flex flex-col gap-2">
                    <a href={p.repo} target="_blank" rel="noreferrer" className="px-3 py-1 bg-purple-600 rounded">View Repo</a>
                    {p.demo ? <a href={p.demo} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded">Live Demo</a> : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="max-w-6xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-4">
            {experience.map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-gray-800 p-6 rounded-2xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{e.role}</h3>
                    <div className="text-sm text-gray-300">{e.company}</div>
                  </div>
                  <div className="text-sm text-gray-400">{e.year}</div>
                </div>
                <ul className="mt-3 text-sm text-gray-300 list-disc list-inside">
                  {e.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDUCATION + CERTIFICATIONS */}
        <section id="education" className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-2xl">
            <h3 className="font-semibold flex items-center gap-2"><BookOpen /> Education</h3>
            <div className="mt-3 text-gray-300 text-sm">
              <div><strong>B.Tech — Computer Science</strong></div>
              <div className="text-xs">College Name • Year</div>
              <div className="mt-2">Relevant coursework: Data Structures, DBMS, Operating Systems, Computer Networks</div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl">
            <h3 className="font-semibold flex items-center gap-2"><Award /> Certifications</h3>
            <ul className="mt-3 text-gray-300 text-sm list-disc list-inside">
              {certifications.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="max-w-6xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-700" />
                  <div>
                    <div className="font-semibold">Client {i}</div>
                    <div className="text-xs text-gray-400">Role / Company</div>
                  </div>
                </div>
                <p className="mt-3 text-gray-300 text-sm">Great work delivering on time and clean architecture. Highly recommend.</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-4xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-300">Email, phone, LinkedIn and a contact form below.</p>

          <div className="mt-6 bg-gray-800 p-6 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3"><Mail /> <div>rishi.dev@example.com</div></div>
                <div className="flex items-center gap-3 mb-3"><Phone /> <div>+91 98765 43210</div></div>
                <div className="flex items-center gap-3 mb-3"><Github /> <div>github.com/yourname</div></div>
                <div className="flex items-center gap-3 mb-3"><Linkedin /> <div>linkedin.com/in/rishi</div></div>
              </div>

              <form onSubmit={handleContact} className="space-y-3">
                <input required name="name" placeholder="Your name" className="w-full p-3 rounded bg-gray-900 border border-gray-700" />
                <input required name="email" type="email" placeholder="Your email" className="w-full p-3 rounded bg-gray-900 border border-gray-700" />
                <textarea required name="message" placeholder="Message" rows={5} className="w-full p-3 rounded bg-gray-900 border border-gray-700" />
                <div className="flex items-center gap-3">
                  <button className="px-5 py-2 bg-purple-600 rounded">Send Message</button>
                  {sent && <span className="text-green-400">Message sent (demo)</span>}
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="max-w-6xl mx-auto px-6 mt-20 pb-12 text-center text-gray-400">
          <div className="flex justify-center items-center gap-4 mb-4">
            <a href="https://github.com/JavaDeveloper-Sinku" className="hover:text-white"><Github /></a>
            <a href="https://www.linkedin.com/in/sinku-singh-7a22ab233/" className="hover:text-white"><Linkedin /></a>
          </div>
          <div>© {new Date().getFullYear()} Sishi Singh — Built with Next.js</div>
        </footer>
      </main>
    </div>
  );
}
