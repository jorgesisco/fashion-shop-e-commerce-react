import img_1_1 from '../assets/images/ProductsImgs/img-1-1.png';
import img_1_2 from '../assets/images/ProductsImgs/img-1-2.webp';
import img_2_1 from '../assets/images/ProductsImgs/img-2-1.jpg';
import img_2_2 from '../assets/images/ProductsImgs/img-2-2.jpg';
import img_3_1 from '../assets/images/ProductsImgs/img-3-1.jpg';
import img_3_2 from '../assets/images/ProductsImgs/img-3-2.jpg';
import img_4_1 from '../assets/images/ProductsImgs/img-4-2.jpg';
import img_4_2 from '../assets/images/ProductsImgs/img-4-2.jpg';

//ProductData

const FeaturedProducts = [
  {
    title: 'Outfits for men',
    description:
      'Casual  line, Short design. 100% suede leather. Elbow patche.',
    price: '$299.99',
    oldPrice: '499.99',
    img: [{ img1: img_1_1, img2: img_1_2 }],
    category: 'Leathers',
  },
  {
    title: 'Ultimate shirts trends',
    description: 'Nice casual shirt for men.',
    price: '$39',
    oldPrice: '69',
    img: [{ img1: img_2_1, img2: img_2_2 }],
    category: 'Leathers',
  },
  {
    title: 'Best Blue Jeans for men',
    description: 'Best quality jeans in the market.',
    price: '$59',
    oldPrice: '99',
    img: [{ img1: img_3_1, img2: img_3_2 }],
    category: 'Leathers',
  },
  {
    title: 'Most modern snikers for men',
    description: 'Most bought snikers this months!.',
    price: '$129',
    oldPrice: '179',
    img: [{ img1: img_4_1, img2: img_4_2 }],
    category: 'Leathers',
  },
];

const SectionLeftProducts = [{}];

export default FeaturedProducts;
