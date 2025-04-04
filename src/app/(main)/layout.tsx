import { Header } from "@/components/layout/header/header";
import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <React.Fragment>
            <Header />
            <main>
                {children}
            </main>
        </React.Fragment>
    )
}

export default MainLayout;