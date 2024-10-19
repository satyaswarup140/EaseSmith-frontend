import React, { useRef } from 'react';
import './Nursary.css';
import nursary1 from "../../Assets/nursary1.png";
import nursary2 from "../../Assets/nursary2.png";
import nursary3 from "../../Assets/nursary3.png";
import nursary4 from "../../Assets/nursary4.png";
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

const Nursary = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="nursary-container">
      <h1>Nursary</h1>

      <button className="arrow left-arrow" onClick={scrollLeft}>
       <ChevronLeft/>
      </button>
      
      <div className="nursary-images" ref={scrollRef}>
        <div className="nursary-item">
          <img src={nursary1} alt="Nursary 1" />
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className="nursary-item">
          <img src={nursary2} alt="Nursary 2" />
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className="nursary-item">
          <img src={nursary3} alt="Nursary 3" />
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className="nursary-item">
          <img src={nursary4} alt="Nursary 4" />
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className="nursary-item">
          <img src={nursary1} alt="Nursary 1" />
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className="nursary-item">
          <img src={nursary2} alt="Nursary 2" />
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className="nursary-item">
          <img src={nursary3} alt="Nursary 3" />
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className="nursary-item">
          <img src={nursary4} alt="Nursary 4" />
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
      </div>

      <button className="arrow right-arrow" onClick={scrollRight}>
        <ChevronRight/>
      </button>
    </div>
  );
};

export default Nursary;
