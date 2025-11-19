import { Button } from "./ui/button";

export function QuizCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-12">
        {/* Section Divider */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-neutral-200" />
          <span className="text-xs tracking-widest text-neutral-400">QUIZ</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        {/* Quiz CTA Content */}
        <div className="text-center space-y-6 max-w-3xl mx-auto py-8">
          <h2 className="tracking-tight">Not Sure Where to Start?</h2>
          <p className="text-neutral-600">
            Take our personalized supplement quiz to discover the perfect stack for your fitness goals, 
            lifestyle, and training routine.
          </p>
          <Button className="bg-black text-white hover:bg-neutral-800 px-8 py-6">
            TAKE THE QUIZ
          </Button>
        </div>
      </div>
    </section>
  );
}