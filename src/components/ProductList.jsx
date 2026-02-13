import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import "./ProductList.css";

function ProductList() {
  const dispatch = useDispatch();

  const plants = {
    "Air Purifying Plants": [
      { id: 1, name: "Snake Plant", price: 15, image: "https://i.imgur.com/5Aqgz7o.jpg" },
      { id: 2, name: "Spider Plant", price: 12, image: "https://i.imgur.com/8z3Yz8S.jpg" },
      { id: 3, name: "Peace Lily", price: 18, image: "https://i.imgur.com/TG9z1bM.jpg" },
      { id: 4, name: "Boston Fern", price: 14, image: "https://i.imgur.com/N7aZfXk.jpg" },
      { id: 5, name: "Rubber Plant", price: 20, image: "https://i.imgur.com/yfYV3FQ.jpg" },
      { id: 6, name: "Aloe Vera", price: 10, image: "https://i.imgur.com/2nCt3Sbl.jpg" },
    ],
    Succulents: [
      { id: 7, name: "Echeveria", price: 8, image: "https://i.imgur.com/Qr6k1dI.jpg" },
      { id: 8, name: "Jade Plant", price: 9, image: "https://i.imgur.com/NVf4L3J.jpg" },
      { id: 9, name: "Cactus", price: 6, image: "https://i.imgur.com/1hYp4XU.jpg" },
      { id: 10, name: "Haworthia", price: 7, image: "https://i.imgur.com/lYw2bLF.jpg" },
      { id: 11, name: "Sedum", price: 5, image: "https://i.imgur.com/T9oYf9P.jpg" },
      { id: 12, name: "Lithops", price: 11, image: "https://i.imgur.com/dX3KXxN.jpg" },
    ],
    Herbs: [
      { id: 13, name: "Basil", price: 4, image: "https://i.imgur.com/Basil.jpg" },
      { id: 14, name: "Mint", price: 3, image: "https://i.imgur.com/Mint.jpg" },
      { id: 15, name: "Rosemary", price: 5, image: "https://i.imgur.com/Rosemary.jpg" },
      { id: 16, name: "Thyme", price: 4, image: "https://i.imgur.com/Thyme.jpg" },
      { id: 17, name: "Parsley", price: 3, image: "https://i.imgur.com/Parsley.jpg" },
      { id: 18, name: "Coriander", price: 4, image: "https://i.imgur.com/Coriander.jpg" },
    ],
  };

  return (
    <div>
      <Navbar />

      {Object.keys(plants).map((category) => (
        <div key={category} className="category">
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants[category].map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>

                <button onClick={() => dispatch(addItem(plant))}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
