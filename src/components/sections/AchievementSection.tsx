'use client'

import { FileCheck, Building2, CheckCircle, Zap } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface Achievement {
  number: string
  unit: string
  description: string
  icon: React.ReactNode
}

const achievements: Achievement[] = [
  {
    number: '2,500',
    unit: '件',
    description: '累計受託実績',
    icon: <FileCheck className="w-8 h-8" />
  },
  {
    number: '450',
    unit: '社',
    description: '取引企業数',
    icon: <Building2 className="w-8 h-8" />
  },
  {
    number: '0',
    unit: '件',
    description: '記入ミスによる再提出',
    icon: <CheckCircle className="w-8 h-8" />
  },
  {
    number: '3',
    unit: '日',
    description: '平均納期',
    icon: <Zap className="w-8 h-8" />
  }
]

function AnimatedNumber({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)

      setCount(Math.floor(percentage * target))

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, target, duration])

  return <span ref={elementRef}>{count.toLocaleString()}</span>
}

export default function AchievementSection() {
  return (
    <section id="achievement" className="relative overflow-hidden">
      {/* 背景デザイン */}
      <div className="absolute inset-0">
        {/* 左側：白背景 */}
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-white"></div>
        {/* 右側：青背景 */}
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-gradient-to-br from-primary to-primary-dark"></div>
        {/* 斜め分割線 */}
        <div className="hidden md:block absolute inset-y-0 left-1/2 w-32 bg-white transform -skew-x-12 -translate-x-16"></div>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 section-padding">
        <div className="container-custom">
          {/* セクションタイトル */}
          <div className="text-center mb-12">
            <h2 className="text-h1 md:text-4xl font-bold text-text-dark mb-4">
              確かな実績と信頼性
            </h2>
            <p className="text-lg text-text-gray max-w-2xl mx-auto">
              行政書士法人ふらっと法務事務所は、<br className="hidden md:inline" />
              調査会社として多くの建設会社様から信頼をいただいています。
            </p>
          </div>

          {/* 実績カード */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  index >= 2 ? 'bg-white/95 md:text-white md:bg-white/10' : 'bg-background-light'
                }`}
              >
                {/* アイコン */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  index >= 2 ? 'bg-primary/10 text-primary md:bg-white/20 md:text-white' : 'bg-primary/10 text-primary'
                }`}>
                  {achievement.icon}
                </div>

                {/* 数値 */}
                <div className="mb-2">
                  <span className={`text-4xl md:text-5xl font-black ${
                    index >= 2 ? 'text-primary md:text-white' : 'text-primary'
                  }`}>
                    {achievement.number === '2,500' ? (
                      <AnimatedNumber target={2500} />
                    ) : achievement.number === '450' ? (
                      <AnimatedNumber target={450} />
                    ) : achievement.number === '3' ? (
                      <AnimatedNumber target={3} duration={1000} />
                    ) : (
                      achievement.number
                    )}
                  </span>
                  <span className={`text-2xl font-bold ml-1 ${
                    index >= 2 ? 'text-primary md:text-white' : 'text-primary'
                  }`}>
                    {achievement.unit}
                  </span>
                </div>

                {/* 説明 */}
                <p className={`text-body font-medium ${
                  index >= 2 ? 'text-text-gray md:text-white/80' : 'text-text-gray'
                }`}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* 信頼性の証明 */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-h2 font-bold text-center text-text-dark mb-8">
              なぜ私たちが選ばれるのか
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 法的専門性 */}
              <div className="text-center">
                <div className="bg-primary-light/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-h3 font-bold text-text-dark mb-2">
                  法的専門性
                </h4>
                <p className="text-body text-text-gray">
                  行政書士法人として、建設業関連の法令に精通。確実な書類作成を実現します。
                </p>
              </div>

              {/* 豊富な経験 */}
              <div className="text-center">
                <div className="bg-primary-light/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-h3 font-bold text-text-dark mb-2">
                  豊富な経験
                </h4>
                <p className="text-body text-text-gray">
                  2,500件以上の実績により、あらゆるケースに対応可能。迅速かつ正確な処理を約束します。
                </p>
              </div>

              {/* 万全のサポート */}
              <div className="text-center">
                <div className="bg-primary-light/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartHandshake className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-h3 font-bold text-text-dark mb-2">
                  万全のサポート
                </h4>
                <p className="text-body text-text-gray">
                  提出後のフォローまで徹底サポート。安心して最後までお任せいただけます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// 追加で必要なアイコンをインポート
import { Shield, Award, HeartHandshake } from 'lucide-react'