import ContactForm from '@/components/ui/ContactForm'
import { Phone, Mail, Clock } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-light/20 to-primary/20">
      <div className="container-custom">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <h2 className="text-h1 md:text-4xl font-bold text-text-dark mb-4">
            無料相談・お問い合わせ
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            労務費調査でお困りのことがございましたら、お気軽にご相談ください。<br />
            専門スタッフが丁寧にご対応いたします。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* 左側：お問い合わせ情報 */}
          <div className="space-y-8">
            {/* 連絡先情報 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-h3 font-bold text-text-dark mb-6">
                お問い合わせ方法
              </h3>
              
              {/* 電話 */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-primary-light/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-text-dark mb-1">お電話でのお問い合わせ</p>
                  <a 
                    href="tel:0300000000" 
                    className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
                  >
                    03-0000-0000
                  </a>
                  <p className="text-sm text-text-gray mt-1">
                    受付時間：平日 9:00-18:00
                  </p>
                </div>
              </div>

              {/* メール */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-primary-light/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-text-dark mb-1">メールでのお問い合わせ</p>
                  <a 
                    href="mailto:info@flatto-legal.jp" 
                    className="text-lg text-primary hover:text-primary-dark transition-colors"
                  >
                    info@flatto-legal.jp
                  </a>
                  <p className="text-sm text-text-gray mt-1">
                    24時間受付（返信は営業時間内）
                  </p>
                </div>
              </div>

              {/* 営業時間 */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-light/20 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-text-dark mb-1">営業時間</p>
                  <p className="text-text-gray">
                    平日：9:00-18:00<br />
                    土日祝日：休業
                  </p>
                </div>
              </div>
            </div>

            {/* よくあるご相談内容 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-h3 font-bold text-text-dark mb-4">
                よくあるご相談内容
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span className="text-text-gray">労務費調査の記入方法がわからない</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span className="text-text-gray">提出期限が迫っていて困っている</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span className="text-text-gray">職種分類で迷っている</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span className="text-text-gray">過去に記入ミスで再提出になった</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span className="text-text-gray">料金や納期について知りたい</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 右側：お問い合わせフォーム */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}