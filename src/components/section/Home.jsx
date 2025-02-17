const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gray-900 text-gray-100 text-4xl relative overflow-hidden"
    >
      {Array.from({ length: 6 }).map((_, index) => {
        const size = Math.random() * 50 + 70; // สุ่มขนาดระหว่าง 50px - 100px
        return (
          <div
            key={index}
            className={`balloon ${index >= 2 ? "hidden md:block" : ""}`} // ซ่อนลูกโป่งที่ index >= 2 ใน mobile
            style={{
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        );
      })}

      <div className="container mx-auto text-center z-10 px-4 w-full">
        <div>
          <p className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent leading-right">
            Hi, I'm Nontanut
          </p>

          <p className="text-lg mb-8 max-w-lg mx-auto">
            " I am passionate about building high-quality software. I started
            with front-end development using HTML, CSS, JavaScript, and
            frameworks, then expanded into back-end development with server-side
            technologies and databases. This enables me to develop and integrate
            fullstack applications."
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-500 to-cyan-300 text-black rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]
                py-2 px-4 text-sm md:py-4 md:px-8 md:text-lg"
          >
            View Projects
          </a>

          <a
            href="https://drive.google.com/file/d/1EQehnnom96XyhScsaW4wiU39Gb6LbWxx/view?usp=sharing"
            target="_blank"
            className="border border-blue-500/50 text-blue-500 rounded font-medium transition-all duration-200 
               hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10
               py-2 px-4 text-sm md:py-4 md:px-8 md:text-lg "
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
