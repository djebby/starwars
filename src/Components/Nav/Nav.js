import { useRef,useState } from "react";
import {NavLink,useLocation} from "react-router-dom";
import logo from "./../../star-wars-logo.svg";
import "./nav.css";



export default function Nav({setKeyword2}) {
    let searchKey = useRef();
    let {pathname} = useLocation();
    const [oldPath,setOldPath] = useState(pathname);

    function changed(ev){
        ev.preventDefault();
        setKeyword2(searchKey.current.value);
        console.log("submitted!");
    }


    if(oldPath !== pathname){
        searchKey.current.value="";
        setKeyword2(searchKey.current.value);
        setOldPath(pathname);
    }

    

    return (

        // <Navbar bg="dark" variant="dark">
        //     <Container>
        //         <Navbar.Brand>
        //             <NavLink to="">
        //             <img  src={logo} alt="The Brand" className="d-inline-block align-top nav-logo" /> {"  "}
        //             </NavLink>
        //         </Navbar.Brand>

        //         <Navv className="me-auto" >
        //             <NavLink className="nls" style={({isActive})=>{ return {color: isActive ? "#61dafb" : "", borderBottom: isActive ? "solid 5px #61dafb" : ""};}} to="people"> People </NavLink>   
        //             <NavLink className="nls" style={({isActive})=>{ return {color: isActive ? "#61dafb" : "", borderBottom: isActive ? "solid 5px #61dafb" : ""};}} to="films">Films</NavLink> 
        //             <NavLink className="nls" style={({isActive})=>{ return {color: isActive ? "#61dafb" : "", borderBottom: isActive ? "solid 5px #61dafb" : ""};}}to="starships">Starships</NavLink> 
        //             <NavLink className="nls" style={({isActive})=>{ return {color: isActive ? "#61dafb" : "", borderBottom: isActive ? "solid 5px #61dafb" : ""};}}to="vehicles">Vehicles</NavLink>   
        //             <NavLink className="nls" style={({isActive})=>{ return {color: isActive ? "#61dafb" : "", borderBottom: isActive ? "solid 5px #61dafb" : ""};}}to="species">Species</NavLink> 
        //             <NavLink className="nls" style={({isActive})=>{ return {color: isActive ? "#61dafb" : "", borderBottom: isActive ? "solid 5px #61dafb" : ""};}}to="planets">Planets</NavLink> 
                    
        //         </Navv>
                
        //         {

        //             (<Form className="d-flex">
        //             <FormControl
        //             type="search"
        //             placeholder="Search"
        //             className="me-2"
        //             aria-label="Search"
        //             onChange={changed}
        //             ref={searchKey}
        //             />
        //             </Form>)
                
        //         }
        //     </Container>
        // </Navbar>




    <div className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
            <NavLink className="navbar-brand" to="">
                     <img  src={logo} alt="The Brand" className="d-inline-block align-top nav-logo" /> {"  "}
            </NavLink>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu"><span
                    className="navbar-toggler-icon"></span></button>

            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav">
                    {/* <li class="nav-item"><a href="/services" class="nav-link">item one</a></li>
                    <li class="nav-item"><a href="/contact" class="nav-link">item two</a></li> */}

                    <NavLink className="nls" style={({isActive})=>{ return {color: isActive ? "#61dafb" : "", borderBottom: isActive ? "solid 5px #61dafb" : ""};}} to="people"> People </NavLink>   
                    <NavLink className="nls" style={({isActive})=>{ return {color: isActive ? "#61dafb" : "", borderBottom: isActive ? "solid 5px #61dafb" : ""};}} to="films">Films</NavLink> 
                    <NavLink className="nls" style={({isActive})=>{ return {color: isActive ? "#61dafb" : "", borderBottom: isActive ? "solid 5px #61dafb" : ""};}}to="starships">Starships</NavLink> 
                    <NavLink className="nls" style={({isActive})=>{ return {color: isActive ? "#61dafb" : "", borderBottom: isActive ? "solid 5px #61dafb" : ""};}}to="vehicles">Vehicles</NavLink>   
                    <NavLink className="nls" style={({isActive})=>{ return {color: isActive ? "#61dafb" : "", borderBottom: isActive ? "solid 5px #61dafb" : ""};}}to="species">Species</NavLink> 
                    <NavLink className="nls" style={({isActive})=>{ return {color: isActive ? "#61dafb" : "", borderBottom: isActive ? "solid 5px #61dafb" : ""};}}to="planets">Planets</NavLink> 
                </ul>
                    {/* <Form className="d-flex ms-auto" onChange={changed}
                     onClick={submitted}>
                     <FormControl
                     type="search"
                     placeholder="Search"
                     className="me-2"
                     aria-label="Search"
                     
                     ref={searchKey}
                     />
                     </Form> */}

                    <form className="d-flex ms-auto" onChange={changed} onClick={changed}>
                        <input className="form-control me-3 searchinput" ref={searchKey} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
            </div>
        </div>
    </div>

    )
}
