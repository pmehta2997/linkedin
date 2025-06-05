import styles from "@/styles/page.module.css";
import Card from "@/components/Card";

export default function ProfileCard() {
    return (
        <Card>
            <div className={styles.profileCard}>
                <img src="/your-profile.jpg" alt="Profile" className={styles.profileImage} />
                <h2 className={styles.profileName}>Pragya Mehta</h2>
                <p className={styles.profileDescription}>Experienced Dotnet Developer...</p>
            </div>
        </Card>
    );
}