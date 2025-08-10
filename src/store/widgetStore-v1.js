import { create } from "zustand";

export const useWidgetStore = create((set, get) => ({
  isReviewsWidgetEnabled: false,
  isQAWidgetEnabled: false,
  isStarRatingWidgetEnabled: false,
  isReviewsCarouselEnabled: false,
  isReviewsTabEnabled: false,
  isPromotedProductsEnabled: false,
  isSEOnabled: false,
  isGalleryEnabled: false,
  instanceId_Widget: "433901",
  productId: "",

  // //Instance ID
  // let InstanceId_Widget = "433901";
  // let InstanceId_QA = "555238";
  // let InstanceId_SEO = "622016";
  // let InstanceId_Carousel = "555239";
  // let InstanceId_StarRating = "557423";
  // let InstanceId_PromotedProd = "622001";
  // let InstanceId_UgcGallery = "";
  // let InstanceId_ReviewsTab = "621963";

  // //Product ID
  // let ProductId = "";

  setIsReviewsWidgetEnabled: () =>
    set({ isReviewsWidgetEnabled: !get().isReviewsWidgetEnabled }),

  setIsQAWidgetEnabled: () =>
    set({ isQAWidgetEnabled: !get().isQAWidgetEnabled }),

  setIsSEOnabled: () => set({ isSEOnabled: !get().isSEOnabled }),

  setIsReviewsCarouselEnabled: () =>
    set({ isReviewsCarouselEnabled: !get().isReviewsCarouselEnabled }),

  setIsStarRatingWidgetEnabled: () =>
    set({ isStarRatingWidgetEnabled: !get().isStarRatingWidgetEnabled }),

  setIsPromotedProductsEnabled: () =>
    set({ isPromotedProductsEnabled: !get().isPromotedProductsEnabled }),

  setIsGalleryEnabled: () => set({ isGalleryEnabled: !get().isGalleryEnabled }),

  setIsReviewsTabEnabled: () =>
    set({ isReviewsTabEnabled: !get().isReviewsTabEnabled }),

  // Setter for instanceId_Widget
  setInstanceId_Widget: (newId) =>
    set(() => ({
      instanceId_Widget: newId,
    })),

  setProductId: (newId) =>
    set(() => ({
      productId: newId,
    })),
}));
