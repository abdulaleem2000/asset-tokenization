import type { Metadata } from 'next'
import styles from "@/styles/layout/landing-layout.module.sass"

export const metadata: Metadata = {
  title: 'Tokenization',
  description: 'This webpage is done for tokenizationg actives and democratize them',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main lang="en" id={styles.main}>{children}</main>
  )
}
