const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white text-4xl"
    >
      {Array.from({ length: 3 }).map((_, index) => {
        const size = Math.random() * 50 + 70; // สุ่มขนาดระหว่าง 50px - 100px
        return (
          <div
            key={index}
            className={`balloon2 ${index >= 0 ? "hidden md:block" : ""}`}
            style={{
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        );
      })}
      <div className="max-w-5xl mx-auto px-4 pb-4">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2"> KCC Machinery Website</h3>
            <p className="text-gray-400 mb-4 text-xl">
              Developed the website using MVC architecture for clean code
              organization and maintainability, Responsive design.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "Codeiniter",
                "Bootstrap",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://www.kccmachinery.com/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 text-lg"
                target="_blank_"
              >
                View Project →
              </a>
            </div>
          </div>
          <div
            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
          >
            <h3 className="text-xl font-bold mb-2">Hospital Cloth Website</h3>
            <p className="text-gray-400 mb-4 text-xl">
              A responsive website showcasing hospital clothing, designed to
              work seamlessly on all devices. Featuring a section-based layout
              for smooth navigation without the need for page reloading.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML", "CSS", "Bootstrap"].map((tech, key) => (
                <span
                  key={key}
                  className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center ">
              <a
                href="http://www.hospitalcloth.com/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 text-lg"
                target="_blank_"
              >
                View Project →
              </a>
            </div>
          </div>
          <div
            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
          >
            <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
            <p className="text-gray-400 mb-4 text-xl">
              This is my portfolio website showcasing my projects and skills. It
              is built using the React framework with Tailwind CSS for styling
              and developed with Vite for a fast and optimized development
              experience.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Javascript", "TailwindCss", "Vite", "HTML", "CSS"].map((tech) => (
                <span
                  key={tech}
                  className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 text-lg"
              >
                View Project →
              </a>
            </div>
          </div>
          <div
            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
          >
            <h3 className="text-xl font-bold mb-2">Avery Seminar Website</h3>
            <p className="text-gray-400 mb-4 text-xl">
              Developed website using MVC architecture, Integrated RESTful APIs
              to fetch dynamic data from the back-end and display it effectively
              on the front-end using AJAX, Responsive design.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Codeiniter",
                "PHP",
                "Ajax",
                "Bootstrap",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 text-lg"
              >
                View Project →
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
