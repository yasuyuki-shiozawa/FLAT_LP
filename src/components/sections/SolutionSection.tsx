'use client'

import { FileCheck, Shield, Zap, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface SolutionPoint {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

const solutions: SolutionPoint[] = [
  {
    number: '01',
    title: '完全代行で時間を節約',
    description: 'あなたがすることは資料をお送りいただくだけ。調査票の作成から提出まで、すべて私たちが行います。',
    icon: <FileCheck className="w-6 h-6" />
  },
  {
    number: '02',
    title: '行政書士法人の安心感',
    description: '行政書士法人として、法的要件を完全に満たした調査票を作成。記入ミスや提出遅延のリスクを完全に排除します。',
    icon: <Shield className="w-6 h-6" />
  },
  {
    number: '03',
    title: 'スピード対応',
    description: '豊富な実績により、最短3日での調査票完成も可能。提出期限が迫っていても安心してお任せください。',
    icon: <Zap className="w-6 h-6" />
  }
]

export default function SolutionSection() {
  return (
    <section id="solution" className="section-padding bg-background-light">
      <div className="container-custom">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <h2 className="text-h1 md:text-4xl font-bold text-text-dark mb-4">
            すべて私たちに<br className="md:hidden" />お任せください
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            労務費調査の負担から完全に解放されて、<br className="hidden md:inline" />
            本来の業務に集中できる環境を提供します。
          </p>
        </div>

        {/* 解決策の視覚的表現 */}
        <div className="relative">
          {/* 中央のイラスト（プレースホルダー） */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-primary-light to-primary rounded-full opacity-20 absolute -top-4 -left-4"></div>
              <div className="w-64 h-64 md:w-96 md:h-96 bg-white rounded-2xl shadow-xl relative z-10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">😊</div>
                  <p className="text-h3 font-bold text-text-dark mb-2">
                    労務費調査から解放！
                  </p>
                  <p className="text-body text-text-gray">
                    本来の業務に集中できる<br />
                    建設会社の皆様
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 解決ポイント */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* 番号とアイコン */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-primary-light">
                    {solution.number}
                  </span>
                  <div className="bg-primary-light/20 p-3 rounded-lg text-primary">
                    {solution.icon}
                  </div>
                </div>

                {/* タイトル */}
                <h3 className="text-h3 font-bold text-text-dark mb-3">
                  {solution.title}
                </h3>

                {/* 説明 */}
                <p className="text-body text-text-gray">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ビフォーアフター比較 */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-h2 font-bold text-center text-text-dark mb-8">
            導入前後の変化
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-text-gray text-white text-sm font-bold px-4 py-2 rounded-lg">
                Before
              </div>
              <div className="border-2 border-gray-300 rounded-lg p-6 pt-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-error mr-2">✗</span>
                    <span className="text-text-gray">調査票作成に2日間かかる</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-error mr-2">✗</span>
                    <span className="text-text-gray">記入ミスで再提出のリスク</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-error mr-2">✗</span>
                    <span className="text-text-gray">専門知識不足による不安</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-error mr-2">✗</span>
                    <span className="text-text-gray">本業に集中できない</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* After */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg">
                After
              </div>
              <div className="border-2 border-primary rounded-lg p-6 pt-8 bg-primary/5">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span className="text-text-dark font-medium">資料送付30分で完了</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span className="text-text-dark font-medium">再提出リスクゼロ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span className="text-text-dark font-medium">専門家による安心対応</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span className="text-text-dark font-medium">本業の売上アップ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 矢印 */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ArrowRight className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="#contact" className="cta-button inline-flex items-center space-x-2 text-lg">
            <span>今すぐ負担から解放される</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}