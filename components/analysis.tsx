import Card from "@/components/Card";
import styles from "@/styles/page.module.css";

export default function analysis() {
  return (
    <Card>
      <div className={styles.analyticsCard}>
        <p>
          Profile views<span>24</span>
        </p>
        <a>View all analytics</a>
      </div>
    </Card>
  );
}
