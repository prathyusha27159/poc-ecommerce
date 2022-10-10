import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const Seach = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState(null);

    const handleSubmit = () => {
        navigate(`/search/${search}`, { state: { search: search } });
    };
    return (
        <>
            <div>
                <input
                    type="search"
                    placeholder="search..."
                    className="input"
                    onChange={e => setSearch(e.target.value)}
                />
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
