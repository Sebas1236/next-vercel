import { DarkLayout } from "./layouts/DarkLayout"
import { MainLayout } from "./layouts/MainLayout"

export const Layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <MainLayout>
            <DarkLayout>
                { children }
            </DarkLayout>
        </MainLayout>
    )
}
