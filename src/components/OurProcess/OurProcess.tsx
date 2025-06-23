export default function OurProcess() {
  const processSteps = [
    {
      icon: "📋",
      title: "BRIEFING",
      description:
        "We begin with a thorough consultation to understand your goals, preferences, and requirements, ensuring a perfectly tailored solution.",
    },
    {
      icon: "📐",
      title: "DESIGNING",
      description:
        "Our expert team creates a thoughtful design that blends aesthetics and functionality, transforming your vision into a practical reality.",
    },
    {
      icon: "⚙️",
      title: "EXECUTION",
      description:
        "Once the design is finalized, we execute every detail with precision, ensuring high-quality craftsmanship and timely project completion.",
    },
    {
      icon: "🤝",
      title: "HANDOVER",
      description:
        "After completing all aspects of the project, we present the finished space, ensuring it meets your expectations and is ready to use.",
    },
  ];
  

  return (
    <section className="py-10">
      <div className="max-w-7xl  text-center">
        <h1 className="text-5xl  text-gold mb-12 relative inline-block">
          OUR PROCESS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-8 bg-white rounded-xl   transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-6xl text-gold mb-6 transition-transform duration-300 group-hover:scale-110">
                {step.icon}
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-4 text-gray-600 text-justify leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
