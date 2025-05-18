import ProductCard from "../components/ProductCard";

const dummyProducts = [
  { _id: 1, name: "Laptop", price: 999, image: "https://via.placeholder.com/150" },
  { _id: 2, name: "Smartphone", price: 499, image: "https://via.placeholder.com/150" },
];

export default function Products() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {dummyProducts.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
