import styles from "@/components/linksSidebar/linksSidebar.module.css";
import Card from "@/components/Card";

export default function linksSidebar() {
  const links = ["Saved items", "Groups", "Newsletters", "Events"];

  return (
    <Card>
      {links.map((item) => (
        <p key={item} className={styles.sidebarlinkitem}>
          {item}
        </p>
      ))}
    </Card>
  );
}
