
import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  return (
    <NavigationMenu className="text-white" dir="rtl">
      <NavigationMenuList className="flex gap-4">
        <NavigationMenuItem>
          <Link to="/" className={navigationMenuTriggerStyle() + " bg-transparent hover:bg-white/20 text-white"}>
            בית
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/blog" className={navigationMenuTriggerStyle() + " bg-transparent hover:bg-white/20 text-white flex items-center gap-2"}>
            <Book size={16} />
            בלוג
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
