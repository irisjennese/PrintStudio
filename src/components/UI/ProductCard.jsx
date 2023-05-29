import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/product-card.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );

    toast.success('Product added successfully');
  };

  return (
    <Col lg='3' md='4' className='mb-2'>
      
      <div className='card1' style={{background:"var(--primary-color)", padding: "10px", marginBottom: "10px" }}>
      <div className='product_item'>
        <div className='product_img'>
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl}
            alt='Tshirt'
          />
        </div>
        <div className='p-2 product_info'>
          <h3 className='product_name'>
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span style={{color: "white" }}>{item.category}</span>
        </div>
        <div className='product_card-bottom d-flex align-items-center justify-content-between p-2'>
          <span className='price'>₱{item.price}</span>
          <button className='button-cart' style={{background:"white", width: "120px", border:"none", borderRadius: "15px"}}>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <span style={{fontWeight: "900", color: "var(--primary-color)"}}>add to cart</span>
          </motion.span>
          </button>
        </div>
      </div>
      </div>
    
    </Col>
  );
};

export default ProductCard;
