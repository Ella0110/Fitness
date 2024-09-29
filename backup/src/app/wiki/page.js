import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/content/documentation/Content"

export default function Wiki() {
  return (
    <>
      <div className="flex flex-col bg-white justify-between">
        <Header />
        <div className="relative flex flex-auto mx-auto w-full h-full max-w-container px-4 pt-8 sm:px-6 sm:pt-12  lg:justify-between lg:px-8 lg:pt-16">
          <Sidebar />
          <Content />
        </div>
      </div>
      <Footer />
    </>
  );
}
