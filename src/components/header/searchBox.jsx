import { useEffect } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const location =useLocation()
  const [suggestions , setSuggestions]=useState([])
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()){
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
}
setSuggestions([])
  };
  useEffect(()=>{


    if(!searchTerm.trim()){
        setSuggestions([]);
        return;
}

    const fetchSuggestion = async () =>{
        try{
            const res = await fetch (`https://dummyjson.com/products/search?q=${searchTerm}`)
            const data = await res.json()
            setSuggestions(data.products.slice(0,5) || [])
        }catch(err){
            console.log("search Error" ,err)
            setSuggestions([""])
        }
    }
    const debonuce= setTimeout(()=>{
        fetchSuggestion()
    },300)
    return ()=>clearTimeout(debonuce)
  },[searchTerm])
   
   useEffect(()=>{
      setSuggestions([]);
   },[location])

  return (
    <div className="searchBox-Container">
      <form onSubmit={handelSubmit} className="search-box">
        <input
          type="text"
          name="search"
          placeholder="search for products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
        
        <button type="submit">
          <FaSearch />
        </button>
      </form>
      {suggestions.length >0 && (
            <ul className="suggestions">
                {suggestions.map((item)=>(
                    <Link to={`/producs/${item.id}`}><li key={item.id}><img src={item.images[0]}/><span>{item.title}</span></li></Link>
                ))}
            </ul>
        )}
    </div>
  );
}
