
import React from 'react';
import { Mail, Phone, Printer, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4 text-white">DONGBANG LOGIS CO., LTD.</h2>
            <div className="flex items-start gap-3 mb-6">
              <MapPin size={18} className="text-zinc-400 mt-1 shrink-0" />
              <div className="text-zinc-500 text-sm leading-relaxed">
                <p>인천시 미추홀구 남주길 26-6 101, 102호 (주안동 702번지)</p>
                <p className="mt-1">26-6 Namju-gil, Michuhol-gu, Incheon, 22158, Republic of Korea</p>
              </div>
            </div>
            <p className="text-zinc-500 text-sm max-w-md">
              국제 물류의 국내 구간 통관 및 운송 전문 파트너. 공항 및 항만을 잇는 신속하고 정확한 물류를 보장합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-zinc-400" />
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Office Tel</p>
                  <a href="tel:0328721714" className="text-zinc-200 hover:text-white transition-colors text-sm">
                    032-872-1714 (0118)
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-zinc-400" />
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Mobile (International)</p>
                  <a href="tel:+821052115521" className="text-zinc-200 hover:text-white transition-colors text-sm">
                    +82-10-5211-5521
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Printer size={18} className="text-zinc-400" />
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Fax</p>
                  <span className="text-zinc-200 text-sm">032-872-1715</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-zinc-400" />
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">E-mail</p>
                  <a href="mailto:sh872118@naver.com" className="text-zinc-200 hover:text-white transition-colors text-sm">
                    sh872118@naver.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-900 text-center text-zinc-600 text-[10px] tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} DONGBANG LOGIS CO., LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
