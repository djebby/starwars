import {Table,Placeholder } from "react-bootstrap";
export default function Starship({item}) {
    return (
        <div>
            {item.length === 0 ?
            (<>
                <h4> CLICK BUTTON TO SHOW INFORMATION </h4>
                <Placeholder as="p" animation="glow">
                    <br/>
                    <Placeholder xs={6} size="lg"/>
                    <Placeholder xs={8} />{'  '}<Placeholder xs={3} />
                    <Placeholder xs={5} />{'  '}<Placeholder xs={6} />
                    <Placeholder xs={3} />{'  '}<Placeholder xs={8} />
                    <Placeholder xs={9} />{'  '}<Placeholder xs={2} />
                    <Placeholder xs={5} />{'  '}<Placeholder xs={6} />
                    <Placeholder xs={7} />{'  '}<Placeholder xs={4} />
                </Placeholder>
                </>)
            :
            (<Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                    <td>Name</td>
                    <td>{item.name}</td>
                    </tr>
                    <tr>
                    <td>Model</td>
                    <td>{item.model}</td>
                    </tr>
                    <tr>
                    <td>Manufacturer</td>
                    <td>{item.manufacturer}</td>
                    </tr>
                    <tr>
                    <td>Cost in Credits</td>
                    <td>{item.cost_in_credits}</td>
                    </tr>
                    <tr>
                    <td>Length</td>
                    <td>{item.length}</td>
                    </tr>
                    <tr>
                    <td>Max Atmosphering Speed</td>
                    <td>{item.max_atmosphering_speed}</td>
                    </tr>
                    <tr>
                    <td>Crew</td>
                    <td>{item.crew}</td>
                    </tr>
                    <tr>
                    <td>Passengers</td>
                    <td>{item.passengers}</td>
                    </tr>
                    <tr>
                    <td>Cargo Capacity</td>
                    <td>{item.cargo_capacity}</td>
                    </tr>
                    <tr>
                    <td>Consumables</td>
                    <td>{item.consumables}</td>
                    </tr>
                    <tr>
                    <td>Hyperdrive Rating</td>
                    <td>{item.hyperdrive_rating}</td>
                    </tr>
                    <tr>
                    <td>MGLT</td>
                    <td>{item.MGLT}</td>
                    </tr>
                    <tr>
                    <td>Starship Class</td>
                    <td>{item.starship_class}</td>
                    </tr>
                </tbody>
            </Table>)
            }
        </div>
    )
}
