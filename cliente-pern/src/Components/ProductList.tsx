import React from "react";

const products = [
  { id: 1, name: "Microsoft Surface Pro", price: 1999, availability: true },
  { id: 2, name: "MacBook Air M2", price: 1299, availability: false },
  { id: 3, name: "Lenovo ThinkPad X1", price: 1499, availability: true },
];

export default function ProductList() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">Available</th>
            <th scope="col" className="px-6 py-3">Product</th>
            <th scope="col" className="px-6 py-3">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="w-4 p-4">
                <input
                  type="checkbox"
                  checked={product.availability}
                  readOnly
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600"
                />
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.name}
              </td>
              <td className="px-6 py-4">${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
