
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Utensils, Zap, Activity, Heart } from 'lucide-react';

const MealPreview = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-medium text-nutrition-text mb-6 font-inter">
        See how it works
      </h2>
      <Card className="max-w-lg mx-auto p-8 bg-card/90 backdrop-blur-sm border border-nutrition-green/10 shadow-lg rounded-2xl">
        {/* Meal Input */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Utensils className="w-4 h-4 text-nutrition-green" />
            <span className="text-sm font-medium text-nutrition-text-light font-inter">Your meal</span>
          </div>
          <p className="text-nutrition-text bg-nutrition-accent p-4 rounded-xl text-left font-inter">
            "Had dal, rice, and papad"
          </p>
        </div>

        {/* AI Response */}
        <div className="space-y-4">
          {/* Calories */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-nutrition-text-light font-inter">Calories</span>
            </div>
            <Badge variant="secondary" className="bg-amber-100 text-amber-700 font-inter border-0">
              540 kcal
            </Badge>
          </div>

          {/* Macros */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-nutrition-green" />
              <span className="text-sm font-medium text-nutrition-text-light font-inter">Macros</span>
            </div>
            <div className="flex gap-2 justify-center">
              <Badge variant="outline" className="border-nutrition-green/30 text-nutrition-green font-inter">
                Protein 15g
              </Badge>
              <Badge variant="outline" className="border-nutrition-green/30 text-nutrition-green font-inter">
                Carbs 65g
              </Badge>
              <Badge variant="outline" className="border-nutrition-green/30 text-nutrition-green font-inter">
                Fat 20g
              </Badge>
            </div>
          </div>

          {/* Gentle Tip */}
          <div className="pt-4 border-t border-nutrition-green/10">
            <div className="flex items-start gap-2">
              <Heart className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-sm font-medium text-nutrition-text-light block mb-1 text-left font-inter">Gentle tip</span>
                <p className="text-sm text-nutrition-text text-left font-inter">
                  "Comforting and nourishing! Add some salad next time for more fiber."
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MealPreview;
