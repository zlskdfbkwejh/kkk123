import React, { useState } from 'react';
import { Sparkles, Rocket, Cpu, Zap, Check } from 'lucide-react';
import { FutureTransport } from '../types';
import { motion } from 'motion/react';

export const SectionFuture: React.FC = () => {
  const [futureData, setFutureData] = useState<FutureTransport>({
    name: '',
    power: '태양열 에너지 ☀️',
    feature: '하늘과 바다를 자유롭게 이동',
    description: '',
  });

  const [saved, setSaved] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFutureData((prev) => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  const powerOptions = [
    '태양열 에너지 ☀️',
    '물(수소) 에너지 💧',
    '자석(자기부상) 힘 🧲',
    '인공지능 자동조종 🤖',
  ];

  const featureOptions = [
    '하늘과 바다를 자유롭게 이동',
    '순간 이동 및 초고속 비행',
    '쓰레기를 청소하며 달리는 친환경 기능',
    '날씨에 구애받지 않는 투명 돔',
  ];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
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
            탐구 활동 03
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            내가 상상하는 미래의 교통수단 디자인하기
          </h2>
          <p className="text-gray-300 text-sm mt-1 leading-relaxed">
            먼 미래에는 어떤 놀라운 교통수단이 생겨날까요? 나만의 상상력을 발휘하여 멋진 미래 교통수단을 소개해보세요!
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
        {/* Name input */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-800 flex items-center gap-1.5">
            <Rocket className="w-4 h-4 text-black" />
            <span>1. 미래 교통수단의 이름을 지어주세요</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="예: 하늘을 나는 슈퍼 텔레포트 버스"
            value={futureData.name}
            onChange={handleInputChange}
            required
            className="w-full bg-gray-50 border border-gray-300 rounded-2xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
          />
        </div>

        {/* Power source selection */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-800 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>2. 어떤 힘(에너지)으로 움직이나요?</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {powerOptions.map((opt) => (
              <motion.button
                whileTap={{ scale: 0.98 }}
                key={opt}
                type="button"
                onClick={() => setFutureData((prev) => ({ ...prev, power: opt }))}
                className={`py-3 px-4 rounded-2xl text-left text-sm font-medium transition-all cursor-pointer border ${
                  futureData.power === opt
                    ? 'bg-black text-white border-black shadow-md font-bold'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {opt}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main feature selection */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-800 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>3. 가장 특별한 기능은 무엇인가요?</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {featureOptions.map((feat) => (
              <motion.button
                whileTap={{ scale: 0.98 }}
                key={feat}
                type="button"
                onClick={() => setFutureData((prev) => ({ ...prev, feature: feat }))}
                className={`py-3 px-4 rounded-2xl text-left text-sm font-medium transition-all cursor-pointer border ${
                  futureData.feature === feat
                    ? 'bg-black text-white border-black shadow-md font-bold'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {feat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Detailed description */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-800 flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-emerald-600" />
            <span>4. 이 교통수단의 생김새와 이용 방법을 자세히 적어보세요</span>
          </label>
          <textarea
            name="description"
            rows={4}
            placeholder="예: 자동차 모양이지만 버튼을 누르면 날개가 펴지고, 우주 공간까지 여행할 수 있습니다. 내부에는 편안한 침대와 놀이방이 있어요!"
            value={futureData.description}
            onChange={handleInputChange}
            required
            className="w-full bg-gray-50 border border-gray-300 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all leading-relaxed"
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500 font-medium">
            {saved ? '✨ 멋진 미래 교통수단 아이디어가 저장되었습니다!' : '작성 완료 후 저장 버튼을 눌러주세요.'}
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full sm:w-auto px-6 py-3.5 bg-black hover:bg-gray-800 text-white font-bold text-sm rounded-2xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            {saved ? <Check className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
            {saved ? '저장 완료됨' : '아이디어 저장하기 🚀'}
          </motion.button>
        </div>
      </form>

      {/* Preview Card */}
      {futureData.name && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-black text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-gray-800"
        >
          <div className="absolute top-0 right-0 translate-x-12 -translate-y-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold mb-4 text-amber-300">
              🌟 미래 교통수단 발명 특허증
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-3">{futureData.name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 text-sm">
              <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <span className="text-gray-400 text-xs block mb-1">동력 에너지</span>
                <span className="font-bold text-white">{futureData.power}</span>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <span className="text-gray-400 text-xs block mb-1">핵심 기능</span>
                <span className="font-bold text-white">{futureData.feature}</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/10 font-medium">
              "{futureData.description}"
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

