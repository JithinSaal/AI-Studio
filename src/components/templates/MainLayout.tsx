import React from 'react';
import { Sidebar } from '../organisms/Sidebar';
import { Navbar } from '../organisms/Navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-surface">
      <Sidebar />
      <div className="flex-1 flex flex-col relative overflow-hidden">
        <Navbar />
        <main className="flex-1 mt-[57px] overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};
