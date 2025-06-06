import Image from "next/image";
import LinksSidebar from "@/components/linksSidebar/linksSidebar";
import ProfileIntro from "@/components/ProfileIntro";
import Analysis from "@/components/analysis";
import Post from "@/components/post";
import CreatePost from "@/components/CreatePost/CreatePost";
import styles from "@/styles/page.module.css";
import Linksidebar from "@/components/linksSidebar/linksSidebar.module.css";
import NewsCard from "@/components/NewsCard";
import Header from "@/components/header";
import linksSidebar from "@/components/linksSidebar/linksSidebar";

export default function Home() {
  return (
    <>
      {" "}
      <Header />
      <div className={styles.container}>
        <div className={Linksidebar.Leftsidebar}>
          <ProfileIntro />
          <Analysis />

          <LinksSidebar />
        </div>

        <div className={styles.mainFeed}>
          <CreatePost />
          <Post />
        </div>
        <div className={styles.sidebar}>
          <NewsCard />
        </div>
      </div>
    </>
  );
}
