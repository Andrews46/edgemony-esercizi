import styles from "./index.module.scss";
import Link from "next/link";
// import Image from "next/image";
const Card = (props) => {
  const { post } = props;
  return (
    <div className={styles.Card}>
      <Link href={"/blog/" + post?.slug}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.body}>{post.body}</p>
        <p className={styles.date}>{post.date}</p>
        {/* <Image src={post.image} width={300} height={400} alt={post?.title} /> */}
      </Link>
    </div>
  );
};
export default Card;
