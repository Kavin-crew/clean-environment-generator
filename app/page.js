"use client";

import Form from "@/app/_components/Form";
import Header from "@/app/_components/Header";
import Widget from "@/app/_components/Widget";
import QA from "@/app/_components/QA";
import SEO from "@/app/_components/SEO";
import StarRating from "@/app/_components/StarRating";
import PromotedProducts from "@/app/_components/PromotedProducts";
import ReviewsCarousel from "@/app/_components/ReviewsCarousel";
import UgcGallery from "@/app/_components/UgcGallery";
import ReviewsTab from "@/app/_components/ReviewsTab";
import { useWidgetStore } from "@/src/store/widgetStore";
import DebugWidgetStore from "@/src/store/debugWidgetStore";

//Clipboard text here.
let ClipBoardHeading = "Follow these steps to add this";
let ScriptClipboard = "1. Add the following to your <head> tag.";
let ScriptClipboardNote =
  "If you already have this script, please disregard since using one script will work for all of the Yotpo code snippets";
let SnippetClipboard =
  "2. Add the following code snippet to your product page.";
let SnippetClipboardNote =
  "Make sure you replace each data element with the appropriate values of your website and product attributes.";

export default function Home() {
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

  const instanceId_Widget = useWidgetStore((state) => state.instanceId_Widget);
  const productId = useWidgetStore((state) => state.productId);
  const setInstanceId_Widget = useWidgetStore(
    (state) => state.setInstanceId_Widget
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
          <Widget
            id={`widget-${instanceId_Widget}`}
            instanceid={instanceId_Widget}
            productid={productId}
            active={!isReviewsWidgetEnabled}
            toggle={setIsReviewsWidgetEnabled}
            heading="Reviews Widget"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />
          {/* <QA
            instanceid={InstanceId_QA}
            productid={ProductId}
            heading="Q&A"
            active={!isQAWidgetEnabled}
            toggle={setIsQAWidgetEnabled}
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <StarRating
            instanceid={InstanceId_StarRating}
            productid={ProductId}
            active={!isStarRatingWidgetEnabled}
            toggle={setIsStarRatingWidgetEnabled}
            heading="Star Rating"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <SEO
            instanceid={InstanceId_SEO}
            productid={ProductId}
            active={!isSEOnabled}
            toggle={setIsSEOnabled}
            heading="SEO"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <ReviewsCarousel
            instanceid={InstanceId_Carousel}
            productid=""
            heading="Reviews Carousel"
            active={!isReviewsCarouselEnabled}
            toggle={setIsReviewsCarouselEnabled}
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <PromotedProducts
            instanceid={InstanceId_PromotedProd}
            productid={ProductId}
            active={!isPromotedProductsEnabled}
            heading="Promoted Products"
            toggle={setIsPromotedProductsEnabled}
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <UgcGallery
            instanceid={InstanceId_UgcGallery}
            productid={ProductId}
            active="false"
            heading="UGC Gallery"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <ReviewsTab
            instanceid={InstanceId_ReviewsTab}
            productid={ProductId}
          /> */}
        </div>
      </div>
    </>
  );
}
