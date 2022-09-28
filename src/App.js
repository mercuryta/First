import styled from "styled-components"
// import Card from "./components/Card"
import Header from "./components/Header";
import HomeMain from "./components/HomeMain";
import Footer from "./components/Footer";
import Card from "./components/Card";


function App() {
  return (
    <MyAppStyle className="App">

      <Header />

      <HomeMain />

      <Card/>
      
      <Footer />

    </MyAppStyle>
  );
}

export default App;

const MyAppStyle = styled.div`
  background-color: #45476f;
  padding-bottom: 500px;
`
