import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[]=[
    {
      age: 0,
      id: "motorola-xoom-with-wi-fi",
      imageUrl: "assets/img/phones/motorola-xoom-with-wi-fi.0.jpg",
      name: "Motorola XOOM™ with Wi-Fi",
      snippet: "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    },
    { 
      age: 1,
      id: "motorola-xoom",
      imageUrl: "assets/img/phones/motorola-xoom.0.jpg",
      name: "MOTOROLA XOOM™",
      snippet: "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
    },
    {
      age: 2,
      id: "motorola-atrix-4g",
      imageUrl: "assets/img/phones/motorola-atrix-4g.0.jpg",
      name: "MOTOROLA ATRIX™ 4G",
      snippet: "MOTOROLA ATRIX 4G the world's most powerful smartphone."
    },
    {
      age: 3,
      id: "dell-streak-7",
      imageUrl: "assets/img/phones/dell-streak-7.0.jpg",
      name: "Dell Streak 7",
      snippet: "Introducing Dell™ Streak 7. Share photos, videos and movies together. It’s small enough to carry around, big enough to gather around."
    },
    {
      age: 4,
      id: "samsung-gem",
      imageUrl: "assets/img/phones/samsung-gem.0.jpg",
      name: "Samsung Gem™",
      snippet: "The Samsung Gem™ brings you everything that you would expect and more from a touch display smart phone – more apps, more features and a more affordable price."
    },
    {
      age: 5,
      id: "dell-venue",
      imageUrl: "assets/img/phones/dell-venue.0.jpg",
      name: "Dell Venue",
      snippet: "The Dell Venue; Your Personal Express Lane to Everything"
    },
    {
      age: 6,
      
      id: "nexus-s",
      imageUrl: "assets/img/phones/nexus-s.0.jpg",
      name: "Nexus S",
      snippet: "Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet."
    },
    {
      age: 7,
      id: "lg-axis",
      imageUrl: "assets/img/phones/lg-axis.0.jpg",
      name: "LG Axis",
      snippet: "Android Powered, Google Maps Navigation, 5 Customizable Home Screens"
    },
    {
      age: 8,
      id: "samsung-galaxy-tab",
      imageUrl: "assets/img/phones/samsung-galaxy-tab.0.jpg",
      name: "Samsung Galaxy Tab™",
      snippet: "Feel Free to Tab™. The Samsung Galaxy Tab™ brings you an ultra-mobile entertainment experience through its 7” display, high-power processor and Adobe® Flash® Player compatibility."
    },
    {
      age: 9,
      id: "samsung-showcase-a-galaxy-s-phone",
      imageUrl: "assets/img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg",
      name: "Samsung Showcase™ a Galaxy S™ phone",
      snippet: "The Samsung Showcase™ delivers a cinema quality experience like you’ve never seen before. Its innovative 4” touch display technology provides rich picture brilliance, even outdoors"
    },
    {
      age: 10,
      id: "droid-2-global-by-motorola",
      imageUrl: "assets/img/phones/droid-2-global-by-motorola.0.jpg",
      name: "DROID™ 2 Global by Motorola",
      snippet: "The first smartphone with a 1.2 GHz processor and global capabilities."
    },
    {
      age: 11,
      id: "droid-pro-by-motorola",
      imageUrl: "assets/img/phones/droid-pro-by-motorola.0.jpg",
      name: "DROID™ Pro by Motorola",
      snippet: "The next generation of DOES."
    },
    {
      age: 12,
      id: "motorola-bravo-with-motoblur",
      imageUrl: "assets/img/phones/motorola-bravo-with-motoblur.0.jpg",
      name: "MOTOROLA BRAVO™ with MOTOBLUR™",
      snippet: "An experience to cheer about."
    },
    {
      age: 13,
      id: "motorola-defy-with-motoblur",
      imageUrl: "assets/img/phones/motorola-defy-with-motoblur.0.jpg",
      name: "Motorola DEFY™ with MOTOBLUR™",
      snippet: "Are you ready for everything life throws your way?"
    },
    {
      age: 14,
      id: "t-mobile-mytouch-4g",
      imageUrl: "assets/img/phones/t-mobile-mytouch-4g.0.jpg",
      name: "T-Mobile myTouch 4G",
      snippet: "The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere, with or without Wi-Fi."
    },
    {
      age: 15,
      id: "samsung-mesmerize-a-galaxy-s-phone",
      imageUrl: "assets/img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg",
      name: "Samsung Mesmerize™ a Galaxy S™ phone",
      snippet: "The Samsung Mesmerize™ delivers a cinema quality experience like you’ve never seen before. Its innovative 4” touch display technology provides rich picture brilliance,even outdoors"
    },
    {
      age: 16,
      id: "sanyo-zio",
      imageUrl: "assets/img/phones/sanyo-zio.0.jpg",
      name: "SANYO ZIO",
      snippet: "The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value."
    },
    {
      age: 17,
      id: "samsung-transform",
      imageUrl: "assets/img/phones/samsung-transform.0.jpg",
      name: "Samsung Transform™",
      snippet: "The Samsung Transform™ brings you a fun way to customize your Android powered touch screen phone to just the way you like it through your favorite themed “Sprint ID Service Pack”."
    },
    {
      age: 18,
      id: "t-mobile-g2",
      imageUrl: "assets/img/phones/t-mobile-g2.0.jpg",
      name: "T-Mobile G2",
      snippet: "The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile's new network. Get the information you need, faster than you ever thought possible."
    },
    {
      age: 19,
      id: "motorola-charm-with-motoblur",
      imageUrl: "assets/img/phones/motorola-charm-with-motoblur.0.jpg",
      name: "Motorola CHARM™ with MOTOBLUR™",
      snippet: "Motorola CHARM fits easily in your pocket or palm.  Includes MOTOBLUR service."
    }  
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
