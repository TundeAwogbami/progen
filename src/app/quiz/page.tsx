import { QuizComponent } from '@/components/quiz/quiz-component'

export default function QuizPage() {
  return (
    <main className="pt-20">
      <div className="container px-4 mx-auto py-20">
        <h1 className="text-3xl font-bold mb-8">ProGen Quiz Platform</h1>
        <QuizComponent />
      </div>
    </main>
  )
}

