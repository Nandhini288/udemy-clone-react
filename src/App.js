import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Saleimage from "./components/Saleimage";
import Recommanded from "./components/Recommanded";
import Topics from "./components/Topics";
import Popularsection from "./components/Popularsection"
import Footer from "./components/Footer"

function App()
{
    return(
<div>
  <Navbar/>
  <Categories/>
  <Saleimage/>
  <Recommanded/>
  <Topics/>
  <Popularsection/>
  <Footer/>
  </div>
    )
}
export default App