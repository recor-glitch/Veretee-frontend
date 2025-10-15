"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useState } from "react";
import SampleRequestModal from "@/components/SampleRequestModal";

const RequestQuoteButton = () => {
  const t = useTranslations("hero");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRequestQuote = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Button
        size="lg"
        variant="outline"
        className="bg-white text-primary border-primary hover:text-white"
        onClick={handleRequestQuote}
      >
        {t("quoteButtonText")}
      </Button>

      {/* Sample Request Modal */}
      <SampleRequestModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </>
  );
};

export default RequestQuoteButton;
