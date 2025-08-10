import { useWidgetStore } from "@/src/store/widgetStore";

export function useWidgets() {
  // widget instance Id
  const instanceId_Widget = useWidgetStore((state) => state.instanceId_Widget);
  const instanceId_QA = useWidgetStore((state) => state.instanceId_QA);
  const instanceId_SEO = useWidgetStore((state) => state.instanceId_SEO);
  const instanceId_Carousel = useWidgetStore(
    (state) => state.instanceId_Carousel
  );
  const instanceId_StarRating = useWidgetStore(
    (state) => state.instanceId_StarRating
  );
  const instanceId_PromotedProd = useWidgetStore(
    (state) => state.instanceId_PromotedProd
  );
  const instanceId_UgcGallery = useWidgetStore(
    (state) => state.instanceId_UgcGallery
  );
  const instanceId_ReviewsTab = useWidgetStore(
    (state) => state.instanceId_ReviewsTab
  );
  const productId = useWidgetStore((state) => state.productId);

  // states
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

  return {
    isReviewsWidgetEnabled,
    isQAWidgetEnabled,
    isStarRatingWidgetEnabled,
    isReviewsCarouselEnabled,
    isReviewsTabEnabled,
    isPromotedProductsEnabled,
    isSEOnabled,
    isGalleryEnabled,
    setIsReviewsWidgetEnabled,
    setIsQAWidgetEnabled,
    setIsStarRatingWidgetEnabled,
    setIsReviewsCarouselEnabled,
    setIsReviewsTabEnabled,
    setIsPromotedProductsEnabled,
    setIsSEOnabled,
    setIsGalleryEnabled,
    instanceId_Widget,
    instanceId_QA,
    instanceId_SEO,
    instanceId_Carousel,
    instanceId_StarRating,
    instanceId_PromotedProd,
    instanceId_UgcGallery,
    instanceId_ReviewsTab,
    productId,
  };
}
