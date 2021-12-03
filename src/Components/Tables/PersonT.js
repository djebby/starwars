import {Table,Placeholder } from "react-bootstrap";

export default function PersonT({item}) {
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
            </>
            )
            :
            (<Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                    <td>Name</td>
                    <td>{item.name}</td>
                    </tr>
                    <tr>
                    <td>Height</td>
                    <td>{item.height}</td>
                    </tr>
                    <tr>
                    <td>Mass</td>
                    <td>{item.mass}</td>
                    </tr>
                    <tr>
                    <td>Hair Color</td>
                    <td>{item.hair_color}</td>
                    </tr>
                    <tr>
                    <td>Skin Color</td>
                    <td>{item.skin_color}</td>
                    </tr>
                    <tr>
                    <td>Eye Color</td>
                    <td>{item.eye_color}</td>
                    </tr>
                    <tr>
                    <td>Birth Year</td>
                    <td>{item.birth_year}</td>
                    </tr>
                    <tr>
                    <td>Gender</td>
                    <td>{item.gender}</td>
                    </tr>
                </tbody>
            </Table>)
            }
        </div>
    )
}
