"use client";

import { useWidgetStore } from "@/src/store/widgetStore";
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

export default function Home() {
  // form states
  const isReviewsWidgetEnabled = useWidgetStore(
    (state) => state.isReviewsWidgetEnabled
  );
  const isQAWidgetEnabled = useWidgetStore((state) => state.isQAWidgetEnabled);
  const isStarRatingWidgetEnabled = useWidgetStore(
    (state) => state.isStarRatingWidgetEnabled
  );
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
  const hasHydrated = useWidgetStore((state) => state.hasHydrated);

  if (!hasHydrated) return null;
  return (
    <>
      <Header />
      <Form />
      <div className="max-w-full mx-auto px-4">
        <div className="accordion" id="accordionExample">
          {isReviewsWidgetEnabled && <ReviewsWidget heading="Reviews Widget" />}

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
      <DebugWidgetStore />
    </>
  );
}
