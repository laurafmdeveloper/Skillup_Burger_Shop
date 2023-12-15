

import React from "react";
import "../../styles/home.scss";

import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";


/*
const options = {
initial: {
x: "-100%",
opacity: 0,
},
whileInView: {
x: 0,
opacity: 1,
}};



*/
const Home = () => {
    return(
        <> 
            <h1 >HOME</h1>
            <img src="../../../assets/bg.png" alt="burger" />
            <div>
                <button>Menu</button>
            </div>

            
        </>
    );
}

export default Home;
