import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const DataCard = ({ icon, amount, title }) => {
  return (
    <>
    <Card className="w-full border-0 shadow-none">
  <CardHeader>
  <Image height={30} width={30}
        src={icon}
        alt={title}
        className="mb-3"
        />
    <CardTitle className="text-lg font-extrabold text-custom-leafGreen">{amount}</CardTitle>
    <CardDescription className="text-custom-darkGray text-lg font-normal">{title}</CardDescription>
  </CardHeader>
 
 
</Card>

     
    </>
  );
};
