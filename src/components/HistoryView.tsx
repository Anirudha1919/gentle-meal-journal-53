
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { MealEntry } from '@/pages/Dashboard';

interface HistoryViewProps {
  entries: MealEntry[];
  onToggleFavorite: (entryId: string) => void;
}

export function HistoryView({ entries, onToggleFavorite }: HistoryViewProps) {
  if (entries.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-3xl font-medium text-nutrition-text mb-4 font-inter">
          Your Meal History
        </h2>
        <p className="text-nutrition-text-light font-inter">
          Your logged meals will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-medium text-nutrition-text mb-2 font-inter">
          Your Meal History
        </h2>
        <p className="text-nutrition-text-light font-inter">
          {entries.length} meal{entries.length !== 1 ? 's' : ''} logged
        </p>
      </div>

      <div className="space-y-4">
        {entries.map((entry) => (
          <Card key={entry.id} className="p-6 bg-card/90 backdrop-blur-sm border border-nutrition-green/10 shadow-lg rounded-2xl">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-lg text-nutrition-text font-inter mb-2">
                    {entry.input}
                  </p>
                  <p className="text-sm text-nutrition-text-light font-inter">
                    {entry.timestamp.toLocaleDateString()} at {entry.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onToggleFavorite(entry.id)}
                  className={`rounded-full transition-all duration-200 ${
                    entry.isFavorited
                      ? 'text-red-500 hover:text-red-600'
                      : 'text-nutrition-text-light hover:text-red-500'
                  }`}
                >
                  <Heart 
                    className={`w-6 h-6 ${entry.isFavorited ? 'fill-current' : ''}`} 
                  />
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-nutrition-accent/30 p-3 rounded-xl">
                  <h4 className="text-xs font-medium text-nutrition-text-light mb-1 font-inter">
                    CALORIES
                  </h4>
                  <p className="text-lg font-semibold text-nutrition-green font-inter">
                    {entry.calories}
                  </p>
                </div>

                <div className="bg-nutrition-accent/30 p-3 rounded-xl">
                  <h4 className="text-xs font-medium text-nutrition-text-light mb-1 font-inter">
                    MACROS
                  </h4>
                  <p className="text-sm text-nutrition-text font-inter">
                    P: {entry.macros.protein} • C: {entry.macros.carbs} • F: {entry.macros.fat}
                  </p>
                </div>

                <div className="bg-nutrition-accent/30 p-3 rounded-xl">
                  <h4 className="text-xs font-medium text-nutrition-text-light mb-1 font-inter">
                    TIP
                  </h4>
                  <p className="text-sm text-nutrition-text font-inter line-clamp-2">
                    {entry.tip}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
