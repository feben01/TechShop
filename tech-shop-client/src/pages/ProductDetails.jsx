import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Product Details for ID: {id}</h2>
      <p className="text-gray-600">This page will show full details of the product.</p>
    </div>
  );
}
