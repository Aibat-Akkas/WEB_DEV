export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: string;
  link: string;
  category: number;
  likes: number;
  visibility: boolean;
}

export const products = [
  {
    id: 1,
    name: 'LG 27GP750-B 27” Ultragear FHD (1920 x 1080) IPS Gaming Monitor',
    price: 299.99,
    description: `Reimagine every scene with vivid, responsive IPS. At 27" and 16:9 screen ratio,
                  LG's UltraGear™ Full HD IPS Display features realistic, true color with sRGB 99% Color Gamut 
                  and HDR 10 for enhanced contrast, clarity and detail, while delivering an ultra-fast 240Hz 
                  refresh rate and 1ms (GtG) response time. This UltraGear monitor is NVIDIA G-SYNC Compatible 
                  and with AMD FreeSync Premium. The 3-Side virtually borderless design with a Tilt/Height/Pivot 
                  adjustable stand makes any gaming setting look great too.`,
    image: '/assets/img/1.jpg',
    rating: '4.5',
    likes: 10,
    visibility: true,
    link: 'https://www.amazon.com/LG-27GP750-B-Ultragear-Compatible-Adjustable/dp/B09D914618/ref=sr_1_5?crid=TZ5G6W643BPA&keywords=gaming&qid=1647162410&sprefix=gaming+headsets%2Caps%2C368&sr=8-5',
    category: 1
  },
  {
    id: 2,
    name: 'HyperX Cloud II Wireless - Gaming Headset',
    price: 129.99,
    description: `The HyperX Cloud II was built to be an ultra-comfortable gaming headset with great sound. We put a lot of thought into the details of our HyperX signature memory foam, the premium leatherette, clamping force, and weight distribution. It’s no wonder that it’s become the preferred headset for millions of gamers. We're proud to present the HyperX Cloud II Wireless. With a fast 2.4Ghz wireless connection, a long-lasting 30-hour battery, and up to 20 meters of wireless range, you're set for more than a full day of comfort and wireless freedom. 53mm drivers deliver impressive sound, with 7.1 virtual surround sound for improved positional audio available at the touch of a button. It's compatible with PC, PlayStation 4, and Nintendo Switch, so you can take the good times across platforms.`,
    image: '/assets/img/2.jpg',
    rating: '4.6',
    likes: 84,
    visibility: true,
    category: 1,
    link: 'https://www.amazon.com/HyperX-Cloud-Wireless-Detachable-Cancelling/dp/B08NTYB4M7/ref=sr_1_6?crid=TZ5G6W643BPA&keywords=gaming&qid=1647162410&sprefix=gaming%2Bheadsets%2Caps%2C368&sr=8-6&th=1'
  },
  {
    id: 3,
    name: 'Snpurdiri 60% Wired Gaming Keyboard',
    price: 29.99,
    description: `This 60% gaming keyboard has a perfect size and it's good for all environnement, business travel games office home use, without Numpad, more practical for Gamers and Typist, give more space to your desktop.`,
    image: '/assets/img/3.jpg',
    rating: '4.3',
    likes: 37,
    visibility: true,
    category: 1,
    link: 'https://www.amazon.com/Snpurdiri-Keyboard-Ultra-Compact-Waterproof-Black-White/dp/B097T276QL/ref=sr_1_8?crid=TZ5G6W643BPA&keywords=gaming&qid=1647162410&sprefix=gaming+headsets%2Caps%2C368&sr=8-8'
  },
  {
    id: 4,
    name: 'ASUS TUF F17 Gaming Laptop',
    price: 885.00,
    description: `ASUS TUF Gaming F17 FX706 is a powerful Windows 10 gaming laptop that combines gaming performance with up to a narrow bezel 144Hz IPS-type panel and an extended lifespan, thanks to its patented Anti-Dust Cooling (ADC) system. Equipped with NVIDIA GeForce graphics, multi-core AMD Ryzen processor, and solid-state storage - FX706 is able to play the latest games and multitask with ease. TUF706 features one of the fastest Wi-Fi standards available — the latest Wi-Fi 6 (802.11ax) that boasts incredible data transfer rates. To top it all off, it’s RGB backlit gaming keyboard is rated at 20-million keystroke durability. *The actual transfer speed o For Free Windows 11 upgrade eligible devices, visit ASUS Windows 11 website for more information.f USB 3.0, 3.1, 3.2 (Gen 1 and 2), and/or Type-C will vary depending on many factors including the processing speed of the host device, file attributes and other factors related to  system configuration and your operating environment.`,
    image: '/assets/img/4.jpg',
    rating: '4.7',
    likes: 2,
    visibility: true,
    category: 1,
    link: 'https://www.amazon.com/ASUS-IPS-Type-i5-10300H-Keyboard-FX706LI-ES53/dp/B08ZLC661T/ref=sr_1_9?crid=TZ5G6W643BPA&keywords=gaming&qid=1647162410&sprefix=gaming%2Bheadsets%2Caps%2C368&sr=8-9&th=1'
  },
  {
    id: 5,
    name: 'HyperX QuadCast - USB Condenser Gaming Microphone',
    price: 89.99,
    description: `The HyperX Quad Cast is the ideal all-inclusive standalone microphone for streamers, podcasters and gamers that are looking for a condenser mic with impressive quality sound. The Quad Cast includes its own anti-vibration shock mount to help reduce the sound of any movements. It has a built-in pop filter that reduces any muffles or popping noises for clearer voice quality. Instantly know your mic status with the LED indicator and with the tap-to-mute to easily mute yourself without any delay. Choose between the four polar patterns (Cardioid, Bidirectional, Omnidirectional and Stereo) to fit your streaming needs and adjust the sensitivity by using the gain control knob. Includes a mount adapter that fits both 3/8” and 5/8” thread sizes and is compatible with most microphone stands. Quad Cast is certified by Discord and TeamSpeak to ensure that the Quad Cast is the perfect microphone for broadcasting loud and clear for all your followers and listeners. Whether you’re plugging into a PC, PS4, or Mac, you’ll be able to deliver quality sound to anyone tuning in.`,
    image: '/assets/img/5.jpg',
    rating: '4.8',
    likes: 5,
    visibility: true,
    category: 1,
    link: 'https://www.amazon.com/HyperX-QuadCast-Condenser-Microphone-Anti-Vibration/dp/B07NZZZ746/ref=sr_1_12?crid=TZ5G6W643BPA&keywords=gaming&qid=1647162410&sprefix=gaming+headsets%2Caps%2C368&sr=8-12'
  },
  {
    id: 6,
    name: "Infantino Lil' Nibble Teethers Carrot",
    price: 2.99,
    description: `Infantino Little Nibble Teethers Product Description: Material: BPA-free silicone Colors: Orange and green Age Range: 0+ months Dimensions: 3.5 x 1 x 4 inches Weight: 2.4 oz`,
    image: '/assets/img/6.jpg',
    rating: '4.5',
    likes: 801,
    visibility: true,
    category: 2,
    link: 'https://www.amazon.com/Infantino-Bites-Textured-Carrot-Teether/dp/B071HN7DYP/ref=lp_16225015011_1_1'
  },
  {
    id: 7,
    name: 'Funko Pop! TV: Peacemaker',
    price: 14.99,
    description: 'From Peacemaker, Eagly, Amazon Exclusive (Flocked), as a stylized Pop! vinyl from Funko! Figure stands 3 3/4 inches and comes in a window display box. Check out the other Peacemaker figures from Funko! Collect them all!',
    image: '/assets/img/7.jpg',
    rating: '',
    likes: 734,
    visibility: true,
    category: 2,
    link: 'https://www.amazon.com/Funko-Pop-TV-Peacemaker-Exclusive/dp/B09M8VHY5K/ref=lp_16225015011_1_2'
  },
  {
    id: 8,
    name: 'The Original Slinky Walking Spring Toy',
    price: 3.99,
    description: 'There’s only one Original Slinky Brand! Celebrate 75 years of wiggly-jiggly fun with Slinky! Generations of children and adults have loved playing with Slinky. This classic metal spring toy walks downstairs, alone or in pairs, and makes a slink-ity sound. First invented by mechanical engineer Richard James in 1943 during an experiment with tension coils. James accidentally dropped a spring on the floor and watched as it began to “walk.” Two years later, he introduced his walking spring toy in Gimbels Department Store during Christmas, and the Slinky immediately sold out. Since its debut, over 300 million Slinkys have been sold worldwide. In 2000, this classic toy was inducted into the National Toy Hall of Fame. Made 75 years ago, Slinky continues to be a favorite toy of children and adults all over the world. Slinky is fun for a girl or a boy and makes an ideal gift, stocking stuffer, prize, or present. Everyone loves a Slinky! Ages 5+',
    image: '/assets/img/8.jpg',
    rating: '4.5',
    likes: 931,
    visibility: true,
    category: 2,
    link: 'https://www.amazon.com/Slinky-60100-Original-Brand/dp/B00000IZKX/ref=lp_16225015011_1_3'
  },
  {
    id: 9,
    name: 'Pokémon Assorted Cards, 50 Pieces',
    price: 14.99,
    description: `YOUR BEST VALUE ON POKEMON CARDS: Look no further for the best deals on assorted Pokemon cards. LOTS OF RANDOM CARDS FROM ALL SERIES: You will receive a variety of regular and energy cards. Duplicates may occur. BOOST YOUR COLLECTION: With random cards from every series, each lot is a surprise.`,
    image: '/assets/img/9.jpg',
    rating: '4.3',
    likes: 722467,
    visibility: true,
    category: 2,
    link: 'https://www.amazon.com/Pokémon-Assorted-Cards-50-Pieces/dp/B001CJVTLC/ref=lp_16225015011_1_4'
  },
  {
    id: 10,
    name: 'Play-Doh Modeling Compound 10-Pack Case of Colors',
    price: 7.99,
    description: `Get just the right colors for playtime! These 2-ounce Play-Doh cans come in 10 assorted colors For all of your creative needs. Great as a color Starter set or as an add-on to any Play-Doh playset, these cans are full of everyone's favorite Play-Doh compound. This Play-Doh set is made for kids ages 2 and up who love to squish, mix, and make fun creations with Arts and crafts like modeling clay. It ships in simple recyclable packaging that's easy to open and frustration free. The Play-Doh cans and lids are also recyclable to help build a more sustainable world!`,
    image: '/assets/img/10.jpg',
    rating: '4.7',
    likes: 3753,
    visibility: true,
    category: 2,
    link: 'https://www.amazon.com/Play-Doh-Modeling-Compound-Non-Toxic-Exclusive/dp/B00JM5GW10/ref=lp_16225015011_1_5'
  },
  {
    id: 11,
    name: '1984 by George Orwell',
    price: 9.99,
    description: `Written more than 70 years ago, 1984 was George Orwell’s chilling prophecy about the future. And while 1984 has come and gone, his dystopian vision of a government that will do anything to control the narrative is timelier than ever...`,
    image: '/assets/img/11.jpg',
    rating: '4.7',
    likes: 34534,
    visibility: true,
    category: 3,
    link: 'https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934?ref_=Oct_d_obs_d_10399&pd_rd_w=spA0C&pf_rd_p=8000bc8c-c3b0-4816-9f00-5038ff54385c&pf_rd_r=57JZC1HM8H5HKTY2V7Y8&pd_rd_r=2d9f6504-5261-4493-b0bf-8102502dbb22&pd_rd_wg=IWhIn&pd_rd_i=0451524934'
  },
  {
    id: 12,
    name: 'To Kill a Mockingbird by Harper Lee',
    price: 83.99,
    description: `Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South—and the heroism of one man in the face of blind and violent hatred`,
    image: '/assets/img/12.jpg',
    rating: '4.8',
    likes: 78676,
    visibility: true,
    category: 3,
    link: 'https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0060935464?ref_=Oct_d_otopr_d_10399&pd_rd_w=7lIro&pf_rd_p=8f269526-780e-4f8e-9daa-56fd73859d4c&pf_rd_r=57JZC1HM8H5HKTY2V7Y8&pd_rd_r=2d9f6504-5261-4493-b0bf-8102502dbb22&pd_rd_wg=IWhIn&pd_rd_i=0060935464'
  },
  {
    id: 13,
    name: 'No Longer Human by Ozamu Dazi',
    price: 45.00,
    description: `The poignant and fascinating story of a young man who is caught between the breakup of the traditions of a northern Japanese aristocratic family and the impact of Western ideas.`,
    image: '/assets/img/13.jpg',
    rating: '4.8',
    likes: 682978,
    visibility: true,
    category: 3,
    link: 'https://www.amazon.com/No-Longer-Human-Osamu-Dazai/dp/0811204812?ref_=Oct_d_omwf_d_10399&pd_rd_w=9kiqE&pf_rd_p=9bf776a0-7625-4f47-8aae-506f1d25b210&pf_rd_r=57JZC1HM8H5HKTY2V7Y8&pd_rd_r=2d9f6504-5261-4493-b0bf-8102502dbb22&pd_rd_wg=IWhIn&pd_rd_i=0811204812'
  },
  {
    id: 14,
    name: 'The Little Prince by Antoine de Saint-Exupéry',
    price: 12.99,
    description: `Now with the restored original artwork, the beloved classic story of a young prince's travels throughout space??―??a profound tale about loneliness and loss, and love and friendship.`,
    image: '/assets/img/14.jpg',
    rating: '4.8',
    likes: 999999,
    visibility: true,
    category: 3,
    link: 'https://www.amazon.com/Little-Prince-Antoine-Saint-Exupéry/dp/0156012197?ref_=Oct_d_omg_d_10399&pd_rd_w=n5a3I&pf_rd_p=91d04f53-a5e6-477b-803f-81835dc5f501&pf_rd_r=57JZC1HM8H5HKTY2V7Y8&pd_rd_r=2d9f6504-5261-4493-b0bf-8102502dbb22&pd_rd_wg=IWhIn&pd_rd_i=0156012197'
  },
  {
    id: 15,
    name: 'Fahrenheit 451 by Ray Bradbury',
    price: 18.88,
    description: `Nearly seventy years after its original publication, Ray Bradbury’s internationally acclaimed novel Fahrenheit 451 stands as a classic of world literature set in a bleak, dystopian future. Today its message has grown more relevant than ever before.`,
    image: '/assets/img/15.jpg',
    rating: '4.6',
    likes: 345378,
    visibility: true,
    category: 3,
    link: 'https://www.amazon.com/Fahrenheit-451-Ray-Bradbury/dp/1451673310/ref=lp_10399_1_7'
  },
  {
    id: 16,
    name: 'Thriller',
    price: 31.56,
    description: `The materials used to create picture discs and color vinyl are not the same as traditional vinyl. Picture discs will have an inherent surface noise in playback. This is a novelty item and not intended for a listening experience.`,
    image: '/assets/img/16.jpg',
    rating: '4.8',
    likes: 34387532453,
    visibility: true,
    category: 4,
    link: 'https://www.amazon.com/Thriller-Michael-Jackson/dp/B001DUKHXQ?ref_=Oct_d_otopr_d_63704&pd_rd_w=fIgGb&pf_rd_p=8f269526-780e-4f8e-9daa-56fd73859d4c&pf_rd_r=9BR7F77KGH9ZPVX2NNQ1&pd_rd_r=04a3f1d1-7fd8-455f-a10d-dceee18c8efa&pd_rd_wg=ttLWd&pd_rd_i=B001DUKHXQ'
  },
  {
    id: 17,
    name: 'Musique, Vol. 1 1993 - 2005',
    price: 17.99,
    description: `Daft Punk quickly rose to acclaim in 1993 by adapting a love for first-wave acid house and techno to their younger roots in pop, indie rock, and hip-hop. The combined talents of DJs Guy-Manuel de Homem-Christo and Thomas Bangalter as Daft Punk have been responsible for the most memorable and genre-defying house hits of the last decade. Musique Vol 1 1993-2005 offers for the first time their collected singles and several rare remixes. Virgin. 2006.`,
    image: '/assets/img/17.jpg',
    rating: '4.6',
    likes: 534735243,
    visibility: true,
    category: 4,
    link: 'https://www.amazon.com/Musique-Vol-1993-2005-DAFT-PUNK/dp/B000EHPXXI/ref=sr_1_13?crid=1OMJGLI3OATGK&keywords=daft+punk&qid=1647171399&s=music&sprefix=daft+punk%2Cmusic-intl-ship%2C439&sr=1-13'
  },
  {
    id: 18,
    name: 'Pink Moon',
    price: 70.73,
    description: `Heavyweight 180gm virgin vinyl LP repressing of this 1972 album. Nick Drake's third and final album, many consider to be his finest moment, was a radical departure from his previous work, stripped of the lush orchestral arrangements, Pink Moon featured Drake alone on vocals, acoustic guitar and the occasional piano accompaniment. This starkness was matched in brevity, with Pink Moon consisting of 11 short songs coming to less than half-an-hour of music. Though critically well received at the time, commercial success did not arrive till nearly 30 years later, when 30 seconds of 'Pink Moon' was used in a Volkswagen commercial.`,
    image: '/assets/img/18.jpg',
    rating: '4.8',
    likes: 737537545374,
    visibility: true,
    category: 4,
    link: 'https://www.amazon.com/Pink-Moon-Vinyl-Nick-Drake/dp/B001AGNRYO/ref=sr_1_1?crid=IU5JH03X2TCQ&keywords=pink+moon&qid=1647171516&s=music&sprefix=pink+mo%2Cmusic-intl-ship%2C265&sr=1-1'
  },
  {
    id: 19,
    name: 'Eat Ya Veggies Purple',
    price: 29.98,
    description: ``,
    image: '/assets/img/19.jpg',
    rating: '5',
    likes: 0,
    visibility: true,
    category: 4,
    link: 'https://www.amazon.com/Eat-Ya-Veggies-Purple-bbno/dp/B09JM5KJ9Y/ref=sr_1_1?crid=38TYUMOKQUIHZ&keywords=bbno%24&qid=1647171707&s=music&sprefix=bono%2Cmusic-intl-ship%2C253&sr=1-1'
  },
  {
    id: 20,
    name: 'The Wall',
    price: 45.00,
    description: `Pink Floyd s The Wall is one of the most acclaimed concept albums of all time selling over 23 million copies in the US alone.`,
    image: '/assets/img/20.jpg',
    rating: '4.8',
    likes: 453768,
    visibility: true,
    category: 4,
    link: 'https://www.amazon.com/Wall-Pink-Floyd/dp/B00536OCYG/ref=sr_1_2?crid=3O50WGFQF11MS&keywords=wall&qid=1647171785&s=music&sprefix=wal%2Cmusic-intl-ship%2C282&sr=1-2'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/