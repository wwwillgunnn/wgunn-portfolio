import type { ImageMetadata } from "astro";

// 36th
import img36th3QuartersTopDown from "@/assets/model/36th/3-quarters-top-down.jpeg";
import img36th3Quarters from "@/assets/model/36th/3-quarters.jpeg";
import img36thBest from "@/assets/model/36th/best.jpeg";
import img36thFaceCardZoomed from "@/assets/model/36th/face-card-zoomed.jpeg";
import img36thFrontOnZoomed from "@/assets/model/36th/front-on-zoomed.jpeg";
import img36thFrontOn from "@/assets/model/36th/front-on.jpeg";
import img36thHappy from "@/assets/model/36th/happy.jpeg";
import img36thHarshLight from "@/assets/model/36th/harsh-light.jpeg";
import img36thOffAngle from "@/assets/model/36th/off-angle.jpeg";
import img36thSmallAngle from "@/assets/model/36th/small-angle.jpeg";

// ARCO
import imgArcoLookbook from "@/assets/model/arco/ARCO_LB_SS26_00014.jpg";
import imgArcoFriends from "@/assets/model/arco/friends.png";
import imgArcoRunwayReady from "@/assets/model/arco/runway-ready.png";
import imgArcoRunwayPose from "@/assets/model/arco/runway-pose.PNG";

// AVI
import imgAviLookbook from "@/assets/model/avi/AVI_LB_SS25.jpg";
import imgAviFullbody from "@/assets/model/avi/fullbody.jpg";
import imgAviRunwayLook from "@/assets/model/avi/runway-look-1.JPEG";
import imgAviRunwayThumbnail from "@/assets/model/avi/runway-thumbnail.JPEG";

// OKALANI BAG
import imgBagFullBody from "@/assets/model/okalani-bag/full-body.jpg";
import imgBagFullBody2 from "@/assets/model/okalani-bag/full-body2.jpg";
import imgBagSitting from "@/assets/model/okalani-bag/sitting.jpg";

// OKALANI SHIRT
import imgShirtCrouching from "@/assets/model/okalani-shirt/crouching.jpg";
import imgShirtHappy from "@/assets/model/okalani-shirt/happy.jpg";
import imgShirtHappy2 from "@/assets/model/okalani-shirt/happy2.jpg";
import imgShirtHappy3 from "@/assets/model/okalani-shirt/happy3.jpg";
import imgShirtHappy4 from "@/assets/model/okalani-shirt/happy4.jpg";
import imgShirtHappy5 from "@/assets/model/okalani-shirt/happy5.jpg";
import imgShirtHappy6 from "@/assets/model/okalani-shirt/happy6.jpg";
import imgShirtSideProfile from "@/assets/model/okalani-shirt/side-profile.jpg";
import imgShirtSittingFull from "@/assets/model/okalani-shirt/sitting-full.jpg";
import imgShirtSittingHalfZoomed from "@/assets/model/okalani-shirt/sitting-half-zoomed.jpg";
import imgShirtSittingHalf from "@/assets/model/okalani-shirt/sitting-half.jpg";
import imgShirtSittingSolo from "@/assets/model/okalani-shirt/sitting-solo.jpg";
import imgShirtSittingZoomed from "@/assets/model/okalani-shirt/sitting-zoomed.jpg";
import imgShirtSitting from "@/assets/model/okalani-shirt/sitting.jpg";
import imgShirtSubtleSmirk from "@/assets/model/okalani-shirt/subtle-smirk.jpg";
import imgShirtTorsoSpacedOut from "@/assets/model/okalani-shirt/torso-spaced-out.jpg";
import imgShirtTorso from "@/assets/model/okalani-shirt/torso.jpg";

export interface GalleryImage {
  image: ImageMetadata;
  title: string;
  link: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  // 36th
  {
    image: img36th3QuartersTopDown,
    title: "3 Quarters Top Down",
    link: "/model/36th",
    category: "36th",
  },
  {
    image: img36th3Quarters,
    title: "3 Quarters",
    link: "/model/36th",
    category: "36th",
  },
  {
    image: img36thBest,
    title: "Best",
    link: "/model/36th",
    category: "36th",
  },
  {
    image: img36thFaceCardZoomed,
    title: "Face Card (Zoomed)",
    link: "/model/36th",
    category: "36th",
  },
  {
    image: img36thFrontOnZoomed,
    title: "Front On (Zoomed)",
    link: "/model/36th",
    category: "36th",
  },
  {
    image: img36thFrontOn,
    title: "Front On",
    link: "/model/36th",
    category: "36th",
  },
  {
    image: img36thHappy,
    title: "Happy",
    link: "/model/36th",
    category: "36th",
  },
  {
    image: img36thHarshLight,
    title: "Harsh Light",
    link: "/model/36th",
    category: "36th",
  },
  {
    image: img36thOffAngle,
    title: "Off Angle",
    link: "/model/36th",
    category: "36th",
  },
  {
    image: img36thSmallAngle,
    title: "Small Angle",
    link: "/model/36th",
    category: "36th",
  },

