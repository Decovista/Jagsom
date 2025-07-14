import "./App.css";
import React, {useState , useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyProvider, useMyContext } from "./Context/MyContext.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navigation from "./Component/Navigation/Navigation";
import MobileMenu from "./Component/SubNavigation/MobileMenu.jsx";
import Home from "./Pages/Home/Home.jsx";
import Top10 from "./Component/Top10/Top10.jsx";
import ItemGellery from "./Component/ItemGellery/ItemGellery.jsx";
import WhoWeAre from "./Component/WhoWeAre/WhoWeAre.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import ExplorePage from "./Pages/ExplorePage/ExplorePage.jsx";
import GetQoutePopup from "./Component/GetQoutePopup/GetQoutePopup.jsx";
import InfoPage from "./Pages/InfoPage/InfoPage.jsx";
import AboutPage from "./Pages/AboutPage/AboutPage.jsx";
import Loader from './Component/Loader/Loader.jsx'

function AppWrapper() {
  const { toggleSubNav,setShowPopup,showPopup } = useMyContext();
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {
     showPopup? <GetQoutePopup/>:''
    }
      <Navigation />
      {toggleSubNav && <MobileMenu />}
       {loading ? <Loader /> : ''}
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/explore/:slug" element={<ExplorePage />} />
          <Route path="/info/:slug" element={<InfoPage />} />
          <Route path='/About' element={<AboutPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <AppWrapper />
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
