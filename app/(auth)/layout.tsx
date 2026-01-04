import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Link from "next/link";


const Layout = ({children}: {children:React.ReactNode}) =>{
    return (
        <main className="auth-layout">
            <section className="auth-left-section scrollbar-hide-default">
                {/* Logo */}
        <Link href="/">
          <Logo className="h-8 w-auto text-slate-900" />
          <p className="font-bold">KlickTrading</p>
        </Link>
                <div className="pb-6 lg:pb-8 flex-1">
                    {children}
                </div>
            </section>

            <section className="auth-right-section">
                <div className="z-10 relative lg:mt-4 lg:mb-16">
                    <blockquote className="auth-blockquote">
                        Klick Trading Turned my Watchlist into winning list. These are spot on and I feel more confident in making moves in the market.
                    </blockquote>
                    <div className="flex-item">

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Layout;