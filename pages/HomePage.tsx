
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
              (주)동방엘에스
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-none block mb-6">
              DONGBANG LOGIS
            </h1>
            <p className="text-zinc-400 text-lg md:text-2xl lg:text-3xl tracking-[0.1em] font-light max-w-4xl">
              Professional Customs Clearance & Domestic Logistics Solution
            </p>
          </div>
          
          <p className="text-base md:text-lg text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
            공항과 항만을 잇는 가장 신속하고 정확한 물류의 맥박.<br />
            (주)동방엘에스가 귀사의 성공적인 수출입 비즈니스를 지원합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              to="/service" 
              className="bg-white text-black px-10 py-4 rounded-sm font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              Our Services <ArrowRight size={16} />
            </Link>
            <Link 
              to="/contact" 
              className="border border-zinc-800 bg-transparent text-white px-10 py-4 rounded-sm font-bold hover:bg-zinc-900 transition-all text-sm uppercase tracking-wider"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-3 py-1 border border-zinc-800 text-[10px] text-zinc-500 font-bold tracking-widest uppercase mb-6">About Us</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">신뢰할 수 있는 물류 파트너,<br />(주)동방엘에스</h2>
              <div className="space-y-8 text-zinc-400 text-lg leading-relaxed">
                <p>
                  <strong className="text-zinc-200">DONGBANG LOGIS CO., LTD.</strong>는 국내 공항 및 항만을 기점으로 하는 통관 및 내륙 운송 분야에서 풍부한 경험을 쌓아온 전문 기업입니다.
                </p>
                <p>
                  단순한 화물 운송을 넘어, 복잡한 통관 절차와 보세 구역 간 이동, 그리고 최종 목적지까지의 완벽한 연계를 통해 <strong className="text-zinc-200">고객사의 물류 비용 절감과 시간 단축</strong>을 실현합니다.
                </p>
                <p>
                  우리는 모든 화물의 가치를 소중히 여기며, 소량 샘플부터 대형 프로젝트 카고까지 차별화된 맞춤형 솔루션을 제공하는 것을 원칙으로 합니다.
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
