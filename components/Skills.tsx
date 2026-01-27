"use client";

export default function Skills() {
  const skills = [
    { name: "Photoshop", code: "Ps", color: "#31A8FF", desc: "Retouche & Composition" },
    { name: "Lightroom", code: "Lr", color: "#31A8FF", desc: "Colorimétrie" },
    { name: "InDesign", code: "Id", color: "#FF3366", desc: "Mise en page" },
    { name: "Premiere", code: "Pr", color: "#9999FF", desc: "Montage Vidéo" },
    { name: "Figma", code: "Fi", color: "#00CF7F", desc: "UI/UX Design" },
    { name: "Blender", code: "Bl", color: "#E87D0D", desc: "Modélisation 3D" },
  ];

  return (
    <section className="w-full min-h-screen py-24 px-4 md:px-8">
      <div className="w-full max-w-[95%] mx-auto flex flex-col gap-12">

        {/* Sticky Full-Width Header */}
        <div className="sticky top-[76px] z-40 bg-[#052902] self-start w-full flex justify-between items-start border-b border-white/20 pb-6 md:pb-8 pt-6 md:pt-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-5xl font-black uppercase text-white tracking-tighter">LOGICIELS INFORMATIQUES</h2>
          </div>
          {/* Badge - hidden on mobile */}
          <div className="hidden md:flex items-center gap-3">
            <span className="w-3 h-3 bg-white/50 rounded-full"></span>
            <span className="border border-white/30 text-white px-4 py-1 text-xs font-bold uppercase tracking-widest">
              COMPÉTENCES
            </span>
          </div>
        </div>

        {/* Content Area - Grid of Skills */}
        <div className="flex flex-col pt-4 pb-32">
          <div className="grid grid-cols-1 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-xl flex items-center gap-6 md:gap-12 hover:bg-white/10 transition-all group cursor-default"
              >
                {/* Large Icon Box */}
                <div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-[#0a0a0a] flex items-center justify-center font-bold text-3xl md:text-4xl shadow-2xl border border-white/10 group-hover:scale-105 transition-transform duration-300"
                  style={{ color: skill.color }}
                >
                  {skill.code}
                </div>

                {/* Text Info */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight">{skill.name}</h3>
                  <span className="text-base md:text-lg opacity-60 uppercase tracking-widest">{skill.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
