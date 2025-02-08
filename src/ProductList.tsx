// import { useSelector } from "react-redux";
// import { useAppDispatch } from "./app/store";
import ProductCard from "./components/ProductCard";
// import useCustomQuery from "./hooks/useCustomQuery";
import { IProduct } from "./interface";
import { useGetProductListQuery } from "./app/features/products/productsSlice";
import { NavLink } from "react-router-dom";
// import { useEffect } from "react";

const ProductList = () => {

  // 1- React Query
  // const { isLoading, data } = useCustomQuery({
  //   queryKey: ["productList"],
  //   url: `/products?limit=10&select=title,price,thumbnail`,
  // });

  // if (isLoading) return <h3>Loading...</h3>;


  // 2- Redux Toolkit 
  // const dispatch = useAppDispatch();
  // const { loading, data } = useSelector(productsSelector);
  // console.log(loading, data)

  // useEffect(() => {
  //   dispatch(getProductList())
  // }, [dispatch]);
  // if (loading) return <h3>Loading...</h3>;


  // Redux Toolkit Query
  const { isLoading, data, error } = useGetProductListQuery({});
  // console.log(isLoading, data, error);

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
      {data.products.map((product: IProduct) => (
        <NavLink to={`/product/${product.id}`} >
          <ProductCard key={product.id} product={product} />
        </NavLink>
      ))}
    </div>
  );
};

export default ProductList;
