import { CHDiscover } from "./CHDiscover/CHDiscover";
import { CHHeroSection } from "./CHHeroSection";
import { CHOurSpecialities } from "./CHOurSpecialities/CHOurSpecialities";
import { CHFooter } from "../../components";
import { CHContactForm } from "./CHContactForm";
import { CHDeliciousMenu } from "./CHDeliciousMenu";
import { CHDesserts } from "./CHDesserts";
import { CHReviews } from "./CHReviews";

const Home = () => {
  return (
    <>
      <CHHeroSection />
      <CHDiscover />
      <CHOurSpecialities />
      <CHDeliciousMenu />
      <CHDesserts />
      <CHReviews />
      <CHContactForm />
      <CHFooter />
    </>
  );
};

export default Home;
