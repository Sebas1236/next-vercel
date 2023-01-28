'use client';

export const DarkLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: '10px',
            padding: '10px',
        }}>
            <h3>Dark-Layout</h3>
            {children}
        </div>
    );
};
