import AppNav from "../components/AppNav";
import HomePage from "./Homepage";

function AppLayout() {
  return (
    <div>
      <AppNav />
      <HomePage />
      <p>App</p>
    </div>
  );
}
export default AppLayout;
