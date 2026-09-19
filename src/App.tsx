import React, { useState } from 'react';
import { Header } from './components/Header';
import { SectionPastPresent } from './components/SectionPastPresent';
import { SectionQuiz } from './components/SectionQuiz';
import { SectionFuture } from './components/SectionFuture';
import { SectionSummary } from './components/SectionSummary';
import { StudentInfo } from './types';
import { ArrowRight, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('intro');
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    school: '',
    gradeClass: '3학년 1반',
    number: '',
    name: '',
  });

  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-900 font-sans pb-16 print:bg-white print:pb-0">
      {/* Header & Student Info */}
      <Header
        studentInfo={studentInfo}
        setStudentInfo={setStudentInfo}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 print:p-0 print:max-w-none">
        {activeTab === 'intro' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Hero Banner */}
            <div className="text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden" style={{ backgroundColor: '#6b6b6b' }}>
              <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 max-w-2xl">
                <span className="bg-white/20 text-white text-xs font-bold px-3.5 py-1.5 rounded-full inline-block mb-4 backdrop-blur-md">
                  초등학교 3학년 사회과 탐구 활동지
                </span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
                  우리가 타고 다니는 교통수단, 어떻게 발달했을까요?
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-8">
                  가마와 우마차를 타던 옛날부터 초고속 KTX와 비행기를 타는 오늘날까지! 그리고 상상 속 미래 교통수단까지 함께 신나게 탐구해봐요.
                </p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab('pastpresent')}
                  className="bg-white text-black font-bold px-7 py-4 rounded-2xl shadow-lg hover:bg-gray-100 transition-all cursor-pointer flex items-center gap-2 group text-base"
                >
                  <span>활동 시작하기</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>

            {/* Learning Objectives & Roadmap */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4 hover:border-black transition-all">
                <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-sm">
                  1
                </div>
                <h3 className="text-lg font-black text-gray-900">옛날과 오늘날 비교</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  옛날 사람들이 이용하던 탈것과 오늘날 우리가 타는 교통수단의 종류와 특징을 비교합니다.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4 hover:border-black transition-all">
                <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-sm">
                  2
                </div>
                <h3 className="text-lg font-black text-gray-900">생활의 변화 탐구</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  교통수단이 발달하면서 우리 생활 모습과 지역 간 교류가 어떻게 달라졌는지 퀴즈로 알아봅니다.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4 hover:border-black transition-all">
                <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-sm">
                  3
                </div>
                <h3 className="text-lg font-black text-gray-900">미래 교통수단 상상</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  나만의 기발한 아이디어로 미래의 친환경·초고속 교통수단을 직접 디자인해 봅니다.
                </p>
              </div>
            </div>

            {/* Quick Start Prompt */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-black text-white p-3.5 rounded-2xl">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-base">활동지를 시작할 준비가 되었나요?</h4>
                  <p className="text-xs text-gray-500 mt-0.5">상단의 이름 칸에 내 이름을 적고 첫 번째 활동을 시작해 보세요!</p>
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('pastpresent')}
                className="w-full sm:w-auto px-6 py-3.5 bg-black hover:bg-gray-800 text-white font-bold text-sm rounded-2xl shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                첫 번째 활동으로 이동 ➔
              </motion.button>
            </div>
          </motion.div>
        )}

        {activeTab === 'pastpresent' && <SectionPastPresent />}
        {activeTab === 'quiz' && <SectionQuiz />}
        {activeTab === 'future' && <SectionFuture />}
        {activeTab === 'summary' && <SectionSummary studentInfo={studentInfo} />}
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-xs text-gray-400 print:hidden font-medium">
        초등학교 3학년 사회과 디지털 탐구 활동지 • AI Studio 학습 도구
      </footer>
    </div>
  );
}

