import React, { useState } from "react"


export default function SearchBar(props) {
    const [searchBarState, setSearchBarState] = useState("");

    const inputStyle = {
        alignSelf: "center"
    }

    const buttonStyle = {
        alignSelf: "center"
    }

    const handleSearchChange = (event) => {
        setSearchBarState(event.target.value)
    }

    const handleSubmit = (event) => {
        //Bring user to result page
        //Transfer Name to result page as well.
        props.setSearchedTitle(searchBarState);
        props.setHasSearched(true);
        setSearchBarState("")
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <input name="searchTitle" type="text" value={searchBarState} style={inputStyle} onChange={handleSearchChange} placeholder={"Enter a Move Title..."} />
            <button onClick={handleSubmit} style={buttonStyle}>Search</button>
        </div>
    )
}