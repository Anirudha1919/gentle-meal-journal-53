
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { MealEntry } from '@/pages/Dashboard';

interface FavoritesViewProps {
  entries: MealEntry[];
  onToggleFavorite: (entryId: string) => void;
}

export function FavoritesView({ entries, onToggleFavorite }: FavoritesViewProps) {
  if (entries.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mb-6">
          <Heart className="w-16 h-16 text-nutrition-green/30 mx-auto mb-4" />
        </div>
        <h2 className="text-3xl font-medium text-nutrition-text mb-4 font-inter">
          Your Favorite Meals
        </h2>
        <p className="text-nutrition-text-light font-inter max-w-md mx-auto">
          Meals you favorite will appear here for easy reference and inspiration
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-medium text-nutrition-text mb-2 font-inter">
          Your Favorite Meals
        </h2>
        <p className="text-nutrition-text-light font-inter">
          {entries.length} favorite meal{entries.length !== 1 ? 's' : ''} saved
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {entries.map((entry) => (
          <Card key={entry.id} className="p-6 bg-card/90 backdrop-blur-sm border border-nutrition-green/10 shadow-lg rounded-2xl">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-lg text-nutrition-text font-inter mb-2 leading-relaxed">
                    {entry.input}
                  </p>
                  <p className="text-sm text-nutrition-text-light font-inter">
                    Favorited on {entry.timestamp.toLocaleDateString()}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onToggleFavorite(entry.id)}
                  className="text-red-500 hover:text-red-600 rounded-full transition-all duration-200"
                >
                  <Heart className="w-6 h-6 fill-current" />
                </Button>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-nutrition-text-light font-inter">Calories</span>
                  <span className="font-semibold text-nutrition-green font-inter">{entry.calories}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-nutrition-text-light font-inter">Protein</span>
                  <span className="text-nutrition-text font-inter">{entry.macros.protein}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-nutrition-text-light font-inter">Carbs</span>
                  <span className="text-nutrition-text font-inter">{entry.macros.carbs}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-nutrition-text-light font-inter">Fat</span>
                  <span className="text-nutrition-text font-inter">{entry.macros.fat}</span>
                </div>
              </div>

              <div className="bg-nutrition-accent/50 p-4 rounded-xl">
                <h4 className="text-xs font-medium text-nutrition-text-light mb-2 font-inter">
                  NUTRITION TIP
                </h4>
                <p className="text-sm text-nutrition-text font-inter leading-relaxed">
                  {entry.tip}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
