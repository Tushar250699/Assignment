import IpoListPage from "../src/IpoListPage";
import IpoDetailsPage from "./IpoDetailsPage";
import IpoDetailsMobile from "./IpoDetailsMobile";
import IPOTimeline from "./IPOTimeLine";

export default function App() {
  return (
    <div className="App">
      <IpoListPage />
      <IpoDetailsPage />
      <IPOTimeline />
      <IpoDetailsMobile />
    </div>
  );
}
