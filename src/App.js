import { useState } from "react";
import data from './data';
import {FiChevronLeft , FiChevronRight} from 'react-icons/fi'

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  console.log(people);
  return (
    <section className="section">
      <div className="title">
        <span>نطرات مشتریان</span>
      </div>
      <div className="section-center">
        {
          people.map((person , personIndex) =>{
            const {id , image , name , qoute , title} = person;
            let position = "nextSlide";
            if(personIndex === index){
              position = "activeSlide"
            }
            if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)){
              position = 'lastSlide';
            }
            return(
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img"/>
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="qoute">{qoute}</p>
              </article>
            )
          })
        }
        <button className="next">
          <FiChevronRight/>
        </button>
        <button className="prev">
          <FiChevronLeft/>
        </button>
      </div>
    </section>
  );
}

export default App;
