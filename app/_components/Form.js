"use client";

import { useState } from "react";
import { useWidgetStore } from "@/src/store/widgetStore";
import Label from "@/app/_components/Label";
import InputText from "@/app/_components/InputText";
import InputTextInstanceId from "@/app/_components/InputTextInstanceId";
import Row from "@/app/_components/Row";
import LanguageSelect from "@/app/_components/LanguageSelect";
import AppkeyInput from "./inputs/AppkeyInput";

import ReviewsWidgetInput from "@/app/_components/inputs/ReviewsWidgetInput";
import QnAWidgetInput from "@/app/_components/inputs/QnAWidgetInput";
import StarRatingsInput from "@/app/_components/inputs/StarRatingsInput";
import ReviewsCarouselInput from "@/app/_components/inputs/ReviewsCarouselInput";
import ReviewsTabInput from "@/app/_components/inputs/ReviewsTabInput";
import PromotedProdInput from "@/app/_components/inputs/PromotedProdInput";
import SEOInput from "@/app/_components/inputs/SEOInput";
import UgcGalleryInput from "@/app/_components/inputs/UgcGalleryInput";

export default function Form() {
  const [isFormVisible, setIsFormVisible] = useState(true);

  // Reference for the input field to clear its value when the checkbox is unchecked
  const handleCheckboxChange = (setterFn) => {
    setterFn((prev) => !prev);
  };

  return (
    <>
      <button
        className={`fixed z-[9999] top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          !isFormVisible ? "block" : "hidden"
        }`}
        onClick={() => setIsFormVisible((prev) => !prev)}
      >
        View form
      </button>
      <div
        className={` max-w-2xl mx-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full  bg-white  shadow-lg rounded z-[9999] ${
          isFormVisible ? "block" : "hidden"
        }`}
      >
        <button
          className="fixed z-2 top-4 right-4 bg-stone-600 hover:bg-stone-900 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2"
          onClick={() => setIsFormVisible((prev) => !prev)}
        >
          X
        </button>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-[90dvh] overflow-y-auto">
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
              <div className="w-full space-y-6">
                <Label htmlFor="appkey">Appkey</Label>
                <AppkeyInput />
              </div>

              <Row>
                <div className="w-full space-y-6">
                  <Label htmlFor="title">Title</Label>
                  <InputText
                    inputName="title"
                    placeholder="Account name - v3"
                  />
                </div>

                <div className="w-full space-y-6">
                  <Label htmlFor="language">Language</Label>
                  <LanguageSelect />
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
              <div className="">
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

        {/* <!-- Tailwind Design Tokens Reference --> */}
        {/* <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Tailwind Design Tokens
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div className="bg-slate-50 p-3 rounded">
            <div className="font-medium text-slate-700">Layout</div>
            <div className="text-slate-600 font-mono">
              max-w-2xl, mx-auto, p-6
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded">
            <div className="font-medium text-slate-700">Card</div>
            <div className="text-slate-600 font-mono">
              bg-white, rounded-lg, shadow-sm
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded">
            <div className="font-medium text-slate-700">Spacing</div>
            <div className="text-slate-600 font-mono">
              space-y-6, space-y-4, space-y-2
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded">
            <div className="font-medium text-slate-700">Typography</div>
            <div className="text-slate-600 font-mono">
              text-2xl, text-sm, font-semibold
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded">
            <div className="font-medium text-slate-700">Colors</div>
            <div className="text-slate-600 font-mono">
              slate-900, slate-500, blue-600
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded">
            <div className="font-medium text-slate-700">htmlForm Elements</div>
            <div className="text-slate-600 font-mono">
              px-3, py-2, border, rounded-md
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded">
            <div className="font-medium text-slate-700">Focus States</div>
            <div className="text-slate-600 font-mono">
              focus:ring-2, focus:ring-blue-500
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded">
            <div className="font-medium text-slate-700">Disabled States</div>
            <div className="text-slate-600 font-mono">
              disabled:bg-gray-50, disabled:text-gray-500
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded">
            <div className="font-medium text-slate-700">Button</div>
            <div className="text-slate-600 font-mono">
              bg-blue-600, hover:bg-blue-700, py-3
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
}
