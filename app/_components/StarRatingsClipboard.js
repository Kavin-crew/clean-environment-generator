import CollectionStarRatingClipboard from "@/app/_clipboards/CollectionStarRatingClip";

export default function StarRatingsClipboard() {
  return (
    <div class="clipboard-details">
      <h3>3. Add the following code snippet to your collection page.</h3>
      <p>
        Make sure you replace each data element with the appropriate values of
        your website and product attributes.
      </p>
      <CollectionStarRatingClipboard instanceid={instanceid} />
    </div>
  );
}
