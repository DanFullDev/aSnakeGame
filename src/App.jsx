import AppHeader from "./components/appHeader/AppHeader.jsx";
import GridCard from "./components/gridCard/GridCard.jsx";

function App() {
  return (
    <div className="flex flex-col justify-center align-middle flex-wrap">
      <AppHeader></AppHeader>
      <GridCard></GridCard>
    </div>
  );
}

export default App;
