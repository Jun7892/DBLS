import React from 'react';
import { Mail, Phone, FileText, ClipboardList, MapPin, Printer } from 'lucide-react';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
          {/* Left Column: Contact & Location */}
          <div className="flex flex-col gap-10">
            {/* Contact Section */}
            <div className="flex flex-col h-full">
              <h2 className="text-xl font-bold mb-8 flex items-center gap-2 tracking-tight">
                <span className="w-8 h-px bg-zinc-700"></span> 연락처 및 상담 채널
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                <div className="p-8 border border-zinc-800 bg-zinc-900/20 rounded-sm flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Phone size={14} className="text-zinc-500" />
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Office Telephone</p>
                  </div>
                  <p className="text-xl font-medium text-zinc-200">032-872-1714</p>
                </div>
                
                <div className="p-8 border border-zinc-800 bg-zinc-900/20 rounded-sm flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Printer size={14} className="text-zinc-500" />
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Fax Number</p>
                  </div>
                  <p className="text-xl font-medium text-zinc-200">032-872-1715</p>
                </div>
                
                <div className="p-8 border border-zinc-800 bg-zinc-900/20 rounded-sm flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Phone size={14} className="text-zinc-400" />
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Mobile (Direct)</p>
                  </div>
                  <p className="text-xl font-medium text-white">+82-10-5211-5521</p>
                </div>
                
                <div className="p-8 border border-zinc-800 bg-zinc-900/20 rounded-sm flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Mail size={14} className="text-zinc-500" />
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Official E-mail</p>
                  </div>
                  <p className="text-lg font-medium text-zinc-200 break-all leading-tight">sh872118@naver.com</p>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="mt-auto">
              <h2 className="text-xl font-bold mb-8 flex items-center gap-2 tracking-tight">
                <span className="w-8 h-px bg-zinc-700"></span> 오시는 길 / 주소
              </h2>
              <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-sm flex items-start gap-5">
                <div className="p-3 bg-zinc-900 rounded-sm mt-1">
                  <MapPin size={20} className="text-zinc-400" />
                </div>
                <div>
                  <p className="text-zinc-200 text-lg mb-2 font-medium leading-snug">
                    인천시 미추홀구 남주길 26-6 101, 102호<br className="sm:hidden" /> (주안동 702번지)
                  </p>
                  <p className="text-zinc-500 text-sm leading-relaxed italic">
                    26-6 Namju-gil, Michuhol-gu, Incheon, Republic of Korea
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Guide Card */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-8 md:p-12 rounded-sm flex flex-col h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <ClipboardList size={120} strokeWidth={1} />
            </div>
            
            <div className="flex items-center gap-3 mb-10 relative z-10">
              <div className="p-2 bg-white/5 rounded-sm">
                <ClipboardList className="text-zinc-300" size={24} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">견적 요청 필수 정보</h2>
            </div>
            
            <p className="text-zinc-400 mb-10 leading-relaxed relative z-10 font-light">
              정확하고 빠른 견적 산출을 위해 이메일 문의 시 아래 내용을 기재해 주시기 바랍니다.
            </p>

            <ul className="space-y-5 flex-grow relative z-10">
              {inquiryFields.map((field, idx) => (
                <li key={idx} className="flex items-start gap-4 group/item">
                  <span className="text-zinc-600 group-hover/item:text-zinc-400 transition-colors font-mono text-sm pt-0.5">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-zinc-300 leading-tight group-hover/item:text-white transition-colors">{field}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 bg-black/60 rounded-sm border border-zinc-800/50 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <FileText size={18} className="text-zinc-500" />
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Request Example</span>
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