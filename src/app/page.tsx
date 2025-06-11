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
import Imagegallery from "@/components/ImageGallery/imageGallery";
import Homepage from "@/components/Home/Homepage";
import ContentPage from "@/components/Profilepage/ContentPage";

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
type MenuItem = "home" | "MyNetwork" | "ViewProfile" | null;

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
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem>(null);

  const renderComponent = () => {
    switch (selectedMenuItem) {
      case "home":
        return <Homepage />;
      case "MyNetwork":
        return <Imagegallery />;
      case "ViewProfile":
        return <ContentPage />;
      default:
        return <Homepage />;
    }
  };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header onMenuSelect={setSelectedMenuItem} />
      <div>{renderComponent()}</div>
      <div style={{ backgroundColor: "#f5f3ef" }}>
        <ContentPage />
      </div>
    </UserContext.Provider>
  );
}
