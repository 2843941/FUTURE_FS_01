function SkillsPage() {
  const skills = [
    "JavaScript",
    "React",
    "HTML/CSS",
    "Firebase",
    "Python",
    "Git"
  ];

  return (
    <section id="skills" style={{ padding: "80px 20px", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", fontSize: "2.5rem" }}>My Skills</h2>
      <div style={{ 
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px",
        maxWidth: "800px",
        margin: "0 auto",
        marginTop: "40px"
      }}>
        {skills.map((skill) => (
          <span key={skill} style={{
            fontSize: "1.2rem",
            color: "#333"
          }}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default SkillsPage;