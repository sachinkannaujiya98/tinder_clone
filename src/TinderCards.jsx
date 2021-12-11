import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";
const TinderCards = () => {
  const [persons, setPerson] = useState([
    {
      name: "Tina",
      age: "18 years",
      url: "https://static.remove.bg/remove-bg-web/dc31eaf79444b51662da45dcd6cf26fcda20b5dd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    },
    {
      name: "Kriti",
      age: "20 years",
      url: "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
    },
    {
      name: "Hritik",
      age: "40 years",
      url: "https://www.bollywikia.com/wp-content/uploads/2020/05/hrithik-roshan.jpg",
    },
    {
      name: "Ratan",
      age: "60 years",
      url: "https://images.newindianexpress.com/uploads/user/imagelibrary/2020/1/13/w1200X800/15JUL2015PTI19_22-10-2015_19_30.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log(`removing${nameToDelete}`);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {persons.map((person, index) => (
          <TinderCard
            className="swipe"
            key={person.name}
            onSwipe={(dir) => swiped(dir, person.name, index)}
            onCardLeftScreen={() => outOfFrame(person.name, index)}
          >
            <div
              style={{ backgroundImage: "url(" + person.url + ")" }}
              className="card"
            >
              <h3>{person.name}</h3>
              <p>{person.age}</p>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
