import {
  HomeFilled,
  HeartOutlined,
  SearchOutlined,
  ScheduleOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

const ROUTES = [
  { name: "Home", path: "/", icon: HomeFilled },
  { name: "Shopping List", path: "/shopping-list", icon: HeartOutlined },
  { name: "Search", path: "/search", icon: SearchOutlined },
  { name: "My Order", path: "/my-order", icon: ScheduleOutlined },
  { name: "More", path: "/more", icon: EllipsisOutlined },
];

export default ROUTES;
