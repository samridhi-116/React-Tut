//  This is a header component. containing Logo, and navbaar. CSS is done by external CSS.  
//  We included title in header and then default exported header.
import { useState} from "react";
import logo from "../Assets/logo.png";
// import offer from "../Components/Offer";
import { Link } from "react-router-dom";
// import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
// const loggedIn=()=>{
//     return true;
// };
const Title = () => (
    <>
    <Link className=" w-1/5">
        <img alt="Logo" src={logo} className="w-full"/>
    </Link>
    </>
);
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const {user} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className=" w-4/5 mx-auto flex flex-row justify-between">
            <Title />
                <div className=" w-2/5 flex flex-row justify-between items-center text-amber-500 font-sans text-sm font-bold">
                    <p><Link to = "/">Home</Link></p>
                    <p><Link to = "/offer">Offers</Link></p>
                    <p><Link to = "/instamart">Instamart</Link></p>
                    <p><Link to = "/help">Help</Link></p>
                    <p><Link to = "/cart">Cart-{cartItems.length}</Link></p>
                    {
                        isLoggedIn ? 
                            <p>
                                <button className="register" onClick={()=>{
                                    setIsLoggedIn(false);
                                }}>Sign out</button>                
                            </p>
                        : 
                        <p><button className="register" onClick={()=>{
                            setIsLoggedIn(true);
                        }}>Sign in </button></p>
                    }
                </div>
        </div>  
    ) 
}

export default Header;
