import React from 'react';
import { Mail, Phone, FileText, ClipboardList, MapPin, Printer, Navigation, Map, ExternalLink } from 'lucide-react';

const ContactPage: React.FC = () => {
  const inquiryFields = [
    '회사명 및 담당자 연락처',
    '회신 이메일 주소',
    '운송 구분 (수출 국내구간 / 수입 국내구간)',
    '화물 종류 및 특이사항 (보수/분할 작업 필요 여부)',
    '출발지 및 도착지 상세 정보',
    '예상 물량 및 규격 (소량 가능)',
    '희망 일정 및 긴급성',
    '결제 방식: 사전 결제 확인 후 진행'
  ];

  const contactMethods = [
    {
      label: 'Office Telephone',
      value: '032-872-1714',
      icon: <Phone size={18} />,
      isHighlight: false
    },
    {
      label: 'Fax Number',
      value: '032-872-1715',
      icon: <Printer size={18} />,
      isHighlight: false
    },
    {
      label: 'Mobile (Direct)',
      value: '+82-10-5211-5521',
      icon: <Phone size={18} />,
      isHighlight: true
    },
    {
      label: 'Official E-mail',
      value: 'sh872118@naver.com',
      icon: <Mail size={18} />,
      isHighlight: false
    }
  ];

  const mapLinks = [
    {
      name: '네이버 지도',
      url: 'https://naver.me/FyAgiYr9',
      icon: <Navigation size={14} />,
      color: 'hover:border-[#03C75A] hover:text-[#03C75A]' // 네이버 브랜드 컬러 포인트
    },
    {
      name: 'Google Maps',
      url: 'https://maps.app.goo.gl/vttzSsheb3XofNZCA',
      icon: <Map size={14} />,
      color: 'hover:border-blue-500 hover:text-blue-500' // 구글 브랜드 컬러 포인트
    }
  ];

  return (
    <div className="fade-in pb-24">
      {/* Header */}
      <div className="py-24 bg-zinc-950 border-b border-zinc-900 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">Contact</h1>
          <p className="text-zinc-400 text-lg max-w-2xl md:max-w-none mx-auto leading-relaxed">
            정확한 물류 설계를 위해 아래 정보를 포함하여 이메일로 문의해 주시면<br className="hidden md:block" />
            신속히 검토 후 회신드립니다.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-stretch">
          
          {/* Left Column: Balanced Contact & Location */}
          <div className="flex flex-col">
            <div className="flex flex-col h-full">
              {/* Contact List */}
              <div className="flex-grow">
                <h2 className="text-xl font-bold mb-10 flex items-center gap-2 tracking-tight">
                  <span className="w-8 h-px bg-zinc-700"></span> 연락처 및 상담 채널
                </h2>
                <div className="space-y-4">
                  {contactMethods.map((method, idx) => (
                    <div 
                      key={idx} 
                      className={`p-6 border border-zinc-800 rounded-sm flex items-center gap-6 transition-all duration-300 hover:bg-zinc-900/40 ${method.isHighlight ? 'bg-zinc-900/30 border-zinc-700' : 'bg-transparent'}`}
                    >
                      <div className={`p-3 rounded-full ${method.isHighlight ? 'bg-white text-black' : 'bg-zinc-900 text-zinc-500'}`}>
                        {method.icon}
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mb-1">
                          {method.label}
                        </p>
                        <p className={`text-xl font-medium ${method.isHighlight ? 'text-white' : 'text-zinc-300'}`}>
                          {method.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Section */}
              <div className="mt-16 lg:mt-auto">
                <h2 className="text-xl font-bold mb-10 flex items-center gap-2 tracking-tight">
                  <span className="w-8 h-px bg-zinc-700"></span> 오시는 길 / 주소
                </h2>
                <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-sm flex flex-col sm:flex-row items-start gap-6 hover:border-zinc-700 transition-colors">
                  <div className="p-3 bg-zinc-900 rounded-sm text-zinc-400 shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-zinc-200 text-lg mb-1 font-medium leading-tight">
                      인천시 미추홀구 남주길 26-6 101, 102호 (주안동 702번지)
                    </p>
                    <p className="text-zinc-500 text-sm leading-relaxed italic mb-6">
                      26-6 Namju-gil, Michuhol-gu, Incheon, Republic of Korea
                    </p>
                    
                    {/* Map Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {mapLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-sm text-[11px] font-bold uppercase tracking-wider text-zinc-400 transition-all duration-300 ${link.color} hover:-translate-y-0.5`}
                        >
                          {link.icon}
                          {link.name}
                          <ExternalLink size={10} className="opacity-40" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Guide Card */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-8 md:p-12 rounded-sm flex flex-col h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <ClipboardList size={140} strokeWidth={1} />
            </div>
            
            <div className="flex items-center gap-3 mb-10 relative z-10">
              <div className="p-2.5 bg-white/5 rounded-sm">
                <ClipboardList className="text-zinc-300" size={26} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">견적 요청 필수 정보</h2>
            </div>
            
            <p className="text-zinc-400 mb-12 leading-relaxed relative z-10 font-light text-lg">
              정확하고 빠른 견적 산출을 위해 이메일 문의 시<br /> 아래 내용을 기재해 주시기 바랍니다.
            </p>

            <ul className="space-y-6 flex-grow relative z-10">
              {inquiryFields.map((field, idx) => (
                <li key={idx} className="flex items-start gap-4 group/item">
                  <span className="text-zinc-600 group-hover/item:text-zinc-400 transition-colors font-mono text-sm pt-1">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-zinc-300 text-[16px] leading-snug group-hover/item:text-white transition-colors">
                    {field}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-14 p-6 bg-black/60 rounded-sm border border-zinc-800/50 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <FileText size={18} className="text-zinc-500" />
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Request Example</span>
              </div>
              <p className="text-sm text-zinc-500 italic leading-relaxed">
                "Dongbang LS 담당자님, [회사명]입니다. 항공 화물 통관 및 국내 운송 견적을 요청드립니다..."
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;