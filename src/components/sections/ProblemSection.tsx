'use client'

import { Clock, AlertCircle, RefreshCw, Brain, TrendingDown, Calendar } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface ProblemItem {
  icon: React.ReactNode
  title: string
  description: string
  emotion: string
}

const problems: ProblemItem[] = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "時間がかかりすぎる",
    description: "調査票の作成に丸2日かかり、本来の業務が滞ってしまった",
    emotion: "もう限界..."
  },
  {
    icon: <AlertCircle className="w-8 h-8" />,
    title: "記入方法が分からない",
    description: "職種分類で迷い、何度も修正を繰り返してしまった",
    emotion: "不安でいっぱい..."
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "再提出の繰り返し",
    description: "記入ミスで再提出になり、上司に叱られてしまった",
    emotion: "申し訳ない..."
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "専門知識が必要",
    description: "地域補正係数の計算方法が理解できず、適当に記入してしまった",
    emotion: "難しすぎる..."
  },
  {
    icon: <TrendingDown className="w-8 h-8" />,
    title: "機会損失が発生",
    description: "調査票作成に時間を取られ、新規営業ができなかった",
    emotion: "もったいない..."
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "毎年の憂鬱",
    description: "10月が近づくと調査票のことで頭がいっぱいになる",
    emotion: "またこの時期か..."
  }
]

export default function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="problem" 
      className="section-padding bg-background"
    >
      <div className="container-custom">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <h2 className="text-h1 md:text-4xl font-bold text-text-dark mb-4">
            こんなお困りごとは<br className="md:hidden" />ありませんか？
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            建設会社の皆様が労務費調査で直面する課題を、<br className="hidden md:inline" />
            私たちが解決します。
          </p>
        </div>

        {/* 問題カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`card p-6 hover:scale-105 transition-all duration-300 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* アイコン */}
              <div className="text-primary mb-4">
                {problem.icon}
              </div>

              {/* タイトル */}
              <h3 className="text-h3 font-bold text-text-dark mb-3">
                {problem.title}
              </h3>

              {/* 説明 */}
              <p className="text-body text-text-gray mb-4">
                {problem.description}
              </p>

              {/* 感情表現 */}
              <div className="flex items-center justify-end">
                <span className="text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full">
                  {problem.emotion}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 共感メッセージ */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center bg-primary/10 rounded-2xl px-8 py-6">
            <p className="text-lg md:text-xl text-primary-dark font-medium">
              これらの悩みをすべて解決するのが、<br className="md:hidden" />
              私たちの労務費調査代行サービスです
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}