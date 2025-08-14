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
import StarRating from "@/app/_components/StarRating";
import StarRatingsInput from "@/app/_components/inputs/StarRatingsInput";
import ReviewsCarouselInput from "@/app/_components/inputs/ReviewsCarouselInput";

export default function Form() {
  // instanceId states

  const instanceIdSEO = useWidgetStore((state) => state.instanceIdSEO);
  const instanceIdCarousel = useWidgetStore(
    (state) => state.instanceIdCarousel
  );

  const instanceIdPromotedProd = useWidgetStore(
    (state) => state.instanceIdPromotedProd
  );
  const instanceIdUgcGallery = useWidgetStore(
    (state) => state.instanceIdUgcGallery
  );
  const instanceIdReviewsTab = useWidgetStore(
    (state) => state.instanceIdReviewsTab
  );

  // instanceId Setters

  // form states

  const isReviewsCarouselEnabled = useWidgetStore(
    (state) => state.isReviewsCarouselEnabled
  );
  const isReviewsTabEnabled = useWidgetStore(
    (state) => state.isReviewsTabEnabled
  );
  const isPromotedProductsEnabled = useWidgetStore(
    (state) => state.isPromotedProductsEnabled
  );
  const isSEOnabled = useWidgetStore((state) => state.isSEOnabled);
  const isGalleryEnabled = useWidgetStore((state) => state.isGalleryEnabled);

  // accordion states

  const isReviewsCarouselCollapsed = useWidgetStore(
    (state) => state.isReviewsCarouselCollapsed
  );
  const isReviewsTabCollapsed = useWidgetStore(
    (state) => state.isReviewsTabCollapsed
  );
  const isPromotedProductsCollapsed = useWidgetStore(
    (state) => state.isPromotedProductsCollapsed
  );
  const isSEOCollapsed = useWidgetStore((state) => state.isSEOCollapsed);
  const isGalleryCollapsed = useWidgetStore(
    (state) => state.isGalleryCollapsed
  );
  // accordion methods

  const setIsPromotedProductsCollapsed = useWidgetStore(
    (state) => state.setIsPromotedProductsCollapsed
  );
  const setIsReviewsCarouselCollapsed = useWidgetStore(
    (state) => state.setIsReviewsCarouselCollapsed
  );
  const setisReviewsTabCollapsed = useWidgetStore(
    (state) => state.setisReviewsTabCollapsed
  );
  const setIsSEOCollapsed = useWidgetStore((state) => state.setIsSEOCollapsed);
  const setIsGalleryCollapsed = useWidgetStore(
    (state) => state.setIsGalleryCollapsed
  );

  // setter

  const setIsReviewsCarouselEnabled = useWidgetStore(
    (state) => state.setIsReviewsCarouselEnabled
  );
  const setIsReviewsTabEnabled = useWidgetStore(
    (state) => state.setIsReviewsTabEnabled
  );
  const setIsPromotedProductsEnabled = useWidgetStore(
    (state) => state.setIsPromotedProductsEnabled
  );
  const setIsSEOnabled = useWidgetStore((state) => state.setIsSEOnabled);
  const setIsGalleryEnabled = useWidgetStore(
    (state) => state.setIsGalleryEnabled
  );

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
                {/* <div className="w-full space-y-2">
                  <div className="flex items-center space-x-2">
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        id="reviews-carousel-toggle"
                        checked={isReviewsCarouselEnabled}
                        onChange={() =>
                          handleCheckboxChange(
                            setIsReviewsCarouselEnabled,
                            "reviewscarousel"
                          )
                        }
                      />
                      <span className="toggle-slider"></span>
                    </label>
                    <Label htmlFor="reviews-carousel-toggle">
                      Reviews Carousel
                    </Label>
                  </div>
                  <InputTextInstanceId
                    inputName="reviewsCarousel"
                    isDisabled={isReviewsCarouselEnabled}
                    targetedInputRef={(el) =>
                      (inputRef.current["reviewscarousel"] = el)
                    }
                  />
                </div> */}
              </Row>

              <Row>
                {/* <div className="w-full space-y-2">
                  <div className="flex items-center space-x-2">
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        id="reviews-tab-toggle"
                        checked={isReviewsTabEnabled}
                        onChange={() =>
                          handleCheckboxChange(
                            setIsReviewsTabEnabled,
                            "reviewstab"
                          )
                        }
                      />
                      <span className="toggle-slider"></span>
                    </label>
                    <Label htmlFor="reviews-tab-toggle">Reviews Tab</Label>
                  </div>
                  <InputTextInstanceId
                    inputName="reviewsTab"
                    isDisabled={isReviewsTabEnabled}
                    targetedInputRef={(el) =>
                      (inputRef.current["reviewstab"] = el)
                    }
                  />
                </div> */}

                {/* <div className="w-full space-y-2">
                  <div className="flex items-center space-x-2">
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        id="promoted-products-toggle"
                        checked={isPromotedProductsEnabled}
                        onChange={() =>
                          handleCheckboxChange(
                            setIsPromotedProductsEnabled,
                            "promotedproducts"
                          )
                        }
                      />
                      <span className="toggle-slider"></span>
                    </label>
                    <Label htmlFor="promoted-products-toggle">
                      Promoted Products
                    </Label>
                  </div>
                  <InputTextInstanceId
                    inputName="promotedProducts"
                    isDisabled={isPromotedProductsEnabled}
                    targetedInputRef={(el) =>
                      (inputRef.current["promotedproducts"] = el)
                    }
                  />
                </div> */}
              </Row>
              <Row>
                {/* <div className="w-full space-y-2">
                  <div className="flex items-center space-x-2">
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        id="seo-toggle"
                        checked={isSEOnabled}
                        onChange={() =>
                          handleCheckboxChange(setIsSEOnabled, "seo")
                        }
                      />
                      <span className="toggle-slider"></span>
                    </label>
                    <Label htmlFor="seo-toggle">SEO</Label>
                  </div>

                  <InputTextInstanceId
                    inputName="seo"
                    isDisabled={isSEOnabled}
                    targetedInputRef={(el) => (inputRef.current["seo"] = el)}
                  />
                </div> */}

                {/* <div className="w-full space-y-2">
                  <div className="flex items-center space-x-2">
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        id="gallery-toggle"
                        checked={isGalleryEnabled}
                        onChange={() =>
                          handleCheckboxChange(setIsGalleryEnabled, "gallery")
                        }
                      />
                      <span className="toggle-slider"></span>
                    </label>
                    <Label htmlFor="gallery-toggle">Gallery</Label>
                  </div>

                  <InputTextInstanceId
                    inputName="gallery"
                    isDisabled={isGalleryEnabled}
                    targetedInputRef={(el) =>
                      (inputRef.current["gallery"] = el)
                    }
                  />
                </div> */}
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
