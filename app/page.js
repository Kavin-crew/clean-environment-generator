import Accordion from "./_components/Accordion";
import Form from "./_components/Form";
import Header from "./_components/Header";
import Widget from "./_components/Widget";

export const metadata = {
  title: "Account name - v3 Widgets",
};

//Instance ID
let InstanceId_Widget = "1067827";
let InstanceId_QA = "";
let InstanceId_SEO = "";
let InstanceId_Carousel = "";
let InstanceId_StarRating = "";
let InstanceId_PromotedProd = "";
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
  return (
    <>
      <Header />
      <Form />
      <Accordion>
        <Widget
          instanceid={InstanceId_Widget}
          productid={ProductId}
          active="true"
          heading="Reviews Widget"
          clipboardheading={ClipBoardHeading}
          clipboardscript={ScriptClipboard}
          clipboardscriptnote={ScriptClipboardNote}
          clipboardsnippet={SnippetClipboard}
          clipboardsnippetnote={SnippetClipboardNote}
        />
      </Accordion>
    </>
  );
}
