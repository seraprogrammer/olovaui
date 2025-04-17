import { ReactNode } from "react";
import {
  Home,
  Layers,
  CreditCard,
  Settings,
  Users,
  Square,
} from "lucide-react";

export interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  to?: string;
  active?: boolean;
  children?: SidebarItemProps[];
  defaultOpen?: boolean;
}

export const getSidebarItems = (currentPath: string): SidebarItemProps[] => [
  {
    icon: <Home className="h-5 w-5 text-blue-500" />,
    label: "Introduction",
    to: "/",
    active: currentPath === "/",
  },
  {
    icon: <Layers className="h-5 w-5 text-purple-500" />,
    label: "Components",
    defaultOpen: true,
    children: [
      {
        icon: <Square className="h-4 w-4 text-green-500" />,
        label: "Buttons",
        to: "/components/buttons",
        active: currentPath === "/components/buttons",
      },
      {
        icon: <CreditCard className="h-4 w-4 text-orange-500" />,
        label: "Tabs",
        to: "/components/tabs",
        active: currentPath === "/components/tabs",
      },
    ],
  },
];

export const getUtilityItems = (currentPath: string): SidebarItemProps[] => [
  {
    icon: <Users className="h-5 w-5 text-yellow-500" />,
    label: "Team",
    to: "/team",
    active: currentPath === "/team",
  },
  {
    icon: <Settings className="h-5 w-5 text-violet-500" />,
    label: "Settings",
    to: "/settings",
    active: currentPath === "/settings",
  },
];
