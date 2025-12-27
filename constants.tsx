
import React from 'react';
import { DayItinerary, QuickLink } from './types';

export const ITINERARY_DATA: DayItinerary[] = [
  {
    id: 1,
    date: '1/10 (六)',
    title: '抵達羽田與休息',
    schedules: [
      { time: '01:30 - 07:00', activity: '泉天空之湯', description: '抵達後直接前往第三航廈頂樓，泡天然溫泉遙望飛機起降。方便隔天 08:00 直接前往富士山。' }
    ]
  },
  {
    id: 2,
    date: '1/11 (日)',
    title: '富士山自駕之旅 (Day 1)',
    accommodation: 'Megu Fuji 2021 或附近',
    schedules: [
      { time: '08:00 - 09:00', activity: '羽田機場取車', description: '出發前往富士山（約 1.5 - 2 小時）。' },
      { time: '11:00', activity: '忍野八海', description: '享用午餐（推薦名水豆腐、草餅、燒魚）。' },
      { time: '11:30', activity: '金鳥居 / 日川時計店', description: '拍照打卡熱點。' },
      { time: '13:00', activity: '河口湖木之花美術館', description: '16:00 休息，建議準時前往。' },
      { time: '15:00', activity: '河口湖大石公園', description: '購買伴手禮、觀賞湖景。' },
      { time: '16:30', activity: '西湖 療癒之里 根場', description: '小合掌村走走。' }
    ]
  },
  {
    id: 3,
    date: '1/12 (一)',
    title: '富士山自駕之旅 (Day 2) & 返回東京',
    accommodation: '新宿 (車站西口或南口)',
    schedules: [
      { time: '07:00', activity: '新倉山淺間公園', description: '拍攝經典五重塔與富士山。' },
      { time: '10:00', activity: '江之島', description: '朝日堂 本店（超人氣仙具店）。' },
      { time: '12:00', activity: '午餐', description: '七里滨 Bastides 或 Cafe Yoridokoro。' },
      { time: '13:30', activity: '佐助稲荷神社', description: '鐮倉著名神社。' },
      { time: '15:00', activity: '小町通', description: '寿清庵 抹茶可莉餅。' },
      { time: '17:00', activity: '返回東京', description: '開車回新宿/澀谷。' },
      { time: '18:30', activity: '還車 & 歌舞伎町', description: '看巨大的哥吉拉與深夜新宿。' }
    ]
  },
  {
    id: 4,
    date: '1/13 (二)',
    title: '新宿、吉祥寺、下北澤',
    schedules: [
      { time: '07:00', activity: '新宿御苑', description: '早鳥覓食，散步與星巴克。' },
      { time: '07:30 - 14:00', activity: '新宿購物', description: 'Yodobashi / Bic Camera (相機)，北村相機 (二手)，Lumine 1 & 2 (服飾)。' },
      { time: '14:30 - 18:30', activity: '澀谷專輯聖地', description: 'Tower Records 澀谷店，宮下公園 (MIYASHITA PARK)。' },
      { time: '18:30 - 20:30', activity: '澀谷夜景', description: '享受夜景與晚餐。' }
    ]
  },
  {
    id: 5,
    date: '1/14 (三)',
    title: '市區漫漫遊',
    schedules: [
      { time: '08:30', activity: '前往東京站', description: '搭乘 JR 中央線快速。' },
      { time: '09:00', activity: 'SKY BUS TOKYO', description: '皇居・東京鐵塔路線（約 50 分鐘）。' },
      { time: '10:00', activity: '前往日暮里', description: '山手線或京濱東北線。' },
      { time: '11:30', activity: '谷中銀座老街', description: '午餐與漫步，江戶風情。' },
      { time: '13:45 - 16:30', activity: '上野阿美橫丁', description: '最後採買藥妝與零食。' }
    ]
  },
  {
    id: 6,
    date: '1/15 (四)',
    title: '東京迪士尼海洋 (米妮限定)',
    accommodation: '東京灣舞濱日航大酒店',
    schedules: [
      { time: '07:30', activity: '抵達舞濱', description: '提前排隊開園，預約 Fantasy Springs。' },
      { time: '21:00', activity: '離園', description: '入住附近飯店休息。' }
    ]
  },
  {
    id: 7,
    date: '1/16 (五)',
    title: '橫濱 & 羽田待機',
    schedules: [
      { time: '09:00', activity: '三溪園 / 馬車道', description: '晨間漫步。' },
      { time: '10:00', activity: '橫濱空中纜車', description: '俯瞰海港。' },
      { time: '12:00', activity: '紅磚倉庫', description: '合味道紀念館與午餐。' },
      { time: '15:00', activity: '大棧橋碼頭 / 山下公園', description: '海港風情。' },
      { time: '18:00', activity: '橫濱中華街', description: '豪華日式中華料理最後一晚。' },
      { time: '23:00', activity: '抵達羽田', description: '前往泉天空之湯溫泉休息。' }
    ]
  },
  {
    id: 8,
    date: '1/17 (六)',
    title: '返程台北',
    schedules: [
      { time: '03:30', activity: '櫃台報到', description: '辦理登機手續。' },
      { time: '05:45', activity: '起飛返台', description: '平安回家。' }
    ]
  }
];

