import React, { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import CountriesList from "./CountriesList";
import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import {useWindowSize} from '../hooks/useWindowSize'

function Home() {
  const [query, setQuery] = useState("");
  // const [isDark] = useOutletContext()
  const [isDark] = useContext(ThemeContext);

  const windowSize = useWindowSize()
  return (
    <>
     <main className={`${isDark ? 'dark': ''}`}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <Filter setQuery={setQuery}/>
        </div>
        {/* <h1>{windowSize.width} x {windowSize.height}</h1> */}
        {query === "unmount" ? "" : <CountriesList query={query} />}
      </main>
    </>
  )
}

export default Home