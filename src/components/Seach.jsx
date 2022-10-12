import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";



const Seach = () => {
    const navigate = useNavigate();
    const productData = useSelector((state) => state.productReducer.products);
    const [search,setSearch] = useState();
   

    const handleOnSearch = (string, results) => {
        console.log(string, results);
        setSearch(string);
    };
    const handleSubmit = () => {
        navigate(`/search/${search}`, { state: { search: search } });
    };

    const handleOnClear = () => {
        // console.log("Cleared");
        setSearch("");
    };
   
    return (
        <>
            <div>

                <ReactSearchAutocomplete
                    items={productData}
                    onSearch={handleOnSearch}
                    fuseOptions={{ keys: ["title", "description"] }} // Search on both fields
                    resultStringKeyName="title" // String to display in the results   
                    onClear={handleOnClear}
                    inputSearchString={search}
                    showIcon={false}
                    styling={{
                        height: "34px",
                        border: "1px solid darkgreen",
                        borderRadius: "4px",
                        backgroundColor: "white",
                        boxShadow: "none",
                        hoverBackgroundColor: "lightgreen",
                        color: "darkgreen",
                        fontSize: "12px",
                        fontFamily: "Courier",
                        iconColor: "green",
                        lineColor: "lightgreen",
                        placeholderColor: "darkgreen",
                        clearIconMargin: "3px 8px 0 0",
                        zIndex: 2,
                        
                    }}
                // autoFocus
                />



                {/* <input
                    type="search"
                    placeholder="search..."
                    className="input"
                    onChange={e => setSearch(e.target.value)}
                /> */}
            </div>
            <div>
                <button type="button" className="search_btn" onClick={handleSubmit}>
                    <BsSearch />
                </button>
            </div>
        </>
    );
};

export default Seach;
