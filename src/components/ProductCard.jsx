import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-2">
      <img
        src={product.images[0]}
        alt={product.title}
        className="h-64 w-full object-cover"
      />

      <div className="space-y-4 p-5">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
          {product.category.name}
        </span>

        <h2 className="line-clamp-2 text-xl font-bold">
          {product.title}
        </h2>

        <h3 className="text-2xl font-bold text-blue-600">
          ${product.price}
        </h3>

        <Link
          to={`/products/${product.id}`}
          className="block rounded-lg bg-black py-3 text-center text-white transition hover:bg-gray-800"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
