import './Paslaugos.css';

function Paslauga({ title, text }) {
  return (
    <div className="paslauga">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Paslauga;
