
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
            국제 물류의 시작과 끝,<br />
            <span className="text-zinc-400">국내 구간을 책임지는</span> 운송 파트너
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            공항·항만을 중심으로 한 국내 운송과 CI 전후 실무를 담당하며,<br className="hidden md:block" /> 
            소량부터 유연하게 대응하는 물류 서비스를 제공합니다.
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
                  <strong className="text-white">동방엘에스</strong>는 국내 및 해외 물류 과정 중 발생하는 국내 구간 운송 업무를 전문으로 수행하는 물류 회사입니다.
                </p>
                <p>
                  국내 공장 출고부터 공항·항만 반입, 또는 해외 도착 화물의 공항·항만 인수 후 국내 수령 업체까지의 운송을 책임집니다. 
                </p>
                <p>
                  대량 물류뿐 아니라 소량·비정기 운송도 유연하게 대응하며, 실무 중심의 안정적인 운송을 지향합니다.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 border border-zinc-800 rounded-sm bg-black hover:border-zinc-600 transition-colors">
                <div className="mb-4 text-zinc-400"><Truck size={32} /></div>
                <h3 className="text-xl font-bold mb-2">국내 전구간</h3>
                <p className="text-sm text-zinc-500">전국 어디서나 공항·항만까지 연결</p>
              </div>
              <div className="p-8 border border-zinc-800 rounded-sm bg-black hover:border-zinc-600 transition-colors">
                <div className="mb-4 text-zinc-400"><Plane size={32} /></div>
                <h3 className="text-xl font-bold mb-2">공항 물류</h3>
                <p className="text-sm text-zinc-500">항공 화물의 신속한 입출고 대응</p>
              </div>
              <div className="p-8 border border-zinc-800 rounded-sm bg-black hover:border-zinc-600 transition-colors">
                <div className="mb-4 text-zinc-400"><Ship size={32} /></div>
                <h3 className="text-xl font-bold mb-2">항만 물류</h3>
                <p className="text-sm text-zinc-500">해상 화물의 안정적인 운송 관리</p>
              </div>
              <div className="p-8 bg-zinc-900 rounded-sm flex flex-col justify-center items-center text-center">
                <p className="text-sm uppercase tracking-tighter text-zinc-500 mb-2">Core Philosophy</p>
                <p className="font-bold leading-tight italic">
                  "대량이 아니어도 됩니다.<br />소량부터 정확하게."
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
