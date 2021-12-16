import List from "../List/List.js";
import Home from "../Home/Home.js";
import {Container} from "react-bootstrap";
import {Routes,Route,useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";


export default function Main({keyword}) {


    const [people,setPeople] = useState([]);
    const [films,setFilms] = useState([]);
    const [starships,setStarships] = useState([]);
    const [vehicles,setVehicles] = useState([]);
    const [species,setSpecies] = useState([]);
    const [planets,setPlanets] = useState([]);
    const [oldKeyword, setOldKeyword] = useState(keyword);
    axios.defaults.baseURL = "https://swapi.py4e.com/api";

    let {pathname} = useLocation();
    const [oldPath,setOldPath] = useState(pathname);

    useEffect(() => {
        if(((people.length === 0 && keyword.length === 0) || (oldKeyword !== keyword) || (oldPath !== pathname) ) && (pathname === "/people")){
            axios.get(`/people?search=${keyword}`)
            .then(res=>{
                setPeople(res.data.results);
                console.log(res.data.results);
            });
            setOldKeyword(keyword);
            setOldPath(pathname);
        }

        if(((films.length === 0 && keyword.length === 0) || (oldKeyword !== keyword) || (oldPath !== pathname)) && (pathname === "/films")){
            axios.get(`/films?search=${keyword}`)
            .then(res=>{
                setFilms(res.data.results);
            });
            setOldKeyword(keyword);
            setOldPath(pathname);
        }

        if(((starships.length === 0 && keyword.length === 0) || (oldKeyword !== keyword)|| (oldPath !== pathname)) && (pathname === "/starships") ){
            axios.get(`/starships?search=${keyword}`)
            .then(res=>{
                setStarships(res.data.results);
            });
            setOldKeyword(keyword);
            setOldPath(pathname);
        }

        if(((vehicles.length === 0 && keyword.length === 0) || (oldKeyword !== keyword)|| (oldPath !== pathname)) && (pathname === "/vehicles")){
            axios.get(`/vehicles?search=${keyword}`)
            .then(res=>{
                setVehicles(res.data.results);
            });
            setOldKeyword(keyword);
            setOldPath(pathname);
        }
        
        if(((species.length === 0 && keyword.length === 0) || (oldKeyword !== keyword) || (oldPath !== pathname)) && (pathname === "/species")){
            axios.get(`/species?search=${keyword}`)
            .then(res=>{
                setSpecies(res.data.results);
            });
            setOldKeyword(keyword);
            setOldPath(pathname);
        }

        if(( (planets.length === 0 && keyword.length === 0) || (oldKeyword !== keyword) || (oldPath !== pathname)) && (pathname === "/planets")){
            axios.get(`/planets?search=${keyword}`)
            .then(res=>{
                setPlanets(res.data.results);
            });
            console.log("old vs new key :",oldKeyword,keyword);
            setOldKeyword(keyword);
            setOldPath(pathname);
        }
        
    }, [people,films,starships,vehicles,species,planets,keyword,pathname]);



    return (
        <Container>
        <Routes>
            <Route path="/*" element={<Home />}  />
            <Route path="/people" element={<List listData={people}  /> }  />
            <Route path="/films" element={<List listData={films} />}  />
            <Route path="/starships" element={<List listData={starships} />}  />
            <Route path="/vehicles" element={<List listData={vehicles} />}  />
            <Route path="/species" element={<List listData={species} />}  />
            <Route path="/planets" element={<List listData={planets} />}  />
            
        </Routes>
        </Container>
    )
}
