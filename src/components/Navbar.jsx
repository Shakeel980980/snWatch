import "./Navbar.css";

//maetial ui icons and linnks
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Cart from "./AddToCart/Cart.jsx";
import { useCart } from "./AddToCart/CartContext.jsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

//use state
import { useState } from "react";
// link from react router dom
import { Link } from "react-router-dom";
// search items

//end search

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;
export default function Navbar({ onSearch, searchQuery }) {
  let [Display, setDisplay] = useState(false);
  // showResults for search results
  const [showResults, setShowResults] = useState(false);
  function toggle() {
    setDisplay(!Display);
  }

  let [theme, setTheme] = useState(false);

  let handleChangeTheme = () => {
    setTheme(!theme);
    if (theme) {
      document.documentElement.classList.remove("OtherTheme");
    } else {
      document.documentElement.classList.add("OtherTheme");
    }
  };

  const { cartCount } = useCart();
  return (
    <div className="nav">
      <div className="navbar">
        <Link to="/">
          <img src="src\assets\images\logo-transpatent.png" alt="" />
        </Link>
        <ul className={Display ? "ul active" : "ul"}>
          <li className="different">
            <Link to="/">Home</Link>
          </li>
          <li className="different">
            <Link to="/AboutUs">About-Us</Link>
          </li>
          <li className="different">
            <Link to="/Shop">Shop</Link>
          </li>
          <li className="different">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        <DarkModeTwoToneIcon
          fontSize="large"
          id="themeIcon"
          onClick={handleChangeTheme}
        />
        <div className={Display ? "search active" : "search"}>
          <input
            type="text"
            name="search"
            id="searcInput"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            onFocus={() => setShowResults(true)}
            placeholder="Search..."
          />
          <SearchIcon fontSize="large" id="search-icon" />
        </div>
        <Link to="/Cart">
          <IconButton id="cart">
            <ShoppingCartIcon fontSize="small" style={{ color: "red" }} />
            <CartBadge
              badgeContent={cartCount > 0 ? cartCount : null}
              color="primary"
              overlap="circular"
            />
          </IconButton>
        </Link>
        <div
          // when we press toggle button then display buttons and when we press corss button then hide NOTE here className is used to toggle the buttons/. in bnts-signIn-signUp we we used display non and in bnts-signIn-signUp active is used to display block.
          className={
            Display ? "bnts-signIn-signUp active" : "bnts-signIn-signUp"
          }
        >
          <button>Sign Up</button>
          <button>Sign In</button>
        </div>

        <div className="toggle-bar" onClick={toggle}>
          {Display ? (
            <span className="icon">
              <CloseIcon fontSize="large" />
            </span>
          ) : (
            <span className="icon">
              <MenuIcon fontSize="large" />
            </span>
          )}
          {/* <HorizontalSplitTwoToneIcon fontSize="large" /> */}
        </div>
      </div>
      <div className="whatsappIcon">
        <a
          href="https://api.whatsapp.com/send?phone=03094530527&text=Hello!%20I%20need%20help."
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon style={{ fontSize: 40 }} className="whatsapp-icon" />
        </a>
      </div>
    </div>
  );
}
