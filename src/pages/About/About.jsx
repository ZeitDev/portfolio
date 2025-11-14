import HeroImg from "@/assets/images/hero.png";
// import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          {/* <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Passionate Web Developer | Growing Problem Solver
          </h2> */}
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                I'm a Biomedical Engineering Master's student at the Hamburg University of Technology (TUHH), driven by a passion for building at the intersection of Large Language Models, Deep Learning, Virtual Reality and Robotics.
              </p>
              <p className="text-white">
                My fascination with code comes from its power to translate complex ideas into functional reality. This passion drives my work — from academic research to personal projects — where I explore new ways to create intelligent, interactive, and helpful systems.
              </p>
              <p className="text-white">
                 As a solutions-oriented and highly versatile engineer, I'm always looking for the next hard problem to solve.
              </p>
              <p className="text-white">
                When I'm offline, you can find me bouldering, cycling, or diving into a good sci-fi novel — usually while listening to music, especially from Hiroyuki Sawano.
              </p>
              <p className="text-white">
                Feel free to browse my projects and get in touch!
              </p>
              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  {/* <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value. As the creator of OlovaJS,
                    I'm pushing the boundaries of JavaScript frameworks to
                    empower developers worldwide.
                  </p> */}

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Léon Zeitler
                      {/* , Creator of */}
                    </cite>
                    <div className="flex items-center gap-2">
                      {/* <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      /> */}
                      {/* <span className="text-white">OlovaJS</span> */}
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
