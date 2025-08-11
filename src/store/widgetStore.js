import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useWidgetStore = create(
  persist(
    (set, get) => ({
      isReviewsWidgetEnabled: false,
      isQAWidgetEnabled: false,
      isStarRatingWidgetEnabled: false,
      isReviewsCarouselEnabled: false,
      isReviewsTabEnabled: false,
      isPromotedProductsEnabled: false,
      isSEOnabled: false,
      isGalleryEnabled: false,

      isReviewsWidgetCollapsed: false,
      isQAWidgetCollapsed: false,
      isStarRatingWidgetCollapsed: false,
      isReviewsCarouselCollapsed: false,
      isReviewsTabCollapsed: false,
      isPromotedProductsCollapsed: false,
      isSEOCollapsed: false,
      isGalleryCollapsed: false,

      appKey: "",
      language: "en",
      instanceId_Widget: "",
      instanceId_QnA: "",
      instanceId_SEO: "",
      instanceId_Carousel: "",
      instanceId_StarRating: "",
      instanceId_PromotedProd: "",
      instanceId_UgcGallery: "",
      instanceId_ReviewsTab: "",
      productId: "",

      hasHydrated: false, // <- add this
      setHasHydrated: (state) => set({ hasHydrated: state }), // <- add this

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
      setIsGalleryEnabled: () =>
        set({ isGalleryEnabled: !get().isGalleryEnabled }),
      setIsReviewsTabEnabled: () =>
        set({ isReviewsTabEnabled: !get().isReviewsTabEnabled }),

      setIsReviewsWidgetCollapsed: () =>
        set({ isReviewsWidgetCollapsed: !get().isReviewsWidgetCollapsed }),
      setIsQAWidgetCollapsed: () =>
        set({ isQAWidgetCollapsed: !get().isQAWidgetCollapsed }),
      setIsStarRatingWidgetCollapsed: () =>
        set({
          isStarRatingWidgetCollapsed: !get().isStarRatingWidgetCollapsed,
        }),
      setIsReviewsCarouselCollapsed: () =>
        set({ isReviewsCarouselCollapsed: !get().isReviewsCarouselCollapsed }),
      setIsPromotedProductsCollapsed: () =>
        set({
          isPromotedProductsCollapsed: !get().isPromotedProductsCollapsed,
        }),
      setisReviewsTabCollapsed: () =>
        set({ isReviewsTabCollapsed: !get().isReviewsTabCollapsed }),
      setIsSEOCollapsed: () => set({ isSEOCollapsed: !get().isSEOCollapsed }),
      setIsGalleryCollapsed: () =>
        set({ isGalleryCollapsed: !get().isGalleryCollapsed }),

      setInstanceId_Widget: (newId) => {
        set(() => ({ instanceId_Widget: newId }));
        if (typeof window !== "undefined") {
          localStorage.setItem("instanceId_Widget", newId);
          if (window.yotpo?.initWidgets) {
            window.yotpo.initWidgets();
          }
        }
      },

      setProductId: (newId) => {
        set(() => ({ productId: newId }));
        if (typeof window !== "undefined") {
          localStorage.setItem("productId", newId);
        }
      },

      setAppKey: (newAppKey) => {
        set(() => ({ appKey: newAppKey }));
        if (typeof window !== "undefined") {
          localStorage.setItem("appKey", newAppKey);
        }
      },
      setLanguage: (newLanguage) => {
        set(() => ({ language: newLanguage }));
        if (typeof window !== "undefined") {
          localStorage.setItem("language", newLanguage);
        }
      },
    }),
    {
      name: "widget-storage",
      storage: createJSONStorage(() => localStorage),
      skipHydration: false, // important for hydration check
      onRehydrateStorage: () => (state) => {
        state.setHasHydrated(true); // <- mark hydrated when it's done
      },
    }
  )
);
