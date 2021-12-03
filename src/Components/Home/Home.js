import wallpaper from "./../../Images/wallpaper.jpg";
import "./home.css";

export default function Home() {

    return (
        <div className="home">
            <h5 className="intro"> 
            Welcome in this single page application with React library that represent information about the famous american epic space opera Star Wars,
            You can navigate through all category of the api.
            in every category you will see a list of the most principle items, but you can search for any secondary items,
            to see more detail about an item just click on it to showing up a table that containe many information about it.
            </h5>
            
        
            <img src={wallpaper} alt="star wars poster..." width="100%"/>
        </div>
    )
}
