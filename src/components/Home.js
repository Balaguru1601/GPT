import HeroSection from "./HeroSection/HeroSection";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import classes from "./Home.module.css";
import Services from "./Services/Services";

const Home = () => {
	return (
		<div className={classes.home}>
			<Header />
			<HeroSection />
			<Services />
			{/* <Footer /> */}
		</div>
	);
};

export default Home;
