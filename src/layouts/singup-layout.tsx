import type { Metadata } from 'next'
import styles from "@/styles/layout/singup-layout.module.sass"

export const metadata: Metadata = {
  title: 'Tokenization',
  description: 'This webpage is done for tokenizationg actives and democratize them',
}

export default function SingupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main lang="en" id={styles.main}>{children}</main>
  )
}

