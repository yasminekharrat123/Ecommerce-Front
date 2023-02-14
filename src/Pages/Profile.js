import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import EditProfile from "../components/Profile/ProfileEdit";

export default function Profile({agent})
{
    return(
        <div className="back" >
            <NavBar/>
            <EditProfile agent={agent}/>
            <Footer/>
        </div>
    );
    

}