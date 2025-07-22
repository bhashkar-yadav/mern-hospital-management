import React, { useContext } from "react";
import Hero from "../components/Hero";
import MessageForm from "../components/MessageForm";
import Stats from "../components/Stats";
import OurServices from "../components/OurServices";
import WhyChooseUs from "../components/WhyChooseUs";
import TakeCare from "../components/TakeCare";

//

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Your Health is Our Priority"
        }
        imageUrl={"/hero.png"}
      />
      <Stats />
      <OurServices />
      <WhyChooseUs />
      <TakeCare />
      <MessageForm />
    </>
  );
};

export default Home;
