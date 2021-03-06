import React, { useEffect } from "react";
import "./App.css";

function App() {
  const cards = [];

  for (let i = 0; i < 26; i++) {
    const card = {
      id: i.toString(),
      title: "My card",
      summary:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla consequat massa quis enim. Nullam dictum felis eu pede mollis pretium.",
      lastUpdated: new Date()
    };

    cards.push(card);
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "spanning-css-polyfill.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <header role="banner">
        <h3>
          <mark>Dual-screen aware</mark> layout
        </h3>
      </header>

      <main role="main">
        <section className="card-list">
          {cards.map((card, i) => (
            <article className="card" key={i}>
              <span>Dec 12</span>

              <h2>{card.title}</h2>

              <hr />
              <p>{card.summary}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
