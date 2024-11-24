import React, { useState } from "react";
import PieChart from "./PieChart"; // Import the PieChart component
import './App.css';

// Sample Product Data
const products = [
  {
    id: 1,
    name: 'Eco-Friendly Water Bottle',
    productLink: 'https://www.amazon.com/eco-friendly-water-bottle/dp/B08XYZ1234',
    carbonFootprint: 0.5,  // kg CO₂
    waterUsage: 0.3,  // liters
    energyEfficiency: 0.1,  // kWh
    recyclability: 100,  // %
    ecoScore: 90,  // out of 100
    suggestions: [
      'Consider using biodegradable materials for packaging.',
      'Encourage customers to recycle the product after use.'
    ]
  },
  {
    id: 2,
    name: 'Sustainable Bamboo Toothbrush',
    productLink: 'https://www.amazon.com/sustainable-bamboo-toothbrush/dp/B08XYZ5678',
    carbonFootprint: 0.2,  // kg CO₂
    waterUsage: 0.1,  // liters
    energyEfficiency: 0.05,  // kWh
    recyclability: 80,  // %
    ecoScore: 85,  // out of 100
    suggestions: [
      'Encourage customers to dispose of the toothbrush responsibly.',
      'Consider offering refillable options to reduce waste.'
    ]
  },
  // Add more products as necessary...
];

function App() {
  const [productLink, setProductLink] = useState("");
  const [productData, setProductData] = useState(null);

  // Handle the product link input change
  const handleLinkChange = (e) => {
    setProductLink(e.target.value);
  };

  // Handle check ecoScore click
  const handleCheckEcoScore = () => {
    const product = products.find((product) => product.productLink === productLink);
    if (product) {
      setProductData(product);
    } else {
      alert("Product not found or invalid link.");
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>EcoScore Checker</h1>
      </div>

      <div className="container">
        <div className="input-section">
          <input
            type="text"
            placeholder="Paste product link"
            value={productLink}
            onChange={handleLinkChange}
          />
          <button onClick={handleCheckEcoScore}>Check EcoScore</button>
        </div>

        {productData && (
          <div className="score-display">
            <h2>{productData.name}</h2>
            <p><strong>EcoScore: </strong>{productData.ecoScore}%</p>
            <p><strong>Carbon Footprint: </strong>{productData.carbonFootprint} kg CO₂</p>
            <p><strong>Water Usage: </strong>{productData.waterUsage} liters</p>
            <p><strong>Energy Efficiency: </strong>{productData.energyEfficiency} kWh</p>
            <p><strong>Recyclability: </strong>{productData.recyclability}%</p>

            {/* Render the Pie Chart dynamically */}
            <PieChart productData={productData} />

            {/* Lifecycle Chart */}
            <div id="lifecycle-chart">
              {/* Your lifecycle chart content here (could be a bar chart, pie chart, or anything you want) */}
              
            </div>

            {/* Suggestions below lifecycle chart */}
            <div className="insights">
              <h3>Suggestions:</h3>
              <ul>
                {productData.suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="community-section">
          <h3>Community Feedback</h3>
          <textarea placeholder="Leave a review or suggestion"></textarea>
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2024 EcoScore Checker. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
