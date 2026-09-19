export interface StudentInfo {
  school: string;
  gradeClass: string;
  number: string;
  name: string;
}

export interface TransportItem {
  id: string;
  name: string;
  category: 'past' | 'present';
  description: string;
  iconName: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  type: 'ox' | 'choice';
  options?: string[];
  answer: boolean | number;
  explanation: string;
}

export interface FutureTransport {
  name: string;
  power: string;
  feature: string;
  description: string;
}
