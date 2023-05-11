import React, { useState } from "react";
import "../src/App.css";
import ContactSection from "./components/ContactSection";
import Video from "./components/Video";
import Alkoholtest from "./components/Alkoholtest";
import Testimonials from "./components/testeimonials";

function App() {
  const [showTest, setShowTest] = useState(false);

  const handleClick = () => {
    setShowTest(!showTest);
  };
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <Video />
        </section>
        <section>
          <div className="glass-box">
            <h1 className="ueberschriften">Mein Weg aus dem Alkoholismus</h1>
            <p>
              Mein interaktives eBook zeigt Ihnen, wie ich meine
              Alkoholabhängigkeit überwunden habe und zur Abstinenz gefunden
              habe. In meinem Buch beschreibe ich meinen persönlichen Weg und
              teile meine Erfahrungen und Erkenntnisse mit Ihnen. Mit
              praktischen Tipps und Ratschlägen möchte ich Ihnen helfen, Ihre
              eigene Abstinenz zu erreichen. Lassen Sie mich Ihnen zeigen, dass
              ein Leben ohne Alkohol möglich und erfüllend sein kann. Seit dem
              24.04.2022 trinke ich keinen Tropfen Alkohol mehr. Das erste Jahr,
              in dem man keinen Alkohol trinkt, gilt oft als das wichtigste. In
              dieser Zeit muss man lernen, wie man mit Situationen umgeht, in
              denen man normalerweise Alkohol trinken würde, und wie man
              alternative Bewältigungsstrategien entwickelt. Wenn man diese
              erste Hürde erfolgreich gemeistert hat, fühlt man sich oft
              gestärkt und sicherer im Umgang mit Alkohol. Man ist dann
              gefestigter und hat die Chance, dauerhaft auf Alkohol zu
              verzichten.
            </p>
            <button
              className="downloadButton"
              onClick={() => (window.location.href = "#contact")}
            >
              Ihr erster Schritt
            </button>
          </div>
        </section>
      </header>
      <section>
        <div className="glass-box">
          <h2 className="ueberschriften">Was ist Alkoholismus?</h2>
          <p>
            Alkoholismus ist eine Abhängigkeitserkrankung, die durch
            regelmäßigen und übermäßigen Alkoholkonsum gekennzeichnet ist. Es
            ist eine Krankheit, die das Leben von Menschen und ihren Familien
            beeinträchtigen kann und oft schwer zu überwinden ist.{" "}
          </p>
          <p>
            "Ob Sie sich Sorgen machen, dass Sie gefährdet sind für Alkoholismus
            oder jemanden kennen, der möglicherweise betroffen ist - Mit unserem
            Alkoholtest können Sie schnell und einfach herausfinden, ob es Grund
            zur Besorgnis gibt."
          </p>
          <button className="downloadButton" onClick={handleClick}>
            {showTest ? "Alkoholtest schließen" : "Alkoholtest machen"}
          </button>
          {showTest && (
            <section className="alkohol-container">
              <h1>Alkohol-Selbsttest</h1>
              <p>
                Trinke ich zu viel? Ist meine Gesundheit durch zu hohen
                Alkoholkonsum gefährdet? 5 Testfragen sollen Ihnen dabei helfen,
                Ihren Umgang mit Alkohol zu überprüfen, und Sie gegebenenfalls
                auf Risiken und Probleme aufmerksam machen. Auch wenn der Test
                Ihnen nur eine erste Orientierung geben kann: Nutzen Sie ihn als
                Anregung. <br />{" "}
                <span className="spanRot">
                  Bitte beachten Sie: Die Fragen wurden für erwachsene, gesunde
                  Frauen und Männer zusammengestellt. Wenn Sie gesundheitliche
                  Probleme haben, sollten Sie mit Ihrer Ärztin bzw. Ihrem Arzt
                  über Ihren Alkoholkonsum sprechen.
                </span>
                <br />
              </p>
              <div className="alkohol-fragen">
                <Alkoholtest />
              </div>
            </section>
          )}
        </div>
      </section>
      <section>
        <div className="glass-box">
          <h2 className="ueberschriften">Wie mein eBook helfen kann</h2>
          <p>
            <ul>
              <li>
                Sie lernen mich kennen durch Videos, in denen ich meine
                Geschichte erzähle.
              </li>
              <li>
                <br />
                Ich teile mit Ihnen detailliert meine persönliche Geschichte und
                wie ich es geschafft habe, aus dem Alkoholismus auszubrechen.
              </li>
              <br />
              <li>
                Ich gebe Ihnen Tipps und Tricks, die mir geholfen haben und
                Ihnen vielleicht auch helfen können.
              </li>
              <li>
                <span
                  role="img"
                  aria-label="Daumen hoch"
                  style={{ marginRight: "5px" }}
                ></span>
                <br />
                Vielleicht finden Sie Parallelen zu meiner Geschichte und ich
                kann Ihnen auf Ihrem Weg zur Genesung helfen.
              </li>
              <li>
                <br />
                Ich präsentiere Ihnen Vorher-Nachher-Bilder, die zeigen, wie
                sich mein Leben innerhalb eines Jahres ohne Alkohol zum
                Positiven verändert hat.
              </li>
            </ul>
          </p>
          <button
            className="downloadButton"
            onClick={() => (window.location.href = "#contact")}
          >
            Ihr erster Schritt
          </button>
        </div>
      </section>

      <section>
        <div className="glass-box">
          <h2 className="ueberschriften">Kundenerfahrung</h2>
          <Testimonials />
        </div>
      </section>

      <section>
        <div className="glass-box">
          <h2 className="ueberschriften">Wo Sie Hilfe finden können</h2>
          <ul>
            <li>- Suchen Sie einen Arzt oder Therapeuten auf</li>
            <li>- Treten Sie einer Selbsthilfegruppe bei</li>
            <li>- Sprechen Sie mit Freunden oder Familienmitgliedern</li>
            <li>- Nehmen Sie mit mir Kontakt auf</li>
            <li
              style={{
                color: "red",
                marginTop: "40px",
                borderBottom: "1px solid black",
              }}
            >
              Es ist sehr wichtig, dass Sie bei Alkoholabhängigkeit als ersten
              Schritt Ihren Arzt aufsuchen, da nur er oder sie entscheiden kann,
              welcher weitere Weg für Sie am besten geeignet ist. Es ist
              unbedingt davon abzuraten, einen kalten Entzug allein
              durchzuführen.
            </li>
          </ul>
          <button
            className="downloadButton"
            onClick={() => (window.location.href = "#contact")}
          >
            Ihr erster Schritt
          </button>
        </div>
      </section>
      <section>
        <a id="contact" />
        <ContactSection />
      </section>
      <footer className="glass-box">
        <p>Copyright © 2023 Rocco Auth</p>
      </footer>
    </div>
  );
}

export default App;
