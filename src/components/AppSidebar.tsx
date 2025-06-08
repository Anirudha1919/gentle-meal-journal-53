
import React from 'react';
import { Edit3, Clock, Heart, FileText } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from '@/components/ui/sidebar';

interface AppSidebarProps {
  activeTab: 'logs' | 'history' | 'favorites';
  onTabChange: (tab: 'logs' | 'history' | 'favorites') => void;
}

const menuItems = [
  {
    id: 'logs' as const,
    title: 'Logs',
    icon: FileText,
  },
  {
    id: 'history' as const,
    title: 'History',
    icon: Clock,
  },
  {
    id: 'favorites' as const,
    title: 'Favorites',
    icon: Heart,
  },
];

export function AppSidebar({ activeTab, onTabChange }: AppSidebarProps) {
  return (
    <Sidebar className="w-64 border-r border-nutrition-green/10">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-nutrition-green rounded-xl">
            <Edit3 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-nutrition-green font-inter">
            NourishNote
          </h1>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-nutrition-text-light font-inter mb-4">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onTabChange(item.id)}
                    className={`w-full justify-start gap-3 p-3 rounded-xl transition-all duration-200 font-inter ${
                      activeTab === item.id
                        ? 'bg-nutrition-green text-white shadow-md'
                        : 'text-nutrition-text hover:bg-nutrition-accent hover:text-nutrition-green'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
