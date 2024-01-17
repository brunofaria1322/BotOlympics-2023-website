import React, {useState} from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Registration from "../components/Registration";
import Footer from "../components/Footer";

const RegistrationPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  window.scrollTo(0, 0);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} register={true}/>
      <Navbar toggle={toggle} register={true}/>
      <Registration/>
      <Footer/>
    </>
  );
};

export default RegistrationPage;
