import React, { useEffect } from 'react'; // Import useEffect from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './mp.css';
import axios from "axios";
import { AiFillStar } from 'react-icons/ai';
import { BsStar } from 'react-icons/bs';
import { useLocation ,useNavigate} from 'react-router-dom'; // Correct the import statement
import { useSelector } from 'react-redux'; // Correct the import statement
import { toast } from 'react-toastify';


const Spa = () => {
  const u = useSelector((state) => state.cart.user);
  const location = useLocation();
  useEffect(() => {
    console.log("ji", location);
  }, []);
  const { data } = location.state || {};

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12" id="main">
          <div className="col-md-4" id="ff1">
            <img
              src={`https://fruitsbe.onrender.com/${data.image}`}
              alt="Yphone"
              id='ff2'
            />
          </div>
          <div className="col-md-5" id='ff'>
            <div id="fff1">
              <h4 style={{ fontFamily:'Open Sans', fontSize: "35px" }}>{data.model}</h4>
              <h6 style={{ fontFamily: 'Open Sans', fontSize: "17px" }}>{data.desc}</h6>
              <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><BsStar style={{ fontSize: '16px' }}></BsStar>
              <h4 style={{ fontFamily: 'Open Sans', fontSize: "30px" }}>About product:</h4>
              <h6 style={{ fontFamily: 'Open Sans', fontSize: "19px" }}>
                &nbsp;&nbsp;Duration: {data.duration} Months&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Owner: {data.name}
              </h6>
              <h6 style={{ fontFamily: 'Open Sans', fontSize: "19px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;Type: {data.type} Car&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact: {data.phone}
              </h6>
              <br />
              <p style={{ fontFamily: 'Open Sans', fontSize: "30px" }}>Price: {data.price}$</p>
              <div id='ui'>
                <button className="btn btn-primary" >Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spa;
