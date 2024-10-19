import React, { useState } from 'react';
import './Products.css';
import plant1 from "../../Assets/plant1.png"
import plant2 from "../../Assets/plant2.png"
import plant3 from "../../Assets/plant3.png"
import { useNavigate } from 'react-router-dom';


const products = [
  {
    id: 1,
    name: 'Monstera',
    description: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    priceOriginal: 359,
    priceDiscounted: 299,
    image: plant1,
  },
  {
    id: 2,
    name: 'Monstera',
    description: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    priceOriginal: 359,
    priceDiscounted: 299,
    image: plant2,
  },
  {
    id: 2,
    name: 'Monstera',
    description: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    priceOriginal: 359,
    priceDiscounted: 299,
    image: plant3,
  },
  {
    id: 4,
    name: 'Monstera',
    description: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    priceOriginal: 359,
    priceDiscounted: 299,
    image: plant1,
  },
  {
    id: 5,
    name: 'Monstera',
    description: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    priceOriginal: 359,
    priceDiscounted: 299,
    image: plant2,
  },
  {
    id: 6,
    name: 'Monstera',
    description: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    priceOriginal: 359,
    priceDiscounted: 299,
    image: plant3,
  },
  {
    id: 7,
    name: 'Monstera',
    description: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    priceOriginal: 359,
    priceDiscounted: 299,
    image: plant1,
  },
  {
    id: 8,
    name: 'Monstera',
    description: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    priceOriginal: 359,
    priceDiscounted: 299,
    image: plant2,
  },
  {
    id: 9,
    name: 'Monstera',
    description: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    priceOriginal: 359,
    priceDiscounted: 299,
    image: plant3,
  },
  
];

