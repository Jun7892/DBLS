
import React from 'react';
import { ArrowRight, Truck, Plane, Ship } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            alt="Logistics Terminal" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            DONGBANG LOGIS CO., LTD.<br />
            <span className="text-zinc-400 text-3xl md:text-5xl lg:text-6xl mt-4 block italic font-light">The Global Logistics Gateway</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            공항·항만을 중심으로 한 국내 운송과 수출입 실무를 전담하며,<br className="hidden md:block" /> 
            통관부터 내륙 운송까지 물류의 전 과정을 최적으로 연결합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/service" 
              className="bg-white text-black px-8 py-4 rounded-sm font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
            >
              서비스 안내 <ArrowRight size={18} />
            </Link>
            <Link 
              to="/contact" 
              className="border border-zinc-700 bg-transparent text-white px-8 py-4 rounded-sm font-bold hover:bg-zinc-900 transition-colors"
            >
              상담 문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">회사 소개</h2>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>
                  <strong className="text-white underline underline-offset-4 decoration-zinc-700">Dongbang Logis Co., Ltd.</strong>는 국내 및 해외 물류 과정 중 발생하는 국내 구간 운송 및 통관 실무를 전문으로 수행하는 물류 기업입니다.
                </p>
                <p>
                  국내 공장 출고부터 공항·항만 반입, 또는 해외 도착 화물의 공항·항만 인수 후 국내 <strong className="text-white">수령 업체까지의 통관 및 운송을 책임집니다.</strong> 
                </p>
                <p>
                  대량 물류뿐 아니라 소량·비정기 운송도 유연하게 대응하며, 다년간의 실무 경험을 바탕으로 안정적이고 효율적인 서비스를 제공합니다.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 border border-zinc-800 rounded-sm bg-black hover:border-zinc-600 transition-colors">
                <div className="mb-4 text-zinc-400"><Truck size={32} /></div>
                <h3 className="text-xl font-bold mb-2">국내 전구간</h3>
                <p className="text-sm text-zinc-500">전국 주요 공항·항만 맞춤형 물류</p>
              </div>
              <div className="p-8 border border-zinc-800 rounded-sm bg-black hover:border-zinc-600 transition-colors">
                <div className="mb-4 text-zinc-400"><Plane size={32} /></div>
                <h3 className="text-xl font-bold mb-2">공항 통관/운송</h3>
                <p className="text-sm text-zinc-500">항공 화물의 긴급 입출고 최우선 처리</p>
              </div>
              <div className="p-8 border border-zinc-800 rounded-sm bg-black hover:border-zinc-600 transition-colors">
                <div className="mb-4 text-zinc-400"><Ship size={32} /></div>
                <h3 className="text-xl font-bold mb-2">항만 통관/운송</h3>
                <p className="text-sm text-zinc-500">해상 화물의 벌크/컨테이너 안정 관리</p>
              </div>
              <div className="p-8 bg-zinc-900 rounded-sm flex flex-col justify-center items-center text-center">
                <p className="text-[10px] uppercase tracking-tighter text-zinc-500 mb-2 font-bold">Business Core</p>
                <p className="font-bold leading-tight italic">
                  "모든 물동량에 대응합니다.<br />소량부터 정확하게."
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
