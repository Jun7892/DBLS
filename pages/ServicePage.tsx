
import React from 'react';
import { ArrowUpRight, ArrowDownRight, PackageCheck, Info } from 'lucide-react';

const ServicePage: React.FC = () => {
  const services = [
    {
      title: '국내 → 해외 운송 (국내 구간)',
      icon: <ArrowUpRight className="text-white" size={40} />,
      desc: '국내 공장 또는 지정 장소에서 화물을 인수하여 출고에 필요한 CI 처리 후 공항 또는 항만까지 안전하게 운송합니다. 국제 운송을 위한 국내 구간 실무를 전담합니다.'
    },
    {
      title: '해외 → 국내 운송 (국내 구간)',
      icon: <ArrowDownRight className="text-white" size={40} />,
      desc: '공항 또는 항만에 도착한 화물을 인수하여 국내 수령 업체까지 정확하고 신속하게 운송합니다. 수입 물류 과정 중 국내 운송 구간을 전문적으로 수행합니다.'
    },
    {
      title: '소량부터 가능한 다양한 물품 운송',
      icon: <PackageCheck className="text-white" size={40} />,
      desc: '대량 물류에 국한되지 않고 소량, 급행, 비정기 운송도 유연하게 대응합니다. 일반 상업 물품부터 고급 물품까지 물품 특성과 일정에 맞춘 국내 운송 경험을 보유하고 있습니다.'
    }
  ];

  return (
    <div className="fade-in pb-24">
      {/* Header */}
      <div className="py-24 bg-zinc-950 border-b border-zinc-900 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            동방엘에스는 국제 물류의 복잡한 과정 중 핵심이 되는 국내 운송 구간을 
            안정적으로 처리하는 전문 역량을 갖추고 있습니다.
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

      {/* Service Policy */}
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <div className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 rounded-sm">
          <div className="flex items-start gap-4">
            <div className="mt-1"><Info size={24} className="text-zinc-400" /></div>
            <div>
              <h2 className="text-2xl font-bold mb-6">서비스 범위 및 유의사항</h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
                <p>
                  동방엘에스는 <strong className="text-white">국내 구간 운송 및 CI 전후 실무 처리</strong>를 중심으로 업무를 수행합니다.
                </p>
                <p>
                  해외 운송 및 해외 통관 업무는 화주 또는 지정 포워더가 진행하며, 당사는 해당 운송의 원활한 연결을 위한 국내 실무 파트너 역할을 합니다.
                </p>
                <p>
                  모든 운송 업무는 <strong className="text-white">선결제 방식</strong>으로 진행됩니다. 견적 승인 후 사전 협의를 통해 구체적인 일정 및 운송 범위를 확정합니다.
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
