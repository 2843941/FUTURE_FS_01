import './Hero.css';

function Hero() {
  return (
    <section id="home">
      <h1>Hi, I'm Andile Dudu</h1>
      <p>I'm Studying Bsc in Computer Sciences at University of Witwatersrand</p>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

      <button>Download Resume</button>
      </nav>
    </section>
  );
}

export default Hero;