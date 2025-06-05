import styles from "@/styles/page.module.css";
import { FaVideo } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { MdOutlineArticle } from "react-icons/md";

export default function CreatePostBox() {
    return (
        <div className={styles.createPostBox}>
            <input placeholder="Start a post" className={styles.postInput} />
            <div className={styles.buttonGroup}>
                <button className={styles.video}><FaVideo /> Video</button>
                <button className={styles.photo}><IoMdPhotos /> Photo</button>
                <button className={styles.article}><MdOutlineArticle /> Write article</button>
            </div>
        </div>
    );
}
