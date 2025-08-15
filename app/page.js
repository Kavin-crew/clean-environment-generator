"use client";

import { useWidgetStore } from "@/src/store/widgetStore";
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
import DebugWidgetStore from "@/src/store/debugWidgetStore";

export default function Home() {
  const productId = useWidgetStore((state) => state.productId);

  // instanceId states
  const instanceIdWidget = useWidgetStore((state) => state.instanceIdWidget);
  const instanceIdQnA = useWidgetStore((state) => state.instanceIdQnA);
  const instanceIdSEO = useWidgetStore((state) => state.instanceIdSEO);
  const instanceIdCarousel = useWidgetStore(
    (state) => state.instanceIdCarousel
  );
  const instanceIdStarRating = useWidgetStore(
    (state) => state.instanceIdStarRating
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
  const setInstanceIdWidget = useWidgetStore(
    (state) => state.setInstanceIdWidget
  );

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

  // accordion states
  const isReviewsWidgetCollapsed = useWidgetStore(
    (state) => state.isReviewsWidgetCollapsed
  );
  const isQAWidgetCollapsed = useWidgetStore(
    (state) => state.isQAWidgetCollapsed
  );
  const isStarRatingWidgetCollapsed = useWidgetStore(
    (state) => state.isStarRatingWidgetCollapsed
  );
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
  const setIsReviewsWidgetCollapsed = useWidgetStore(
    (state) => state.setIsReviewsWidgetCollapsed
  );
  const setIsQAWidgetCollapsed = useWidgetStore(
    (state) => state.setIsQAWidgetCollapsed
  );
  const setIsStarRatingWidgetCollapsed = useWidgetStore(
    (state) => state.setIsStarRatingWidgetCollapsed
  );
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
  const setIsReviewsWidgetEnabled = useWidgetStore(
    (state) => state.setIsReviewsWidgetEnabled
  );
  const setIsQAWidgetEnabled = useWidgetStore(
    (state) => state.setIsQAWidgetEnabled
  );
  const setIsStarRatingWidgetEnabled = useWidgetStore(
    (state) => state.setIsStarRatingWidgetEnabled
  );
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

  const hasHydrated = useWidgetStore((state) => state.hasHydrated);
  if (!hasHydrated) return null;
  return (
    <>
      <Header />
      <DebugWidgetStore />
      <Form />
      <div className="max-w-full mx-auto px-4">
        <div className="accordion" id="accordionExample">
          {isReviewsWidgetEnabled && (
            <ReviewsWidget
              id={`widget-${instanceIdWidget}-${isReviewsWidgetEnabled}`}
              heading="Reviews Widget"
            />
          )}

          {isQAWidgetEnabled && (
            <QA
              id={`widget-${instanceIdQnA}-${isQAWidgetEnabled}`}
              heading="Q&A"
            />
          )}

          {isStarRatingWidgetEnabled && (
            <StarRating
              id={`widget-${instanceIdStarRating}-${isStarRatingWidgetEnabled}`}
              heading="Star Rating"
            />
          )}

          {isSEOnabled && (
            <SEO id={`widget-${instanceIdSEO}-${isSEOnabled}`} heading="SEO" />
          )}

          {isReviewsCarouselEnabled && (
            <ReviewsCarousel
              id={`widget-${instanceIdCarousel}-${isReviewsCarouselEnabled}`}
              heading="Reviews Carousel"
            />
          )}

          {isPromotedProductsEnabled && (
            <PromotedProducts
              id={`widget-${instanceIdPromotedProd}-${isPromotedProductsEnabled}`}
              heading="Promoted Products"
            />
          )}

          {isGalleryEnabled && (
            <UgcGallery
              id={`widget-${instanceIdUgcGallery}-${isGalleryEnabled}`}
              heading="UGC Gallery"
            />
          )}

          {isReviewsTabEnabled && <ReviewsTab />}
        </div>
      </div>
    </>
  );
}
