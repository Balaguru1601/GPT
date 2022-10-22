import HeroSection from "./HeroSection/HeroSection";
import Footer from "./Footer/Footer";
import classes from "./Home.module.css";
import Services from "./Services/Services";
import AboutUs from "./AboutUs/AboutUs";
import OurTeam from "./Team/OurTeam";
import Navbar from "./UI/Navbar/Navbar";

const Home = () => {
	return (
		<div className={classes.home}>
			<Navbar />
			<HeroSection />
			<Services />
			<AboutUs />
			<OurTeam />
			<Footer />
		</div>
	);
};

export default Home;
