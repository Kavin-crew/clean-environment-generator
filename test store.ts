import { create } from "zustand";

// Define the widget keys and their initial states
export const widgetKeys = [
  "isReviewsWidgetEnabled",
  "isQAWidgetEnabled",
  "isStarRatingWidgetEnabled",
  "isReviewsCarouselEnabled",
  "isReviewsTabEnabled",
  "isPromotedProductsEnabled",
  "isSEOnabled",
  "isGalleryEnabled",
];

const initialInstanceIds = {
  instanceId_Widget: "433901",
  instanceId_QA: "",
  instanceId_SEO: "",
  instanceId_Carousel: "",
  instanceId_StarRating: "",
  instanceId_PromotedProd: "",
  instanceId_UgcGallery: "",
  instanceId_ReviewsTab: "",
  productId: "",
};

export const useWidgetStore = create((set, get) => {
  // Initialize widget enabled flags
  const widgetState = widgetKeys.reduce((acc, key) => {
    acc[key] = false;
    acc[`set${key.charAt(0).toUpperCase() + key.slice(1)}`] = () =>
      set((state) => ({ [key]: !state[key] }));
    return acc;
  }, {});

  // const widgetSetterState = widgetKeys.reduce((acc, key) => {
  //   // Initial value
  //   acc[key] = false;

  //   // Setter that uses `get()` to negate current value
  //   acc[`set${key.charAt(0).toUpperCase() + key.slice(1)}`] = () => {
  //     const currentValue = get()[key];
  //     set({ [key]: !currentValue });
  //   };

  //   return acc;
  // }, {});

  // Create setters for the instance/product IDs
  const instanceIdSetters = Object.keys(initialInstanceIds).reduce(
    (acc, key) => {
      acc[key] = initialInstanceIds[key];
      acc[`set${key.charAt(0).toUpperCase() + key.slice(1)}`] = (value) =>
        set(() => ({ [key]: value }));
      return acc;
    },
    {}
  );

  // console.log({ ...widgetSetterState, ...instanceIdSetters });
  return {
    ...instanceIdSetters,
    ...widgetState,
  };
});
