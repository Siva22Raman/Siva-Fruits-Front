import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import{BsInfoCircleFill} from 'react-icons/bs';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const colr = {
  borderRadius: '20px',
  marginLeft: '20px',
};

const cardContentStyle = {
  maxHeight: '150px', // Adjust the maximum height as needed
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

const ProductCard = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://fruitsbe.onrender.com/p/product/ga")
      .then((response) => setUsers(response.data))
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleAddTOCart = (user) => {
    console.log("hi");
    dispatch(addToCart(user));
  };

  return (
    <div className="row">
      {users.map((user) => (
        <div key={user._id} className="col-md-3">
          
          <div className="card mb-4 shadow-sm c" style={colr}>
            <div className="card-img-top text-center">
              <img
                src={`https://fruitsbe.onrender.com/${user.image}`}
                alt="Yphone"
                style={{ width: '200px', height: '200px' }}
              />
            </div>
            <div className="card-body text-center" id="hi">
              <h5 className="card-title" style={cardContentStyle}>
                {user.model}
              </h5>
              <p className="card-text" style={cardContentStyle}>
                {user.price}
              </p>
              <p className="card-text" style={cardContentStyle}>
                {user.desc}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/login" state={{ data: user }}>
                  <button className="btn btn-sm btn-primary"><BsInfoCircleFill></BsInfoCircleFill>&nbsp;Details</button>
                </Link>
                <button className="btn btn-sm btn-primary" onClick={() => handleAddTOCart(user)}>
                  <RiShoppingCart2Fill/>&nbsp;Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
