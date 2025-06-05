import styles from "@/styles/page.module.css";

export default function NewsCard() {
  const news = [
    "Nvidia reclaims most valuable crown",
    "10 dead in Bengaluru stampede",
    "Staffing firms focus on GCCs",
    "Banks invest in mutual funds",
    "How US tariffs impact steelmakers",
  ];

  return (
    <div className={styles.newscard}>
      <h4 className={styles.title}> LinkedIn News</h4>
      {news.map((item, i) => (
        <p key={i} className={styles.newsItem}>
          • {item}
        </p>
      ))}
    </div>
  );
}
