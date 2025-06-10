import styles from "@/styles/page.module.css";
import Card from "@/components/Card";
import Image from "@/images/i1.jpg";
import bgImage from "@/images/1629112074798.jpg";
import { useUser } from "@/app/page";

export default function ProfileCard() {
  const { user } = useUser();
  return (
    <Card>
      <img src={bgImage.src} alt="bgImage" className={styles.bgImage} />
      <img
        src={user.profilePic}
        alt="Profile"
        className={styles.profileImage}
      />
      <h2 className={styles.profileName}>{user.name}</h2>
      <p className={styles.profileDescription}>
        {user.jobTitle}
        Experienced Dotnet Developer...
      </p>
    </Card>
  );
}
