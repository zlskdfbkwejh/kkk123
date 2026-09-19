import { TransportItem, QuizQuestion } from '../types';

export const TRANSPORT_ITEMS: TransportItem[] = [
  {
    id: 't1',
    name: '가마',
    category: 'past',
    description: '사람이 어깨에 메어 나르던 옛날의 탈것입니다.',
    iconName: 'Footprints'
  },
  {
    id: 't2',
    name: '우마차',
    category: 'past',
    description: '소나 말이 끌던 수레로 짐과 사람을 나랐습니다.',
    iconName: 'Truck'
  },
  {
    id: 't3',
    name: '나룻배',
    category: 'past',
    description: '노를 저어 강이나 호수를 건너던 작은 배입니다.',
    iconName: 'Ship'
  },
  {
    id: 't4',
    name: '증기기관차',
    category: 'past',
    description: '석탄을 태워 생기는 증기 힘으로 달리던 기차입니다.',
    iconName: 'Train'
  },
  {
    id: 't5',
    name: 'KTX (고속열차)',
    category: 'present',
    description: '시속 300km 이상으로 전국을 빠르게 연결하는 기차입니다.',
    iconName: 'TrainTrack'
  },
  {
    id: 't6',
    name: '지하철',
    category: 'present',
    description: '도시에서 대량으로 빠르고 정확하게 이동할 수 있는 교통수단입니다.',
    iconName: 'Train'
  },
  {
    id: 't7',
    name: '비행기',
    category: 'present',
    description: '하늘을 날아 세계 여러 나라를 몇 시간 만에 오갈 수 있습니다.',
    iconName: 'Plane'
  },
  {
    id: 't8',
    name: '전기 자전거 / 자동차',
    category: 'present',
    description: '전기 에너지를 사용하여 환경을 보호하는 친환경 탈것입니다.',
    iconName: 'Car'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '옛날에는 멀리 이동할 때 주로 소나 말, 가마 같은 탈것을 이용하거나 걸어서 이동했습니다.',
    type: 'ox',
    answer: true,
    explanation: '맞습니다! 옛날에는 빠른 엔진이 없어서 동물이나 사람의 힘, 바람의 힘을 이용했습니다.'
  },
  {
    id: 2,
    question: '증기기관차는 전기의 힘으로만 움직이는 최초의 현대식 교통수단이다.',
    type: 'ox',
    answer: false,
    explanation: '틀렸습니다! 증기기관차는 석탄을 태워 발생시킨 증기의 힘으로 움직였습니다.'
  },
  {
    id: 3,
    question: '교통수단이 발달하면서 서로 다른 지역 간의 오고 가는 시간이 줄어들고 생활권이 넓어졌습니다.',
    type: 'ox',
    answer: true,
    explanation: '맞습니다! 고속열차나 비행기 덕분에 하루 만에 전국이나 세계를 다녀올 수 있게 되었어요.'
  },
  {
    id: 4,
    question: '오늘날 교통수단의 발달로 생긴 환경 문제나 불편한 점이 아닌 것은 무엇인가요?',
    type: 'choice',
    options: [
      '① 자동차 매연으로 인한 공기 오염',
      '② 도로가 막히는 교통체증',
      '③ 멀리 있는 친척집에 며칠씩 걸려서 도착하는 것',
      '④ 교통사고 위험 증가'
    ],
    answer: 2,
    explanation: '정답은 ③번입니다. 교통수단이 발달하면서 이동 시간이 크게 줄어들었습니다!'
  }
];
