import { Component, computed, input, signal } from '@angular/core';
import { ProductVM } from './productVM';

import { Productcard } from '../productcard/productcard';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-grid',
  imports: [Productcard, TitleCasePipe],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css',
})
export default class ProductGrid {
  category = input<string>('all');

  products = signal<ProductVM[]>([
    {
      id: 'E1001',
      name: 'Wireless Bluetooth Headphones',
      description: 'Noise-cancelling over-ear headphones with 30 hours of battery life.',
      price: 129.99,
      imageUrl: 'https://m.media-amazon.com/images/I/51Rx4lBKttL.jpg',
      rating: 4.6,
      reviewCount: 2543,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: 'E1002',
      name: 'Gaming Mouse',
      description: 'Ergonomic RGB gaming mouse with 7 programmable buttons.',
      price: 49.99,
      imageUrl:
        'https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Gaming-Mice/base-scimitar-elite-se-config/CH-9314014-WW/CH-9314014-WW_01.webp',
      rating: 4.7,
      reviewCount: 1342,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: 'E1003',
      name: 'Smartwatch',
      description: 'Fitness tracking smartwatch with heart rate monitor.',
      price: 149.99,
      imageUrl:
        'https://images-cdn.ubuy.qa/6563baa35d2bfd3a8803111f-smart-watch-fits-for-android-and-iphone.jpg',
      rating: 4.4,
      reviewCount: 1890,
      inStock: true,
      category: 'Electronics',
    },

    // Fashion
    {
      id: 'F1001',
      name: 'Running Shoes',
      description: 'Lightweight breathable running shoes for men.',
      price: 89.99,
      imageUrl:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1741716872-puma-foreverrun-nitro-2-67d07d7915584.jpg?crop=1xw:1xh;center,top&resize=980:*',
      rating: 4.8,
      reviewCount: 2104,
      inStock: true,
      category: 'Fashion',
    },
    {
      id: 'F1002',
      name: 'Leather Jacket',
      description: 'Classic black leather jacket with zip closure.',
      price: 199.99,
      imageUrl:
        'https://fjackets.ca/cdn/shop/files/men_black_asymmetrical_moto_leather_jacket__35949_650x_crop_center.webp?v=1753690053',
      rating: 4.5,
      reviewCount: 876,
      inStock: true,
      category: 'Fashion',
    },
    {
      id: 'F1003',
      name: 'Sunglasses',
      description: 'Polarized UV-protection sunglasses with sleek design.',
      price: 49.99,
      imageUrl:
        'https://www.quay.com/cdn/shop/files/Quay_HighKey_BlackFade_Front_3c2f5e85-e5b9-44f9-8c77-6e5cbfa00e62.jpg?v=1762197913',
      rating: 4.3,
      reviewCount: 543,
      inStock: true,
      category: 'Fashion',
    },

    // Kitchen
    {
      id: 'K1001',
      name: 'Espresso Machine',
      description: 'Compact espresso machine with milk frother.',
      price: 249.99,
      imageUrl: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202538/0433/img1o.jpg',
      rating: 4.4,
      reviewCount: 298,
      inStock: false,
      category: 'Kitchen',
    },
    {
      id: 'K1002',
      name: 'Cookware Set',
      description: '10-piece non-stick cookware set with glass lids.',
      price: 179.99,
      imageUrl: 'https://m.media-amazon.com/images/I/71oZ1-QYomL.jpg',
      rating: 4.5,
      reviewCount: 987,
      inStock: true,
      category: 'Kitchen',
    },
    {
      id: 'K1003',
      name: 'Blender',
      description: 'High-speed blender with multiple settings for smoothies and soups.',
      price: 99.99,
      imageUrl:
        'https://www.thespruceeats.com/thmb/4eKqlUaSfIRlYNwmGIfF8OqHXmk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ses-vitamix-propel-750-cheyenne-elwell-03-58c0ab8fadf740b8848060edfb9d56f7.jpeg',
      rating: 4.5,
      reviewCount: 765,
      inStock: true,
      category: 'Kitchen',
    },
  ]);

  filterProduct = computed(() => {
    const currentCategory = this.category()?.toLowerCase();
    const allData = this.products();

    if (!currentCategory || currentCategory === 'all') {
      return allData;
    }

    return allData.filter((p) => p.category.toLowerCase() === currentCategory);
  });

  categories = signal<string[]>(['all', 'fashio', 'kitchen', 'electronic']);
}
