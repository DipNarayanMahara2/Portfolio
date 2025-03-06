
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A portfolio to showcase my skills built with Next.js and Tailwind CSS.",
  },
  {
    title: "To-Do List App",
    description:
      "A to-do list app built using React where users can add and remove tasks.",
  },
  {
    title: "Weather App",
    description: "A weather app fetching live data from an API.",
  },
  {
    title: "Blog (Coming Soon)",
    description: "A simple blog platform that will be built using Next.js.",
  },
  {
    title: "Ecommerce Website (Coming Soon)",
    description :"A simple ecommerce platform that will be built using Next.Js."
  }
];

export default function ProjectsPage() {
  return (
    <section className="py-10 mt-20 text-center">
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
