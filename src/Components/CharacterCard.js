import React, { useEffect } from "react";
import { Card } from "antd";
import "../Pages/Characterss.css";

const CharacterCard = ({ character, handleCharacterClick }) => {
  const [randomImageId, setRandomImageId] = React.useState("");

  const renderImage = () => {
    const randomId = Math.floor(Math.random() * 1000);
    setRandomImageId(randomId);
  };

  useEffect(() => {
    renderImage();
  }, []);

  return (
    <Card
      key={character.name}
      title={character.name}
      extra={<a onClick={() => handleCharacterClick(character)}>Details</a>}
      style={{ marginBottom: "10px", backgroundColor: "#F2F0E6" }}
      cover={
        <img
          alt={character.name}
          src={`https://picsum.photos/200/200?random=${randomImageId}`}
        />
      }
      hoverable
      className={`species-${character.species}`}
    >
      <p>Born: {character.birth_year}</p>
      <p>Species: {character.species || "Unknown"}</p>
    </Card>
  );
};

export default CharacterCard;
