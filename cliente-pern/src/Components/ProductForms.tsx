import React, { useState } from "react";

type FormData = {
  name: string;
  price: string;
};

type Errors = {
  name?: string;
  price?: string;
};

export default function ProductForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    price: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    let newErrors: Errors = {};
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    } else if (formData.name.length < 3) {
      newErrors.name = "Debe tener al menos 3 caracteres.";
    }

    const priceValue = Number(formData.price);
    if (!formData.price) {
      newErrors.price = "El precio es obligatorio.";
    } else if (isNaN(priceValue) || priceValue <= 0) {
      newErrors.price = "Debe ser mayor a 0.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof Errors]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Producto guardado:", {
        ...formData,
        price: Number(formData.price),
      });
      setFormData({ name: "", price: "" });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100/60 via-white/80 to-purple-100/60 backdrop-blur-sm z-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 space-y-7 animate-fade-in"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">
          Nuevo Producto
        </h2>
        {/* Nombre */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Nombre del producto
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Sandwich"
            className={`transition-all duration-200 bg-gray-50 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } text-gray-900 text-base rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 block w-full p-3 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Precio */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Precio
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="100"
            className={`transition-all duration-200 bg-gray-50 border ${
              errors.price ? "border-red-500" : "border-gray-300"
            } text-gray-900 text-base rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 block w-full p-3 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
          />
          {errors.price && (
            <p className="text-red-500 text-xs mt-1">{errors.price}</p>
          )}
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full py-3 px-6 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-xl text-base shadow-lg transition-all duration-200"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

// Agrega esta animación en tu CSS global si quieres el efecto fade-in:
// .animate-fade-in { animation: fadeIn 0.7s ease; }
// @keyframes fadeIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
