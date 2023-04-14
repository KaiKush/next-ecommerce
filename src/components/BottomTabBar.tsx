import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Tab = {
  name: string;
  path: string;
  icon: any;
};

interface TabItemProps {
  tab: Tab;
}

const TabItem: React.FC<TabItemProps> = ({ tab }) => {
  const router = useRouter();
  const isActive = router.pathname === tab?.path;

  return (
    <Link
      href={tab?.path}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      scroll={false}
    >
      {React.createElement(tab?.icon, {
        style: {
          fontSize: 22,
          color: isActive ? "red" : "black",
        },
      })}
      <label
        style={{
          color: isActive ? "red" : "black",
        }}
      >
        {tab?.name}
      </label>
    </Link>
  );
};

interface BottomTabBarProps {
  tabArray: Tab[];
}

const BottomTabBar: React.FC<BottomTabBarProps> = ({ tabArray }) => {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: 90,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: -2,
        // },
        // shadowOpacity: 0.05,
        // shadowRadius: 6,
        // elevation: 1,
        borderRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}
    >
      {tabArray.map((tab) => (
        <TabItem key={tab?.path} tab={tab} />
      ))}
    </nav>
  );
};

export default BottomTabBar;
