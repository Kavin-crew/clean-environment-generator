"use client";

import { useState } from "react";
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

//Instance ID
let InstanceId_Widget = "433901";
let InstanceId_QA = "";
let InstanceId_SEO = "622016";
let InstanceId_Carousel = "555239";
let InstanceId_StarRating = "557423";
let InstanceId_PromotedProd = "622001";
let InstanceId_UgcGallery = "";
let InstanceId_ReviewsTab = "";

//Product ID
let ProductId = "";

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
  const [isReviewsWidgetEnabled, setIsReviewsWidgetEnabled] = useState(false);
  const [isQAWidgetEnabled, setIsQAWidgetEnabled] = useState(false);
  const [isStarRatingWidgetEnabled, setIsStarRatingWidgetEnabled] =
    useState(true);
  const [isReviewsCarouselEnabled, setIsReviewsCarouselEnabled] =
    useState(false);
  const [isReviewsTabEnabled, setIsReviewsTabEnabled] = useState(false);
  const [isPromotedProductsEnabled, setIsPromotedProductsEnabled] =
    useState(false);
  const [isSEOnabled, setIsSEOnabled] = useState(false);
  const [isGalleryEnabled, setIsGalleryEnabled] = useState(false);
  return (
    <>
      <Header />
      <Form />
      <div className="max-w-full mx-auto px-4">
        <div className="accordion" id="accordionExample">
          <Widget
            instanceid={InstanceId_Widget}
            productid={ProductId}
            active={isReviewsWidgetEnabled}
            toggle={setIsReviewsWidgetEnabled}
            heading="Reviews Widget"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />
          <QA
            instanceid={InstanceId_QA}
            productid={ProductId}
            active="false"
            heading="Q&A"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <SEO
            instanceid={InstanceId_SEO}
            productid={ProductId}
            active={isSEOnabled}
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
            active={isReviewsCarouselEnabled}
            toggle={setIsReviewsCarouselEnabled}
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <StarRating
            instanceid={InstanceId_StarRating}
            productid={ProductId}
            active={isStarRatingWidgetEnabled}
            toggle={setIsStarRatingWidgetEnabled}
            heading="Star Rating"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <PromotedProducts
            instanceid={InstanceId_PromotedProd}
            productid={ProductId}
            active={isPromotedProductsEnabled}
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
          />
        </div>
      </div>
    </>
  );
}
