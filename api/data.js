
const products = [
  {
    id: 01,
    name: 'Acer Laptop',
    available_quantity: 5,
    price: 34600,
    description: 'Laptop 15.6 Inte 1080P FHD Windows 10 Quad Core 8GB RAM 128GB SSD Notebook PC PC'
  },

  {
    id: 02,
    name: 'Headset',

    available_quantity: 7,
    price: 3700,
    description: 'SPEEDLINK Orios RGB 7.1 PC Gaming Headset with Flexible Microphone RGB Lighting, SL-860005-BK'
  },

  {
    id: 03,
    name: 'Asus ROG Laptop',
   
    available_quantity: 2,
    price: 5659,
    description: 'ROG GX501VIK7700 Quad Core 2.8GHz up to 3.8GHz CPU clock Intel Core i7-7700HQ, 64-bit Processor NVIDIA GeForce GTX 1080 Max-Q 8GB GDDR5X Graphics Card RAM 16GB DDR4 RAM | Storage 1TB'
  },

  {
    id: 04,
    name: 'Intel Core i9',
   
    available_quantity: 4,
    price: 33560,
    description: 'Introducing the new 10th Gen Intel® Core™ desktop processors delivering elite real-world performance through an optimal balance of frequency, cores and threads. Get the most out of your games with clock speeds up to 5.3GHz, 10 cores, 20 threads and updated support for high-bandwidth connectivity and devices. Integrated features like Intel® Hyperthreading Technology and Intel® Thermal Velocity Boost enable amazing gameplay out of the box, while new overclocking controls offer additional flexibility to fine tune performance.'
  },
];

const images =[
  {
    id:01,
    image: './img/acerlaptop.jpg'
  },
  {
    id: 02,
    image: './img/acerlaptop.jpg'
  },
  {
    id: 03,
    image: './img/acerlaptop.jpg'
  },
  {
    id: 04,
    image: './img/acerlaptop.jpg'
  },
]



const users = [
    {
      'name': 'admin',
      'password': 'admin'
    },
];

module.exports = { 'products': products, users: users }