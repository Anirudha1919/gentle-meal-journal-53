
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart } from 'lucide-react';
import { MealEntry } from '@/pages/Dashboard';

interface LogsViewProps {
  onMealSubmit: (entry: MealEntry) => void;
  onToggleFavorite: (entryId: string) => void;
  recentEntries: MealEntry[];
}

export function LogsView({ onMealSubmit, onToggleFavorite, recentEntries }: LogsViewProps) {
  const [mealInput, setMealInput] = useState('');
  const [lastSubmittedEntry, setLastSubmittedEntry] = useState<MealEntry | null>(null);

  const generateMockResponse = (input: string): Omit<MealEntry, 'id' | 'timestamp' | 'isFavorited'> => {
    // Mock AI response - in a real app this would come from an API
    const responses = [
      {
        calories: '420 kcal',
        macros: { protein: '10g', carbs: '50g', fat: '18g' },
        tip: 'Great fiber start to the day — consider adding some chia for extra protein tomorrow.'
      },
      {
        calories: '320 kcal',
        macros: { protein: '15g', carbs: '35g', fat: '12g' },
        tip: 'Nice balanced meal! The protein will help keep you satisfied longer.'
      },
      {
        calories: '280 kcal',
        macros: { protein: '8g', carbs: '45g', fat: '10g' },
        tip: 'Lovely light choice. Adding some nuts could provide healthy fats and extra satisfaction.'
      }
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    return {
      input,
      ...randomResponse
    };
  };

  const handleSubmit = () => {
    if (!mealInput.trim()) return;

    const mockResponse = generateMockResponse(mealInput);
    const newEntry: MealEntry = {
      id: Date.now().toString(),
      timestamp: new Date(),
      isFavorited: false,
      ...mockResponse
    };

    setLastSubmittedEntry(newEntry);
    onMealSubmit(newEntry);
    setMealInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-medium text-nutrition-text mb-2 font-inter">
          Log your meals here.
        </h2>
        <p className="text-nutrition-text-light font-inter">
          Share what you ate in your own words
        </p>
      </div>

      {/* Input Section */}
      <Card className="p-8 bg-card/90 backdrop-blur-sm border border-nutrition-green/10 shadow-lg rounded-2xl">
        <div className="space-y-4">
          <Input
            value={mealInput}
            onChange={(e) => setMealInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Had oatmeal with almond butter and coffee..."
            className="text-lg p-4 border-nutrition-green/20 focus:border-nutrition-green rounded-xl font-inter"
          />
          <Button
            onClick={handleSubmit}
            disabled={!mealInput.trim()}
            className="w-full bg-nutrition-green hover:bg-nutrition-light-green text-white py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 font-inter"
          >
            Submit
          </Button>
        </div>
      </Card>

      {/* AI Response Preview */}
      {lastSubmittedEntry && (
        <Card className="p-8 bg-card/90 backdrop-blur-sm border border-nutrition-green/10 shadow-lg rounded-2xl">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-medium text-nutrition-text font-inter">
                Meal Analysis
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onToggleFavorite(lastSubmittedEntry.id)}
                className={`rounded-full transition-all duration-200 ${
                  lastSubmittedEntry.isFavorited
                    ? 'text-red-500 hover:text-red-600'
                    : 'text-nutrition-text-light hover:text-red-500'
                }`}
              >
                <Heart 
                  className={`w-6 h-6 ${lastSubmittedEntry.isFavorited ? 'fill-current' : ''}`} 
                />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-nutrition-text-light mb-2 font-inter">
                  ESTIMATED CALORIES
                </h4>
                <p className="text-2xl font-semibold text-nutrition-green font-inter">
                  {lastSubmittedEntry.calories}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-nutrition-text-light mb-2 font-inter">
                  MACRONUTRIENTS
                </h4>
                <div className="space-y-1">
                  <p className="text-nutrition-text font-inter">
                    Protein: <span className="font-medium">{lastSubmittedEntry.macros.protein}</span>
                  </p>
                  <p className="text-nutrition-text font-inter">
                    Carbs: <span className="font-medium">{lastSubmittedEntry.macros.carbs}</span>
                  </p>
                  <p className="text-nutrition-text font-inter">
                    Fat: <span className="font-medium">{lastSubmittedEntry.macros.fat}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-nutrition-accent/50 p-4 rounded-xl">
              <h4 className="text-sm font-medium text-nutrition-text-light mb-2 font-inter">
                NUTRITION TIP
              </h4>
              <p className="text-nutrition-text font-inter leading-relaxed">
                {lastSubmittedEntry.tip}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Recent Entries */}
      {recentEntries.length > 0 && (
        <div>
          <h3 className="text-xl font-medium text-nutrition-text mb-4 font-inter">
            Recent Entries
          </h3>
          <div className="space-y-4">
            {recentEntries.map((entry) => (
              <Card key={entry.id} className="p-4 bg-card/80 backdrop-blur-sm border border-nutrition-green/10 rounded-xl">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-nutrition-text font-inter mb-2">{entry.input}</p>
                    <p className="text-sm text-nutrition-text-light font-inter">
                      {entry.calories} • {entry.timestamp.toLocaleDateString()}
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
                      className={`w-5 h-5 ${entry.isFavorited ? 'fill-current' : ''}`} 
                    />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
