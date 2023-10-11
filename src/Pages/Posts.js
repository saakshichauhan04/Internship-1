import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
const Posts = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {   
      fetchData();
    }, []);
    const fetchData = async () => {
      const resp = await axios.get("https://dummyjson.com/products");
      setData(resp.data.products);
    };
  return (
    <>
    <div className="container">
        <div className="row">
            {
                data.map((products)=>(

            <div className="col-lg-3 mt-3">

      <MDBCard>
      <MDBCardImage src={`${products.images[0]}`} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{products.title}</MDBCardTitle>
        <MDBCardText>
       {products.description}
       </MDBCardText>
        <MDBBtn ><Link to="/singleProduct">Button</Link></MDBBtn>
        <h1 className="badge  text-center primary badge-primary">{products.price}</h1>
      </MDBCardBody>
   
    </MDBCard>
            
            </div>
                ))
            }
        </div>
    </div>
    </>
  );
};

export default Posts;
