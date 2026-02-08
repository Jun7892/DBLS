
import React from 'react';
import { ArrowUpRight, ArrowDownRight, PackageCheck, Info, Layers } from 'lucide-react';

const ServicePage: React.FC = () => {
  const services = [
    {
      title: '국내 → 해외 (수출 구간)',
      icon: <ArrowUpRight className="text-white" size={40} />,
      desc: '국내 화물을 인수하여 수출에 필요한 서류 검토 및 통관을 거쳐 공항·항만까지 안전하게 운송합니다. 수출 물류의 시작을 책임집니다.'
    },
    {
      title: '해외 → 국내 (수입 구간)',
      icon: <ArrowDownRight className="text-white" size={40} />,
      desc: '도착 화물을 공항·항만에서 신속하게 인수하고 수입 통관 후 국내 도착지까지 정확하게 배송합니다. 수입 물류의 핵심 단계를 전담합니다.'
    },
    {
      title: '수출입 관련 부대서비스',
      icon: <Layers className="text-white" size={40} />,
      desc: '화물 보수작업 및 분할작업, 보세운송 서비스 등 물류 효율을 높이는 모든 연계 실무를 함께 제공합니다. 물품 특성에 따른 맞춤형 처리가 가능합니다.'
    }
  ];

  return (
    <div className="fade-in pb-24">
      {/* Header */}
      <div className="py-24 bg-zinc-950 border-b border-zinc-900 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Dongbang Logis Co., Ltd.는 국제 물류의 복잡한 과정 중 핵심이 되는 
            국내 통관 및 운송 구간을 전문적으로 수행합니다.
          </p>
        </div>
      </div>

      {/* Main Services */}
      <div className="max-w-7xl mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col p-10 border border-zinc-800 rounded-sm hover:border-white transition-all duration-300 bg-zinc-950/50">
              <div className="mb-8">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-6 leading-tight">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Section */}
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="p-8 border border-zinc-800 bg-zinc-900/30 rounded-sm">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <PackageCheck size={20} className="text-zinc-400" /> 소량/특수 운송 대응
            </h4>
            <p className="text-zinc-400 leading-relaxed">
              상업용 대형 화물은 물론, 소량 샘플, 고가 정밀 물품, 급행 운송이 필요한 건까지 유연하게 대응합니다. 물동량의 크기와 관계없이 최적의 프로세스를 적용합니다.
            </p>
          </div>
          <div className="p-8 border border-zinc-800 bg-zinc-900/30 rounded-sm">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Layers size={20} className="text-zinc-400" /> 보수 및 보세운송
            </h4>
            <p className="text-zinc-400 leading-relaxed">
              수출입 화물의 상태 보완을 위한 보수작업, 대량 화물의 소분(분할)작업, 통관 전 보세 구역 간 이동인 보세운송 업무를 전문적으로 처리합니다.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 rounded-sm">
          <div className="flex items-start gap-4">
            <div className="mt-1"><Info size={24} className="text-zinc-400" /></div>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">서비스 정책 가이드</h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
                <p>
                  당사는 <strong className="text-white">국내 구간 운송, 통관 실무, 부대 작업(보수/분할 등)</strong>을 핵심 업무로 수행합니다.
                </p>
                <p>
                  해외 운송 구간 및 해외 현지 통관은 지정된 포워딩 업체와 협력하거나 화주 측에서 진행하며, 당사는 해당 운송의 원활한 국내 연결을 보장합니다.
                </p>
                <p>
                  업무 효율과 투명성을 위해 <strong className="text-white">선결제 방식</strong>을 원칙으로 하며, 견적 승인 후 즉시 배치 및 작업에 착수합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
