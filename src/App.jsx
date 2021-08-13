import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Blog } from "./components/blog/Blog";
import JsonData from "./data/data.json";
import NavData from "./data/navdata.json";
import SmoothScroll from "smooth-scroll";
import MyBtn from "./components/Btn/MyBtn";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1500,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const [navigateData, setNavigateData] = useState({});
  useEffect(() => {
    setNavigateData(NavData);
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Navigation />
          <Header data={landingPageData.Header} />
          <Features data={landingPageData.Features} />
          <About data={landingPageData.About} />
          <Services data={landingPageData.Services} />
          <Gallery />
          <Testimonials data={landingPageData.Testimonials} />
          <Team data={landingPageData.Team} />
          <Contact data={landingPageData.Contact} />
        </Route>
        <Route exact path="/blog">
          <Navigation data={navigateData.Navigate} />
          <Blog data={landingPageData.Blog} />
        </Route>
        <Route exact path="/carusel">
          <Header data={landingPageData.Header} />
        </Route>
        <Route exact path="/about">
          <Navigation />
          <About data={landingPageData.About} />
        </Route>
        <Route exact path="/team">
          <Navigation />
          <Team data={landingPageData.Team} />
        </Route>
        <Route exact path="/features">
          <Navigation />
          <Features data={landingPageData.Features} />
        </Route>
        <Route exact path="/services">
          <Navigation />
          <Services data={landingPageData.Services} />
        </Route>
        <Route exact path="/testimonials">
          <Navigation />
          <Testimonials data={landingPageData.Testimonials} />
        </Route>
        <Route exact path="/gallery">
          <Navigation />
          <Gallery />
        </Route>
        <Route exact path="/contacts">
          <Navigation />
          <Contact data={landingPageData.Contact} />
        </Route>

        <Route>
          <Navigation />
          <div><h1>Page not found !</h1></div>
        </Route>
      </Switch>


    </div>
  );
};

export default App;
