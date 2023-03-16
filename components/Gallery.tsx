import styles from "./gallery.module.css";
import useSwr from "swr";
import cn from "../utils/cn";

const fetcher = (url) => fetch(url).then((res) => res.json());

interface GalleryProps {
  url: string
  start: number 
  end: number 
}

const Gallery = (props:GalleryProps) => {
  const { data, error } = useSwr(props.url, fetcher);

  if (error) return <div>failed to load</div>;

  return (
    <div className={styles.container}>
      {data?.slice(props.start, props.end).map((image: string, index: number) => (
        <figure className={styles.figure}>
          <img
            className={cn(styles.fit, styles.img)}
            key={index}
            src={image}
            alt={image}
          />
        </figure>
      ))}
    </div>
  );
};

export default Gallery;
