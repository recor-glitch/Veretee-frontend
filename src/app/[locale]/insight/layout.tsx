import CTA from "@/components/Landing/CTA";
import News from "@/components/Landing/News";
import React from "react";

function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background grid grid-cols-3 gap-24 container mx-auto px-4 py-16">
      {children}
      <News />
      <CTA />
    </div>
  );
}

export default ArticleLayout;
