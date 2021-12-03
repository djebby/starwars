import {Table,Placeholder } from "react-bootstrap";
export default function Film({item}) {
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
                    <td>Title</td>
                    <td>{item.title}</td>
                    </tr>
                    <tr>
                    <td>Episode id</td>
                    <td>{item.episode_id}</td>
                    </tr>
                    <tr>
                    <td>Opening Crawl</td>
                    <td>{item.opening_crawl}</td>
                    </tr>
                    <tr>
                    <td>Director</td>
                    <td>{item.director}</td>
                    </tr>
                    <tr>
                    <td>Producer</td>
                    <td>{item.producer}</td>
                    </tr>
                    <tr>
                    <td>Release Date</td>
                    <td>{item.release_date}</td>
                    </tr>
                </tbody>
            </Table>)
            }
        </div>
    )
}
