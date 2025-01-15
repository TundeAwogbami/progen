'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: string
}

const questions: Question[] = [
  {
    id: 1,
    text: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    id: 2,
    text: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    id: 3,
    text: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 4,
    text: "Who is the President of USA?",
    options: ["Barack O Bama", "Bill Clinton", "Jude John", "Donald Trump"],
    correctAnswer: "Donald Trump"
  }
]

export function QuizComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(new Array(questions.length).fill(''))
  const [showResults, setShowResults] = useState(false)

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answer
    setSelectedAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    return questions.reduce((score, question, index) => {
      return score + (question.correctAnswer === selectedAnswers[index] ? 1 : 0)
    }, 0)
  }

  if (showResults) {
    const score = calculateScore()
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Quiz Results</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold mb-4">Your score: {score} out of {questions.length}</p>
          <ul className="space-y-2">
            {questions.map((question, index) => (
              <li key={question.id} className="flex items-center space-x-2">
                <span className={selectedAnswers[index] === question.correctAnswer ? "text-green-500" : "text-red-500"}>
                  {selectedAnswers[index] === question.correctAnswer ? "✓" : "✗"}
                </span>
                <span>{question.text}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button onClick={() => window.location.reload()}>Restart Quiz</Button>
        </CardFooter>
      </Card>
    )
  }

  const question = questions[currentQuestion]

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Question {currentQuestion + 1} of {questions.length}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg mb-4">{question.text}</p>
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <div 
              key={index} 
              className={`flex items-center space-x-2 p-4 rounded-lg border cursor-pointer transition-colors ${
                selectedAnswers[currentQuestion] === option 
                  ? 'bg-primary text-primary-foreground border-primary' 
                  : 'hover:bg-accent hover:text-accent-foreground'
              }`}
              onClick={() => handleAnswerSelect(option)}
            >
              <input
                type="radio"
                id={`option-${index}`}
                name={`question-${currentQuestion}`}
                value={option}
                checked={selectedAnswers[currentQuestion] === option}
                onChange={() => handleAnswerSelect(option)}
                className="sr-only"
              />
              <Label 
                htmlFor={`option-${index}`}
                className="flex-grow cursor-pointer"
              >
                {option}
              </Label>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleNextQuestion} 
          disabled={!selectedAnswers[currentQuestion]}
          className="w-full md:w-auto"
        >
          {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
        </Button>
      </CardFooter>
    </Card>
  )
}

