import React, { useState } from "react"
import SearchBar from "./SearchBar"
import Result from "./Result"

export default function Home() {
    const [searchedTitle, setSearchedTitle] = useState("");
    const [hasSearched, setHasSearched] = useState(false);

    return (
        <>
            <h1 className={"title"} style={{ textAlign: "center", color: "#2F79B9" }}>TV Maze React</h1>
            {hasSearched ? <Result searchedTitle={searchedTitle} setHasSearched={setHasSearched} /> : <SearchBar setSearchedTitle={setSearchedTitle} setHasSearched={setHasSearched} />}
        </>
    )
}