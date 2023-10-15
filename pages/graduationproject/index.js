import WelcomeSection from "../../components/graduationProject/WelcomeSection";
import DescriptionSection from "../../components/graduationProject/DescriptionSection";
import SlideShow from "../../components/graduationProject/SlideShow";
import ServicesSection from "../../components/graduationProject/ServicesSection";
import FeatureSection from "../../components/graduationProject/FeaturesSection";
import ScrollToTop from "../../components/graduationProject/ScrollToTop";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <>
      {" "}
      {/* <div
        className="fixed top-4 left-4 bg-gray-300 text-black font-bold hover:text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-600 transition duration-300"
        onClick={goBack}
      >
        Back
      </div> */}
      <ScrollToTop />
      <WelcomeSection />
      <DescriptionSection />
      <ServicesSection />
      <FeatureSection />
      <SlideShow />
    </>
  );
}
