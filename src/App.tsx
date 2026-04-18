import React, { useState, useEffect } from 'react';
import { 
  User, Briefcase, Wrench, LayoutGrid, BookOpen, Heart,
  Mail, Phone, Layers, ArrowRight, Package, Recycle, 
  Shield, ExternalLink, CheckCircle2, Camera, Globe, Bike,
  MoveRight, Instagram, Linkedin, Zap, Plus, Award, GraduationCap, Search, BarChart3, Palette, Box, Cpu, Scissors, ShieldCheck, Terminal, Languages, Target, PencilRuler, Clock, BrainCircuit, Workflow, Presentation, X
} from 'lucide-react';

/**
 * Amanda's Sophisticated Portfolio - Balanced UI Redesign
 * Focused on: Portfolio section alignment, symmetric grid, and high-readability.
 * Style: Symmetric Premium Dark.
 */
const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedCert, setSelectedCert] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navItems = [
    { en: 'ABOUT', zh: '關於我', id: 'about' },
    { en: 'EXPERIENCE', zh: '經歷 / 學歷', id: 'experience' },
    { en: 'SKILLS', zh: '技能專長', id: 'skills' },
    { en: 'PROJECTS', zh: '專案成就', id: 'projects' },
    { en: 'COURSES', zh: '專業進修', id: 'courses' },
    { en: 'INTERESTS', zh: '興趣', id: 'interests' },
  ];

  const experience = [
    {
      companyEn: "JIU DING METAL CO., LTD.",
      companyZh: "久鼎金屬實業股份有限公司",
      role: "SENIOR STRUCTURAL PACKAGING ENGINEER",
      period: "2024.01 / PRESENT",
      description: "現任職於久鼎金屬，專注於自行車零件包裝結構革新。致力於開發「全紙質緩衝結構」與「減塑方案」，協助產業落實低碳永續目標。",
      achievements: [
        "研發具專利潛力之「輻射狀全紙緩衝內襯」以支撐重型金屬件",
        "執行全紙質緩衝結構開發與減塑方案，落實永續目標",
        "針對環保材質與加工製程進行策略性 CMF 研究"
      ],
      type: "job"
    },
    {
      companyEn: "MERRY ELECTRONICS CO., LTD.",
      companyZh: "美律實業股份有限公司",
      role: "PACKAGING ENGINEER",
      period: "2022.07 / 2025.05",
      description: "負責 TWS、HDT、Soundbar 等國際品牌的包裝開發。在 RFQ 階段主導結構設計與成本分析，成功達成約 10% 的包材成本節省。",
      achievements: [
        "國際品牌設計提案共 25 件，接案達成率達 40%",
        "主導兩款 HyperX 電競耳機開發，累積量產導入完整經驗",
        "建立 6 件模組化內襯結構資料庫，大幅提升提案效率"
      ],
      type: "job"
    },
    {
      companyEn: "TAIWAN SAKURA CORPORATION",
      companyZh: "台灣櫻花股份有限公司",
      role: "PRODUCT DESIGNER",
      period: "2020.03 / 2022.07",
      description: "榮獲 2021 年度績優員工。主導易清系列檯面爐與油煙機開發，負責市場調研、造型趨勢分析、草模驗證與量產導入流程。",
      achievements: [
        "兩件作品入選金點設計獎 (Gold Pin Design Award)：R3750B、P0233/235",
        "協助外觀與結構開發並導入量產，成功落地產品實績",
        "跨部門與供應商協作，確保設計順利導入量產並維持品質"
      ],
      type: "job"
    },
    {
      companyEn: "NTUST",
      companyZh: "國立臺灣科技大學",
      role: "INDUSTRIAL DESIGN / 大學畢業",
      period: "B.ID DEGREE",
      description: "主修工業設計，專注於產品形態與人因工程，建立扎實的設計美學與工程實作基礎。",
      achievements: ["核心課程：產品設計、結構材料學、3D 建模實務"],
      type: "edu"
    },
    {
      companyEn: "TCIVS",
      companyZh: "國立臺中高工",
      role: "GRAPHIC ARTS / 高職畢業",
      period: "DIP. GRADUATE",
      description: "圖文傳播科。啟蒙於平面視覺與印前製程，為後續 2D 視覺整合與包裝刀模邏輯奠定深厚基礎。",
      achievements: ["核心課程：平面設計、印刷製程、排版構成"],
      type: "edu"
    }
  ];

  const portfolioProjects = [
    {
      id: "packaging",
      en: "Packaging",
      zh: "包裝設計",
      desc: "專注於「高強度全紙結構開發」與 ESG 永續包材應用，實現 0% 塑料緩衝。透過力學驗證確保極限保護與成本平衡。",
      tags: ["Structural Logic", "All-Paper System", "ESG Strategy"],
      subProjects: [
        {
          title: "輻射狀全紙緩衝內襯開發",
          client: "自行車金屬零組件",
          challenge: "重型金屬零件（如自行車花鼓、變速器）在運輸過程中極易因碰撞受損，傳統紙材缺乏足夠支撐力，過去高度依賴發泡塑料。",
          solution: "研發「輻射狀全紙緩衝內襯」，透過立體摺紙與卡扣結構設計，將紙張的物理強度最大化。通過 ISTA 運輸測試標準（包含震動、落下與擠壓）。",
          results: ["減少 100% 塑料使用量", "包材倉儲體積縮減 30%", "取得具潛力之單一紙材結構專利"],
          images: ["https://images.unsplash.com/photo-1628187886107-11116666e545?auto=format&fit=crop&q=80&w=1200"]
        },
        {
          title: "電競耳機模組化包裝系統",
          client: "國際電競周邊品牌",
          challenge: "多款高階電競耳機外型不一，傳統包裝每一款皆須獨立開模，導致開發時程冗長且倉儲與模具成本居高不下。",
          solution: "建立 6 件式模組化內襯結構資料庫，透過標準化設計滿足多款耳機共用，同時最佳化防撞結構與玩家開箱體驗。",
          results: ["包材成本節省約 10%", "提案接案達成率達 40%", "大幅提升後續新品打樣效率"],
          images: ["https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=1200"]
        }
      ]
    },
    {
      id: "product",
      en: "Product",
      zh: "產品設計",
      desc: "主導家電與廚電開發，結合市場趨勢分析與量產製程經驗。從外觀美學至「量產導入」，將設計感轉化為商業價值。",
      tags: ["Industrial Design", "Mass Production", "Clean Tech"],
      subProjects: [
        {
          title: "易清系列檯面爐與油煙機",
          client: "家用廚房電器",
          challenge: "在家用廚電市場競爭中，如何在維持強大吸力與火力效能的同時，提供更佳的清潔便利性與契合現代居家空間的極簡外觀。",
          solution: "導入易潔塗層技術與快拆結構設計，並透過大量草模與使用者訪談，優化點火介面與操作手感。配合供應商順利導入量產。",
          results: ["榮獲金點設計獎肯定", "產品成功量產市售", "使用者清潔滿意度大幅提升"],
          images: ["https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200"]
        }
      ]
    },
    {
      id: "graphic",
      en: "Graphic",
      zh: "平面設計",
      desc: "2D 品牌視覺整合與提案簡報製作。將「複雜工程邏輯」轉化為具備商業說服力的平面視覺語言。",
      tags: ["Branding", "Visual Strategy", "Layout"],
      subProjects: [
        {
          title: "科技品牌視覺與展場規劃",
          client: "B2B 產品推廣",
          challenge: "將生硬複雜的工程規格與技術優勢，軟化轉換成吸引人的商業行銷素材與品牌形象，與非技術受眾進行溝通。",
          solution: "建立具備一致性且符合品牌調性的視覺系統，覆蓋包裝視覺佈局、大型展場背板規劃與品牌 Guideline 制定。",
          results: ["提升專案提案與競標通過率", "建立高效的模組化視覺素材庫", "跨部門設計溝通效率顯著增加"],
          images: ["https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200"]
        }
      ]
    }
  ];

  const certifications = [
    {
      name: "iPAS AI 應用規劃師初級證照班課程",
      provider: "中國生產力中心 China Productivity Center",
      date: "2026.04.26",
      duration: "48 小時",
      status: "In Training / 正在培訓中",
      summary: "系統化學習 AI 導入、規劃與應用情境建構，強化跨領域數位工具整合能力。",
      highlights: ["AI 應用場景規劃", "數位轉型策略制定", "AI 工具鏈整合"],
      icon: Workflow,
      images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"]
    },
    {
      name: "包裝結構設計、運輸驗證與成本優化實務課程",
      provider: "財團法人塑膠工業技術發展中心 (PIDC)",
      date: "2026.03.26",
      duration: "48 小時",
      summary: "聚焦包裝結構設計、運輸測試與成本優化方法，提升包材選型與量產導入判斷能力。",
      highlights: ["包裝結構力學分析", "ISTA 運輸測試標準", "成本估算"],
      icon: Scissors
    }
  ];

  const skills = [
    { 
      title: "Market Research / Strategy", 
      label: "市場調研與定位分析", 
      icon: Search,
      description: "擅長設計前期的競品蒐集並針對該品牌定位分析，總結設計規畫方向。",
      subskills: ["競品分析", "產品策略", "產品定位", "市場調查資料分析", "報告撰寫與提案"]
    },
    { title: "Structural Engineering", label: "結構工程與緩衝開發", icon: Layers },
    { title: "3D Modeling", label: "3D 建模與結構模擬", icon: Box },
    { title: "Prototyping", label: "打樣實作與設計驗證", icon: Scissors },
    { title: "Packaging / BOM", label: "包材選用與 BOM 建立", icon: Cpu },
    { title: "ESG Sustainability", label: "永續設計與成本優化", icon: Recycle }
  ];

  const MyLogo = ({ className }: { className?: string }) => (
    <img src="/amanda_logo.png" alt="Amanda Logo" className={`object-contain ${className}`} onError={(e) => {
      // Fallback SVG if image not found
      e.currentTarget.style.display = 'none';
      e.currentTarget.nextElementSibling?.classList.remove('hidden');
    }} />
  );

  const FallbackLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={`${className} hidden`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="3"/>
      <circle cx="50" cy="50" r="15" fill="currentColor" fillOpacity="0.1"/>
      <path d="M50 25V75M25 50H75" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2"/>
    </svg>
  );

  const LogoContainer = ({ className }: { className?: string }) => (
    <>
       <MyLogo className={className} />
       <FallbackLogo className={className} />
    </>
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#121212] font-sans selection:bg-[#B38B3F] selection:text-white overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-lg py-3 border-b border-black/5 shadow-sm text-black' : 'bg-transparent py-8 text-white'}`}>
        <div className="container mx-auto px-10 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <LogoContainer className="w-8 h-8 group-hover:rotate-180 transition-transform duration-1000" />
            <div className="flex flex-col items-start leading-none font-outfit">
              <span className="font-bebas text-2xl tracking-wider uppercase">AMANDA LAI.</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="group flex flex-col items-center relative py-2 no-underline cursor-pointer">
                <span className={`text-[16px] tracking-[0.15em] transition-all duration-300 font-bebas leading-none uppercase ${scrolled ? 'text-gray-500 group-hover:text-black' : 'text-gray-300 group-hover:text-white'}`}>
                  {item.en}
                </span>
                <span className={`text-[11px] font-bold transition-all duration-500 ease-out font-chinese mt-2 tracking-widest transform origin-center group-hover:scale-[1.15] group-hover:text-[#B38B3F] group-hover:translate-y-[-2px] text-gray-400`}>
                  {item.zh}
                </span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-[1.5px] bg-[#B38B3F] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </div>

          <a href="#contact" className={`text-[11px] font-bold tracking-[0.2em] px-8 py-3 transition-all shadow-xl uppercase font-outfit ${scrolled ? 'bg-black text-white hover:bg-[#B38B3F] shadow-black/5' : 'bg-white text-black hover:bg-[#B38B3F] hover:text-white'}`}>
            CONNECT
          </a>
        </div>
      </nav>

      {/* --- Home (Interactive Hero) --- */}
      <section id="home" className="min-h-[90vh] flex flex-col justify-center relative pt-20 px-10 bg-[#0F0F0F] text-white">
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-1000 ease-out z-0"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        >
          <span className="font-bebas text-[30vw] text-white/[0.02] leading-none select-none">AMANDA</span>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-7xl">
            <h2 className="text-[12px] font-bold tracking-[0.8em] text-[#B38B3F] mb-12 animate-fade-in uppercase font-outfit">
              PACKAGE DESIGN / STRUCTURAL ENGINEERING
            </h2>
            
            <div className="relative mb-8 group">
              <h1 className="font-bebas text-[18vw] lg:text-[14vw] leading-[0.75] tracking-tight animate-slide-up transition-transform duration-700 hover:scale-[1.02]">
                SUSTAINABLE<br />
                <span className="text-[#B38B3F]">PACKAGING.</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-50 cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-xs uppercase tracking-widest text-[#B38B3F] font-bebas">Scroll</span>
        </div>
      </section>

      {/* --- About (Detailed Content & Photo) --- */}
      <section id="about" className="py-40 bg-[#FDFDFD] text-[#121212]">
        <div className="container mx-auto px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-40">
            
            {/* Sticky Left Column */}
            <div className="lg:col-span-4">
               <div className="sticky top-40">
                  <h2 className="font-bebas text-8xl tracking-tight leading-none mb-2 text-black">ABOUT ME</h2>
                  <span className="font-chinese text-2xl text-[#B38B3F] font-bold italic block mb-12">關於賴以婕</span>
                  
                  <div className="aspect-[4/5] w-[60%] max-w-[240px] overflow-hidden mb-12 group bg-gray-100">
                     <img 
                       src="/Profolio_photo.jpg" 
                       alt="Amanda Lai" 
                       className="w-full h-full object-cover object-left grayscale group-hover:grayscale-0 transition-all duration-1000" 
                       onError={(e) => {
                         e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                       }} 
                     />
                  </div>
                  
                  <div className="flex gap-16">
                    <div className="flex flex-col gap-2">
                       <span className="font-bebas text-5xl leading-none">06+</span>
                       <span className="text-[10px] font-black tracking-widest text-gray-500 uppercase font-outfit">Years Practice</span>
                    </div>
                    <div className="flex flex-col gap-2">
                       <span className="font-bebas text-5xl leading-none">M.ID</span>
                       <span className="text-[10px] font-bold tracking-widest text-[#B38B3F] uppercase font-outfit">Design Degree</span>
                    </div>
                  </div>
               </div>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-8 flex flex-col gap-24 pt-2">
               {/* 1. Background & Deep Dive */}
               <div className="flex flex-col gap-10">
                 <div>
                   <h3 className="text-[11px] font-bold tracking-[0.3em] font-outfit text-[#B38B3F] uppercase mb-4">Background</h3>
                   <h4 className="text-3xl md:text-4xl font-chinese font-black mb-8 text-black leading-tight border-b border-black/10 pb-6">包裝設計專業深化 × 專案開發經驗</h4>
                   <p className="text-[17px] leading-relaxed text-gray-600 font-chinese md:text-justify">
                     畢業於<span className="text-black font-bold">台灣科技大學工業設計系</span>，擁有 <span className="text-black font-bold">6 年產品與包裝設計實務經驗</span>，熟悉從外觀設計、結構開發到量產製程的完整流程。擅長品牌前期市場調研與定位分析，根據需求進行 2D/3D 設計規劃，執行草模驗證與工程圖繪製，並具備<strong className="text-[#B38B3F] font-bold">『依照預算與成本條件彈性調整設計策略』</strong>的高度靈活應變能力。
                   </p>
                 </div>
               </div>

               {/* 2. Experience Details */}
               <div>
                 <h3 className="text-[11px] font-bold tracking-[0.3em] font-outfit text-[#B38B3F] uppercase mb-4">Practical Experience</h3>
                 <h4 className="text-3xl md:text-4xl font-chinese font-black mb-10 text-black leading-tight border-b border-black/10 pb-6">
                   實務專案開發經驗
                 </h4>
                 
                 <div className="grid md:grid-cols-2 gap-6">
                    {/* Card 1: 25 Cases */}
                    <div className="p-8 border border-black/5 hover:border-[#B38B3F]/40 transition-colors bg-white shadow-sm flex flex-col group md:col-span-2">
                       <div className="flex flex-col gap-4 mb-6 border-b border-black/5 pb-5">
                          <span className="text-[11px] font-outfit font-black tracking-widest text-[#B38B3F] uppercase shrink-0">25 Cases</span>
                          <strong className="text-[19px] text-black font-chinese font-bold group-hover:text-[#B38B3F] transition-colors leading-snug">國際品牌 TWS / HDT / Soundbar 包裝設計提案</strong>
                       </div>
                       <p className="text-gray-600 leading-relaxed text-[15px] font-chinese">
                          根據產品定位提出多元價位 (低/中/高) 包裝設計方案，滿足不同市場需求與品牌策略。
                          在消費性電子產品 RFQ 階段，主導包裝結構設計、2D 工程圖繪製與初步成本分析，成功協助研發單位<strong className="text-black font-bold">達成約 10% 的包材成本節省</strong>。
                       </p>
                    </div>

                    {/* Card 2: 06 Systems */}
                    <div className="p-8 border border-black/5 hover:border-black/30 transition-colors bg-white shadow-sm flex flex-col group h-full">
                       <div className="flex flex-col gap-3 mb-5 border-b border-black/5 pb-4">
                          <span className="text-[11px] font-outfit font-black tracking-widest text-gray-500 uppercase shrink-0">06 Systems</span>
                          <strong className="text-[17px] text-black font-chinese font-bold group-hover:text-black transition-colors">建立包裝設計與市調資料庫</strong>
                       </div>
                       <p className="text-gray-600 leading-relaxed text-[15px] font-chinese">
                          彙整 TWS、HDT、Soundbar 紙卡內襯結構規格，形成模組化資料庫，加速專案提案效率，並精準對焦市場需求。
                       </p>
                    </div>

                    {/* Card 3: 02 Models */}
                    <div className="p-8 border border-black/5 hover:border-black/30 transition-colors bg-white shadow-sm flex flex-col group h-full">
                       <div className="flex flex-col gap-3 mb-5 border-b border-black/5 pb-4">
                          <span className="text-[11px] font-outfit font-black tracking-widest text-gray-500 uppercase shrink-0">02 Models</span>
                          <strong className="text-[17px] text-black font-chinese font-bold group-hover:text-black transition-colors">參與 HDT 電競耳機開發專案</strong>
                       </div>
                       <p className="text-gray-600 leading-relaxed text-[15px] font-chinese">
                          實際參與兩款 HyperX 電競耳機機型開發，累積從結構設計、打樣修正到量產導入的完整開發經驗。
                       </p>
                    </div>

                    {/* Card 4: Collaboration */}
                    <div className="p-8 border border-black/5 hover:border-black/30 transition-colors bg-gray-50 shadow-sm flex flex-col group h-full md:col-span-2">
                       <div className="flex flex-col gap-3 mb-5 border-b border-black/5 pb-4">
                          <span className="text-[11px] font-outfit font-black tracking-widest text-gray-400 uppercase shrink-0">Collaboration</span>
                          <strong className="text-[17px] text-black font-chinese font-bold group-hover:text-black transition-colors">跨部門與供應商協作能力</strong>
                       </div>
                       <p className="text-gray-600 leading-relaxed text-[15px] font-chinese">
                          能與供應商與工廠密切協作，確保設計順利導入量產並維持品質穩定。
                       </p>
                    </div>
                 </div>
               </div>

               {/* 3. Career Path */}
               <div>
                 <h3 className="text-[11px] font-bold tracking-[0.3em] font-outfit text-[#B38B3F] uppercase mb-4">Vision & Path</h3>
                 <h4 className="text-3xl md:text-4xl font-chinese font-black mb-10 text-black leading-tight border-b border-black/10 pb-6 flex items-center justify-between">
                   職涯規劃 
                   <span className="font-bebas text-5xl text-black/5 font-normal -translate-y-2 pointer-events-none hidden sm:block">CAREER</span>
                 </h4>
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-black/5 p-8 flex flex-col h-full hover:border-[#B38B3F]/30 transition-colors shadow-sm group">
                       <h4 className="font-bebas text-2xl font-normal tracking-widest text-[#B38B3F] mb-8 flex items-center justify-between border-b border-black/5 pb-4">
                         Short-term <div className="w-2 h-2 bg-[#B38B3F] rounded-full group-hover:scale-150 transition-transform"></div>
                       </h4>
                       <ul className="space-y-6 text-[14px] text-gray-600 font-chinese flex-1">
                          <li className="flex items-start gap-4"><div className="mt-2 min-w-[6px] min-h-[6px] rounded-full bg-gray-300"></div> <span className="leading-relaxed">深入 ESG 永續議題，探索各類紙材、布料等 CMF 特性與加工技術，建立應用知識庫，並與供應商合作開發環保材質</span></li>
                          <li className="flex items-start gap-4"><div className="mt-2 min-w-[6px] min-h-[6px] rounded-full bg-[#B38B3F]"></div> <span className="leading-relaxed text-black font-medium">強化紙材結構設計能力，目標能提出具創新性的設計專利</span></li>
                          <li className="flex items-start gap-4"><div className="mt-2 min-w-[6px] min-h-[6px] rounded-full bg-gray-300"></div> <span className="leading-relaxed">培養紙材成本評估能力，根據需求提出兼顧保護性與成本效益的結構優化方案</span></li>
                       </ul>
                    </div>
                    <div className="bg-[#121212] border border-white/5 p-8 flex flex-col h-full shadow-xl group">
                       <h4 className="font-bebas text-2xl font-normal tracking-widest text-white mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                         Long-term <div className="w-2 h-2 bg-white rounded-full group-hover:bg-[#B38B3F] transition-colors"></div>
                       </h4>
                       <ul className="space-y-6 text-[14px] text-gray-400 font-chinese flex-1">
                          <li className="flex items-start gap-4"><div className="mt-2 min-w-[6px] min-h-[6px] rounded-full bg-gray-600"></div> <span className="leading-relaxed">累積跨國與跨部門合作經驗，強化英文聽說讀寫的能力以應對全球化的工作需求</span></li>
                          <li className="flex items-start gap-4"><div className="mt-2 min-w-[6px] min-h-[6px] rounded-full bg-gray-300"></div> <span className="leading-relaxed text-gray-200 font-medium">持續提升設計落地與製程協作能力，累積更多實戰開發經驗</span></li>
                          <li className="flex items-start gap-4"><div className="mt-2 min-w-[6px] min-h-[6px] rounded-full bg-gray-600"></div> <span className="leading-relaxed">建立包裝設計與市場趨勢的連結敏感度，結合行銷視角強化整合能力，朝向具策略思維的設計開發整合型人才邁進</span></li>
                       </ul>
                    </div>
                 </div>
               </div>

               {/* 4. Philosophy */}
               <div>
                 <h3 className="text-[11px] font-bold tracking-[0.3em] font-outfit text-[#B38B3F] uppercase mb-4">Mindset</h3>
                 <h4 className="text-3xl md:text-4xl font-chinese font-black mb-10 text-black leading-tight border-b border-black/10 pb-6">設計理念</h4>
                 <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { id: "1", title: "設計應兼具感性與理性", desc: "設計不僅是創造視覺與情感價值，更必須考量製程可行性、技術限制、成本控制與品質穩定性。" },
                      { id: "2", title: "設計須服務於產品與使用者體驗", desc: "我重視產品本質，關注設計如何實際提升使用者的便利性與品牌價值，讓設計發揮功能性與影響力。" },
                      { id: "3", title: "重視跨部門合作與溝通效率", desc: "良好的設計來自良好的協作，我樂於與不同角色協同合作，透過積極溝通整合各方需求與資源。" },
                      { id: "4", title: "持續保持熱情與學習動能", desc: "對我而言，設計不只是工作，更是一種持續探索的過程。始終懷抱熱情與好奇心，樂於貢獻專業，並期待與夥伴一同創造實質價值。" }
                    ].map(idea => (
                       <div key={idea.id} className="flex flex-col gap-6 group bg-gray-50/50 p-8 border border-black/5 hover:border-[#B38B3F]/40 hover:bg-white transition-all shadow-sm">
                          <span className="font-bebas text-5xl text-black/5 group-hover:text-[#B38B3F]/30 transition-colors leading-none tracking-tighter self-start">0{idea.id}</span>
                          <div>
                             <h4 className="text-[17px] font-bold font-chinese text-black mb-3 group-hover:text-[#B38B3F] transition-colors">{idea.title}</h4>
                             <p className="text-[14px] text-gray-600 font-chinese leading-relaxed">{idea.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Project Detail Modal (White UI) --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-10 animate-fade-in" onClick={() => setSelectedProject(null)}>
          <div 
            className="bg-white w-full max-w-5xl max-h-full overflow-y-auto border border-black/10 relative flex flex-col animate-slide-up shadow-2xl"
            style={{ animationDuration: '0.4s' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-[#B38B3F] text-gray-400 hover:text-white transition-colors z-[110] rounded-full"
            >
              <X size={24} />
            </button>
            
            <div className="p-10 md:p-16 border-b border-black/5 bg-gray-50 flex flex-col relative overflow-hidden">
              <span className="font-chinese text-sm font-bold tracking-widest text-[#B38B3F] block mb-2 relative z-10">{selectedProject.zh}</span>
              <h2 className="font-bebas text-6xl md:text-8xl tracking-[0.1em] text-black leading-none uppercase relative z-10">{selectedProject.en}</h2>
              <p className="mt-6 text-gray-500 font-chinese text-lg max-w-2xl leading-relaxed relative z-10">{selectedProject.desc}</p>
              
              <span className="absolute -right-10 -bottom-10 font-bebas text-[200px] text-black/[0.03] select-none pointer-events-none leading-none">
                {selectedProject.en.substring(0, 2).toUpperCase()}
              </span>
            </div>

            <div className="flex flex-col">
              {selectedProject.subProjects?.map((sub, i) => (
                <div key={i} className={`p-10 md:p-16 ${i !== selectedProject.subProjects.length - 1 ? 'border-b border-black/5' : ''}`}>
                  <div className="w-full h-[40vh] md:h-[50vh] relative mb-12 bg-gray-100 group overflow-hidden">
                    <img 
                      src={sub.images[0]} 
                      alt={sub.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                  
                  <div className="mb-12">
                     <span className="text-[11px] font-bold text-[#B38B3F] tracking-widest uppercase font-outfit mb-3 block">{sub.client}</span>
                     <h3 className="text-3xl md:text-4xl text-black font-black font-chinese">{sub.title}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-sm font-bold tracking-[0.2em] text-gray-400 mb-4 font-outfit uppercase flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400/80"></div> Challenge
                      </h4>
                      <p className="text-gray-600 leading-relaxed font-chinese text-lg">{sub.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-[0.2em] text-gray-400 mb-4 font-outfit uppercase flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#B38B3F]"></div> Solution
                      </h4>
                      <p className="text-gray-600 leading-relaxed font-chinese text-lg">{sub.solution}</p>
                    </div>
                  </div>

                  <div className="mt-12 pt-10 border-t border-black/5">
                    <h4 className="text-sm font-bold tracking-[0.2em] text-gray-400 mb-6 font-outfit uppercase">Key Results</h4>
                    <div className="flex flex-wrap gap-4">
                      {sub.results.map((result, idx) => (
                        <div key={idx} className="flex gap-3 items-center bg-gray-50 px-5 py-3 border border-black/5 rounded-sm hover:border-[#B38B3F]/50 transition-colors">
                          <CheckCircle2 className="text-[#B38B3F]" size={18} />
                          <span className="text-gray-800 font-chinese text-[15px] font-bold">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- Certificate Detail Modal --- */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in" onClick={() => setSelectedCert(null)}>
          <div 
            className="w-full max-w-4xl relative flex flex-col animate-slide-up"
            style={{ animationDuration: '0.4s' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#B38B3F] transition-colors rounded-full"
            >
              <X size={32} />
            </button>
            
            <div className="bg-white/5 border border-white/10 rounded-sm overflow-hidden p-2">
               <img 
                 src={selectedCert.images[0]} 
                 alt={selectedCert.name} 
                 className="w-full h-auto object-contain max-h-[80vh] shadow-2xl"
               />
            </div>
            
            <div className="mt-6 text-center">
               <span className="text-[12px] font-bold text-[#B38B3F] tracking-[0.2em] font-outfit uppercase">{selectedCert.date}</span>
               <h3 className="text-xl md:text-2xl text-white font-bold font-chinese mt-2">{selectedCert.name}</h3>
            </div>
          </div>
        </div>
      )}

      {/* --- Experience Section --- */}
      <section id="experience" className="py-48 bg-[#0F0F0F] text-white border-y border-white/5">
        <div className="container mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-32">
            <div>
              <h2 className="font-bebas text-8xl tracking-tight leading-none mb-2 text-white">EXPERIENCE</h2>
              <span className="font-chinese text-2xl text-gray-400 font-bold italic">經歷與教育背景</span>
            </div>
            <span className="text-[12px] font-bold tracking-[0.6em] text-gray-500 uppercase italic font-outfit">Career Evolution</span>
          </div>
          
          <div className="space-y-40">
            {experience.map((item, idx) => (
              <div key={idx} className="grid lg:grid-cols-12 gap-12 group">
                <div className="lg:col-span-4 flex flex-col">
                  <span className="font-bebas text-2xl text-[#B38B3F] tracking-widest mb-4">{item.period}</span>
                  <h3 className="font-bebas text-5xl leading-[1.1] mb-2 group-hover:tracking-wider transition-all duration-700 uppercase text-white">{item.companyEn}</h3>
                  <h4 className="text-xl font-bold text-gray-300 mb-6 font-chinese">{item.companyZh}</h4>
                  <div className={`text-[11px] font-bold tracking-widest uppercase mb-8 font-outfit ${item.type === 'edu' ? 'text-[#B38B3F]' : 'text-gray-500'}`}>
                    {item.role}
                  </div>
                </div>
                <div className="lg:col-span-8 lg:pl-20 border-l border-white/10">
                  <p className="text-xl text-gray-400 font-medium leading-snug mb-12 italic font-chinese">{item.description}</p>
                  <div className="grid gap-6">
                    {item.achievements.map((ach, i) => (
                      <div key={i} className="flex gap-6 items-start group/item">
                        <Plus size={16} className="mt-1 text-[#B38B3F] group-hover/item:rotate-90 transition-transform" />
                        <p className="text-base font-normal text-gray-400 group-hover/item:text-white transition-colors leading-relaxed font-chinese">{ach}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Skills Section --- */}
      <section id="skills" className="py-48 bg-[#FBFBFA]">
        <div className="container mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-32">
            <div>
              <h2 className="font-bebas text-8xl tracking-tight leading-none mb-2">SKILLS</h2>
              <span className="font-chinese text-2xl text-gray-300 font-bold italic">核心技術能力</span>
            </div>
            <span className="text-[12px] font-bold tracking-[0.6em] text-gray-300 uppercase font-outfit">Technical Mastery</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skills.map((skill, i) => (
              <div key={i} className="p-10 md:p-12 border border-black/10 bg-white group hover:border-[#B38B3F] transition-all duration-700 shadow-sm flex flex-col h-full relative overflow-hidden">
                <div className="flex justify-between items-start mb-10 relative z-10">
                  <skill.icon className="text-[#B38B3F] group-hover:scale-110 transition-transform" size={48} strokeWidth={1} />
                  <span className="font-bebas text-3xl text-black/5 group-hover:text-black/10 transition-colors">0{i+1}</span>
                </div>
                <div className="relative z-10 flex flex-col flex-1">
                  <span className="font-bebas text-2xl md:text-3xl tracking-widest block mb-1 uppercase leading-tight">{skill.title}</span>
                  <h4 className="font-chinese text-xl font-bold text-black group-hover:text-[#B38B3F] transition-colors duration-500">{skill.label}</h4>
                  
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-in-out">
                    <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out flex flex-col">
                      <div className="pt-6">
                        {skill.description && (
                          <p className="text-gray-500 font-chinese leading-relaxed text-[15px] mb-8">
                            {skill.description}
                          </p>
                        )}
                        
                        <div>
                          {skill.subskills && (
                            <>
                              <h5 className="text-[10px] font-bold tracking-widest uppercase font-outfit text-[#B38B3F] mb-3">Core & Sub-skills</h5>
                              <div className="flex flex-wrap gap-2">
                                {skill.subskills.map((sub, idx) => (
                                  <span key={idx} className="text-[11px] font-bold tracking-wider px-3 py-1.5 bg-gray-50 border border-black/5 text-gray-600 font-chinese group-hover:border-[#B38B3F]/30 transition-colors">
                                    {sub}
                                  </span>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Portfolio Projects (Redesigned: Clean & Symmetric & White) --- */}
      <section id="projects" className="py-60 bg-[#FDFDFD] text-[#121212] relative overflow-hidden">
        <div className="container mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24">
            <div>
              <h2 className="font-bebas text-9xl tracking-tight leading-none mb-4 text-black">PORTFOLIO</h2>
              <span className="font-chinese text-2xl text-[#B38B3F] tracking-widest font-bold">作品成就 × 核心領域</span>
            </div>
            <span className="text-[12px] font-bold tracking-[0.6em] text-gray-400 uppercase italic font-outfit mt-8 md:mt-0">Symmetric Structural Excellence</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedProject(project)}
                className="group relative flex flex-col h-full bg-white border border-black/5 transition-all duration-500 hover:border-[#B38B3F]/50 cursor-pointer shadow-sm hover:shadow-md"
              >
                {/* Accent Top Line */}
                <div className="w-0 h-[2px] bg-[#B38B3F] transition-all duration-700 group-hover:w-full"></div>
                
                <div className="p-10 flex flex-col flex-grow">
                  {/* Category */}
                  <div className="flex justify-between items-center mb-10">
                    <span className="font-chinese text-sm font-bold tracking-widest text-[#B38B3F]">{project.zh}</span>
                    <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity">
                       <Plus size={14} className="text-black" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mb-12">
                    <h3 className="font-bebas text-5xl tracking-[0.1em] mb-6 leading-snug text-black group-hover:text-[#B38B3F] transition-colors uppercase">{project.en}</h3>
                    <p className="font-chinese text-gray-500 text-lg leading-relaxed line-clamp-4">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tags Aligned to Bottom */}
                  <div className="mt-auto pt-8 border-t border-black/5">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-black tracking-widest border border-black/5 px-3 py-1.5 uppercase bg-gray-50 text-gray-500 group-hover:bg-[#B38B3F] group-hover:text-white transition-all">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle Background Mark */}
                <span className="absolute bottom-6 right-8 font-bebas text-6xl text-black/[0.03] pointer-events-none group-hover:text-[#B38B3F]/10 transition-colors">
                  {project.en.substring(0, 2).toUpperCase()}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
             <button className="flex items-center gap-4 text-[11px] font-black tracking-[0.4em] text-gray-400 hover:text-black transition-colors group uppercase">
               Scroll for More <ArrowRight className="group-hover:translate-x-2 transition-transform" />
             </button>
          </div>
        </div>
      </section>

      {/* --- Courses & Certifications --- */}
      <section id="courses" className="py-48 bg-[#0F0F0F] text-white border-y border-white/5">
        <div className="container mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-32">
            <div>
              <h2 className="font-bebas text-8xl tracking-tight leading-none mb-2">COURSES</h2>
              <span className="font-chinese text-2xl text-gray-400 font-bold italic">專業進修與證照</span>
            </div>
            <span className="text-[12px] font-bold tracking-[0.6em] text-gray-500 uppercase font-outfit">Expertise Growth</span>
          </div>
          
          <div className="grid grid-cols-1 gap-10">
            {certifications.map((c, i) => (
              <div 
                key={i} 
                className={`p-12 border border-white/5 bg-[#1A1A1A] group transition-all duration-500 shadow-sm relative overflow-hidden ${c.images ? 'cursor-pointer hover:border-[#B38B3F]' : 'hover:border-white/20'}`}
                onClick={() => c.images && setSelectedCert(c)}
              >
                {c.icon && <c.icon className="absolute -right-8 -bottom-8 text-white/[0.02] group-hover:text-[#B38B3F]/10 transition-colors" size={200} strokeWidth={1} />}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 relative z-10">
                  <div className="flex-1">
                     <div className="flex items-center gap-4 mb-3">
                       <span className="text-[12px] font-bold text-[#B38B3F] tracking-[0.2em] block font-outfit uppercase">{c.date}</span>
                       {c.status && <span className="text-[10px] font-black bg-[#B38B3F] text-white px-3 py-1 rounded-sm font-outfit uppercase">{c.status}</span>}
                     </div>
                     <h4 className="font-chinese text-xl md:text-2xl font-black text-white group-hover:text-[#B38B3F] transition-colors leading-relaxed">{c.name}</h4>
                     <p className="text-xs font-bold text-gray-500 font-chinese mt-2 uppercase tracking-wider">{c.provider}</p>
                  </div>
                  {c.duration && (
                    <div className="flex items-center gap-2 px-5 py-3 bg-[#222] rounded-full border border-white/5">
                       <Clock size={16} className="text-[#B38B3F]" />
                       <span className="text-[11px] font-black font-outfit uppercase text-gray-300">{c.duration}</span>
                    </div>
                  )}
                </div>
                {c.summary && <p className="text-lg text-gray-400 font-chinese leading-relaxed mb-8 border-l-4 border-[#B38B3F]/20 pl-6 max-w-4xl relative z-10">{c.summary}</p>}
                {c.highlights && (
                  <div className="flex flex-wrap gap-4 relative z-10">
                     {c.highlights.map(h => (
                       <span key={h} className="text-[11px] font-bold font-chinese text-gray-400 bg-[#222] px-5 py-2.5 rounded-sm flex items-center gap-3 border border-white/5 hover:bg-[#B38B3F] hover:text-black transition-all">
                         <CheckCircle2 size={14} className="text-[#B38B3F] group-hover:text-black" /> {h}
                       </span>
                     ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Interests --- */}
      <section id="interests" className="py-48 bg-white">
        <div className="container mx-auto px-10">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-bebas text-7xl tracking-tight mb-12 uppercase italic">Interests <span className="text-3xl text-gray-200 not-italic font-chinese ml-2">興趣嗜好</span></h2>
              <h3 className="font-chinese text-2xl font-bold mb-4 text-[#B38B3F]">運動訓練</h3>
              <p className="text-[16px] text-gray-600 font-normal leading-relaxed mb-6 font-chinese">
                工作之餘，我熱衷於挑戰自我的運動項目，包括健身、馬拉松與登山。
              </p>
              <p className="text-[15px] text-gray-500 font-normal leading-relaxed mb-10 font-chinese">
                這些活動不僅讓我保持身心健康，更讓我在一次次的訓練與突破中，學習如何與自己對話、建立目標並找出實踐方法。對我而言，運動是一種自我探索與壓力釋放的途徑，也深深影響了我在工作上的思考方式與執行力。它讓我更堅定、更有彈性，也讓我在生活中保持熱情與正向的態度。
              </p>
              <div className="flex gap-4">
                 {["Fitness", "Marathon", "Hiking"].map(tag => <span key={tag} className="text-[11px] font-bold tracking-widest border-2 border-black px-5 py-2.5 uppercase hover:bg-black hover:text-white transition-all cursor-default font-outfit">{tag}</span>)}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  { label: "FITNESS", icon: Zap },
                  { label: "MARATHON", icon: MoveRight },
                  { label: "HIKING", icon: Globe }
                ].map((item, i) => (
                  <div key={i} className="aspect-square bg-gray-50 flex flex-col items-center justify-center gap-4 group hover:bg-[#B38B3F] hover:text-white transition-all shadow-sm">
                    <item.icon size={48} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold tracking-widest uppercase font-outfit">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer id="contact" className="py-48 bg-[#0F0F0F] text-white text-center border-t border-white/5">
        <div className="container mx-auto px-10">
          <h2 className="font-bebas text-[14vw] leading-none tracking-tighter mb-24 cursor-default animate-pulse uppercase text-center">
            SAY <br /> <span className="text-transparent stroke-white hover:text-white transition-all duration-700 font-chinese text-8xl md:text-[10vw]">你好.</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-20 text-3xl font-light tracking-tight mb-40 text-center font-outfit">
            <a href="mailto:amanda840604@gmail.com" className="border-b-2 border-white/10 hover:border-[#B38B3F] hover:text-[#B38B3F] transition-all pb-2 text-white">amanda840604@gmail.com</a>
            <a href="tel:0918190990" className="opacity-60 hover:opacity-100 transition-all font-bebas text-4xl tracking-widest italic underline decoration-1 underline-offset-8 text-white">0918 190 990</a>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-20">
            <div className="flex items-center gap-5">
              <MyLogo className="w-8 h-8" />
              <div className="text-left leading-none">
                <span className="font-bebas text-2xl uppercase text-left block">Amanda Lai</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase font-outfit">Product & Structural Designer</span>
              </div>
            </div>
            <div className="flex gap-12 text-[11px] font-bold tracking-[0.5em] text-gray-500 uppercase italic font-outfit">
               <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#B38B3F] transition-colors">LinkedIn</a>
               <a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-[#B38B3F] transition-colors">Behance</a>
               <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#B38B3F] transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;600;700;800;900&family=Noto+Sans+TC:wght@400;500;700;900&display=swap');
        
        * {
          font-family: 'Outfit', 'Noto Sans TC', sans-serif !important;
        }

        body { 
          background-color: #FDFDFD;
          scroll-behavior: smooth;
          -webkit-font-smoothing: antialiased;
        }

        .font-bebas, .font-bebas * {
          font-family: 'Bebas Neue', cursive !important;
        }

        .font-chinese, .font-chinese * {
          font-family: 'Noto Sans TC', sans-serif !important;
        }

        .font-outfit, .font-outfit * {
          font-family: 'Outfit', sans-serif !important;
        }

        .stroke-black { -webkit-text-stroke: 1.5px #121212; }
        .stroke-white { -webkit-text-stroke: 1.5px #FFFFFF; }

        @keyframes slide-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

        .animate-slide-up { animation: slide-up 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        .animate-fade-in { animation: fade-in 2s ease-out forwards; }

        @media (max-width: 768px) {
          .font-bebas { letter-spacing: 0.05em; }
        }
      `}} />
    </div>
  );
};

export default App;
