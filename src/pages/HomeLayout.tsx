import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import { Wrapper } from "../App.styles"

function HomeLayout() {
  return (
    <Wrapper>
        <Outlet />
        <Footer />
    </Wrapper>
  )
}

export default HomeLayout