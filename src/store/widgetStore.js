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

      instanceId_Widget: "",
      productId: "",

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
    }),
    {
      name: "widget-storage",
      storage: createJSONStorage(() => localStorage),
      skipHydration: false, // important for hydration check
    }
  )
);
