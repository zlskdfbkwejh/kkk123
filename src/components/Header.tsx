import React from 'react';
import { StudentInfo } from '../types';
import { BookOpen, User, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  studentInfo: StudentInfo;
  setStudentInfo: React.Dispatch<React.SetStateAction<StudentInfo>>;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  studentInfo,
  setStudentInfo,
  activeTab,
  setActiveTab,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudentInfo((prev) => ({ ...prev, [name]: value }));
  };

  const tabs = [
    { id: 'intro', label: '🎯 학습 안내' },
    { id: 'pastpresent', label: '🚗 옛날과 오늘날' },
    { id: 'quiz', label: '📝 실력 쑥쑥 퀴즈' },
    { id: 'future', label: '🚀 미래 교통수단' },
    { id: 'summary', label: '⭐ 나의 학습 정리' },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40 print:static print:border-none print:shadow-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
        {/* Top title bar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-3">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-black text-white p-3 rounded-2xl shadow-lg flex items-center justify-center"
            >
              <BookOpen className="w-6 h-6" />
            </motion.div>
            <div>
              <div className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-800 text-xs font-bold px-2.5 py-1 rounded-full mb-1">
                <Sparkles className="w-3 h-3 text-amber-500" />
                초등학교 사회 3학년 • 2학기 단원
              </div>
              <h1 className="text-2xl font-black text-gray-900 tracking-tight">
                교통수단의 발달 탐구 활동지
              </h1>
            </div>
          </div>

          {/* Student Info Inputs */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3 flex flex-wrap items-center gap-2 text-sm shadow-sm">
            <div className="flex items-center gap-1 font-bold text-gray-700 mr-1">
              <User className="w-4 h-4 text-gray-500" />
              <span>학생 정보:</span>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="text"
                name="school"
                placeholder="학교명"
                value={studentInfo.school}
                onChange={handleChange}
                className="w-20 bg-white border border-gray-300 rounded-lg px-2.5 py-1.5 text-center text-xs font-medium focus:outline-none focus:ring-2 focus:ring-black print:border-none print:bg-transparent"
              />
              <span className="text-gray-500 text-xs font-medium">초</span>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="text"
                name="gradeClass"
                placeholder="학년·반"
                value={studentInfo.gradeClass}
                onChange={handleChange}
                className="w-16 bg-white border border-gray-300 rounded-lg px-2 py-1.5 text-center text-xs font-medium focus:outline-none focus:ring-2 focus:ring-black print:border-none print:bg-transparent"
              />
              <span className="text-gray-500 text-xs font-medium">반</span>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="text"
                name="number"
                placeholder="번호"
                value={studentInfo.number}
                onChange={handleChange}
                className="w-12 bg-white border border-gray-300 rounded-lg px-2 py-1.5 text-center text-xs font-medium focus:outline-none focus:ring-2 focus:ring-black print:border-none print:bg-transparent"
              />
              <span className="text-gray-500 text-xs font-medium">번</span>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="text"
                name="name"
                placeholder="이름"
                value={studentInfo.name}
                onChange={handleChange}
                className="w-20 bg-white border border-gray-300 rounded-lg px-2.5 py-1.5 text-center font-bold text-black text-xs focus:outline-none focus:ring-2 focus:ring-black print:border-none print:bg-transparent"
              />
              <span className="text-gray-500 text-xs font-medium">이름</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none print:hidden">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-black text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </motion.button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

