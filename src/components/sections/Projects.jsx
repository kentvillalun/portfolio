export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="mx-auto px-6 max-w-3xl md:max-w-5xl">
        <div className="mb-11.25 text-center">
          <h2 className="font-bold text-3xl md:text-4xl mb-5">
            Featured Projects
          </h2>
          <p className="text-lg">
            A selection of projects I've built to practice and showcase my
            skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-white/10 overflow-hidden hover:-translate-y-1 transition-all group bg-[#00000025]">
            <img
              src="../src/assets/images/ibadyetkon.png"
              alt=""
              className="group-hover:scale-105 transition-all "
            />
            <div className="p-6 flex flex-col gap-2">
              <h3 className="text-xl font-bold">iBadyetKon</h3>
              <p>A smart budgeting web app that helps you track expenses and manage your money with ease.</p>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
