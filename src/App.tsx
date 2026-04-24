/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Linkedin, 
  Instagram, 
  Facebook, 
  Youtube, 
  Twitter, 
  Mail, 
  Smartphone,
  ExternalLink,
  MapPin,
  Calendar,
  GraduationCap,
  Languages,
  Wrench,
  BookOpen,
  ChevronRight,
  Globe,
  Maximize,
  Play,
  Pause,
  Eye,
  EyeOff
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#2d2d2d] font-sans selection:bg-[#e7e5e4] selection:text-[#1c1917]">
      {/* Navigation / Header Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg font-bold tracking-tight text-stone-800"
          >
            張元誌 ZYZ
          </motion.div>
          <div className="flex gap-6 text-sm font-medium text-stone-500">
            {['經歷', '作業', '能力', '自傳'].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-stone-900 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        
        {/* Profile Hero Section */}
        <section className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="md:col-span-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl shadow-stone-200">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="張元誌"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="md:col-span-8 space-y-6">
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h1 className="text-5xl font-black text-stone-900 tracking-tight mb-2">
                張元誌 <span className="text-stone-400 font-light">ZYZ</span>
              </h1>
              <div className="flex flex-wrap gap-2 text-stone-500 font-medium">
                {['行銷企劃', '社群經營', '專案執行', '林建火爾熱', '高科嚴選'].map((tag) => (
                  <span key={tag} className="after:content-['|'] last:after:content-[''] after:mx-2 after:text-stone-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="space-y-4 pt-4 text-stone-600"
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <GraduationCap size={18} className="text-stone-400" />
                <span>國立高雄科技大學 · 航海科</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-stone-400" />
                <span>生日：2007-06-29</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-stone-400" />
                <a href="mailto:a111182148@nkust.edu.tw" className="hover:underline">a111182148@nkust.edu.tw</a>
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex gap-4 pt-6"
            >
              {[
                { icon: Linkedin, color: 'hover:text-[#0077b5]' },
                { icon: Instagram, color: 'hover:text-[#e4405f]' },
                { icon: Facebook, color: 'hover:text-[#1877f2]' },
                { icon: Youtube, color: 'hover:text-[#ff0000]' },
                { icon: Twitter, color: 'hover:text-[#1da1f2]' },
                { icon: Mail, color: 'hover:text-stone-900' }
              ].map((Social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  variants={fadeInUp}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className={`p-3 bg-white rounded-2xl shadow-sm border border-stone-100 text-stone-400 transition-all ${Social.color}`}
                >
                  <Social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Intro Quote */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-stone-900 text-white p-12 md:p-16 rounded-[2.5rem] relative overflow-hidden group shadow-2xl shadow-stone-200"
        >
          <div className="relative z-10 space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed font-light italic">
              「您好，我是元誌。對於用戶及使用者行為充滿熱情，也熱愛與多樣的人交流。從中獲得新知，以為作為行銷人及創意創意的養分。我有 6 年的商用及會員經營的基礎，能根據用戶不同的階層與接觸，了解使用者在各方面的需求佈局，並規劃出相對應的經營策略。」
            </p>
          </div>
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-stone-800 rounded-full blur-3xl opacity-50 group-hover:bg-amber-900/20 transition-colors duration-700" />
        </motion.section>

        {/* Practical Experience */}
        <section id="經歷" className="space-y-12">
          <div className="flex items-end justify-between border-b-2 border-stone-200 pb-4">
            <h2 className="text-3xl font-black text-stone-900">實習經歷</h2>
            <span className="text-stone-400 font-mono text-sm leading-8">PRACTICAL EXPERIENCE</span>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "校外教學 - 御風乘船",
                subtitle: "體驗船上生活、熟悉船上機具操作",
                date: "2025. 5/22 ~ 2025. 6/5",
                img: "https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "實務操作 - 航海日誌",
                subtitle: "了解作為三副的我們應有的工作",
                date: "2024. 12/10 ~ 2024. 12/20",
                img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
              }
            ].map((exp, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={exp.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={exp.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="text-xs font-bold uppercase tracking-widest bg-white/20 backdrop-blur px-2 py-1 rounded mb-2 inline-block">
                      {exp.date}
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-stone-600 transition-colors uppercase">{exp.title}</h3>
                  <p className="text-stone-500 leading-relaxed">{exp.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Academic Projects (Itinerary style) */}
        <section id="作業" className="space-y-12">
          <div className="flex items-end justify-between border-b-2 border-stone-200 pb-4">
            <h2 className="text-3xl font-black text-stone-900">學期作業</h2>
            <span className="text-stone-400 font-mono text-sm leading-8">ACADEMIC PROJECTS</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-stone-100 dark-shadow h-full">
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-2">清領三部曲：嘉南四天三夜 行程表</h3>
                  <p className="text-stone-400">4/3 ~ 4/6</p>
                </div>

                <div className="space-y-12 relative">
                  <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-stone-100 hidden md:block" />
                  {[
                    { day: "第一天", title: "初遇嘉義，感受木都文化", color: "bg-amber-500" },
                    { day: "第二天", title: "林業文化與阿里山森林週邊", color: "bg-emerald-500" },
                    { day: "第三天", title: "人文與藝術的雙重饗宴", color: "bg-blue-500" }
                  ].map((day, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex gap-8 relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-6 h-6 rounded-full ${day.color} border-4 border-white shadow-sm z-10 flex-shrink-0 mt-1`} />
                      <div className="space-y-2">
                        <span className="text-stone-400 font-bold text-sm tracking-widest">{day.day}</span>
                        <h4 className="text-xl font-bold">{day.title}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-stone-900 rounded-[2.5rem] p-6 shadow-xl h-full flex flex-col">
                <div className="flex items-center justify-between mb-6 px-2">
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <Youtube className="text-red-500" size={20} />
                    簡報展示
                  </h3>
                  <a 
                    href="https://docs.google.com/presentation/d/1Jw5a6r0XV5pXuG89t5J86kkhnfNMezbCdDPzjuhJTkU/edit?usp=drive_link" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <div className="flex-grow aspect-[4/3] rounded-2xl overflow-hidden bg-stone-800">
                  <iframe 
                    src="https://docs.google.com/presentation/d/1Jw5a6r0XV5pXuG89t5J86kkhnfNMezbCdDPzjuhJTkU/embed?start=false&loop=false&delayms=3000" 
                    frameBorder="0" 
                    width="100%" 
                    height="100%" 
                    allowFullScreen={true}
                    title="Google Slides Presentation"
                  ></iframe>
                </div>
                <p className="text-stone-500 text-sm mt-4 px-2 leading-relaxed">
                  點擊簡報內的箭頭可進行翻頁，或點擊右上角圖示前往原始連結。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Skills */}
        <section id="能力" className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-stone-900 border-b-2 border-stone-200 pb-4">學歷</h2>
            <motion.div 
              {...fadeInUp}
              className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm flex items-start gap-6"
            >
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-stone-400">
                <GraduationCap size={32} />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">2022 - 2027</span>
                <h3 className="text-lg font-bold">國立高雄科技大學 (五專)</h3>
                <p className="text-stone-500 flex items-center gap-2">
                  <Globe size={14} /> 航海科 · 學士學位
                </p>
              </div>
            </motion.div>
          </div>

          {/* Languages */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-stone-900 border-b-2 border-stone-200 pb-4">語言能力</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { lang: '英文', level: '精通', color: 'bg-indigo-50 text-indigo-700' },
                { lang: '日文', level: '流利', color: 'bg-rose-50 text-rose-700' },
                { lang: '韓文', level: '普通', color: 'bg-emerald-50 text-emerald-700' },
                { lang: '台語', level: '精通', color: 'bg-amber-50 text-amber-700' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-2xl ${item.color} flex flex-col items-center justify-center text-center space-y-1`}
                >
                  <span className="text-sm font-bold opacity-70">{item.lang}</span>
                  <span className="text-lg font-black">{item.level}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Software skills */}
        <section className="space-y-8">
           <h2 className="text-3xl font-black text-stone-900 border-b-2 border-stone-200 pb-4 text-center">專業技能與軟體</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Office 365', icon: 'W', desc: 'Word, Excel, PPT' },
                { name: 'Google Workspace', icon: 'G', desc: 'Sites, Drive, Gmail' },
                { name: 'PM Tools', icon: 'A', desc: 'Asana, Trello' },
                { name: 'iWork', icon: 'i', desc: 'Pages, Numbers, Keynote' }
              ].map((skill, i) => (
                <motion.div 
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm text-center space-y-3"
                >
                  <div className="w-12 h-12 bg-stone-900 text-white rounded-xl mx-auto flex items-center justify-center font-black text-xl">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="font-bold">{skill.name}</h4>
                    <p className="text-xs text-stone-400 mt-1">{skill.desc}</p>
                  </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* AI Video Showcase */}
        <section className="space-y-12">
          <div className="flex items-end justify-between border-b-2 border-stone-200 pb-4">
            <h2 className="text-3xl font-black text-stone-900">AI 影像紀錄</h2>
            <span className="text-stone-400 font-mono text-sm leading-8">AI CINEMATIC SHOWCASE</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[#0a0a0a] rounded-[3rem] p-4 md:p-8 shadow-2xl overflow-hidden"
          >
            {/* Design Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] -mr-48 -mt-48 transition-colors group-hover:bg-amber-500/10" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 px-4">
                <div className="flex items-center gap-3">
                  <Play size={16} className="text-amber-500" />
                  <span className="text-stone-400 font-bold text-xs tracking-widest uppercase">Cinematic Render</span>
                </div>
                <motion.a 
                  whileHover={{ scale: 1.05, color: '#fff' }}
                  href="https://drive.google.com/file/d/1J6d5eb4KK62BwrgLtFYh_DjoH4rMudOm/view?usp=sharing" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-stone-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2"
                >
                  前往雲端查看 <Maximize size={12} />
                </motion.a>
              </div>

              <div className="aspect-video w-full rounded-[2rem] overflow-hidden bg-stone-900 shadow-inner border border-white/5">
                <iframe 
                  src="https://drive.google.com/file/d/1J6d5eb4KK62BwrgLtFYh_DjoH4rMudOm/preview" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  title="AI Cinematic Video"
                  className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                ></iframe>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-8 items-center px-4">
                <div className="space-y-3">
                   <h3 className="text-white text-2xl font-black">嘉南數位意象 · 虛擬行旅</h3>
                   <p className="text-stone-500 text-sm leading-relaxed">
                     整合 Minimax 與 Hailuo AI 影像技術，將「清領三部曲：嘉南四天三夜」的文史底蘊轉化為沉浸式動態視聽。展現科技美學與深度旅遊的跨領域應用。
                   </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-end">
                   {['AI Dynamic', '4K Rendering', 'Digital Storytelling'].map(item => (
                     <span key={item} className="px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-stone-400 text-[10px] font-black tracking-widest uppercase">
                       {item}
                     </span>
                   ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 3D Model Showcase */}
        <section className="space-y-12">
          <div className="flex items-end justify-between border-b-2 border-stone-200 pb-4">
            <h2 className="text-3xl font-black text-stone-900">3D 模型展示</h2>
            <span className="text-stone-400 font-mono text-sm leading-8">3D MODEL SHOWCASE</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Model Photo / Cover */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group rounded-[2.5rem] overflow-hidden shadow-xl shadow-stone-200 aspect-square lg:aspect-auto"
            >
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200" 
                alt="3D Model Cover Photo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent flex items-end p-8 md:p-12">
                <div className="text-white space-y-4">
                  <span className="px-3 py-1 bg-amber-500 text-stone-900 text-[10px] font-black tracking-widest uppercase rounded">Cover Photo</span>
                  <h3 className="text-3xl font-black">AI 建模渲染</h3>
                  <p className="text-stone-300 text-sm leading-relaxed max-w-sm">
                    結合 Tripo AI 技術生成的精確 3D 幾何模型，展現數位技術與視覺創意的融合。
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Interactive 3D Viewer */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-stone-950 rounded-[2.5rem] p-4 md:p-6 shadow-2xl flex flex-col group"
            >
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-amber-500 animate-ping absolute opacity-75" />
                    <div className="w-3 h-3 rounded-full bg-amber-500 relative" />
                  </div>
                  <span className="font-bold text-[10px] tracking-[0.3em] uppercase text-stone-400">Interactive View</span>
                </div>
                
                <motion.a 
                  whileHover={{ scale: 1.05, color: '#fff' }}
                  href="https://studio.tripo3d.ai/3d-model/d82a5932-0c76-43e8-85fd-1b638a41f17e?invite_code=2PKU7V" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-stone-500 transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
                >
                  點開完整視窗 <Maximize size={12} />
                </motion.a>
              </div>

              <div className="flex-grow aspect-square rounded-[2rem] overflow-hidden bg-stone-900 border border-white/5 shadow-inner">
                <iframe 
                  src="https://studio.tripo3d.ai/3d-model/d82a5932-0c76-43e8-85fd-1b638a41f17e?invite_code=2PKU7V" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  title="Tripo 3D Model Rendering"
                  className="opacity-90 group-hover:opacity-100 transition-opacity"
                ></iframe>
              </div>

              {/* Pseudo Controls for Interaction Tips */}
              <div className="mt-4 grid grid-cols-2 gap-3 px-2">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-amber-500">
                    <Play size={14} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-[10px] font-bold">動畫控制</span>
                    <span className="text-stone-500 text-[9px]">需前往原始頁面</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-amber-500">
                    <Eye size={14} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-[10px] font-bold">環境切換</span>
                    <span className="text-stone-500 text-[9px]">支援原廠播放器</span>
                  </div>
                </div>
              </div>

              <p className="text-stone-600 text-[10px] mt-4 text-center font-medium tracking-wide">
                旋轉：左鍵剪輯 • 縮放：滾輪 • 平移：右鍵
              </p>
            </motion.div>
          </div>
        </section>

        {/* Autobiography */}
        <section id="自傳" className="space-y-12">
          <div className="flex items-end justify-between border-b-2 border-stone-200 pb-4">
            <h2 className="text-3xl font-black text-stone-900">自傳</h2>
            <span className="text-stone-400 font-mono text-sm leading-8">SELF INTRODUCTION</span>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="prose prose-stone max-w-none bg-stone-50 p-10 md:p-16 rounded-[3rem] border border-stone-200/50"
          >
            <div className="space-y-6 text-stone-600 leading-loose text-lg">
              <p>
                你好！我是張元誌。來自熱情的高雄。目前就讀於國立高雄科技大學航海科。從小在一家中排老二，而我就跟哥哥差了六歲。爸媽常常告訴我要像榜樣一樣努力奮發，但我卻總想嘗試一些不一樣的，有自己的一片天。
              </p>
              <p>
                從國中畢業後到高科五專部學習航海，一開始這從來沒來到過這裡，根本不知道這裡還有這種工作。雖然這門學科是有科門限度的，來到這來到後才逐漸發現我對於航海的熱情。從一年級懵懵懂懂到現在五學期了，也經歷了不少。也發現自己對此非常有興趣。
              </p>
              <p>
                在校期間，除了課業上的累積，也積極參與產學合作與各類社團活動。對於專案管理與社群經營也有著極高的熱忱，希望能結合所學，在不同的專業領域中發揮長才，創造獨特的價值。
              </p>
            </div>
          </motion.div>
        </section>

        {/* Contact Footer */}
        <footer className="pt-24 pb-12 text-center space-y-8 border-t border-stone-200">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-stone-900">與我聯絡</h2>
            <p className="text-stone-400">CONTACT ME</p>
          </div>
          <div className="flex justify-center gap-4">
             <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-stone-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-stone-800 transition-colors"
                onClick={() => window.location.href = 'mailto:a111182148@nkust.edu.tw'}
              >
               <Mail size={20} />
               發送郵件給我
             </motion.button>
          </div>
          <p className="text-stone-300 text-sm font-mono pt-12">
            © 2026 ZHANG YUAN ZHI. ALL RIGHTS RESERVED.
          </p>
        </footer>

      </main>

      {/* Floating Action Button (Top) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 bg-white shadow-2xl rounded-2xl border border-stone-100 text-stone-400 hover:text-stone-900 transition-all z-40"
      >
        <Smartphone size={24} className="rotate-180" />
      </motion.button>
    </div>
  );
}
