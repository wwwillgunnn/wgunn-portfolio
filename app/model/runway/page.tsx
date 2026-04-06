import Card from "@/components/model/Card";

export default function runwayPage() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <RunwayCard
        image="/model/arco/runway-pose.png"
        title="Arco runway SS26"
        link="https://www.youtube.com/watch?v=JPxz228KgIQ&list=LL&index=22&t=280s"
      />
      <RunwayCard
        image="/model/avi/runway-thumbnail.jpeg"
        title="AVI runway FW25"
        link="https://www.instagram.com/p/DMZwSEtvTEF/?img_index=10"
      />
    </div>
  );
}

interface RunwayCardProps {
  image: string;
  title: string;
  link: string;
}

export function RunwayCard({ image, title, link }: RunwayCardProps) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-center">
      <Card
        image={image}
        title={title}
        link={link}
        variant="external"
        size="lg"
      />
      <span>{title}</span>
    </div>
  );
}
