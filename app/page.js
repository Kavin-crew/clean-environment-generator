"use client";

import { useWidgetStore } from "@/src/store/widgetStore";
import { customizationStore } from "@/src/store/customizationStore";
import { PencilIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

import DebugWidgetStore from "@/src/store/debugWidgetStore";
import Form from "@/app/_components/Form";
import Header from "@/app/_components/Header";
import ReviewsWidget from "@/app/_components/widgets/ReviewsWidget";
import QA from "@/app/_components/widgets/QA";
import SEO from "@/app/_components/widgets/SEO";
import StarRating from "@/app/_components/widgets/StarRating";
import PromotedProducts from "@/app/_components/widgets/PromotedProducts";
import ReviewsCarousel from "@/app/_components/widgets/ReviewsCarousel";
import UgcGallery from "@/app/_components/widgets/UgcGallery";
import ReviewsTab from "@/app/_components/widgets/ReviewsTab";
import Instructions from "@/app/_components/Instructions";
import FormOverlay from "@/app/_components/FormOverlay";
import Button from "@/app/_components/Button";
import ColorPicker from "@/app/_components/ColorPicker";
import Footer from "@/app/_components/Footer";

export default function Home() {
  // form states
  const isReviewsWidgetEnabled = useWidgetStore(
    (state) => state.isReviewsWidgetEnabled,
  );
  const isQAWidgetEnabled = useWidgetStore((state) => state.isQAWidgetEnabled);
  const isStarRatingWidgetEnabled = useWidgetStore(
    (state) => state.isStarRatingWidgetEnabled,
  );
  const isReviewsCarouselEnabled = useWidgetStore(
    (state) => state.isReviewsCarouselEnabled,
  );
  const isReviewsTabEnabled = useWidgetStore(
    (state) => state.isReviewsTabEnabled,
  );
  const isPromotedProductsEnabled = useWidgetStore(
    (state) => state.isPromotedProductsEnabled,
  );
  const isSEOnabled = useWidgetStore((state) => state.isSEOnabled);
  const isGalleryEnabled = useWidgetStore((state) => state.isGalleryEnabled);
  const hasHydrated = useWidgetStore((state) => state.hasHydrated);

  const isFormOpen = customizationStore((state) => state.isFormOpen);
  const setIsFormOpen = customizationStore((state) => state.setIsFormOpen);

  const bodyBackgroundColor = customizationStore(
    (state) => state.bodyBackgroundColor,
  );

  const setBodyBackgroundColor = customizationStore(
    (state) => state.setBodyBackgroundColor,
  );

  const isBodyColorPickerOpen = customizationStore(
    (state) => state.isBodyColorPickerOpen,
  );
  const setIsBodyColorPickerOpen = customizationStore(
    (state) => state.setIsBodyColorPickerOpen,
  );

  if (!hasHydrated) return null;
  return (
    <>
      <Header />
      <main style={{ minHeight: "75vh" }}>
        {isBodyColorPickerOpen && (
          <ColorPicker
            location="left-4 top-16"
            color={bodyBackgroundColor}
            setColor={setBodyBackgroundColor}
          />
        )}
        <button
          onClick={() => setIsBodyColorPickerOpen()}
          className="absolute top-4 left-4 z-[9999] bg-stone-600 hover:bg-stone-900 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 cursor-pointer"
        >
          {!isBodyColorPickerOpen ? (
            <PencilIcon className="h-6 w-6 text-white" />
          ) : (
            <EyeSlashIcon className="h-6 w-6 text-white" />
          )}
        </button>
        <Button type="secondary" onClick={() => setIsFormOpen()}>
          View form
        </Button>
        {isFormOpen && (
          <>
            <FormOverlay />
            <Form />
          </>
        )}
        <div className="max-w-full mx-auto px-4">
          <div className="accordion" id="accordionExample">
            {isReviewsWidgetEnabled && (
              <ReviewsWidget heading="Reviews Widget" />
            )}

            {isQAWidgetEnabled && <QA heading="Q&A" />}

            {isStarRatingWidgetEnabled && <StarRating heading="Star Rating" />}

            {isSEOnabled && <SEO heading="SEO" />}

            {isReviewsCarouselEnabled && (
              <ReviewsCarousel heading="Reviews Carousel" />
            )}

            {isPromotedProductsEnabled && (
              <PromotedProducts heading="Promoted Products" />
            )}

            {isGalleryEnabled && <UgcGallery heading="UGC Gallery" />}

            {isReviewsTabEnabled && <ReviewsTab />}

            <Instructions />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
