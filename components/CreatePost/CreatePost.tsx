import styles from "@/components/CreatePost/createPost.module.css";
import { FaVideo } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { MdOutlineArticle } from "react-icons/md";
import Image from "@/images/i1.jpg";

export default function CreatePostBox() {
  return (
    <div className={styles.createPostBox}>
      <div className={styles.profileInput}>
        <img src={Image.src} alt="Me" className={styles.profileImage} />
        <input placeholder="Start a post" className={styles.postInput} />
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.button}>
          <i className={styles.icon}>
            <FaVideo />
          </i>
          <span className={styles.iconText}>Video</span>
        </button>
        <button className={styles.button}>
          <i className={styles.icon}>
            <IoMdPhotos />
          </i>
          <span className={styles.iconText}>Photo</span>
        </button>
        <button className={styles.button}>
          <i className={styles.icon}>
            <MdOutlineArticle />
          </i>
          <span className={styles.iconText}>Write article</span>
        </button>
      </div>
    </div>
  );
}
