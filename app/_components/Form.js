"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { customizationStore } from "@/src/store/customizationStore";

import Label from "@/app/_components/Label";
import Row from "@/app/_components/Row";
import LanguageSelect from "@/app/_components/LanguageSelect";
import PageTitle from "@/app/_components/PageTitle";

import AppkeyInput from "./inputs/AppkeyInput";
import ReviewsWidgetInput from "@/app/_components/inputs/ReviewsWidgetInput";
import QnAWidgetInput from "@/app/_components/inputs/QnAWidgetInput";
import StarRatingsInput from "@/app/_components/inputs/StarRatingsInput";
import ReviewsCarouselInput from "@/app/_components/inputs/ReviewsCarouselInput";
import ReviewsTabInput from "@/app/_components/inputs/ReviewsTabInput";
import PromotedProdInput from "@/app/_components/inputs/PromotedProdInput";
import SEOInput from "@/app/_components/inputs/SEOInput";
import UgcGalleryInput from "@/app/_components/inputs/UgcGalleryInput";
import TitleInput from "@/app/_components/inputs/TitleInput";
import ProductIdInput from "@/app/_components/inputs/ProductIdInput";

export default function Form() {
  const isFormOpen = customizationStore((state) => state.isFormOpen);
  const setIsFormOpen = customizationStore((state) => state.setIsFormOpen);

  // Reference for the input field to clear its value when the checkbox is unchecked
  const handleCheckboxChange = (setterFn) => {
    setterFn((prev) => !prev);
  };

  return (
    <>
      <PageTitle />
      <div
        className={` max-w-2xl mx-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full  shadow-lg rounded z-[9999] overflow-hidden ${
          isFormOpen ? "block" : "hidden"
        }`}
      >
        <button
          className="fixed z-2 top-4 right-4 bg-stone-600 hover:bg-stone-900 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 cursor-pointer"
          onClick={() => setIsFormOpen()}
        >
          <XMarkIcon className="h-6 w-6 text-white" />
        </button>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 h-[90dvh] overflow-y-auto">
          <div className="p-6 pb-0">
            <h1 className="text-2xl font-semibold text-slate-900 mb-2">
              Configuration Form
            </h1>
            <p className="text-sm text-slate-500 mb-6">
              Configure your widget settings and features
            </p>
          </div>

          <div className="p-6 pt-0">
            <form id="configForm" name="configForm" className="space-y-6">
              {/* <!-- Appkey Field --> */}
              <Row>
                <div className="w-full space-y-6">
                  <Label htmlFor="appkey">Appkey</Label>
                  <AppkeyInput />
                </div>

                <div className="w-full space-y-6">
                  <Label htmlFor="language">Language</Label>
                  <LanguageSelect />
                </div>
              </Row>

              <Row>
                <div className="w-full space-y-6">
                  <Label htmlFor="title">Title</Label>
                  <TitleInput />
                </div>

                <div className="w-full space-y-6">
                  <Label htmlFor="productId">Product Id</Label>
                  <ProductIdInput />
                </div>
              </Row>

              <Row>
                <ReviewsWidgetInput
                  handleCheckboxChange={handleCheckboxChange}
                />

                <QnAWidgetInput handleCheckboxChange={handleCheckboxChange} />
              </Row>

              <Row>
                <StarRatingsInput handleCheckboxChange={handleCheckboxChange} />

                <ReviewsCarouselInput
                  handleCheckboxChange={handleCheckboxChange}
                />
              </Row>

              <Row>
                <ReviewsTabInput handleCheckboxChange={handleCheckboxChange} />

                <PromotedProdInput
                  handleCheckboxChange={handleCheckboxChange}
                />
              </Row>
              <Row>
                <SEOInput handleCheckboxChange={handleCheckboxChange} />

                <UgcGalleryInput handleCheckboxChange={handleCheckboxChange} />
              </Row>

              {/* <!-- Generate Button --> */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Generate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
