export const initialstate = {
  products: JSON.parse(localStorage.getItem('products')) || [
    {
      id: 101,
      name: 'Air Max 2021',
      description: 'A stylish and comfortable sneaker with a modern design.',
      image:
        'https://img.freepik.com/foto-gratis/zapato-deportivo-multicolor-sobre-diseno-fondo-azul-generado-ia_188544-19749.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726876800&semt=ais_hybrid',
      rating: 0,
      liked: false
    },
    {
      id: 102,
      name: 'Adidas Ultraboost',
      description: 'High-performance running shoes with superior cushioning.',
      image:
        'https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg?im=Resize=(1000,1000)',
      rating: 0,
      liked: false
    },
    {
      id: 103,
      name: 'Nike React Infinity Run',
      description: 'Engineered for maximum comfort and stability.',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
      rating: 0,
      liked: false
    },
    {
      id: 104,
      name: 'Puma RS-X',
      description: 'Bold and colorful sneakers that make a statement.',
      image:
        'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23707466/2023/6/21/ba5896b5-1f89-410b-93d5-70d6be55bd411687336002837HRXbyHrithikRoshanMenWhiteMeshRunningNon-MarkingShoes1.jpg',
      rating: 0,
      liked: false
    },
    {
      id: 105,
      name: 'New Balance 990v5',
      description: 'A classic running shoe with a premium feel.',
      image:
        'https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw81b14623/nk/d27/e/7/5/e/1/d27e75e1_e86f_4b12_8d72_675641113181.jpg?sw=520&sh=520&sm=fit',
      rating: 0,
      liked: false
    },
    {
      id: 106,
      name: 'Reebok Club C',
      description: 'Timeless style meets all-day comfort.',
      image:
        'https://www.campusshoes.com/cdn/shop/files/CHANCE_22G-1068_WHT-T.BLU_2.jpg?v=1689246379',
      rating: 0,
      liked: false
    },
    {
      id: 107,
      name: 'Asics Gel-Kayano 27',
      description: 'Exceptional support and cushioning freaks',
      image:
        'https://trex.com.pk/uploads/trex/E2rzBwUDgRxXH19YPNkWPBAXj83sOqJ01iljg5zs.jpg',
      rating: 0,
      liked: false
    },
    {
      id: 108,
      name: 'Vans Old Skool',
      description: 'Classic skate shoes with a retro vibe.',
      image:
        'https://www.barkershoes.com/cdn/shop/collections/8I5A5326_600x375_crop_center.jpg?v=1618574799',
      rating: 0,
      liked: false
    },
    {
      id: 109,
      name: 'Converse Chuck Taylor All Star',
      description: 'An iconic shoe that never goes out of style.',
      image:
        'https://contents.mediadecathlon.com/p2717157/3d554d6f91b7be5c5ddd53246451b37a/p2717157.jpg?format=auto&quality=70&f=2520x0',
      rating: 0,
      liked: false
    },
    {
      id: 110,
      name: 'Hoka One One Clifton',
      description: 'Lightweight and cushioned shoes for long distances.',
      image: 'https://m.media-amazon.com/images/I/51HeJHJmXXL._AC_UY1000_.jpg',
      rating: 0,
      liked: false
    },
    {
      id: 111,
      name: 'On Cloudstratus',
      description: 'Innovative cushioning for a soft landing.',
      image:
        'https://nb.scene7.com/is/image/NB/bbhslgb2_nb_02_i?$pdpflexf2$&wid=440&hei=440',
      rating: 0,
      liked: false
    },
    {
      id: 112,
      name: 'Brooks Ghost 14',
      description: 'Versatile running shoes with great cushioning.',
      image:
        'https://contents.mediadecathlon.com/p2005796/1f0de397133dcaae5f39fd0ba16bb6d2/p2005796.jpg?format=auto&quality=70&f=2520x0',
      rating: 0,
      liked: false
    },
    {
      id: 113,
      name: 'Saucony Endorphin Speed',
      description: 'Lightweight and responsive running shoes.',
      image:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
      rating: 0,
      liked: false
    },
    {
      id: 114,
      name: 'Under Armour HOVR Phantom',
      description: 'Comfortable shoes with a unique design.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvD6-MIRTkTeWU0RgeFdlGMeDWCk4Ga3axOg&s',
      rating: 0,
      liked: false
    },
    {
      id: 115,
      name: 'Mizuno Wave Rider 25',
      description: 'Stable and cushioned shoes for neutral runners.',
      image:
        'https://www.tracerindia.com/cdn/shop/files/01_3_c52bf142-d83e-42e7-96f3-5a3ce6bc5c03.jpg',
      rating: 0,
      liked: false
    },
    {
      id: 116,
      name: 'Nike Air Zoom Pegasus 38',
      description: 'A reliable and versatile running shoe.',
      image:
        'https://cdn.thewirecutter.com/wp-content/media/2023/09/running-shoes-2048px-5946.jpg?auto=webp&quality=75&width=1024',
      rating: 0,
      liked: false
    },
    {
      id: 117,
      name: 'Adidas NMD R1',
      description: 'Street-inspired sneakers with a sleek silhouette.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqIiny-4kI9MnqXAJopvELCQqo1D1cZh9JQ&s',
      rating: 0,
      liked: false
    },
    {
      id: 118,
      name: 'Salomon Speedcross 5',
      description: 'Aggressive traction for trail running adventures.',
      image:
        'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23976344/2023/7/11/cf6d6b67-186a-444a-a2a7-49afebad8a0c1689091586156HRXbyHrithikRoshanWomenOffWhiteMeshRunningNon-MarkingShoes1.jpg',
      rating: 0,
      liked: false
    },
    {
      id: 119,
      name: 'Fila Disruptor II',
      description: 'Chunky sneakers with a retro appeal.',
      image:
        'https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_414/v1703113015/1127896-DNK_1.png?_s=RAABAB0',
      rating: 0,
      liked: false
    },
    {
      id: 120,
      name: "Nike Blazer Mid '77",
      description: 'Classic high-top sneakers with a vintage look.',
      image: 'https://m.media-amazon.com/images/I/614aiM56siL._SL1500_.jpg',
      rating: 0,
      liked: false
    }
  ],
  favourite: JSON.parse(localStorage.getItem('favourite')) || []
}

export const productReducer = (state, action) => {
  switch (action.type) {
    case 'Rate_product': {
      const updatedProducts = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, rating: action.payload.rating }
          : product
      )

      localStorage.setItem('products', JSON.stringify(updatedProducts))

      return {
        ...state,
        products: updatedProducts
      }
    }

    case 'Toggle_favorite':
      const UpdateProducts = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, liked: !product.liked }
          : product
      )
      const UpdatedFavorites = UpdateProducts.filter((product) => product.liked)
      localStorage.setItem('products', JSON.stringify(UpdateProducts))
      localStorage.setItem('favourite', JSON.stringify(UpdatedFavorites))
      return {
        ...state,
        products: UpdateProducts,
        favourite: UpdatedFavorites
      }
    default:
      return state
  }
}
