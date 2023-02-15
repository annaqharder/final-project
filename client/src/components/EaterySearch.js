import React, {useState, useContext} from 'react';


function EaterySearch({searchQuery, setSearchQuery, filterBy, setFilterBy, sortBy, setSortBy}) {

    function handleSearchChange(event){
        setSearchQuery(event.target.value)
    }

    function handleFilterChange(event) {
        setFilterBy(event.target.value)
    }

    function handleSortChange(event) {
        setSortBy(event.target.value);
    }


    return (
        <section class="flex p-1">
            <div class="flex px-4">
                <div class="font-sans font-family:'Raleway' text-2xl my-2 mr-4"> Search:</div>
                    <input
                        class="px-4 text-xl border border-solid focus:text-gray-700 rounded"
                        placeholder='Name or Location'
                        id="searchbar"
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
            </div>

            {/* <div className="filter-container">
                <label>
                    <strong> Filter by Category : </strong>
                    <select onChange={handleFilterChange} value={filterBy} id="filterbar">
                    <option>All</option>
                        <option value="American">American</option>
                        <option value="Asian">Asian</option>
                        <option value="Egyptian">Egyptian</option>
                        <option value="European Paintings">European Paintings</option>
                    </select>
                </label>
            </div> */}

            <div class="flex px-4">
                <div class="font-sans font-family:'Raleway' text-2xl my-2"> Sort by:</div>
                    <label class="font-sans font-family:'Raleway' text-xl p-3">
                        <input
                        class="mr-1"
                        type="radio"
                        value="Alphabetically"
                        name="sort"
                        checked={sortBy === "Alphabetically"}
                        onChange={handleSortChange}
                        />
                        Alphabetically
                    </label>
                    <br></br>
                    <label class="font-sans font-family:'Raleway' text-xl p-3">
                        <input
                        class="mr-1"
                        type="radio"
                        value="Neighborhood"
                        name="sort"
                        checked={sortBy === "Neighborhood"}
                        onChange={handleSortChange}
                        />
                        Neighborhood
                    </label>
            </div>
        </section>)
    ;
}

export default EaterySearch;