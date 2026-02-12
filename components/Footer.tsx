import React from 'react';
import { Mail, Phone, Printer, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tighter text-white">DONGBANG LS CO., LTD.</h2>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-px w-4 bg-zinc-700"></div>
                <p className="text-xs text-zinc-500 font-bold tracking-widest uppercase">(주) 동방엘에스</p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-8">
              <MapPin size={20} className="text-zinc-500 mt-1 shrink-0" />
              <div className="text-zinc-400 text-sm leading-relaxed">
                <p className="font-medium text-zinc-300">인천시 미추홀구 남주길 26-6 101, 102호 (주안동 702번지)</p>
                <p className="mt-1 opacity-60 italic">26-6 Namju-gil, Michuhol-gu, Incheon, 22158, Republic of Korea</p>
              </div>
            </div>
            <p className="text-zinc-600 text-xs max-w-sm leading-loose">
              우리는 신속, 정확, 신뢰를 바탕으로 귀사의 물류 가치를 높입니다. 
              항공 및 해상 화물의 국내 운송과 통관 실무를 전담하는 대한민국 물류 파트너입니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-zinc-900/50 rounded-sm">
                  <Phone size={16} className="text-zinc-400" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-1">Customer Support</p>
                  <a href="tel:0328721714" className="text-zinc-200 hover:text-white transition-colors text-base font-medium">
                    032-872-1714
                  </a>
                  <p className="text-[10px] text-zinc-500 mt-1">Ext. 0118 / 0119</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-zinc-900/50 rounded-sm">
                  <Phone size={16} className="text-zinc-400" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-1">Direct Mobile</p>
                  <a href="tel:+821052115521" className="text-zinc-200 hover:text-white transition-colors text-base font-medium">
                    +82-10-5211-5521
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-zinc-900/50 rounded-sm">
                  <Printer size={16} className="text-zinc-400" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-1">Fax Transmission</p>
                  <span className="text-zinc-200 text-base font-medium">032-872-1715</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-zinc-900/50 rounded-sm">
                  <Mail size={16} className="text-zinc-400" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-1">Official Inquiry</p>
                  <a href="mailto:sh872118@naver.com" className="text-zinc-200 hover:text-white transition-colors text-base font-medium break-all">
                    sh872118@naver.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-700 text-[10px] tracking-widest uppercase">
            &copy; {new Date().getFullYear()} DONGBANG LS CO., LTD. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-zinc-800 text-[10px] uppercase tracking-widest">Privacy Policy</span>
            <span className="text-zinc-800 text-[10px] uppercase tracking-widest">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;