import { HeaderWidget } from "@/widgets/header-widget"
import { BodyWidget } from "@/widgets/body-widget"
import { FooterWidget } from "@/widgets/footer-widget"

import "./main-page.scss"

export const MainPage = () => {
    return (
        <div className="wrapper">
            <div className="main-page">
                <header>
                    <HeaderWidget />
                </header>
                <main>
                    <BodyWidget />
                </main>
                <footer>
                    <FooterWidget />
                </footer>
            </div>
        </div>
    )
}