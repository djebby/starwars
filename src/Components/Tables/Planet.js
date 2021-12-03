import {Table,Placeholder } from "react-bootstrap";


export default function Planet({item}) {
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
                    <td>Rotation Period</td>
                    <td>{item.rotation_period}</td>
                    </tr>
                    <tr>
                    <td>Orbital Period</td>
                    <td>{item.orbital_period}</td>
                    </tr>
                    <tr>
                    <td>Diameter</td>
                    <td>{item.diameter}</td>
                    </tr>
                    <tr>
                    <td>Climate</td>
                    <td>{item.climate}</td>
                    </tr>
                    <tr>
                    <td>Gravity</td>
                    <td>{item.gravity}</td>
                    </tr>
                    <tr>
                    <td>Terrain</td>
                    <td>{item.terrain}</td>
                    </tr>
                    <tr>
                    <td>Surface Water</td>
                    <td>{item.surface_water}</td>
                    </tr>
                    <tr>
                    <td>Population</td>
                    <td>{item.population}</td>
                    </tr>
                </tbody>
            </Table>)
            }
        </div>
    )
}
