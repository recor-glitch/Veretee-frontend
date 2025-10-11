"use client";

import CTA from "@/components/Landing/CTA";
import SampleRequestModal from "@/components/SampleRequestModal";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

function ServiceDetailPage() {
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const t = useTranslations("service.details");
  const { service } = useParams();

  const serviceData = t.raw(`${service}`);
  const tabs = t.raw("tabs");
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      <SampleRequestModal
        open={sampleModalOpen}
        onOpenChange={setSampleModalOpen}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Back Navigation */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("back")}
          </Link>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Images */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={serviceData.mainImage}
                  alt={serviceData.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-6 w-full">
                {serviceData.thumbnails.map((thumb: string, index: number) => (
                  <div
                    key={index}
                    className="relative w-1/4 h-20 bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={thumb}
                      alt={`${serviceData.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {serviceData.title}
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  {serviceData.description}
                </p>
              </div>

              {/* Key Statistics */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  {serviceData.keyStats.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {serviceData.keyStats.values.map(
                    (
                      stat: { label: string; value: string; type: string },
                      index: number
                    ) => (
                      <div key={index}>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                        <div className="font-medium text-gray-900">
                          {stat.value}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {serviceData.certifications.title}
                </h3>
                <div className="flex gap-2">
                  {serviceData.certifications.values.map(
                    (cert: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary text-white text-sm rounded-full"
                      >
                        {cert}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  onClick={() => setSampleModalOpen(true)}
                  className="flex-1"
                  size="lg"
                >
                  {t("requestSample")}
                </Button>
                <Button variant="outline" size="lg">
                  {t("getQuote")}
                </Button>
                <Button variant="outline" size="lg">
                  {t("callUs")}
                </Button>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="border-b border-gray-200 mb-8">
            <div className="flex space-x-8">
              {tabs.map((tab: { id: string; label: string }) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            {activeTab === "professionalSpecs" && (
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">
                  {serviceData.professionalSpecs.title}
                </h2>
                <p className="text-gray-600 mb-8">
                  {serviceData.professionalSpecs.description}
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      {serviceData.professionalSpecs.values.map(
                        (
                          spec: { property: string; value: string },
                          index: number
                        ) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="py-4 pr-8 text-primary font-medium">
                              {spec.property}
                            </td>
                            <td className="py-4 text-gray-900">{spec.value}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "applications" && (
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">
                  {serviceData.applications.title}
                </h2>
                <p className="text-gray-600 mb-8">
                  {serviceData.applications.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {serviceData.applications.values.map(
                    (
                      app: { title: string; description: string },
                      index: number
                    ) => (
                      <div
                        key={index}
                        className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg"
                      >
                        <h3 className="text-lg font-semibold text-primary mb-3">
                          {app.title}
                        </h3>
                        <p className="text-gray-600">{app.description}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {activeTab === "documentation" && (
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">
                  {serviceData.documentation.title}
                </h2>
                <p className="text-gray-600 mb-8">
                  {serviceData.documentation.description}
                </p>

                <div className="space-y-4">
                  {serviceData.documentation.values.map(
                    (
                      doc: { title: string; description: string; type: string },
                      index: number
                    ) => (
                      <div
                        key={index}
                        className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg flex items-center justify-between"
                      >
                        <div>
                          <h3 className="text-lg font-semibold text-primary mb-1">
                            {doc.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {doc.description}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {activeTab === "maritimeOrder" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Order Details */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    {serviceData.maritimeOrder.order.title}
                  </h2>
                  <p className="text-gray-600 mb-8">
                    {serviceData.maritimeOrder.order.description}
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-3">
                        {serviceData.maritimeOrder.order.minimumOrder.title}
                      </h3>
                      <p className="text-gray-600">
                        {
                          serviceData.maritimeOrder.order.minimumOrder
                            .description
                        }
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-3">
                        {serviceData.maritimeOrder.order.paymentTerms.title}
                      </h3>
                      <p className="text-gray-600">
                        {
                          serviceData.maritimeOrder.order.paymentTerms
                            .description
                        }
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-3">
                        {serviceData.maritimeOrder.order.shipping.title}
                      </h3>
                      <p className="text-gray-600">
                        {serviceData.maritimeOrder.order.shipping.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    {serviceData.maritimeOrder.contacts.title}
                  </h2>
                  <p className="text-gray-600 mb-8">
                    {serviceData.maritimeOrder.contacts.description}
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-3">
                        {serviceData.maritimeOrder.contacts.salesManager.title}
                      </h3>
                      <p className="text-gray-900 font-medium mb-2">
                        {serviceData.maritimeOrder.contacts.salesManager.name}
                      </p>
                      <div className="space-y-2">
                        <a
                          href={`mailto:${serviceData.maritimeOrder.contacts.salesManager.email}`}
                          className="flex items-center gap-2 text-primary hover:underline"
                        >
                          <Mail className="w-4 h-4" />
                          {
                            serviceData.maritimeOrder.contacts.salesManager
                              .email
                          }
                        </a>
                        <a
                          href={`tel:${serviceData.maritimeOrder.contacts.salesManager.phone}`}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <Phone className="w-4 h-4" />
                          {
                            serviceData.maritimeOrder.contacts.salesManager
                              .phone
                          }
                        </a>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-3">
                        {serviceData.maritimeOrder.contacts.exportDept.title}
                      </h3>
                      <div className="space-y-2">
                        <a
                          href={`mailto:${serviceData.maritimeOrder.contacts.exportDept.email}`}
                          className="flex items-center gap-2 text-primary hover:underline"
                        >
                          <Mail className="w-4 h-4" />
                          {serviceData.maritimeOrder.contacts.exportDept.email}
                        </a>
                        <a
                          href={`tel:${serviceData.maritimeOrder.contacts.exportDept.phone}`}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <Phone className="w-4 h-4" />
                          {serviceData.maritimeOrder.contacts.exportDept.phone}
                        </a>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-3">
                        {
                          serviceData.maritimeOrder.contacts.technicalSupport
                            .title
                        }
                      </h3>
                      <div className="space-y-2">
                        <a
                          href={`mailto:${serviceData.maritimeOrder.contacts.technicalSupport.email}`}
                          className="flex items-center gap-2 text-primary hover:underline"
                        >
                          <Mail className="w-4 h-4" />
                          {
                            serviceData.maritimeOrder.contacts.technicalSupport
                              .email
                          }
                        </a>
                        <a
                          href={`tel:${serviceData.maritimeOrder.contacts.technicalSupport.phone}`}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <Phone className="w-4 h-4" />
                          {
                            serviceData.maritimeOrder.contacts.technicalSupport
                              .phone
                          }
                        </a>
                      </div>
                    </div>

                    <Button className="w-full" size="lg">
                      <Mail className="w-4 h-4 mr-2" />
                      {
                        serviceData.maritimeOrder.contacts
                          .contactProfessionalSalesTeam
                      }
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <CTA />
        </div>
      </div>
    </>
  );
}

export default ServiceDetailPage;
