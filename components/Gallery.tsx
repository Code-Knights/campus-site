import style from "./gallery.module.css";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Gallery = () => {
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: "10px",
      alignItems: "center",
      justifyContent: "center",
      width: "850px",
      height: "850px",
    },
    image: {
      width: "100%",
      ObjectFit: "cover",
      height: "100%",
    },
  };
  const { data, error } = useSwr("/api/images", fetcher);

  if (error) return <div>failed to load</div>;

  return (
    <div style={styles.container}>
      {data?.map((image: string, index: number) => (
        <img
          className={style.fit}
          key={index}
          src={image}
          alt={image}
          style={styles.image}
        />
      ))}
    </div>
  );
};

export default Gallery;
