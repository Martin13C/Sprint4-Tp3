import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-10 px-6 sm:px-12 lg:px-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Sección 1: Logo e info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Tienda-Online</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Tu tienda de confianza para productos de calidad.
            Compra fácil, rápido y seguro.
          </p>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} <span className="text-red-600 dark:text-red-400 font-semibold">Tienda-Online</span>. Todos los derechos reservados.
          </p>
        </div>

        {/* Sección 2: Enlaces rápidos */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Enlaces rápidos</h3>
          <ul className="space-y-2">
            {['Inicio', 'Productos', 'Nosotros', 'Contacto', 'FAQ'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sección 3: Redes sociales */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Síguenos</h3>
          <div className="flex space-x-6">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="hover:text-blue-700 dark:hover:text-blue-500 transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" >
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.098 2.798.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.728 0 1.324-.597 1.324-1.334V1.333C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" >
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.94 13.94 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.897 4.897 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.59 3.417A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
              </svg>
            </a>

            {/* Instagram  */}
            <a href="#" aria-label="Instagram" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram w-6 h-6 fill-current" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer