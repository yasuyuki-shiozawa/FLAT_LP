'use client'

import { Phone } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className={cn(
                "text-xl md:text-2xl font-bold transition-colors duration-300",
                isScrolled ? "text-primary" : "text-white"
              )}>
                行政書士法人<br className="md:hidden" />
                <span className="text-sm md:text-base">ふらっと法務事務所</span>
              </div>
            </Link>
          </div>

          {/* ナビゲーション */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="#problem" 
              className={cn(
                "hover:text-primary transition-colors duration-300",
                isScrolled ? "text-text-dark" : "text-white"
              )}
            >
              お困りごと
            </Link>
            <Link 
              href="#solution" 
              className={cn(
                "hover:text-primary transition-colors duration-300",
                isScrolled ? "text-text-dark" : "text-white"
              )}
            >
              解決策
            </Link>
            <Link 
              href="#achievement" 
              className={cn(
                "hover:text-primary transition-colors duration-300",
                isScrolled ? "text-text-dark" : "text-white"
              )}
            >
              実績
            </Link>
            <Link 
              href="#service" 
              className={cn(
                "hover:text-primary transition-colors duration-300",
                isScrolled ? "text-text-dark" : "text-white"
              )}
            >
              料金・サービス
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:0000000000" 
              className="hidden md:flex items-center space-x-2 text-accent hover:text-accent-dark transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span className="font-bold">03-0000-0000</span>
            </a>
            <Link 
              href="#contact" 
              className="cta-button text-sm md:text-base"
            >
              無料相談
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}