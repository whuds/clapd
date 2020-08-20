//Import Statements at the top
import React from "react";

function SearchBar() {
  //any hooks would go here

  //we return our JSX code
  return (
    <div>
      <form>
        <label>
          <input type="text" value="Search" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export { SearchBar };
