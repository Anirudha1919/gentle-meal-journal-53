
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Heart, Brain, Smile, Edit3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GoalSelection from '@/components/GoalSelection';
import MealPreview from '@/components/MealPreview';

const Index = () => {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-nutrition-accent via-background to-nutrition-accent/50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="p-3 bg-nutrition-green rounded-2xl">
              <Edit3 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-semibold text-nutrition-green font-inter">NourishNote</h1>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium text-nutrition-text mb-6 leading-tight font-inter">
            Log what you eat,<br />
            get mindful reflections
          </h1>
          <p className="font-normal mb-8 text-nutrition-text text-3xl font-inter">
            No counting, just clarity.
          </p>
        </div>

        {/* Goal Selection */}
        <div className="mb-16">
          <GoalSelection selectedGoal={selectedGoal} onGoalSelect={setSelectedGoal} />
        </div>

        {/* Sample Meal Preview */}
        <div className="mb-16">
          <MealPreview />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-10 bg-card/90 backdrop-blur-sm border border-nutrition-green/10 shadow-lg rounded-2xl">
            <h3 className="text-2xl font-medium text-nutrition-text mb-4 font-inter">
              Ready to start your mindful journey?
            </h3>
            <p className="text-nutrition-text-light mb-8 max-w-md mx-auto font-inter">
              Join others who are discovering a gentler way to understand their relationship with food.
            </p>
            <Button 
              onClick={handleGetStarted}
              size="lg" 
              className="bg-nutrition-green hover:bg-nutrition-light-green text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105 font-inter"
            >
              Get Started
            </Button>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-nutrition-text-light text-sm font-inter">
          <p>Built with care for mindful eating</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
