import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import Cart from "../components/Cart/cart";
import CustomButton from "../components/Button/button";


const CartItem = () => {
    return(
        <>
            <Header />
            <Cart item={"HD"} price={20}/>              
            <CustomButton /> 
            <Footer />            
        </>
    )
      
  };

  export default CartItem;