import React, { useState } from "react";
function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Send form data to backend API
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send form data");
        }
        alert("Form data sent successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while sending form data");
      });
  };

  return (
    <section>
      <div className="glass-box">
        <h2 className="ueberschriften">Ihr erster Schritt</h2>
        <p>
          Herzlichen Glückwunsch zu Ihrer Entscheidung, Ihr Alkoholproblem
          anzugehen! Schicken Sie mir Ihre Daten und erzählen Sie mir kurz von Ihrer
          Situation, damit ich Ihnen das beste Angebot machen kann. <br /><span>Das Leben ist zu kurz, um es in Alkohol zu ertränken.</span><br />  also lassen Sie uns gemeinsam
          daran arbeiten.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">E-Mail-Adresse:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Nachricht:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Absenden</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
