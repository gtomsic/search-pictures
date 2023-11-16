import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

const App = () => {
  const [images, setImages] = useState([]);
  const handleSumit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSumit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
