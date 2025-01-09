import ProductCard from "../components/ProductCard";

const ProductsList = ({products}) => {
  return (
    <div className="pb-5">
      <div className="container d-flex justify-content-between flex-wrap gap-2">
          {products.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default ProductsList;
