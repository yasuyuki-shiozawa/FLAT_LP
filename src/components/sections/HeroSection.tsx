'use client'

import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [count, setCount] = useState(0)
  const targetCount = 2500

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / 2000, 1) // 2秒でアニメーション完了

      setCount(Math.floor(percentage * targetCount))

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
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 gradient-primary"></div>
      
      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* コンテンツ */}
      <div className="container-custom relative z-10 text-center px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* 実績バッジ */}
          <div className="inline-flex items-center justify-center px-6 py-3 mb-8 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-white font-bold text-lg md:text-xl">
              調査会社として<span className="text-2xl md:text-3xl mx-2">{count.toLocaleString()}</span>件の受託実績
            </span>
          </div>

          {/* メインコピー */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            労務費調査、<br className="md:hidden" />
            もう悩まない。
          </h1>

          {/* サブコピー */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4">
            行政書士法人が完全代行
          </p>

          {/* 説明文 */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            毎年10月の労務費調査でお困りの建設会社様へ。<br />
            調査票の作成から提出まで、すべて私たちにお任せください。
          </p>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              href="#contact" 
              className="cta-button text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto"
            >
              無料相談を申し込む
            </Link>
            <Link 
              href="#problem" 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold py-4 md:py-6 px-8 md:px-12 rounded-lg transition-all duration-300 w-full sm:w-auto"
            >
              詳しく見る
            </Link>
          </div>

          {/* 信頼性要素 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-white font-bold text-lg">行政書士法人</p>
              <p className="text-white/80 text-sm">法的安全性を保証</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-white font-bold text-lg">最短3日</p>
              <p className="text-white/80 text-sm">スピード対応</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-white font-bold text-lg">再提出0件</p>
              <p className="text-white/80 text-sm">確実な書類作成</p>
            </div>
          </div>
        </div>
      </div>

      {/* スクロール誘導 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce-arrow">
          <ArrowDown className="w-8 h-8 text-white/60" />
        </div>
      </div>
    </section>
  )
}