import Footer from "../components/footer/Footer";
import NavBarS from "../components/NavBar/NavBarS";
import EditProfile from "../components/Profile/ProfileEdit";

export default function Profile({ agent }) {
  return (
    <div className="back">
      <NavBarS />
      <EditProfile agent={agent} />
      <Footer />
    </div>
  );
}
