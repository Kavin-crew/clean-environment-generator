import Header from "./_components/Header";
import ReviewsWidget from "./_components/ReviewsWidget";

export const metadata = {
  title: "Account name - v3 Widgets",
};

export default function Home() {
  return (
    <>
      <Header />
      <ReviewsWidget />
    </>
  );
}
