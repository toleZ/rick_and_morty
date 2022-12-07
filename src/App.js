import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Error from "./components/Error/Error.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [characters, setCharacters] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/1,2,3,4`)
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  useEffect(() => {
    if (!isLogged && location.pathname !== "/") navigate("/");
  }, [location.pathname]);

  const login = (userData) => {
    if (userData.name === "admin" && userData.password === "admin") {
      setIsLogged(true);
      navigate("/home");
    } else
      window.alert(
        "User and/or password is incorrect, please try with admin:admin"
      );
  };

  const checkList = (id) => {
    return characters.some((character) => character.id === Number(id));
  };

  const onSearch = (characterId) => {
    if (!checkList(characterId)) {
      fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then((response) => response.json())
        .then((data) =>
          data.name
            ? (setCharacters([...characters, data]),
              location.pathname !== "/home" && navigate("/home"))
            : window.alert("No hay personajes con ese ID")
        );
    } else return window.alert("Ese personaje ya está cargado");
  };

  const onClose = (characterName) => {
    const filteredCharacters = characters.filter(
      (character) => character.name !== characterName
    );
    setCharacters(filteredCharacters);
  };

  const randomCharacter = () => {
    let randomID = Math.floor(Math.random() * (286 - 1) + 1);

    while (checkList(randomID)) {
      randomID = Math.floor(Math.random() * (286 - 1) + 1);
    }

    onSearch(randomID);
    if (location.pathname !== "/home") navigate("/home");
  };

  return (
    <>
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} randomCharacter={randomCharacter} />
      )}
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<LogIn login={login} />} />
        <Route
          path="/home"
          element={
            <Cards
              characters={characters}
              onClose={onClose}
              randomCharacter={randomCharacter}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailid" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
