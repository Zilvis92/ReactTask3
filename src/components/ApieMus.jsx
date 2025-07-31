import './ApieMus.css';

function ApieMus() {
  return (
    <section className="apie-mus">
      <h2 className="section-title">Apie mus</h2>
      
      <div className="content-wrapper">
        <div className="text-content">
          <p>
            Esame įmonė, įkurta 2010 metais, specializuojamės aukštos kokybės paslaugų teikime. 
            Mūsų komandą sudaro patyrę profesionalai, kurie myli savo darbą ir nuolat tobulėja.
          </p>
          <p>
            Mūsų tikslas - užtikrinti klientų pasitenkinimą ir teikti inovatyvius sprendimus, 
            kurie padės jūsų verslui augti ir klestėti.
          </p>
          <button className="sužinok-daugiau">Sužinokite daugiau</button>
        </div>
        
        <div className="image-content">
          <img 
            src="/public/komanda.jpg" 
            alt="Mūsų komanda" 
            className="team-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default ApieMus;