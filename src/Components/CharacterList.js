import React from "react";
import { List } from "antd";
import CharacterCard from "./CharacterCard";
import "../Pages/Characterss.css";

const CharacterList = ({ characters, handleCharacterClick }) => {
  return (
    <div className="characters-list-container">
      <List
        grid={{
          gutter: 40,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        dataSource={characters}
        renderItem={(character) => (
          <List.Item>
            <CharacterCard
              character={character}
              handleCharacterClick={handleCharacterClick}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default CharacterList;
