import styles from "@/styles/page.module.css";
import images from "@/images/s1.jpg";
import PostReaction from "@/components/postReaction";

export default function Post() {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postHeader}>
        <div>
          <h4 className={styles.postTitle}>FYNXT</h4>
          <p className={styles.postSubtitle}>3,632 followers · 2d</p>
        </div>
        <button className={styles.optionsButton}>•••</button>
      </div>
      <p className={styles.postText}>
        Marshmallows, spaghetti, and a whole lot of teamwork!
      </p>
      <img src={images.src} alt="Post" className={styles.postImage} />
      <PostReaction />
    </div>
  );
}
