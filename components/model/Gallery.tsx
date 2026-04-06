import Card from "./Card";
import { galleryImages } from "@/app/model/galleryData";

export default function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {galleryImages.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
          link={item.link}
          variant="modal"
          size="xl"
        />
      ))}
    </div>
  );
}
