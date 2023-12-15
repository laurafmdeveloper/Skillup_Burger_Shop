
import React from "react";
import { Link } from "react-router-dom"; // It`s required to download "react-router-dom": npm install react-router-dom
import DropdownMenu from "../layout/DropdownMenu";
import { IoFastFoodOutline } from "react-icons/io5"; 
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

//backGroundColor
const Header = () => {
    return(
        <> 
            <nav>
                <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
                    <IoFastFoodOutline />
                </motion.div>
                <div>
                    <Link to="/">Inicio</Link>
                    <Link to="/contact">Contacto</Link>
                    <Link to="/about">Sobre nosotros</Link>
                    <Link to="/cart">
                        <FiShoppingCart />
                    </Link>
                    <DropdownMenu />
                </div>
            </nav>
        </>
    );
}

export default Header;


