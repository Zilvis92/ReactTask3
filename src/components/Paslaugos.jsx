import Paslauga from './Paslauga';
import './Paslaugos.css';

function Paslaugos() {
  return (
    <section className="paslaugos-wrapper">
      <h2>Mūsų paslaugos</h2>
      <div className="paslaugos-list">
        <Paslauga title="Dizainas" text="Kuriame patrauklius dizainus." />
        <Paslauga title="Programavimas" text="Koduojame jūsų idėjas." />
        <Paslauga title="Konsultacijos" text="Padedame pasirinkti geriausią sprendimą." />
      </div>
    </section>
  );
}

export default Paslaugos;
