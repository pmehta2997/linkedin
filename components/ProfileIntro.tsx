import styles from "@/styles/page.module.css";
import Card from "@/components/Card";
import Image from "@/images/i1.jpg";

export default function ProfileCard() {
  return (
    <Card>
      <img src={Image.src} alt="Profile" className={styles.profileImage} />
      <h2 className={styles.profileName}>Pragya Mehta</h2>
      <p className={styles.profileDescription}>
        Experienced Dotnet Developer...
      </p>
    </Card>
  );
}
