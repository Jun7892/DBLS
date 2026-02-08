
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="text-xl font-bold tracking-tight mb-2">동방엘에스</h2>
          <p className="text-zinc-500 text-sm max-w-md">
            국제 물류의 국내 구간 운송 전문 파트너. 공항 및 항만을 잇는 신속하고 정확한 운송을 약속합니다.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-zinc-400" />
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">이메일 문의</p>
              <a href="mailto:sh872118@naver.com" className="text-zinc-200 hover:text-white transition-colors">
                sh872118@naver.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-zinc-400" />
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">전화 상담</p>
              <a href="tel:01052115521" className="text-zinc-200 hover:text-white transition-colors">
                010-5211-5521
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-900 text-center text-zinc-600 text-xs">
        <p>&copy; {new Date().getFullYear()} 동방엘에스. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
