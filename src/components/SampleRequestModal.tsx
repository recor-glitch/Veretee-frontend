"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Check, CircleArrowRight, LogOut, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useParams } from "next/navigation";

type SampleRequestModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type FormData = {
  // Step 1
  companyName: string;
  industry: string;
  companySize: string;
  website: string;
  // Step 2
  fullName: string;
  professionalTitle: string;
  email: string;
  phone: string;
  country: string;
  // Step 3
  professionalIntent: string;
  orderQuantity: string;
  orderTimeframe: string;
  additionalRequirements: string;
};

export default function SampleRequestModal({
  open,
  onOpenChange,
}: SampleRequestModalProps) {
  const t = useTranslations("service.sample");
  const { service } = useParams();
  const submitted = t.raw("form.submitted");
  const step1 = t.raw("form.step1");
  const step2 = t.raw("form.step2");
  const step3 = t.raw("form.step3");
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState("");
  
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    industry: '',
    companySize: '',
    website: '',
    fullName: '',
    professionalTitle: '',
    email: '',
    phone: '',
    country: '',
    professionalIntent: '',
    orderQuantity: '',
    orderTimeframe: '',
    additionalRequirements: '',
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateReferenceId = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `VN-${random}-${timestamp}`;
  };

  const next = () => setStep((s) => Math.min(3, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const newReferenceId = generateReferenceId();
      setReferenceId(newReferenceId);
      
      const response = await fetch('/api/sample-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          serviceName: service,
          referenceId: newReferenceId,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit request');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setIsSubmitted(false);
    setStep(1);
    setError(null);
    setFormData({
      companyName: '',
      industry: '',
      companySize: '',
      website: '',
      fullName: '',
      professionalTitle: '',
      email: '',
      phone: '',
      country: '',
      professionalIntent: '',
      orderQuantity: '',
      orderTimeframe: '',
      additionalRequirements: '',
    });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) {
          handleClose();
        }
      }}
    >
      <DialogContent className="max-w-4xl p-0 max-h-[95vh] overflow-y-auto sm:max-h-[90vh] flex flex-col w-[95vw] sm:w-full">
        <div className="rounded-2xl flex flex-col h-full">
          {isSubmitted ? (
            // Success Modal
            <div className="p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-6 min-h-fit">
              {/* Success Icon */}
              <div className="relative">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Check className="h-8 w-8 text-white" strokeWidth={3} />
                  </div>
                </div>
              </div>

              {/* Success Message */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                  {submitted.title}
                </h2>
                <p className="text-gray-600 mx-auto leading-relaxed">
                  {submitted.description}
                </p>
              </div>

              {/* Reference ID */}
              <div className="bg-[#BAB9B7]/30 border border-[#ABB9C9] rounded-lg p-4 w-full">
                <div className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-primary">
                    {submitted.referenceId}
                  </span>{" "}
                  {referenceId}
                </div>
                <p className="text-xs text-gray-500">
                  {submitted.referenceNote}
                </p>
              </div>

              {/* Close Button */}
              <Button onClick={handleClose} className="w-full mt-8" size="lg">
                <LogOut className="h-4 w-4 mr-2" />
                {submitted.close}
              </Button>
            </div>
          ) : (
            // Original Form Content
            <div className="flex flex-col h-full">
              {/* Fixed Header */}
              <div className="p-6 md:p-8 pb-4 border-b border-gray-100">
                <DialogHeader>
                  <DialogTitle className="text-2xl md:text-3xl text-primary">
                    {t("title")}
                  </DialogTitle>
                  <DialogDescription>{t("description")}</DialogDescription>
                </DialogHeader>

                {/* Steps indicator */}
                <div className="flex items-center justify-center gap-3 sm:gap-6 py-4 sm:py-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className={
                        "h-8 w-8 rounded-full grid place-items-center text-sm font-medium " +
                        (step >= i
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground/60")
                      }
                    >
                      {i}
                    </div>
                    {i !== 3 && (
                      <div
                        className={
                          "h-[2px] w-8 sm:w-16 md:w-24 rounded-full " +
                          (step > i ? "bg-primary" : "bg-muted")
                        }
                      />
                    )}
                  </div>
                ))}
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-4">
                {/* Step content */}
              {step === 1 && (
                <section className="space-y-6">
                  <h3 className="text-xl font-semibold">{step1.title}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {step1.companyName}
                      </label>
                      <Input 
                        placeholder={step1.companyNamePlaceholder}
                        value={formData.companyName}
                        onChange={(e) => updateFormData('companyName', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {step1.industry.title}
                      </label>
                      <Select value={formData.industry} onValueChange={(value) => updateFormData('industry', value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue
                            placeholder={step1.industry.placeholder}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {step1.industry.options.map(
                            (option: string, index: number) => (
                              <SelectItem key={index} value={option}>
                                {option}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {step1.companySize.title}
                      </label>
                      <Select value={formData.companySize} onValueChange={(value) => updateFormData('companySize', value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue
                            placeholder={step1.companySize.placeholder}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {step1.companySize.options.map(
                            (option: string, index: number) => (
                              <SelectItem key={index} value={option}>
                                {option}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {step1.website.title}
                      </label>
                      <Input 
                        placeholder={step1.website.placeholder}
                        value={formData.website}
                        onChange={(e) => updateFormData('website', e.target.value)}
                      />
                    </div>
                  </div>
                </section>
              )}

              {step === 2 && (
                <section className="space-y-6">
                  <h3 className="text-xl font-semibold">{step2.title}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {step2.fullName.title}
                      </label>
                      <Input 
                        placeholder={step2.fullName.placeholder}
                        value={formData.fullName}
                        onChange={(e) => updateFormData('fullName', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {step2.professionalTitle.title}
                      </label>
                      <Input
                        placeholder={step2.professionalTitle.placeholder}
                        value={formData.professionalTitle}
                        onChange={(e) => updateFormData('professionalTitle', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {step2.email.title}
                      </label>
                      <Input
                        type="email"
                        placeholder={step2.email.placeholder}
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {step2.phone.title}
                      </label>
                      <Input 
                        placeholder={step2.phone.placeholder}
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium">
                        {step2.country.title}
                      </label>
                      <Select value={formData.country} onValueChange={(value) => updateFormData('country', value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue
                            placeholder={step2.country.placeholder}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {step2.country.options.map(
                            (option: string, index: number) => (
                              <SelectItem key={index} value={option}>
                                {option}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </section>
              )}

              {step === 3 && (
                <section className="space-y-6">
                  <h3 className="text-xl font-semibold">{step3.title}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium">
                        {step3.professionalIntent.title}
                      </label>
                      <Textarea 
                        rows={4}
                        value={formData.professionalIntent}
                        onChange={(e) => updateFormData('professionalIntent', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {step3.orderQuantity.title}
                      </label>
                      <Select value={formData.orderQuantity} onValueChange={(value) => updateFormData('orderQuantity', value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Quantity" />
                        </SelectTrigger>
                        <SelectContent>
                          {step3.orderQuantity.options.map(
                            (option: string, index: number) => (
                              <SelectItem key={index} value={option}>
                                {option}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {step3.orderTimeframe.title}
                      </label>
                      <Select value={formData.orderTimeframe} onValueChange={(value) => updateFormData('orderTimeframe', value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue
                            placeholder={step3.orderTimeframe.placeholder}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {step3.orderTimeframe.options.map(
                            (option: string, index: number) => (
                              <SelectItem key={index} value={option}>
                                {option}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium">
                        {step3.additionalRequirements}
                      </label>
                      <Textarea 
                        rows={4}
                        value={formData.additionalRequirements}
                        onChange={(e) => updateFormData('additionalRequirements', e.target.value)}
                      />
                    </div>
                  </div>
                </section>
              )}

                {/* Error Display */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                    <p className="text-red-800 text-sm">{error}</p>
                  </div>
                )}
              </div>

              {/* Fixed Footer */}
              <div className="border-t border-gray-100 p-4 sm:p-6 md:p-8 pt-4">
                <DialogFooter className="p-0">
                <div
                  className={cn(
                    "flex w-full items-center gap-4",
                    step === 1 ? "justify-end" : "justify-between"
                  )}
                >
                  <Button
                    className={cn(
                      step !== 1 && "border border-primary",
                      step === 1 && "hover:bg-none"
                    )}
                    variant={step === 1 ? "ghost" : "outline"}
                    onClick={step === 1 ? handleClose : prev}
                    disabled={isLoading}
                  >
                    {step === 1
                      ? step1.cancel
                      : step === 2
                      ? step2.previous
                      : step3.previous}
                  </Button>
                  {step < 3 ? (
                    <Button onClick={next} disabled={isLoading}>
                      <CircleArrowRight />
                      {step1.submit}
                    </Button>
                  ) : (
                    <Button onClick={handleSubmit} disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        step3.submit
                      )}
                    </Button>
                  )}
                </div>
                </DialogFooter>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
