import { DarkLayout } from "@/components/layouts/DarkLayout";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <MainLayout>
            <DarkLayout>
                { children }
            </DarkLayout>
        </MainLayout>
    );
};
