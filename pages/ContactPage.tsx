
import React from 'react';
import { Mail, Phone, Clock, FileText, ClipboardList } from 'lucide-react';

const ContactPage: React.FC = () => {
  const inquiryFields = [
    '회사명 또는 담당자명',
    '회신 가능한 이메일',
    '운송 구분 (국내→해외 / 해외→국내)',
    '출발지 및 도착지 상세',
    '물품 종류 및 특성',
    '물량 또는 수량 (소량 가능)',
    '희망 일정 또는 긴급 여부'
  ];

  return (
    <div className="fade-in pb-24">
      {/* Header */}
      <div className="py-24 bg-zinc-950 border-b border-zinc-900 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            신속한 견적 확인과 원활한 상담을 위해 이메일 문의를 우선적으로 운영하고 있습니다.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Direct Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-10">상담 안내</h2>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 p-6 border border-zinc-800 rounded-sm hover:bg-zinc-900/50 transition-colors group">
                <div className="bg-zinc-800 p-4 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">E-MAIL ADDRESS</p>
                  <p className="text-xl font-medium">sh872118@naver.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 border border-zinc-800 rounded-sm hover:bg-zinc-900/50 transition-colors group">
                <div className="bg-zinc-800 p-4 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">PHONE NUMBER</p>
                  <p className="text-xl font-medium">010-5211-5521</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 border border-zinc-800 rounded-sm bg-zinc-950/50">
                <div className="bg-zinc-800 p-4 rounded-full">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">RESPONSE TIME</p>
                  <p className="text-zinc-300">
                    접수된 문의는 검토 후 순차적으로 회신됩니다.<br />
                    전화 상담보다는 이메일 문의를 우선으로 운영합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Guide */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-10 rounded-sm">
            <div className="flex items-center gap-3 mb-8">
              <ClipboardList className="text-zinc-400" size={28} />
              <h2 className="text-2xl font-bold">견적 상담 시 기재 정보</h2>
            </div>
            
            <p className="text-zinc-400 mb-8 leading-relaxed">
              보다 정확한 상담을 위해 아래 정보를 함께 기재하여 이메일로 문의해 주시기 바랍니다.
            </p>

            <ul className="space-y-4">
              {inquiryFields.map((field, idx) => (
                <li key={idx} className="flex items-start gap-3 text-lg group">
                  <span className="text-zinc-600 group-hover:text-white transition-colors">{idx + 1}.</span>
                  <span className="text-zinc-200">{field}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 bg-black rounded-sm border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <FileText size={20} className="text-zinc-500" />
                <span className="text-sm font-bold text-zinc-500">문의 예시</span>
              </div>
              <p className="text-sm text-zinc-400 italic">
                "안녕하세요, [회사명]의 [이름]입니다. [출발지]에서 [도착지]까지 
                [물품종류] [수량] 건에 대한 국내 운송 견적을 요청드립니다..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
