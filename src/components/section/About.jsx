const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-gray-900 py-20"
    >
      {Array.from({ length: 3 }).map((_, index) => {
        const size = Math.random() * 50 + 70; // สุ่มขนาดระหว่าง 50px - 100px
        return (
          <div
            key={index}
            className={`balloon1 ${index >= 0 ? "hidden md:block" : ""}`}
            style={{
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        );
      })}

      <div className="max-w-3xl mx-auto px-4">
        <p className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </p>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6 ">
            These are the skills I possess, and I am always eager to learn more,
            continuously improving both front-end and back-end development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <p className="text-xl font-bold mb-4"> Frontend</p>
              <div className="flex flex-wrap gap-2 ">
                <p
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                >
                  React
                </p>
                <p
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                >
                  Tailwind
                </p>
                <p
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                >
                  Bootstrap
                </p>
                <p
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                >
                  HTML
                </p>
                <p
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                >
                  CSS
                </p>
                <p
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                >
                  JavaScript
                </p>
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <p className="text-xl font-bold mb-4"> Backend</p>
              <div className="flex flex-wrap gap-2 ">
                <p
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                >
                  Node.js
                </p>
                <p
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                >
                  Express
                </p>

                <p
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                >
                  MySQL
                </p>
                <p
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                >
                  PostgreSQL
                </p>
                <p
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                >
                  JavaScript
                </p>
                <p
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                >
                  PrismaORM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-xl font-bold mb-4"> 🏫 Education </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ">
              <strong> Bachelor's Degree</strong> - Thammasat University
              (2020-2024)
              <li className="pt-2">Faculty of Engineering</li>
              <li>Software Engineering</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  {" "}
                  Front End Developer{" "}
                  <span className="text-cyan-500">(Internship)</span> at
                  Smartclick Solutions Co. Ltd.
                  <br />
                  (Jan 2024 - May 2024)
                </h4>
                <p>
                  Developed the website as assigned, collaborating with the
                  UX/UI team, Project Manager, and Back-End developers The
                  website was built using HTML, CSS, and JavaScript, with the
                  use of frameworks.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-xl font-bold"> 🏫 Certificate </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ">
              <li className="pt-2">
                Introduction to Front-End Development (META){" "}
                <span className="text-gray-500 text-xs"> DEC 4, 2024</span>
              </li>
              <li>
                Programming with JavaScript (META){" "}
                <span className="text-gray-500 text-xs"> JAN 1, 2025</span>
              </li>
              <li>
                React Basics (META){" "}
                <span className="text-gray-500 text-xs"> JAN 8, 2025</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
