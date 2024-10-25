'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function NavLinks() {
  const pathname = usePathname()

  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        ホーム
      </Link>

	  <br />
	  <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">
        ダッシュボード
      </Link>

	  <br />
	  <Link className={`link ${pathname === '/index' ? 'active' : ''}`} href="/index">
        index
      </Link>

	  <br />
      <Link
        className={`link ${pathname === '/about' ? 'active' : ''}`}
        href="/about"
      >
        アバウト
      </Link>
	  
    </nav>
  )
}