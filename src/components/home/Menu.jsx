// Write all the code here
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";


export default function Menu(){

    const addToCartHandler = () => {}
    


    return(

             <MenuCard
                
                itemNum={1}
                burgerSrc={burger1}
                price={3.30}
                title="Hamburguesa con queso"
                handler={addToCartHandler}
                delay={0.1}
             />
    );
}