  // ARCO
  {
    image: imgArcoLookbook,
    title: "ARCO Lookbook",
    link: "/model/arco",
    category: "arco",
  },
  {
    image: imgArcoFriends,
    title: "Friends",
    link: "/model/arco",
    category: "arco",
  },
  {
    image: imgArcoRunwayReady,
    title: "Runway Ready",
    link: "/model/arco",
    category: "arco",
  },
  {
    image: imgArcoRunwayPose,
    title: "Runway Thumbnail",
    link: "/model/arco",
    category: "arco",
  },

  // AVI
  {
    image: imgAviLookbook,
    title: "AVI Lookbook",
    link: "/model/avi",
    category: "avi",
  },
  {
    image: imgAviFullbody,
    title: "Full Body",
    link: "/model/avi",
    category: "avi",
  },
  {
    image: imgAviRunwayLook,
    title: "Runway Look",
    link: "/model/avi",
    category: "avi",
  },
  {
    image: imgAviRunwayThumbnail,
    title: "Runway Thumbnail",
    link: "/model/avi",
    category: "avi",
  },

  // OKALANI BAG
  {
    image: imgBagFullBody,
    title: "Full Body",
    link: "/model/okalani-bag",
    category: "okalani-bag",
  },
  {
    image: imgBagFullBody2,
    title: "Full Body 2",
    link: "/model/okalani-bag",
    category: "okalani-bag",
  },
  {
    image: imgBagSitting,
    title: "Sitting",
    link: "/model/okalani-bag",
    category: "okalani-bag",
  },

  // OKALANI SHIRT
  {
    image: imgShirtCrouching,
    title: "Crouching",
    link: "/model/okalani-shirt",
    category: "okalani-shirt",
  },
  {
    image: imgShirtHappy,
    title: "Happy",
    link: "/model/okalani-shirt",
    category: "okalani-shirt",
  },
  {
    image: imgShirtHappy2,
    title: "Happy 2",
    link: "/model/okalani-shirt",
    category: "okalani-shirt",
  },
  {
    image: imgShirtHappy3,
    title: "Happy 3",
    link: "/model/okalani-shirt",
    category: "okalani-shirt",
  },
  {
    image: imgShirtHappy4,
    title: "Happy 4",
    link: "/model/okalani-shirt",
    category: "okalani-shirt",
  },
  {
    image: imgShirtHappy5,
    title: "Happy 5",
    link: "/model/okalani-shirt",
    category: "okalani-shirt",
  },
  {
    image: imgShirtHappy6,
    title: "Happy 6",
    link: "/model/okalani-shirt",
    category: "okalani-shirt",
  },
  {
    image: imgShirtSideProfile,
    title: "Side Profile",
    link: "/model/okalani-shirt",
    category: "okalani-shirt",
  },
  {
    image: imgShirtSittingFull,
    title: "Sitting Full",
    link: "/model/okalani-shirt",
    category: "okalani-shirt",
  },
  {
    image: imgShirtSittingHalfZoomed,
    title: "Sitting Half (Zoomed)",
    link: "/model/okalani-shirt",
    category: "okalani-shirt",
  },
  {
    image: imgShirtSittingHalf,
    title: "Sitting Half",
    link: "/model/okalani-shirt",
    category: "okalani-shirt",
  },
  {
    image: imgShirtSittingSolo,
    title: "Sitting Solo",
    link: "/model/okalani-shirt",
    category: "okalani-shirt",
  },
  {
    image: imgShirtSittingZoomed,
    title: "Sitting Zoomed",
    link: "/model/okalani-shirt",
    category: "okalani-shirt",
  },
  {
    image: imgShirtSitting,
    title: "Sitting",
    link: "/model/okalani-shirt",
    category: "okalani-shirt",
  },
  {
    image: imgShirtSubtleSmirk,
    title: "Subtle Smirk",
    link: "/model/okalani-shirt",
    category: "okalani-shirt",
  },
  {
    image: imgShirtTorsoSpacedOut,
    title: "Torso Spaced Out",
    link: "/model/okalani-shirt",
    category: "okalani-shirt",
  },
  {
    image: imgShirtTorso,
    title: "Torso",
    link: "/model/okalani-shirt",
    category: "okalani-shirt",
  },
];
