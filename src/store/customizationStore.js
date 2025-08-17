import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const customizationStore = create(
  persist(
    (set, get) => ({
      logoImageUrl:
        "https://cdn.pixabay.com/photo/2015/12/22/04/00/photo-1103594_1280.png",
      bodyBackgroundColor: "#f5f5f4",
      logoImageWidth: 150,
      logoImageHeight: 150,

      overAllWidgetBackgroundColor: "#fff",
      reviewsWidgetBackgroundColor: "#fff",
      qaWidgetBackgroundColor: "#fff",
      starRatingsWidgetBackgroundColor: "#fff",
      reviewsCarouselWidgetBackgroundColor: "#fff",
      promotedProductsWidgetBackgroundColor: "#fff",
      seoWidgetBackgroundColor: "#fff",
      reviewsGalleryWidgetBackgroundColor: "#fff",

      isBodyColorPickerOpen: false,
      isReviewsWidgetColorPickerOpen: false,
      isQAColorPickerOpen: false,
      isStarRatingsColorPickerOpen: false,
      isReviewsCarouselColorPickerOpen: false,
      isPromotedProdColorPickerOpen: false,
      isSEOColorPickerOpen: false,
      isUGCGalleryColorPickerOpen: false,

      isFormOpen: true,

      hasHydrated: false,
      setHasHydrated: (state) => set({ hasHydrated: state }),
      setIsFormOpen: () => set({ isFormOpen: !get().isFormOpen }),
      setIsBodyColorPickerOpen: () =>
        set({ isBodyColorPickerOpen: !get().isBodyColorPickerOpen }),
      setIsReviewsWidgetColorPickerOpen: () =>
        set({
          isReviewsWidgetColorPickerOpen: !get().isReviewsWidgetColorPickerOpen,
        }),
      setIsQAColorPickerOpen: () =>
        set({ isQAColorPickerOpen: !get().isQAColorPickerOpen }),
      setIsStarRatingsColorPickerOpen: () =>
        set({
          isStarRatingsColorPickerOpen: !get().isStarRatingsColorPickerOpen,
        }),
      setIsReviewsCarouselColorPickerOpen: () =>
        set({
          isReviewsCarouselColorPickerOpen:
            !get().isReviewsCarouselColorPickerOpen,
        }),
      setIsPromotedProdColorPickerOpen: () =>
        set({
          isPromotedProdColorPickerOpen: !get().isPromotedProdColorPickerOpen,
        }),
      setIsSEOColorPickerOpen: () =>
        set({ isSEOColorPickerOpen: !get().isSEOColorPickerOpen }),
      setIsUGCGalleryColorPickerOpen: () =>
        set({
          isUGCGalleryColorPickerOpen: !get().isUGCGalleryColorPickerOpen,
        }),
      setBodyBackgroundColor: (newColor) => {
        set(() => ({ bodyBackgroundColor: newColor }));
      },

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
