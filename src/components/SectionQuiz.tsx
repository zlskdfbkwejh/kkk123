import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/transportData';
import { Award, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const SectionQuiz: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, boolean | number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: number, answer: boolean | number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (answers[q.id] === q.answer) score += 25;
    });
    return score;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-gray-900 text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-white/10 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            탐구 활동 02
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            교통수단 실력 쑥쑥 퀴즈
          </h2>
          <p className="text-gray-300 text-sm mt-1 leading-relaxed">
            배운 내용을 떠올리며 OX 퀴즈와 객관식 문제를 풀어보세요!
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {QUIZ_QUESTIONS.map((q, idx) => {
          const userAnswer = answers[q.id];
          const isCorrect = showResults && userAnswer === q.answer;

          return (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`bg-white rounded-3xl p-6 border transition-all ${
                showResults
                  ? isCorrect
                    ? 'border-emerald-500 bg-emerald-50/20'
                    : 'border-rose-300 bg-rose-50/20'
                  : 'border-gray-200 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <span className="bg-black text-white font-black text-xs w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 pt-0.5">{q.question}</h3>
                </div>
                {showResults && (
                  <div>
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-emerald-700 text-xs font-bold bg-emerald-100 px-3 py-1 rounded-full">
                        <CheckCircle2 className="w-4 h-4" /> 정답! (+25점)
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-rose-700 text-xs font-bold bg-rose-100 px-3 py-1 rounded-full">
                        <XCircle className="w-4 h-4" /> 오답
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Options */}
              {q.type === 'ox' ? (
                <div className="flex gap-4 sm:ml-10">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(q.id, true)}
                    className={`flex-1 py-3 px-6 rounded-2xl font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      userAnswer === true
                        ? 'bg-black text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-lg">⭕</span> O (맞습니다)
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(q.id, false)}
                    className={`flex-1 py-3 px-6 rounded-2xl font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      userAnswer === false
                        ? 'bg-black text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-lg">❌</span> X (틀렸습니다)
                  </motion.button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:ml-10">
                  {q.options?.map((opt, optIdx) => (
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      key={optIdx}
                      onClick={() => handleAnswer(q.id, optIdx)}
                      className={`py-3 px-4 rounded-2xl text-left font-medium text-sm transition-all cursor-pointer ${
                        userAnswer === optIdx
                          ? 'bg-black text-white shadow-md font-bold'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      {opt}
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Explanation when submitted */}
              {showResults && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 sm:ml-10 p-4 bg-gray-50 border border-gray-200 rounded-2xl text-xs text-gray-700 leading-relaxed"
                >
                  <strong className="text-black font-bold">💡 정답 해설:</strong> {q.explanation}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Result Footer */}
      <div className="bg-white p-5 rounded-3xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-amber-100 p-3 rounded-2xl text-amber-800">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">
              {showResults ? `내 점수: ${calculateScore()}점 / 100점` : '퀴즈를 모두 풀고 채점해 보세요!'}
            </div>
            <div className="text-xs text-gray-500">
              {showResults && calculateScore() === 100
                ? '🎉 완벽해요! 교통수단 박사님이시네요!'
                : showResults && calculateScore() >= 50
                ? '👍 잘했어요! 조금만 더 복습해 볼까요?'
                : '힘내세요! 다시 도전해 볼 수 있어요.'}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => {
              setAnswers({});
              setShowResults(false);
            }}
            className="flex-1 sm:flex-none px-4 py-3 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-2xl transition-all cursor-pointer"
          >
            다시 풀기 🔄
          </button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowResults(true)}
            className="flex-1 sm:flex-none px-6 py-3 bg-black hover:bg-gray-800 text-white text-sm font-bold rounded-2xl shadow-lg transition-all cursor-pointer"
          >
            채점하기 ✨
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

