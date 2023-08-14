import React, { useState, useEffect } from "react";
import { Spin, Input, message, Button } from "antd";
import axios from "axios";
import FilterSelect from "../Components/FilterSelect"; // Corrected import path
import CharacterList from "../Components/CharacterList";
// import CharacterDetailsModal from '../Components/CharacterDetailsModal';
import PaginationSection from "../Components/PaginationSection";
import { useNavigate, redirect } from "react-router";
import "./Characterss.css";

const { Search } = Input;

const Characters = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");

  const navigate = useNavigate();

  const isSearchQueryValid = (query) => {
    const validCharacters = /^[a-zA-Z0-9- ']+$/;
    return query.trim() !== "" && validCharacters.test(query);
  };


  const fetchCharacters = async (page = 1) => {
    try {
      setLoading(true);

      const savedSpvalue = localStorage.getItem('spvalue') || "people";

      const response = await axios.get(
        `https://swapi.dev/api/${savedSpvalue}?page=${page}`
      );
      setCharacters(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 10));
      setCurrentPage(page);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      message.error("Invalid URL : API not found");
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handlePaginationChange = (page) => {
    setCurrentPage(page);

    fetchCharacters(page);
  };

  function handlesClick() {
    navigate("/");
  }

  const handleCharacterClick = async (character) => {
    try {
      //setLoading(true);
      const response = await axios.get(character.homeworld);
      character.homeworldData = response.data;
      setSelectedCharacter(character);
      const character1 = character;
      // setLoading(false);
      console.log(character);
      navigate("/chars", {
        state: {
          character,
        },
      });
    } catch (error) {
      // setLoading(false);
      console.error(error);
    }
  };

  const handleSearch = (query) => {
    if (isSearchQueryValid(query)) {
      setSearchQuery(query);
    } else {
      setSearchQuery("");
    }
    setCurrentPage(1);
  };

  const handleFilterChange = (v) => {
  let spvalue = "people";
    if (v!== "") {
      spvalue = "species";
    }
    setFilter(v);
    setCurrentPage(1);

    localStorage.setItem('spvalue', spvalue);

    fetchCharacters(1,spvalue);
  };

  const filteredCharacters = characters.filter((character) => {
    if (
      searchQuery &&
      !character.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    if (
      filter &&
      filter !== "all" &&
      character.species &&
      !character.species.includes(filter)
    ) {
      return false;
    }

    return true;
  });

  // const handleCloseModal = () => {
  //   setSelectedCharacter(null);
  // };

  const paginationDisabled =
    filteredCharacters.length === 0 || filteredCharacters.length < 10;

  return (
    <div>
      <br />

      <Search
        enterButton
        size="large"
        status="success"
        placeholder="Enter search Character"
        allowClear={true}
        onSearch={handleSearch}
        style={{ marginBottom: "30px" }}
      />

      <FilterSelect
        size="large"
        filter={filter}
        handleFilterChange={handleFilterChange}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "8vh",
        }}
      >
        <Button type="primary" size="middle" onClick={handlesClick}>
          {" "}
          Go back{" "}
        </Button>
      </div>

      {loading ? (
        <Spin size="large" style={{ height: "550%" }}>
          <div style={{ background: "#eee", height: 50, margin: 24 }} />
        </Spin>
      ) : (
        <div>
          <CharacterList
            classname="characters-item"
            characters={filteredCharacters}
            handleCharacterClick={handleCharacterClick}
          />

          {totalPages > 1 && !paginationDisabled && (
            <PaginationSection
              currentPage={currentPage}
              totalPages={totalPages}
              handlePaginationChange={handlePaginationChange}
            />
          )}
        </div>
      )}

      {/* <CharacterDetailsModal selectedCharacter={selectedCharacter} loading={loading} handleCloseModal={handleCloseModal} /> */}
    </div>
  );
};

export default Characters;
