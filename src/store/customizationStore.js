import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const customizationStore = create(
  persist(
    (set, get) => ({
      logoImageUrl:
        "https://cdn.pixabay.com/photo/2015/12/22/04/00/photo-1103594_1280.png",
      bodyBackgroundColor: "#fff",
      logoImageWidth: 150,
      logoImageHeight: 150,

      overAllWidgetBackgroundColor: "#fff",
      reviewsWidgetBackgroundColor: "#fff",
      qaWidgetBackgroundColor: "#fff",
      starRatingsWidgetBackgroundColor: "#fff",
      reviewsCarouselWidgetBackgroundColor: "#fff",
      reviewsTabWidgetBackgroundColor: "#fff",
      promotedProductsWidgetBackgroundColor: "#fff",
      seoWidgetBackgroundColor: "#fff",
      reviewsGalleryWidgetBackgroundColor: "#fff",

      hasHydrated: false,
      setHasHydrated: (state) => set({ hasHydrated: state }),

      setOverAllWidgetBackgroundColor: (newColor) => {
        set(() => ({ overAllWidgetBackgroundColor: newColor }));
        if (typeof window !== "undefined") {
          localStorage.setItem("overAllWidgetBackgroundColor", newColor);
        }
      },
      setReviewsWidgetBackgroundColor: (newColor) => {
        set(() => ({ reviewsWidgetBackgroundColor: newColor }));
        if (typeof window !== "undefined") {
          localStorage.setItem("reviewsWidgetBackgroundColor", newColor);
        }
      },
      setQAWidgetBackgroundColor: (newColor) => {
        set(() => ({ qaWidgetBackgroundColor: newColor }));
        if (typeof window !== "undefined") {
          localStorage.setItem("qaWidgetBackgroundColor", newColor);
        }
      },
      setStarRatingsWidgetBackgroundColor: (newColor) => {
        set(() => ({ starRatingsWidgetBackgroundColor: newColor }));
        if (typeof window !== "undefined") {
          localStorage.setItem("starRatingsWidgetBackgroundColor", newColor);
        }
      },
      setReviewsCarouselWidgetBackgroundColor: (newColor) => {
        set(() => ({ reviewsCarouselWidgetBackgroundColor: newColor }));
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "reviewsCarouselWidgetBackgroundColor",
            newColor
          );
        }
      },
      setReviewsTabWidgetBackgroundColor: (newColor) => {
        set(() => ({ reviewsTabWidgetBackgroundColor: newColor }));
        if (typeof window !== "undefined") {
          localStorage.setItem("reviewsTabWidgetBackgroundColor", newColor);
        }
      },
      setPromotedProductsWidgetBackgroundColor: (newColor) => {
        set(() => ({ promotedProductsWidgetBackgroundColor: newColor }));
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "promotedProductsWidgetBackgroundColor",
            newColor
          );
        }
      },
      setSEOWidgetBackgroundColor: (newColor) => {
        set(() => ({ seoWidgetBackgroundColor: newColor }));
        if (typeof window !== "undefined") {
          localStorage.setItem("seoWidgetBackgroundColor", newColor);
        }
      },
      setReviewsGalleryWidgetBackgroundColor: (newColor) => {
        set(() => ({ reviewsGalleryWidgetBackgroundColor: newColor }));
        if (typeof window !== "undefined") {
          localStorage.setItem("reviewsGalleryWidgetBackgroundColor", newColor);
        }
      },

      setLogoImageUrl: (newUrl) => {
        set(() => ({ logoImageUrl: newUrl }));
        if (typeof window !== "undefined") {
          localStorage.setItem("logoImageUrl", newUrl);
        }
      },
      setBodyBackgroundColor: (newColor) => {
        set(() => ({ bodyBackgroundColor: newColor }));
        if (typeof window !== "undefined") {
          localStorage.setItem("bodyBackgroundColor", newColor);
        }
      },
      setLogoImageWidth: (newWidth) => {
        set(() => ({ logoImageWidth: newWidth }));
        if (typeof window !== "undefined") {
          localStorage.setItem("logoImageWidth", newWidth);
        }
      },
      setLogoImageHeight: (newHeight) => {
        set(() => ({ logoImageHeight: newHeight }));
        if (typeof window !== "undefined") {
          localStorage.setItem("logoImageHeight", newHeight);
        }
      },
    }),
    {
      name: "customization-storage",
      storage: createJSONStorage(() => localStorage),
      skipHydration: false, // important for hydration check
      onRehydrateStorage: () => (state) => {
        state.setHasHydrated(true); // <- mark hydrated when it's done
      },
    }
  )
);
