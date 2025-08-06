"use client";

import { useState, useRef } from "react";
import Label from "./Label";

export default function Form() {
  const [isReviewsWidgetEnabled, setIsReviewsWidgetEnabled] = useState(false);
  const [isQAWidgetEnabled, setIsQAWidgetEnabled] = useState(false);
  const [isStarRatingWidgetEnabled, setIsStarRatingWidgetEnabled] =
    useState(true);
  const [isReviewsCarouselEnabled, setIsReviewsCarouselEnabled] =
    useState(false);
  const [isReviewsTabEnabled, setIsReviewsTabEnabled] = useState(false);
  const [isPromotedProductsEnabled, setIsPromotedProductsEnabled] =
    useState(false);
  const [isSEOEnabled, setIsSEOEnabled] = useState(false);

  // Reference for the input field to clear its value when the checkbox is unchecked
  const inputRef = useRef(null);
  const handleCheckboxChange = (setterFunction) => {
    setterFunction((prevChecked) => {
      const newChecked = !prevChecked;
      if (!newChecked && inputRef.current) {
        inputRef.current.value = ""; // Clear input when unchecked
      }
      return newChecked;
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* <!-- Main Form Card --> */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* <!-- Card Header --> */}
        <div className="p-6 pb-0">
          <h1 className="text-2xl font-semibold text-slate-900 mb-2">
            Configuration Form
          </h1>
          <p className="text-sm text-slate-500 mb-6">
            Configure your widget settings and features
          </p>
        </div>

        {/* <!-- Card Content --> */}
        <div className="p-6 pt-0">
          <form id="confightmlForm" className="space-y-6">
            {/* <!-- Appkey Field --> */}
            <div className="space-y-2">
              <Label htmlFor="appkey">Appkey</Label>
              <input
                type="text"
                id="appkey"
                name="appkey"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* <!-- Title Field --> */}
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* <!-- Language Dropdown --> */}
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <select
                id="language"
                name="language"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="en">English</option>
                <option value="hr">Croatian</option>
                <option value="cs">Czech</option>
                <option value="zh-CN">Chinese (Simplified)</option>
                <option value="zh-TW">Chinese (Traditional)</option>
                <option value="da">Danish</option>
                <option value="nl">Dutch</option>
                <option value="fr">French</option>
                <option value="fi">Finnish</option>
                <option value="de">German</option>
                <option value="el">Greek</option>
                <option value="hi">Hindi</option>
                <option value="hu">Hu</option>
                <option value="id">Indonesian</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="ko">Korean</option>
                <option value="lt">Lithuanian</option>
                <option value="ms">Malay</option>
                <option value="no">Norwegian</option>
                <option value="pl">Polish</option>
                <option value="pt-BR">Portuguese (Brazil)</option>
                <option value="pt-PT">Portuguese (Portugal)</option>
                <option value="ro">Romanian</option>
                <option value="ru">Russian</option>
                <option value="sk">Slovak</option>
                <option value="sl">Slovenian</option>
                <option value="es">Spanish</option>
                <option value="sv">Swedish</option>
                <option value="th">Thai</option>
                <option value="tr">Turkish</option>
                <option value="vi">Vietnamese</option>
              </select>
            </div>

            {/* <!-- Reviews Toggle + Input --> */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    id="reviews-toggle"
                    checked={isReviewsWidgetEnabled}
                    onChange={() =>
                      handleCheckboxChange(setIsReviewsWidgetEnabled)
                    }
                  />
                  <span className="toggle-slider"></span>
                </label>
                <Label htmlFor="reviews-toggle">Reviews</Label>
              </div>
              <input
                type="text"
                id="reviews-input"
                name="reviews"
                placeholder="Instance Id"
                disabled={!isReviewsWidgetEnabled}
                ref={inputRef}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
              />
            </div>

            {/* <!-- Q&A Toggle + Input --> */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    id="qa-toggle"
                    checked={isQAWidgetEnabled}
                    onChange={() => handleCheckboxChange(setIsQAWidgetEnabled)}
                  />
                  <span className="toggle-slider"></span>
                </label>
                <Label htmlFor="qa-toggle">Q&A</Label>
              </div>
              <input
                type="text"
                id="qa-input"
                name="qa"
                placeholder="Instance Id"
                disabled={!isQAWidgetEnabled}
                ref={inputRef}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
              />
            </div>

            {/* <!-- Star Ratings Toggle + Input --> */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    id="star-ratings-toggle"
                    checked={isStarRatingWidgetEnabled}
                    onChange={() =>
                      setIsStarRatingWidgetEnabled((prev) => !prev)
                    }
                  />
                  <span className="toggle-slider"></span>
                </label>
                <Label htmlFor="star-ratings-toggle">Star Ratings</Label>
              </div>
              <input
                type="text"
                id="star-ratings-input"
                name="starRatings"
                placeholder="Instance Id"
                disabled={!isStarRatingWidgetEnabled}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
              />
            </div>

            {/* <!-- Reviews Carousel Toggle + Input --> */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    id="reviews-carousel-toggle"
                    checked={isReviewsCarouselEnabled}
                    onChange={() =>
                      setIsReviewsCarouselEnabled((prev) => !prev)
                    }
                  />
                  <span className="toggle-slider"></span>
                </label>
                <Label htmlFor="reviews-carousel-toggle">
                  Reviews Carousel
                </Label>
              </div>
              <input
                type="text"
                id="reviews-carousel-input"
                name="reviewsCarousel"
                placeholder="Instance Id"
                disabled={!isReviewsCarouselEnabled}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
              />
            </div>

            {/* <!-- Reviews Tab Toggle + Input --> */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    id="reviews-tab-toggle"
                    checked={isReviewsTabEnabled}
                    onChange={() => setIsReviewsTabEnabled((prev) => !prev)}
                  />
                  <span className="toggle-slider"></span>
                </label>
                <Label htmlFor="reviews-tab-toggle">Reviews Tab</Label>
              </div>
              <input
                type="text"
                id="reviews-tab-input"
                name="reviewsTab"
                placeholder="Instance Id"
                disabled={!isReviewsTabEnabled}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
              />
            </div>

            {/* <!-- Promoted Products Toggle + Input --> */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    id="promoted-products-toggle"
                    checked={isPromotedProductsEnabled}
                    onChange={() =>
                      setIsPromotedProductsEnabled((prev) => !prev)
                    }
                  />
                  <span className="toggle-slider"></span>
                </label>
                <Label htmlFor="promoted-products-toggle">
                  Promoted Products
                </Label>
              </div>
              <input
                type="text"
                id="promoted-products-input"
                name="promotedProducts"
                placeholder="Instance Id"
                disabled={!isPromotedProductsEnabled}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
              />
            </div>

            {/* <!-- SEO Toggle + Input --> */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    id="seo-toggle"
                    checked={isSEOEnabled}
                    onChange={() => setIsSEOEnabled((prev) => !prev)}
                  />
                  <span className="toggle-slider"></span>
                </label>
                <Label htmlFor="seo-toggle">SEO</Label>
              </div>
              <input
                type="text"
                id="seo-input"
                name="seo"
                placeholder="Instance Id"
                disabled={!isSEOEnabled}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
              />
            </div>

            {/* <!-- Generate Button --> */}
            <div className="pt-4">
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
  );
}
