import sidebar from "@/components/linksSidebar/linksSidebar";
import styles from "@/components/linksSidebar/linksSidebar.module.css";
import Card from "@/components/Card";
import ContentPage from "@/components/Profilepage/ContentPage";

export default function linksSidebar() {
  const links = ["Saved items", "Groups", "Newsletters", "Events"];

  return (
    <div className={styles.container}>
      <Card>
        {links.map((item) => (
          <p key={item} className={styles.sidebarlinkitem}>
            {item}
          </p>
        ))}
      </Card>
    </div>
  );
}
