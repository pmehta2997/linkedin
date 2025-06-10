"use client";

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import Image from "@/images/i1.jpg";
import LinksSidebar from "@/components/linksSidebar/linksSidebar";
import ProfileIntro from "@/components/ProfileIntro";
import Analysis from "@/components/analysis";
import Post from "@/components/post";
import CreatePost from "@/components/CreatePost/CreatePost";
import styles from "@/styles/page.module.css";
import Linksidebar from "@/components/linksSidebar/linksSidebar.module.css";
import NewsCard from "@/components/NewsCard";
import Header from "@/components/header";

interface User {
  name: string;
  profilePic: string;
  jobTitle: string;
}

interface UserContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUser must be used inside UserContext.Provider");
  return context;
};

export default function Home() {
  const [user, setUser] = useState<User>({
    name: "Pragya Mehta",
    profilePic: Image.src,
    jobTitle: "DotNet Developer",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
    </UserContext.Provider>
  );
}
