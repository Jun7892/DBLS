import React from 'react';
import { ArrowRight, Truck, Plane, Ship } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            alt="Logistics Terminal" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-10">
            <span className="text-xs md:text-sm font-medium tracking-[0.5em] text-zinc-500 uppercase mb-6 block border-b border-zinc-800 pb-2">
              (주) 동방엘에스
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight block mb-6">
              공항·항만 기반 통관 및<br className="hidden md:block" /> 국제 및 국내 물류 전문
            </h1>
            <div className="flex flex-col items-center gap-2">
              <p className="text-zinc-400 text-lg md:text-xl tracking-[0.05em] font-light">
                Customs Clearance & Domestic Logistics
              </p>
              <p className="text-zinc-500 text-sm md:text-base font-medium">
                Based in Incheon Airport & Port
              </p>
            </div>
          </div>
          
          <p className="text-base md:text-lg text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed font-normal">
            수입·수출 통관, 보세 화물 처리, 국내 연계 운송까지<br className="hidden sm:block" />
            원스톱으로 지원합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              to="/service" 
              className="bg-white text-black px-10 py-4 rounded-sm font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              OUR SERVICES (서비스 보기) <ArrowRight size={16} />
            </Link>
            <Link 
              to="/contact" 
              className="border border-zinc-800 bg-transparent text-white px-10 py-4 rounded-sm font-bold hover:bg-zinc-900 transition-all text-sm uppercase tracking-wider"
            >
              GET IN TOUCH (문의하기)
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block px-3 py-1 border border-zinc-800 text-[10px] text-zinc-500 font-bold tracking-widest uppercase">About Us</div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">신뢰할 수 있는 물류 파트너,<br />DONGBANG LS CO., LTD.</h2>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light">
                <p>
                  <strong className="text-zinc-200">(주)동방엘에스</strong>는 인천공항 및 주요 항만을 기반으로<br className="hidden md:block" /> 수입·수출 통관과 국내 내륙 운송을 전문으로 하는 물류 기업입니다.
                </p>
                <p>
                  보세 화물 처리(보수·분할 등) 및 공항·항만 연계 운송을 체계적으로 수행하여<br className="hidden md:block" /> 고객사의 물류 비용 절감과 업무 효율 향상을 지원합니다.
                </p>
                <p>
                  2013년 설립 이후 10년 이상 축적된 실무 경험을 바탕으로<br className="hidden md:block" /> 안정적이고 일관된 운영 시스템을 구축해왔습니다.
                </p>
                <p>
                  기업 물량은 물론, 개인 고객의 소량 화물 및 샘플 운송까지 유연하게 대응합니다.
                </p>
                <p className="text-zinc-200 font-medium">
                  소량 화물부터 기업 프로젝트 물량까지<br /> 책임감 있는 물류 파트너가 되겠습니다.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-10 border border-zinc-900 rounded-sm bg-zinc-950/30 hover:bg-zinc-900/50 transition-all duration-500 group">
                <div className="mb-6 text-zinc-600 group-hover:text-white transition-colors"><Truck size={40} strokeWidth={1.5} /></div>
                <h3 className="text-xl font-bold mb-3">전국 운송 인프라</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">인천항, 부산항 및 인천공항을 잇는 전국 단위의 신속한 운송 네트워크 보유</p>
              </div>
              <div className="p-10 border border-zinc-900 rounded-sm bg-zinc-950/30 hover:bg-zinc-900/50 transition-all duration-500 group">
                <div className="mb-6 text-zinc-600 group-hover:text-white transition-colors"><Plane size={40} strokeWidth={1.5} /></div>
                <h3 className="text-xl font-bold mb-3">수출입 통관 전문</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">각종 검역 및 까다로운 통관 조건에도 능숙하게 대응하는 실무 노하우</p>
              </div>
              <div className="p-10 border border-zinc-900 rounded-sm bg-zinc-950/30 hover:bg-zinc-900/50 transition-all duration-500 group">
                <div className="mb-6 text-zinc-600 group-hover:text-white transition-colors"><Ship size={40} strokeWidth={1.5} /></div>
                <h3 className="text-xl font-bold mb-3">보세물류 서비스</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">보세운송 및 보세구역 내 화물 보수/작업 등 특수 물류의 안정적 처리</p>
              </div>
              <div className="p-10 bg-zinc-900/20 border border-zinc-900 rounded-sm flex flex-col justify-center items-center text-center">
                <div className="w-12 h-1px bg-zinc-700 mb-6"></div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4 font-bold">Mission</p>
                <p className="font-medium text-lg leading-snug text-zinc-300">
                  "물류의 모든 과정을<br />연결하고 혁신합니다."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;