
import React from 'react';
import { Mail, Phone, Clock, FileText, ClipboardList, Printer, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const inquiryFields = [
    '회사명 및 담당자 연락처',
    '회신 이메일 주소',
    '운송 구분 (수출 국내구간 / 수입 국내구간)',
    '화물 종류 및 특징 (보수/분할작업 필요 여부)',
    '출발지 및 도착지 상세 정보',
    '예상 물량 및 규격 (소량 가능)',
    '희망 일정 및 긴급성'
  ];

  return (
    <div className="fade-in pb-24">
      {/* Header */}
      <div className="py-24 bg-zinc-950 border-b border-zinc-900 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-zinc-400 text-lg max-w-2xl md:max-w-none mx-auto">
            정확한 물류 설계를 위해 아래 정보를 포함하여 이메일로 문의주시면 신속히 확인해 드립니다.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Direct Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Phone size={24} className="text-zinc-400" /> 연락처 및 상담 채널
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-6 border border-zinc-800 rounded-sm">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Office Telephone</p>
                  <p className="text-xl font-medium">032-872-1714 (0118)</p>
                </div>
                <div className="p-6 border border-zinc-800 rounded-sm">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Fax Number</p>
                  <p className="text-xl font-medium">032-872-1715</p>
                </div>
                <div className="p-6 border border-zinc-800 rounded-sm">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Mobile (KR/Intl.)</p>
                  <p className="text-xl font-medium text-white">+82-10-5211-5521</p>
                </div>
                <div className="p-6 border border-zinc-800 rounded-sm">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Official E-mail</p>
                  <p className="text-xl font-medium">sh872118@naver.com</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <MapPin size={24} className="text-zinc-400" /> 오시는 길 / 주소
              </h2>
              <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-sm">
                <p className="text-zinc-200 text-lg mb-2">인천시 미추홀구 남주길 26-6 101, 102호 (주안동 702번지)</p>
                <p className="text-zinc-500 text-sm leading-relaxed italic">
                  26-6 Namju-gil, Michuhol-gu, Incheon 22158, Republic of Korea
                </p>
              </div>
            </div>
          </div>

          {/* Inquiry Guide */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-10 rounded-sm flex flex-col h-full">
            <div className="flex items-center gap-3 mb-8">
              <ClipboardList className="text-zinc-400" size={28} />
              <h2 className="text-2xl font-bold">견적 요청 필수 정보</h2>
            </div>
            
            <p className="text-zinc-400 mb-8 leading-relaxed">
              정확하고 빠른 견적 산출을 위해 이메일 문의 시 아래의 내용을 복사하여 기재해 주시기 바랍니다.
            </p>

            <ul className="space-y-4 flex-grow">
              {inquiryFields.map((field, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors font-mono">[{idx + 1}]</span>
                  <span className="text-zinc-200">{field}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 bg-black rounded-sm border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <FileText size={20} className="text-zinc-500" />
                <span className="text-sm font-bold text-zinc-500">Request Example</span>
              </div>
              <p className="text-sm text-zinc-500 italic">
                "Dongbang Logis Co., Ltd. 담당자님, [회사명]입니다. 항공 화물 통관 및 [작업내용]을 포함한 국내 운송 견적을 요청드립니다..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
