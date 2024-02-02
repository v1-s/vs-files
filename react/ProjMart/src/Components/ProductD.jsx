import React from "react";
import table from './Assests/Images/table.jpg';
import { products } from "./products";
import { Link } from 'react-router-dom';
import { useState,useEffect } from "react";

export default function ProductD(selectedProduct){
	const[product,setProduct]=useState(null);
	const id = 1; // replace with your actual id

	useEffect(() => {
	  const fetchProduct = async () => {
		// simulate a fetch with a delay
		await new Promise(resolve => setTimeout(resolve, 1000));
		const data = products.find(product => product.id === id);
		setProduct(data);
	  };
  
	  fetchProduct();
	}, [id]);
  
	const [selectedCategory, setSelectedCategory] = useState('all'); 
	const [mobile, setMobile] = useState([]);
	const [sofa, setSofa] = useState([]);
	const [watch, setWatch] = useState([]);
	const [chair, setChair] = useState([]);
    return(

        <>






{/* <div className="Container">
        <div className="Row" style={{backgroundColor:'blue'}}>
          {selectedCategory === 'all' && products.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  Discount={product.discount}
                  Description={product. description}
                  ShortDesc={product.shortDesc}
                  
                />
              </Link>
            </div>
          ))}

          {selectedCategory === 'mobile' && mobile.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}

          {selectedCategory === "sofa" && sofa.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}

          {selectedCategory === 'chair' && chair.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}

        {selectedCategory === "watch" && watch.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}
        </div>
      </div> */}
    







         {selectedProduct && <h1 className="product-name">{selectedProduct.productName}</h1>}

          <div class="background-image">
         {/* <img src={table} alt=" table background" className="Shopbgrnd"/>  */}
   <div className="overlay container-fluid">
    <h1 className="ShTitle">
      {product.productName}
    </h1>
  </div> 
  <div className="product1">
  <h1 className="product-name">{selectedProduct.productName}</h1>
  {console.log(<h1>{selectedProduct.productName}</h1>)}
  <img className="product-name"/>{selectedProduct.imgUrl}
            <p className="product-description">{selectedProduct.description}</p>
            <h2 className="product-price">{selectedProduct.price}</h2>
            <button className="add-to-cart">Add to Cart</button>
</div> 
</div> 
</>

)
}


