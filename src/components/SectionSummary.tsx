import React, { useState } from 'react';
import { Star, Printer, Award, Sparkles } from 'lucide-react';
import { StudentInfo } from '../types';
import { motion } from 'motion/react';

interface SectionSummaryProps {
  studentInfo: StudentInfo;
}

export const SectionSummary: React.FC<SectionSummaryProps> = ({ studentInfo }) => {
  const [ratings, setRatings] = useState({
    understanding: 5,
    interest: 5,
    future: 5,
  });

  const [comment, setComment] = useState('');

  const handleStarClick = (category: 'understanding' | 'interest' | 'future', val: number) => {
    setRatings((prev) => ({ ...prev, [category]: val }));
  };

  const handlePrint = () => {
    window.print();
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
            탐구 활동 04
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            나의 학습 정리 및 셀프 평가
          </h2>
          <p className="text-gray-300 text-sm mt-1 leading-relaxed">
            오늘 교통수단 단원을 공부하면서 얼마나 알게 되었는지 스스로 평가해 보고 소감을 적어보세요.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
        {/* Star Rating Grid */}
        <div className="space-y-4">
          <h3 className="text-sm font-black text-gray-900 flex items-center gap-2">
            <span>⭐ 셀프 성취도 평가</span>
          </h3>

          {[
            {
              key: 'understanding',
              label: '1. 옛날과 오늘날의 교통수단 변화를 잘 이해했나요?',
            },
            {
              key: 'interest',
              label: '2. 교통수단 발달에 따른 생활의 편리함을 알게 되었나요?',
            },
            {
              key: 'future',
              label: '3. 미래의 교통수단에 대해 창의적으로 상상해 보았나요?',
            },
          ].map((item) => (
            <div key={item.key} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <span className="text-sm font-bold text-gray-800">{item.label}</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    key={star}
                    type="button"
                    onClick={() => handleStarClick(item.key as any, star)}
                    className="p-1 cursor-pointer"
                  >
                    <Star
                      className={`w-6 h-6 transition-colors ${
                        star <= ratings[item.key as keyof typeof ratings]
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-gray-200'
                      }`}
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Self Reflection Comment */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-900">
            ✍️ 오늘 수업 소감 또는 새롭게 알게 된 점을 적어보세요
          </label>
          <textarea
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="예: 옛날에는 말을 타고 다녔다는 것이 신기했고, 앞으로 나올 미래 자율주행 비행기를 꼭 타보고 싶다."
            className="w-full bg-gray-50 border border-gray-300 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all leading-relaxed"
          ></textarea>
        </div>

        {/* Summary Card / Stamp */}
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-amber-500 text-white p-3.5 rounded-2xl shadow-md">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">선생님 / 부모님 확인 도장</div>
              <div className="text-lg sm:text-xl font-black text-amber-900 mt-0.5">
                {studentInfo.name ? `${studentInfo.name} 어린이 훌륭해요! 🌟` : '참 잘했어요! 🌟'}
              </div>
            </div>
          </div>
          <div className="text-center sm:text-right text-xs text-amber-800 font-bold bg-amber-100/60 px-4 py-2 rounded-2xl">
            초등학교 3학년 사회<br />교통수단 박사 인증 완료
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-gray-100 print:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handlePrint}
            className="w-full sm:w-auto px-6 py-3.5 bg-black hover:bg-gray-800 text-white font-bold text-sm rounded-2xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Printer className="w-4 h-4" />
            활동지 인쇄하기 / PDF 저장 🖨️
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

