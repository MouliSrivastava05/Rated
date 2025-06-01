import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

function ProdInfo({ product }) {
  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div className="prod-image-section">
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="prod-details-section space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.title}
            </h1>
            <p className="text-sm text-gray-500 uppercase tracking-wider">
              {product.category}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-gray-700 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center space-x-4">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
              <FaShoppingCart />
              <span>Add to Cart</span>
            </button>
            <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <FaHeart className="text-gray-400 hover:text-red-500" />
            </button>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-2">Product Details</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Free shipping on orders over $50</li>
              <li>• 30-day return policy</li>
              <li>• Secure payment processing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdInfo;