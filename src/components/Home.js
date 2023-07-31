import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import Options from "./options";
import Items from "./Items";
import Header from "./Header";

const Home = () => {
  const [itemlist, setitemlist] = useState([]);
  const [category, setcategory] = useState([]);
  const [uniqueCategory, setuniqueCategory] = useState([]);
  const [debounceid, setdebounceid] = useState(0);
  let outputArray=[]
  const performAPIsearch = async (val) => {
    try {
      console.log(val);
      const res = await axios.get(`https://fakestoreapi.com/products/${val}`);
      console.log(res.data);
      setitemlist(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const debounceSearch = (event, dtime) => {
    if (debounceid) clearTimeout(debounceid);

    let timerid = setTimeout(() => {
      performAPIsearch(event.target.value);
    }, dtime);
    setdebounceid(timerid);
  };
  const getItemApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result.data);
    setitemlist(result.data);
    
    let arr = [];
    for (let i = 0; i < result.data.length; i++) {
      arr.push(result.data[i].category);
      console.log(arr, "arr");
      setcategory(arr);
    }
   outputArray = Array.from(new Set(arr))
    console.log(outputArray,"out")  
    setuniqueCategory(outputArray)  
  };
  const selectedCategory = async (val) => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${val}`
      );
      setitemlist(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlesort = (e) => {
    console.log(e.target.value);
    const sval = e.target.value;
    selectedCategory(sval);
  };
  useEffect(() => {
    getItemApi();
  }, []);



  return (
    <>
      <Header />
      <Options
        uniqueCategory={uniqueCategory}
        itemlist={itemlist}
        setitemlist={setitemlist}
        debounceSearch={debounceSearch}
        handlesort={handlesort}
        outputArray={outputArray}
      />
      <Items itemlist={itemlist} setitemlist={setitemlist} />
    </>
  );
};

export default Home;