export const QUICK_LINKS: QuickLink[] = [
  { name: 'Visit Japan Web', url: 'https://services.digital.go.jp/zh-cmn-hant/visit-japan-web/', icon: '✈️', category: 'official' },
  { name: 'JNTO 醫療資訊', url: 'https://www.jnto.go.jp/emergency/chc/do_travel_insurance05.html', icon: '🏥', category: 'official' },
  { name: 'Skybus 預約', url: 'https://www.skybus.jp/sp/', icon: '🚌', category: 'booking' },
  { name: '網卡推薦 (eSIM)', url: 'https://shopee.tw/esim_go?mmp_pid=an_16340240003&uls_trackid=54h8v8j000l9&utm_campaign=-&utm_content=-&utm_medium=affiliates&utm_source=an_16340240003&utm_term=e6vhywyto7wd', icon: '📶', category: 'service' },
  { name: '迪士尼交通攻略', url: 'https://www.threads.com/@letsgojp_official/post/DIvW8_zT88B?xmt=AQF0iXRqhZn7D9i5v-uyVY4zTS35VsVdZaVnrWbEzFhG9AWDioDWOu0ctIPwdzZKQEoqPYo&slof=1', icon: '🐭', category: 'transport' },
  { name: '西瓜卡儲值教學', url: 'https://www.instagram.com/p/DSKIOCnk_jq/?img_index=6&igsh=MWF3bnJ5Y3psaGN2MA==', icon: '💳', category: 'transport' },
  { name: 'teamLab 預約', url: 'https://s.klook.com/c/mXYxLnzz32', icon: '✨', category: 'booking' },
  { name: '行李寄送 (Luggagent)', url: 'https://luggagent.com/zh_TW', icon: '📦', category: 'service' }
];

export const APP_LINKS = [
  { name: 'ecbo cloak (寄物)', url: 'https://apps.apple.com/tw/app/ecbo-cloak-%E6%97%A5%E6%9C%AC%E5%AF%84%E7%89%A9%E6%9C%8D%E5%8B%99/id1443707795', platform: 'iOS' },
  { name: 'Tabelog (餐廳)', url: 'https://apps.apple.com/tw/app/tabelog-%E6%97%A5%E6%9C%AC%E7%BE%8E%E9%A3%9F-%E6%97%85%E9%81%8A/id6752922875', platform: 'iOS' },
  { name: 'Japan Transit', url: 'https://apps.apple.com/tw/app/japan-transit-planner/id299490481', platform: 'iOS' },
  { name: 'JR East App', url: 'https://apps.apple.com/tw/app/jr%E6%9D%B1%E6%97%A5%E6%9C%AC%E3%82%A2%E3%83%97%E3%83%AA-%E5%85%AC%E5%BC%8F-%E9%81%8B%E8%A1%8C%E6%83%85%E5%A0%B1-%E4%B9%97%E6%8F%9B%E6%A1%88%E5%86%85-%E6%99%82%E5%88%BB%E8%A1%A8-%E6%A7%8B%E5%86%85%E5%9B%B3/id820004378', platform: 'iOS' }
];
