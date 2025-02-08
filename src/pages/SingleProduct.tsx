import React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../app/store";
import { addItemToCartAction } from "../app/features/cart/cartSlice";
import Button from "../components/ui/Button";
import { useGetProductListByIdQuery } from "../app/features/products/productsSlice";
import Navbar from "../components/Navbar";

const SingleProduct: React.FC = () => {
  const dispatch = useAppDispatch();
  const { productId } = useParams<{ productId: string }>();
  const { data: product, isLoading } = useGetProductListByIdQuery(productId);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addItemToCartAction(product));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
        <Navbar />
      {isLoading}
      {product && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-bold text-gray-200 mb-4">
              ${product.price}
            </p>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;