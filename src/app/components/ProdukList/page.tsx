// products.js

import React from 'react';
import Image from 'next/image';

const ProductsPage = () => {
  return (
    <div className="grid grid-cols-4 gap-4 px-8 pb-7 pt-7">
      <div className="p-4 bg-transparent rounded-lg shadow-md  transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-64 h-64 relative">
        <img src="/asset/monitor.jpg" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" style={{ objectFit: 'cover' }} />
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
        </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg shadow-md  transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-64 h-64 relative">
        <img src="/asset/pc.jpg" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
        </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-64 h-64 relative">
        <img src="/asset/mikrotik.webp" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
        </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg shadow-md  transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-64 h-64 relative">
        <img src="/asset/KEBYOARD.jpg" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
        </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg shadow-md  transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-64 h-64 relative">
        <img src="/asset/server.jpg" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
        </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg shadow-md  transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-64 h-64 relative">
        <img src="/asset/cctv.jpg" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
        </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg shadow-md  transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-64 h-64 relative">
        <img src="/asset/mos.jpg" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
        </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg shadow-md  transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-64 h-64 relative">
        <img src="/asset/mos2.jpg" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
        </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg shadow-md  transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-64 h-64 relative">
        <img src="/asset/pc mini.jpg" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
        </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-64 h-64 relative">
        <img src="/asset/ssd.jpg" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
        </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-64 h-64 relative">
        <img src="/asset/hdd.jpg" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
        </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-64 h-64 relative">
        <img src="/asset/router.jpg" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
        </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-64 h-64 relative">
        <img src="/asset/switch.jpg" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
        </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-64 h-64 relative">
        <img src="/asset/sonos.jpg" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
        </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg shadow-md  transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-64 h-64 relative">
        
        <img src="/asset/tplink.jpg" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" />
        
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
         </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg shadow-md  transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-64 h-64 relative">
        <img src="/asset/kursi kantor.jpg" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
        </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg shadow-md  transition duration-300 ease-in-out transform  hover:scale-105 w-full md:w-64 h-64 relative">
         <img src="/asset/switch.jpg" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" />
         <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
         </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg shadow-md  transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-64 h-64 relative">
         <img src="/asset/kursi kantor.jpg" alt="Contoh Gambar" className="w-full h-full object-cover rounded-lg" />
         <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
         <h3 className="text-white text-lg font-semibold">Nama Produk</h3>
         <p className="text-white">Rp 100.000</p>
      </div>
     </div>
  </div>
  );
};
export default ProductsPage;
