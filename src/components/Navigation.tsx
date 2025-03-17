
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  // Mobile Navigation using Sheet component
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-medblue border-l-medblue w-[250px] pt-12">
          <nav className="flex flex-col gap-4 mt-8">
            <Link 
              to="/" 
              onClick={closeMenu}
              className="text-white hover:bg-white/10 p-3 rounded-md transition-colors text-right flex flex-row-reverse items-center justify-end gap-3"
            >
              בית
            </Link>
            <Link 
              to="/blog" 
              onClick={closeMenu}
              className="text-white hover:bg-white/10 p-3 rounded-md transition-colors text-right flex flex-row-reverse items-center justify-end gap-3"
            >
              <Book size={18} />
              בלוג
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop Navigation
  return (
    <NavigationMenu className="text-white">
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
