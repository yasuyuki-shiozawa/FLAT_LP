import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* 会社情報 */}
          <div>
            <h3 className="text-h3 font-bold mb-4">
              行政書士法人ふらっと法務事務所
            </h3>
            <p className="text-body text-gray-300 mb-4">
              労務費調査の専門家として、建設会社様の負担を軽減します。
              調査会社として2,500件以上の実績があります。
            </p>
            <div className="text-body text-gray-300">
              <p>行政書士登録番号：第00000000号</p>
              <p>東京都行政書士会所属</p>
            </div>
          </div>

          {/* アクセス・連絡先 */}
          <div>
            <h3 className="text-h3 font-bold mb-4">アクセス・連絡先</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-light" />
                <div>
                  <p className="text-body text-gray-300">
                    〒100-0000<br />
                    東京都千代田区○○○1-2-3<br />
                    ○○ビル5F
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-light" />
                <a 
                  href="tel:0300000000" 
                  className="text-body text-gray-300 hover:text-white transition-colors"
                >
                  03-0000-0000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-light" />
                <a 
                  href="mailto:info@flatto-legal.jp" 
                  className="text-body text-gray-300 hover:text-white transition-colors"
                >
                  info@flatto-legal.jp
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 text-primary-light" />
                <p className="text-body text-gray-300">
                  営業時間：平日 9:00-18:00<br />
                  土日祝日休業
                </p>
              </div>
            </div>
          </div>

          {/* リンク */}
          <div>
            <h3 className="text-h3 font-bold mb-4">サイトマップ</h3>
            <nav className="space-y-2">
              <Link 
                href="#" 
                className="block text-body text-gray-300 hover:text-white transition-colors"
              >
                ホーム
              </Link>
              <Link 
                href="/company" 
                className="block text-body text-gray-300 hover:text-white transition-colors"
              >
                会社概要
              </Link>
              <Link 
                href="/privacy" 
                className="block text-body text-gray-300 hover:text-white transition-colors"
              >
                プライバシーポリシー
              </Link>
              <Link 
                href="/tokutei" 
                className="block text-body text-gray-300 hover:text-white transition-colors"
              >
                特定商取引法に基づく表記
              </Link>
              <Link 
                href="#contact" 
                className="block text-body text-gray-300 hover:text-white transition-colors"
              >
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-caption text-gray-400">
            © 2025 行政書士法人ふらっと法務事務所. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}