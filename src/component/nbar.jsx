import React, { useState } from 'react';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { BsInfoCircleFill } from 'react-icons/bs';
import { BiSolidLogIn, BiSolidLogOut } from 'react-icons/bi';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/cartSlice';
import { clearFromcart } from '../redux/cartSlice';
import { MdSell } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'; // Import Link component
import './Navbar.css';

function Navbar() {
  const isLog = useSelector((state) => state.cart.isAuthenticated);
  const user = useSelector((state) => state.cart.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearFromcart());
    dispatch(logout());
  }

  const handleSell = () => {
    if (isLog) {
      // Handle sell logic here
    } else {
      toast.error("Login to Sell products");
    }
  }

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/" style={{ marginLeft: '30px' }}>
        <img src="https://img.freepik.com/free-vector/fruit-label-sticker_17005-1006.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1698796800&semt=ais" alt="Shanu Fruits Logo" style={{ width: '40px' }} />
        Shanu Fruits
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse justify-content-end ${
          isNavCollapsed ? 'collapse' : ''
        }`}
        style={{ marginRight: '30px', backgroundColor: 'none' }}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/l">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/con">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="buy-sell-dropdown" onMouseEnter={handleSell}>
                Sell
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {isLog ? (
                  <div>
                    <Link to="/oo" className="dropdown-item">
                      Sell
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Buy
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Dropdown.Item>Login</Dropdown.Item>
                  </div>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/o">
              <RiShoppingCart2Fill />
            </Link>
          </li>
          {isLog ? (
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle variant="light" id="user-dropdown">
                  <AiOutlineUser></AiOutlineUser>&nbsp;{user.uname}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout}>
                    <BiSolidLogOut /> &nbsp;Logout
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => toast.success(`Name: ${user.uname} Email: ${user.umail} Phone: ${user.phone} Uid: ${user.uid}`)}>
                    <BsInfoCircleFill></BsInfoCircleFill>&nbsp;Details
                  </Dropdown.Item>
                  <Link to="/ps" className="dropdown-item">
                    <MdSell></MdSell> &nbsp;To Sell
                  </Link>
                  <Link to="/order" className="dropdown-item">
                    <MdSell></MdSell> &nbsp;Your order
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
