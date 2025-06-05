import styles from "@/styles/page.module.css"

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
            <p className={styles.postText}>Marshmallows, spaghetti, and a whole lot of teamwork!</p>
            <img src="/challenge.jpg" alt="Post" className={styles.postImage} />
        </div>
    );
}