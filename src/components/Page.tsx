import { page, pageInner } from "./Page.css"

export const Page: React.FC<{
  children: React.ReactNode | React.ReactNode[]
}> = ({ children })=> {
  return <main className={page}>
    <div className={pageInner}>
      {children}
    </div>
  </main>
}
