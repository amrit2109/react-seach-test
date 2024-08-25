import React, { useEffect, useState } from "react";
import SearchBox from "./components/search";
import Tabledata from "./components/tableData";
import GetPlaces from "./services/https";
import Loader from "./components/loader";

const Home = () => {
  const [places, setPlaces] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [filteredResults, setFilteredResults] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetPlaces();
        setPlaces(result);
      }     
      
      catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);



  const handleSearch = (searchText) => {
    const searchTerm = searchText.toLowerCase();
    setSearchText(searchText.toLowerCase());
    if (places) {
        setFilteredResults(places?.data?.filter((item) =>
        item.city.toLowerCase().includes(searchTerm)
      ));  
    }
  };




  return (
    <section className="home_wrapper">
      <div className="custom_container">
      <SearchBox data={places} onSearch={handleSearch} />
        {loading ? <Loader /> : <Tabledata data={places} filtered={filteredResults} />}
      </div>
    </section>
  );
};

export default Home;