const Products = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [modalProduct, setModalProduct] = useState(null)
  const [showModal, setShowModal] = useState(false);
 


  const navigate = useNavigate();

  const toggleFilter = (filterName) => {
    setActiveFilter(activeFilter === filterName ? null : filterName);
  };

  const closeModal = () => {
    setShowModal(false); // Hide modal
  };
  const handleAddToCart = (product) => {
    setModalProduct(product); // Set product info for the modal
    setShowModal(true); // Show modal
  };

  const handleViewProduct = (productName) => {
    navigate(`/thank-you?product=${encodeURIComponent(productName)}`);
  };
  return (
    <div>
    <div className="page-container">
      {/* Filter Section */}
      <div className="filter-container">
        <div className="filter-header">
          <span>Filter</span>
          <button className="clear-btn">CLEAR ALL</button>
        </div>

        <div className="filter-item" onClick={() => toggleFilter('type')}>
  <div className="filter-title">
    <span>Type of Plants</span>
    <span className="toggle-icon">{activeFilter === 'type' ? '-' : '+'}</span>
  </div>
  {activeFilter === 'type' && <div className="filter-content">Content for Type of Plants</div>}
</div>

<div className="filter-item" onClick={() => toggleFilter('price')}>
  <div className="filter-title">
    <span>Price</span>
    <span className="toggle-icon">{activeFilter === 'price' ? '-' : '+'}</span>
  </div>
  {activeFilter === 'price' && <div className="filter-content">Content for Price</div>}
</div>

<div className="filter-item" onClick={() => toggleFilter('nursery')}>
  <div className="filter-title">
    <span>Nursery</span>
    <span className="toggle-icon">{activeFilter === 'nursery' ? '-' : '+'}</span>
  </div>
  {activeFilter === 'nursery' && <div className="filter-content">Content for Nursery</div>}
</div>

<div className="filter-item" onClick={() => toggleFilter('ideaPlantLocation')}>
  <div className="filter-title">
    <span>IdeaPlant and Location</span>
    <span className="toggle-icon">{activeFilter === 'ideaPlantLocation' ? '-' : '+'}</span>
  </div>
  {activeFilter === 'ideaPlantLocation' && <div className="filter-content">Content for IdeaPlant and Location</div>}
</div>

<div className="filter-item" onClick={() => toggleFilter('indoorOutdoor')}>
  <div className="filter-title">
    <span>Indoor/Outdoor</span>
    <span className="toggle-icon">{activeFilter === 'indoorOutdoor' ? '-' : '+'}</span>
  </div>
  {activeFilter === 'indoorOutdoor' && <div className="filter-content">Content for Indoor/Outdoor</div>}
</div>

<div className="filter-item" onClick={() => toggleFilter('maintenance')}>
  <div className="filter-title">
    <span>Maintenance</span>
    <span className="toggle-icon">{activeFilter === 'maintenance' ? '-' : '+'}</span>
  </div>
  {activeFilter === 'maintenance' && <div className="filter-content">Content for Maintenance</div>}
</div>

<div className="filter-item" onClick={() => toggleFilter('plantSize')}>
  <div className="filter-title">
    <span>Plant Size</span>
    <span className="toggle-icon">{activeFilter === 'plantSize' ? '-' : '+'}</span>
  </div>
  {activeFilter === 'plantSize' && <div className="filter-content">Content for Plant Size</div>}
</div>

<div className="filter-item" onClick={() => toggleFilter('waterSchedule')}>
  <div className="filter-title">
    <span>Water Schedule</span>
    <span className="toggle-icon">{activeFilter === 'waterSchedule' ? '-' : '+'}</span>
  </div>
  {activeFilter === 'waterSchedule' && <div className="filter-content">Content for Water Schedule</div>}
</div>

<div className="filter-item" onClick={() => toggleFilter('color')}>
  <div className="filter-title">
    <span>Color</span>
    <span className="toggle-icon">{activeFilter === 'color' ? '-' : '+'}</span>
  </div>
  {activeFilter === 'color' && <div className="filter-content">Content for Color</div>}
</div>

<div className="filter-item" onClick={() => toggleFilter('seasonal')}>
  <div className="filter-title">
    <span>Seasonal</span>
    <span className="toggle-icon">{activeFilter === 'seasonal' ? '-' : '+'}</span>
  </div>
  {activeFilter === 'seasonal' && <div className="filter-content">Content for Seasonal</div>}
</div>

<div className="filter-item" onClick={() => toggleFilter('lightEfficient')}>
  <div className="filter-title">
    <span>Light Efficient</span>
    <span className="toggle-icon">{activeFilter === 'lightEfficient' ? '-' : '+'}</span>
  </div>
  {activeFilter === 'lightEfficient' && <div className="filter-content">Content for Light Efficient</div>}
</div>


      
      </div>

      {/* Product Grid Section */}
      <div className="product-grid">
          <div className="sort-filter">
            <p>300 products</p>
            <select className="sort-select">
              <option value="default">SORT BY</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className="products">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                
                <button className="view-product-btn" onClick={() => handleViewProduct('Sample Product')}>View Product</button>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-rating">⭐⭐⭐⭐ {product.rating}</div>
                  <div className="product-price">
                    <span className="price-original">₹{product.priceOriginal}</span>
                    <span className="price-discounted">₹{product.priceDiscounted}</span>
                  </div>

                  <div className="product-actions">
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}> - Add to cart +</button>
                    <button className='but-to-rent'>Buy Runt</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {showModal && modalProduct && (
  <div className="modal">
    <div className="modal-content">
      <span className="close-btn" onClick={closeModal}>&times;</span>
      
      <p className="modal-cart-title">Your Cart</p>
      <hr className="modal-divider" />
      
      <h2 className="modal-title">Congratulations, Order Placed!</h2>
      
      <img src={modalProduct.image} alt={modalProduct.name} className="modal-product-image" />
      
      <p className="modal-thankyou">Thank you for choosing {modalProduct.name}.</p>
      <p className="modal-description">{modalProduct.description}</p>
      
      <button className="continue-btn" onClick={closeModal}>Continue Shopping</button>
    </div>
  </div>
)}


      </div>
    </div>
  );
};

export default Products;
