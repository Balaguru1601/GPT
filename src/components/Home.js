import HeroSection from "./HeroSection/HeroSection";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import classes from "./Home.module.css";
import Services from "./Services/Services";
import Clients from "./Clients/Clients";
import AboutUs from "./AboutUs/AboutUs";
import TeamMap from "./Team/Map";
import OurTeam from "./Team/OurTeam";

const Home = () => {
	return (
		<div className={classes.home}>
			<Header />
			<HeroSection />
			<Services />
			<AboutUs />
			<OurTeam />
			{/* <Footer /> */}
		</div>
	);
};

export default Home;
