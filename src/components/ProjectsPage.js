function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React and Firebase"
    },
    {
      title: "Task Manager App",
      description: "Todo app with real-time updates"
    },
    {
      title: "Weather App",
      description: "Shows weather based on user location"
    }
  ];

  return (
    <section id="projects" style={{ padding: "80px 20px", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", fontSize: "2.5rem" }}>My Projects</h2>
      <div style={{ maxWidth: "800px", margin: "0 auto", marginTop: "40px" }}>
        {projects.map((project) => (
          <div key={project.title} style={{ marginBottom: "40px" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{project.title}</h3>
            <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;