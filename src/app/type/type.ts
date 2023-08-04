export interface TriviaCategory{
  id: number,
  name: string
}

export interface TriviaCategoryResponse{
  trivia_categories: TriviaCategory[];
}

export enum TriviaDifficulty {
  EASY = 'easy' , MEDIUM = 'medium' , HARD = 'hard'
}

// export type TriviaDifficulty = 'easy' | 'medium' | 'hard' |
export type TriviaQuestionType = 'multiple';

export interface TriviaQuestion{
  category: string,
  type: TriviaQuestionType,
  difficulty: TriviaDifficulty,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

export interface TriviaQuestionResponse{
  response_code: number,
  results: TriviaQuestion[]
}

export interface Question{
  question: string;
  options: string[];
  correct: string;
  selected?: string;
}

export interface DifficultyOption{
  value: TriviaDifficulty;
  label: string;
}

export interface OptionClick{
  question:string;
  selected: string;
}
