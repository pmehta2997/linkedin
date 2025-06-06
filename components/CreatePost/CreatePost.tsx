import styles from "@/components/CreatePost/createPost.module.css";
import { FaVideo } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { MdOutlineArticle } from "react-icons/md";
import Image from "@/images/i1.jpg";

export default function CreatePostBox() {
  return (
    <div className={styles.createPostBox}>
      <div className={styles.profileInput}>
        <img
          src={Image.src}
          alt="Me"
          style={{ width: 34, height: 34, borderRadius: "50%" }}
        />
        <input placeholder="Start a post" className={styles.postInput} />
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.video}>
          <FaVideo /> Video
        </button>
        <button className={styles.photo}>
          <IoMdPhotos /> Photo
        </button>
        <button className={styles.article}>
          <MdOutlineArticle /> Write article
        </button>
      </div>
    </div>
  );
}
