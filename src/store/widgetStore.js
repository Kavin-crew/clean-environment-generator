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
      instanceIdWidget: "",
      instanceIdQnA: "",
      instanceIdSEO: "",
      instanceIdCarousel: "",
      instanceIdStarRating: "",
      instanceIdPromotedProd: "",
      instanceIdUgcGallery: "",
      instanceIdReviewsTab: "",
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

      setInstanceIdWidget: (newId) => {
        set(() => ({ instanceIdWidget: newId }));
        if (typeof window !== "undefined") {
          localStorage.setItem("instanceIdWidget", newId);
          if (window.yotpo?.initWidgets) {
            window.yotpo.initWidgets();
          }
        }
      },
      setInstanceIdQnA: (newId) => {
        set(() => ({ instanceIdQnA: newId }));
        if (typeof window !== "undefined") {
          localStorage.setItem("instanceIdQnA", newId);
          if (window.yotpo?.initWidgets) {
            window.yotpo.initWidgets();
          }
        }
      },
      setInstanceIdSEO: (newId) => {
        set(() => ({ instanceIdSEO: newId }));
        if (typeof window !== "undefined") {
          localStorage.setItem("instanceIdSEO", newId);
          if (window.yotpo?.initWidgets) {
            window.yotpo.initWidgets();
          }
        }
      },
      setInstanceIdCarousel: (newId) => {
        set(() => ({ instanceIdCarousel: newId }));
        if (typeof window !== "undefined") {
          localStorage.setItem("instanceIdCarousel", newId);
          if (window.yotpo?.initWidgets) {
            window.yotpo.initWidgets();
          }
        }
      },
      setInstanceIdStarRating: (newId) => {
        set(() => ({ instanceIdStarRating: newId }));
        if (typeof window !== "undefined") {
          localStorage.setItem("instanceIdStarRating", newId);
          if (window.yotpo?.initWidgets) {
            window.yotpo.initWidgets();
          }
        }
      },
      setInstanceIdPromotedProd: (newId) => {
        set(() => ({ instanceIdPromotedProd: newId }));
        if (typeof window !== "undefined") {
          localStorage.setItem("instanceIdPromotedProd", newId);
          if (window.yotpo?.initWidgets) {
            window.yotpo.initWidgets();
          }
        }
      },
      setInstanceIdUgcGallery: (newId) => {
        set(() => ({ instanceIdUgcGallery: newId }));
        if (typeof window !== "undefined") {
          localStorage.setItem("instanceIdUgcGallery", newId);
          if (window.yotpo?.initWidgets) {
            window.yotpo.initWidgets();
          }
        }
      },
      setInstanceIdReviewsTab: (newId) => {
        set(() => ({ instanceIdReviewsTab: newId }));
        if (typeof window !== "undefined") {
          localStorage.setItem("instanceIdReviewsTab", newId);
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
