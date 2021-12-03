import {Table,Placeholder } from "react-bootstrap";
export default function Species({item}) {
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
                    <td>Classification</td>
                    <td>{item.classification}</td>
                    </tr>
                    <tr>
                    <td>Designation</td>
                    <td>{item.designation}</td>
                    </tr>
                    <tr>
                    <td>Average Height</td>
                    <td>{item.average_height}</td>
                    </tr>
                    <tr>
                    <td>Skin Colors</td>
                    <td>{item.skin_colors}</td>
                    </tr>
                    <tr>
                    <td>Hair Colors</td>
                    <td>{item.hair_colors}</td>
                    </tr>
                    <tr>
                    <td>Eye Colors</td>
                    <td>{item.eye_colors}</td>
                    </tr>
                    <tr>
                    <td>Average Lifespan</td>
                    <td>{item.average_lifespan}</td>
                    </tr>
                    <tr>
                    <td>Language</td>
                    <td>{item.language}</td>
                    </tr>
                </tbody>
            </Table>)
            }
        </div>
    )
}
