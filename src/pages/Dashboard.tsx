
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { LogsView } from '@/components/LogsView';
import { HistoryView } from '@/components/HistoryView';
import { FavoritesView } from '@/components/FavoritesView';

export interface MealEntry {
  id: string;
  input: string;
  calories: string;
  macros: {
    protein: string;
    carbs: string;
    fat: string;
  };
  tip: string;
  timestamp: Date;
  isFavorited: boolean;
}

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'logs' | 'history' | 'favorites'>('logs');
  const [mealHistory, setMealHistory] = useState<MealEntry[]>([]);
  const [favorites, setFavorites] = useState<MealEntry[]>([]);

  const handleMealSubmit = (entry: MealEntry) => {
    setMealHistory(prev => [entry, ...prev]);
  };

  const handleToggleFavorite = (entryId: string) => {
    const entry = mealHistory.find(e => e.id === entryId);
    if (entry) {
      const updatedEntry = { ...entry, isFavorited: !entry.isFavorited };
      
      // Update meal history
      setMealHistory(prev => 
        prev.map(e => e.id === entryId ? updatedEntry : e)
      );

      // Update favorites
      if (updatedEntry.isFavorited) {
        setFavorites(prev => [updatedEntry, ...prev]);
      } else {
        setFavorites(prev => prev.filter(e => e.id !== entryId));
      }
    }
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'logs':
        return (
          <LogsView 
            onMealSubmit={handleMealSubmit}
            onToggleFavorite={handleToggleFavorite}
            recentEntries={mealHistory.slice(0, 3)}
          />
        );
      case 'history':
        return (
          <HistoryView 
            entries={mealHistory}
            onToggleFavorite={handleToggleFavorite}
          />
        );
      case 'favorites':
        return (
          <FavoritesView 
            entries={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-nutrition-accent via-background to-nutrition-accent/50">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar activeTab={activeTab} onTabChange={setActiveTab} />
          <main className="flex-1 p-6">
            <div className="max-w-4xl mx-auto">
              {renderActiveView()}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
