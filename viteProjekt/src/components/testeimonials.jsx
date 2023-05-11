import React, { useState, useEffect } from "react";
import axios from "axios";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setTestimonials(result.data);
    };
    fetchData();
  }, []);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div>
      {currentTestimonial && (
        <div>
          <h3>{currentTestimonial.name}</h3>
          <p>{currentTestimonial.message}</p>
        </div>
      )}
      <button onClick={handleNextClick}>Nächster Kommentar</button>
    </div>
  );
};

export default Testimonials;
