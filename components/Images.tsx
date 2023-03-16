import Image from "next/image";

interface IProps {
  title: string;
  src: string;
}

const Images = ({ src, title }: IProps) => {
  return <Image src={src} width={400} height={400} alt={title} style={{ marginTop: "10px"}} />;
};

export default Images;
