import Details from "./page5";

const MyItem = () => {
  return (
    <div className="container">
      <h1> What is Component re-use in React ? </h1>
      <Details pname="Mouse" price="500" brand="Intex" qty="5" seller="Intex" bg="orangered"/>
      <Details pname="Keyboard" price="800" brand="iBall" qty="15" seller="iBall" bg="orangered"/>
      <Details pname="Monitor" price="12000" brand="Lenovo" qty="25" seller="Lenovo" bg="orangered"/>
      <Details pname="Speaker" price="1200" brand="Sony" qty="10" seller="Sony" bg="orangered"/>
      <Details pname="Display" price="5500" brand="Logitech" qty="8" seller="Logitech" bg="orangered"/>
      <Details pname="RAM" price="2500" brand="NVIDIA" qty="12" seller="NVIDIA" bg="orangered"/>
      <Details pname="SSD" price="4000" brand="Sandisk" qty="13" seller="Sandisk"  bg="orangered"/>
      <Details pname="Headset" price="2000" brand="JBL" qty="16" seller="JBL" bg="orangered"/>
    </div>
  );
};

export default MyItem;

//xyz = {pname:"Mouse" price:"500" brand:"Intex" qty:"5" seller:"intex"}
//xyz.pname