import React from 'react';
import { ArrowUpRight, ArrowDownRight, PackageCheck, Info, Layers } from 'lucide-react';

const ServicePage: React.FC = () => {
  const services = [
    {
      title: 'Import Customs Clearance (수입 통관)',
      icon: <ArrowDownRight className="text-white" size={40} />,
      items: [
        '공항·항만 도착 화물 통관 처리',
        '보세구역 반출 및 국내 연계 운송',
        '국내 최종 목적지 배송 관리'
      ]
    },
    {
      title: 'Export Customs Clearance (수출 통관)',
      icon: <ArrowUpRight className="text-white" size={40} />,
      items: [
        '수출 신고 및 서류 검토',
        '공항·항만 반입 지원',
        '선적 전 국내 운송 연계'
      ]
    },
    {
      title: 'Bonded & Value-added Services (보세·부대작업)',
      icon: <Layers className="text-white" size={40} />,
      items: [
        '보수 작업 및 분할 작업',
        '보세운송 및 특수 화물 처리',
        '긴급/소량 화물 대응'
      ]
    }
  ];

  return (
    <div className="fade-in pb-24">
      {/* Header */}
      <div className="py-24 bg-zinc-950 border-b border-zinc-900 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">통관 및 국내 물류 서비스</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Dongbang LS Co., Ltd.는 국제 물류의 복잡한 과정 중 핵심이 되는 
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
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="text-zinc-400 flex items-start gap-2">
                    <span className="text-zinc-600 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
              <Layers size={20} className="text-zinc-400" /> 보세운송 및 보수·분할 작업
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
                  원활한 업무 진행을 위해 <strong className="text-white">사전 협의 및 결제 확인 후 작업이 시작됩니다.</strong> (견적 승인 후 배차 및 작업에 착수합니다.)
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