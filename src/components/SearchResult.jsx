import React from "react";

function SearchResult(props) {
  const data = props.title;
  console.log(data);
  return (
    <div>
      <li>
        <img src="" alt="" />
        <p>Name : {data}</p>
      </li>
    </div>
  );
}

export default SearchResult;