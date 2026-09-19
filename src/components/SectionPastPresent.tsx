import React, { useState } from 'react';
import { TRANSPORT_ITEMS } from '../data/transportData';
import { Footprints, Truck, Ship, Train, Plane, Car, TrainTrack, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const SectionPastPresent: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<Record<string, 'past' | 'present'>>({});
  const [checked, setChecked] = useState(false);

  const handleSelect = (id: string, category: 'past' | 'present') => {
    setUserAnswers((prev) => ({ ...prev, [id]: category }));
  };

  const handleCheckAll = () => {
    setChecked(true);
  };

  const handleReset = () => {
    setUserAnswers({});
    setChecked(false);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Footprints': return <Footprints className="w-6 h-6 text-amber-700" />;
      case 'Truck': return <Truck className="w-6 h-6 text-amber-700" />;
      case 'Ship': return <Ship className="w-6 h-6 text-blue-600" />;
      case 'Train': return <Train className="w-6 h-6 text-black" />;
      case 'TrainTrack': return <TrainTrack className="w-6 h-6 text-emerald-600" />;
      case 'Plane': return <Plane className="w-6 h-6 text-sky-600" />;
      case 'Car': return <Car className="w-6 h-6 text-rose-600" />;
      default: return <Car className="w-6 h-6 text-gray-600" />;
    }
  };

  const correctCount = Object.entries(userAnswers).filter(
    ([id, cat]) => TRANSPORT_ITEMS.find((item) => item.id === id)?.category === cat
  ).length;

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
            탐구 활동 01
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            옛날과 오늘날의 교통수단 분류하기
          </h2>
          <p className="text-gray-300 text-sm mt-1 leading-relaxed">
            아래 교통수단 카드들을 보고 각각 <strong className="text-white">옛날</strong> 교통수단인지, <strong className="text-white">오늘날</strong> 교통수단인지 골라보세요!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TRANSPORT_ITEMS.map((item, idx) => {
          const selected = userAnswers[item.id];
          const isCorrect = checked && selected === item.category;
          const isWrong = checked && selected && selected !== item.category;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`bg-white rounded-3xl p-5 border transition-all shadow-sm flex flex-col justify-between ${
                isCorrect
                  ? 'border-emerald-500 bg-emerald-50/20 shadow-emerald-100'
                  : isWrong
                  ? 'border-rose-300 bg-rose-50/20 shadow-rose-100'
                  : 'border-gray-200 hover:border-black'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-gray-100 rounded-2xl">
                    {getIcon(item.iconName)}
                  </div>
                  {checked && selected && (
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                      {isCorrect ? '정답! ✨' : '다시 확인'}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-1">{item.name}</h3>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">{item.description}</p>
              </div>

              <div className="space-y-2 pt-3 border-t border-gray-100">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">구분 선택</div>
                <div className="grid grid-cols-2 gap-2">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSelect(item.id, 'past')}
                    className={`py-2 px-3 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      selected === 'past'
                        ? 'bg-amber-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    옛날 🐎
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSelect(item.id, 'present')}
                    className={`py-2 px-3 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      selected === 'present'
                        ? 'bg-black text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    오늘날 🚄
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="bg-white p-5 rounded-3xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="bg-black text-white p-2 rounded-xl">
            <CheckCircle className="w-5 h-5" />
          </div>
          <span className="text-sm font-bold text-gray-800">
            총 {TRANSPORT_ITEMS.length}개 중 <strong className="text-black font-black underline">{Object.keys(userAnswers).length}</strong>개 선택 완료
            {checked && ` (정답: ${correctCount}개)`}
          </span>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleReset}
            className="flex-1 sm:flex-none px-4 py-3 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-2xl transition-all cursor-pointer"
          >
            다시 풀기 🔄
          </button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleCheckAll}
            className="flex-1 sm:flex-none px-6 py-3 bg-black hover:bg-gray-800 text-white text-sm font-bold rounded-2xl shadow-lg transition-all cursor-pointer"
          >
            정답 확인하기 ✓
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

