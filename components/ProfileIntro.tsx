import styles from "@/styles/page.module.css";
import Card from "@/components/Card";
import Image from "@/images/i1.jpg";
import bgImage from "@/images/1629112074798.jpg";
import { useUser } from "@/app/page";
import React, { useReducer, useMemo } from "react";

export default function ProfileCard() {
  const { user } = useUser();

  const initialState = { count: 0 };
  interface State {
    count: number;
  }

  type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const profileStatus = useMemo(() => {
    console.log("Recomputing profile status...", state.count);
    return `${user.name} has ${state.count} profile view${
      state.count !== 1 ? "s" : ""
    }`;
  }, [user.name, state.count]);

  return (
    <Card>
      <img src={bgImage.src} alt="bgImage" className={styles.bgImage} />
      <img
        src={user.profilePic}
        alt="Profile"
        className={styles.profileImage}
      />
      <button className={styles.profileName} onClick={handleIncrement}>
        {user.name}
      </button>

      <p className={styles.profileDescription}>
        {user.jobTitle}
        Experienced Dotnet Developer...
      </p>

      <p style={{ fontWeight: "bold", marginTop: "10px" }}>{profileStatus}</p>
    </Card>
  );
}
