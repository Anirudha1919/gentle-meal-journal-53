
import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Brain, Smile, Eye } from 'lucide-react';

interface Goal {
  id: string;
  text: string;
  icon: React.ReactNode;
}

const goals: Goal[] = [
  {
    id: 'mindful',
    text: 'Be more mindful about what I eat',
    icon: <Brain className="w-5 h-5" />
  },
  {
    id: 'relationship',
    text: 'Improve my relationship with food',
    icon: <Heart className="w-5 h-5" />
  },
  {
    id: 'wellbeing',
    text: 'Learn what makes me feel good',
    icon: <Smile className="w-5 h-5" />
  },
  {
    id: 'peaceful',
    text: 'Just want to record meals peacefully',
    icon: <Eye className="w-5 h-5" />
  }
];

interface GoalSelectionProps {
  selectedGoal: string | null;
  onGoalSelect: (goalId: string) => void;
}

const GoalSelection = ({ selectedGoal, onGoalSelect }: GoalSelectionProps) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-medium text-nutrition-text mb-8 font-inter">
        What's your goal with this journal?
      </h2>
      <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto">
        {goals.map((goal) => (
          <Card
            key={goal.id}
            className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 border-2 rounded-2xl ${
              selectedGoal === goal.id
                ? 'border-nutrition-green bg-nutrition-green/5 shadow-lg'
                : 'border-border/30 bg-card/80 hover:border-nutrition-green/50 hover:bg-card'
            }`}
            onClick={() => onGoalSelect(goal.id)}
          >
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl transition-colors ${
                selectedGoal === goal.id ? 'bg-nutrition-green text-white' : 'bg-nutrition-accent text-nutrition-text'
              }`}>
                {goal.icon}
              </div>
              <span className={`text-sm font-medium font-inter ${
                selectedGoal === goal.id ? 'text-nutrition-green' : 'text-nutrition-text'
              }`}>
                {goal.text}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GoalSelection;
