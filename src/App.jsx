import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardsData from "./data";

function App() {
  const cards = cardsData.map((card) => {
    return (
      <Card
        key={card.id}
        card={card}
      />
    );
  });

  return (
    <>
      <Header></Header>
      <div className="container">
        <section id="hero-section">
          <Hero></Hero>
        </section>
        <section id="card-section">
          {cards}
        </section>
      </div>
    </>
  );
}

export default App;
