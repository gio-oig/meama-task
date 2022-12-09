import { Outlet } from "react-router";
import Footer from "../components/footer/footer";
import { LocationRow } from "../components/locationCard/locationCard";
import ProductRow from "../components/productRow/productRow";

import "./home.css";
import { useCategories } from "../../queryHook/useCategories";
import { useLocations } from "../../queryHook/useLocations";
import { HomeHeader } from "../components/header/homeHeader";

const bgImage =
  "https://cms.meamacollect.ge//meama-collect/application/upload-api/files/bc2ebb59-908e-4a83-8696-cbabaccbc930_1651499715559.png";

export const Home = () => {
  const { data: categories, isLoading } = useCategories();
  const { cities } = useLocations();

  if (isLoading || !categories) {
    return <div>loading</div>;
  }

  return (
    <main className="main-container">
      <div className="main-container__bg">
        <div style={{ backgroundImage: `url(${bgImage})` }} />
      </div>
      <section className="wrapper">
        <HomeHeader />
        {categories.map((category) => (
          <ProductRow key={category.id} category={category} />
        ))}
        <LocationRow cities={cities} />
        <Footer />
      </section>
      <Outlet />
    </main>
  );
};
