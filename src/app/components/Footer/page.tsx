// components/Footer.js

const Footer = () => {
    return (
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-gray-800 text-white">
    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
     <div className="sm:col-span-2">
       <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
        
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase text-white">markaz group</span>
      </a>
      <div className="mt-6 lg:max-w-sm">
        <p className="text-sm text-gray-800 text-white">
            Selamat datang di perusahaan kami, tempat di mana inovasi bertemu dengan kehandalan untuk membawa solusi hadware terbaik bagi Anda. Kami adalah pionir dalam industri ini, terkenal karena dedikasi kami terhadap kualitas, kinerja, dan kepuasan pelanggan.
        </p>
        <p className="mt-4 text-sm text-gray-800 text-white  ">
           Kami menawarkan beragam produk hadware yang dirancang untuk memenuhi berbagai kebutuhan, mulai dari komputasi personal hingga infrastruktur teknologi perusahaan. Produk-produk kami termasuk:Komponen Komputer: Prosesor, kartu grafis, motherboard, dan banyak lagi.
           Perangkat Jaringan: Router, switch, dan perangkat jaringan lainnya untuk membangun infrastruktur IT yang kuat.
           Perangkat Penyimpanan: SSD, HDD, dan solusi penyimpanan lainnya untuk memenuhi kebutuhan penyimpanan data.
           Aksesoris Komputer: Mouse, keyboard, dan aksesori lainnya untuk meningkatkan produktivitas.
        </p>
      </div>
    </div>
    <div className="space-y-2 text-sm">
      <p className="text-base font-bold tracking-wide text-gray-800 text-white ">Contacts</p>
      <div className="flex">
        <p className="mr-1 text-gray-800 text-white" >Phone:</p>
        <a href="tel:850-123-5021" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">0895361026868</a>
      </div>
      <div className="flex">
        <p className="mr-1 text-gray-800 text-white">Email:</p>
        <a href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">gmail@saepudin310703</a>
      </div>
      <p className="text-base font-bold tracking-wide text-gray-800 text-white ">Pembayaran</p>
      <div className="payment-logos flex justify-center gap-6">
       <a href="https://www.bri.co.id" className="flex items-center justify-center w-24 h-24  rounded-lg shadow-md p-2">
        <img src="/asset/bri2.jpg" alt="BRI Logo" className="w-full h-full" />
       </a>
       <a href="https://www.bni.co.id" className="flex items-center justify-center w-24 h-24  rounded-lg shadow-md p-2">
        <img src="/asset/bni.jpg" alt="BNI Logo" className="w-full h-full" />
      </a>
      <a href="https://www.dana.id" className="flex items-center justify-center w-24 h-24  rounded-lg shadow-md p-2">
        <img src="/asset/dana.jpg" alt="DANA Logo" className="w-full h-full" />
      </a>
    </div>

   </div>
    <div>
      <span className="text-base font-bold tracking-wide text-gray-900 text-white">Social</span>
      <div className="flex items-center mt-1 space-x-3">
        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path
              d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
            ></path>
          </svg>
        </a>
        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
          <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
            <circle cx="15" cy="15" r="4"></circle>
            <path
              d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
            ></path>
          </svg>
        </a>
        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path
              d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
            ></path>
          </svg>
        </a>

      </div>
      <p className="mt-4 text-sm text-gray-500 text-white">
         Bergabunglah dengan kami dalam perjalanan kami yang menakjubkan! 
         Kami mengundang Anda untuk menjadi bagian dari komunitas kami di media sosial! Mari bersama-sama menjelajahi dunia teknologi dan berbagi inspirasi, pengetahuan, dan pengalaman yang luar biasa.
      </p>
    </div>
  </div>
  <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
    <p className="text-sm text-gray-600 text-white ">
      © Copyright 2024 markaz gruop. All rights reserved.
    </p>
    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row  text-white">
      <li>
        <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</a>
      </li>
      <li>
        <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
      </li>
      <li>
        <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
      </li>
    </ul>
  </div>
</div>
    );
  };
  
  export default Footer;