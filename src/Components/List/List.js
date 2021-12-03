import {Row, Col, Button,Placeholder} from "react-bootstrap";
import Planet from "../Tables/Planet.js";
import Species from "../Tables/Species.js";
import Vehicle from "../Tables/Vehicle.js";
import Starship from "../Tables/Starship.js";
import Film from "../Tables/Film.js";
import PersonT from "../Tables/PersonT.js";
import "./list.css";

import {useState} from "react";
import {useLocation} from "react-router-dom";

export default function List({listData}) {

    let {pathname} = useLocation();
    const [oldPath,setOldPath] = useState(pathname);
    const [item,setItem] = useState([]);

    const selectItem = (ev)=>{
        setItem(listData[ev.target.value]);
    }

    if(oldPath!==pathname){
        setItem([]);
        setOldPath(pathname);
    }


    function renderSwitch(pathname){
        switch (pathname) {
            case "/people":
                return (<PersonT item={item} />)
                break;
            case "/planets":
                return (<Planet item={item} />)
                break;
            case "/species":
                return (<Species item={item} />)
                break;
            case "/vehicles":
                return (<Vehicle item={item} />)
                break;
            case "/starships":
                return (<Starship item={item} />)
                break;
            case "/films":
                return(<Film item={item} />)
                break;
            default:
                break;
        }
    }


    return (
        <div>
            <Row xs={1} sm={2}>
                <Col style={{marginBottom:"30px"}}>
                {
                (listData.length === 0) && <> <Placeholder animation="glow">
                     <Placeholder xs={3} size="lg"/><br/> <br/>
                     <Placeholder xs={3} size="lg"/><br/> <br/>
                     <Placeholder xs={3} size="lg"/><br/> <br/>
                     <Placeholder xs={3} size="lg"/><br/> <br/>
                     <Placeholder xs={3} size="lg"/><br/> <br/>
                     <Placeholder xs={3} size="lg"/><br/> <br/>
                     <Placeholder xs={3} size="lg"/><br/> 
                     </Placeholder> </>
                }
                {
                (listData.length > 0) && listData.map( (ele,index)=> (<Button className="btn" onClick={selectItem} variant="light" value={index}  key={index}>   {ele.name || ele.title}  </Button>) )
                }
                </Col>
                <Col>
                {
                    renderSwitch(pathname)
                }
                </Col>
            </Row>
        </div>
    )
}
