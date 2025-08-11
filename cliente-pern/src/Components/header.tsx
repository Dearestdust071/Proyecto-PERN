import React from "react";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
        
        {/* Logo + Nombre */}
        <div className="flex items-center space-x-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="Logo"
            className="h-8 w-8"
          />
          <span className="text-lg font-bold tracking-wide">
            PERN-server
          </span>
        </div>

        {/* Navegación */}
        <nav className="flex space-x-4 mt-2 sm:mt-0">
          <a
            href="#ver"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600"
          >
            Ver Productos
          </a>
          <a
            href="#crear"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600"
          >
            Crear Producto
          </a>
        </nav>
      </div>
    </header>
  );
}
