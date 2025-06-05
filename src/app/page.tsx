import Image from "next/image";
import LinksSidebar from "@/components/linksSidebar";
import ProfileIntro from "@/components/ProfileIntro";
import Analysis from "@/components/anaysis";
import Post from "@/components/post";
import CreatePost from "@/components/CreatePost";
import styles from "@/styles/page.module.css";
import NewsCard from "@/components/NewsCard";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      {" "}
      <Header />
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <ProfileIntro />

          <div className={styles.card}>
            <Analysis />
          </div>
          <div className={styles.card}>
            <LinksSidebar />
          </div>
        </div>

        <div className={styles.mainFeed}>
          <div className={styles.card}>
            <CreatePost />
          </div>
          <Post />
        </div>
        <div className={styles.sidebar}>
          <div className={styles.card}>
            <NewsCard />
          </div>
        </div>
      </div>
    </>
  );
}
