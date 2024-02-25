import Details from "./details"

const Items = () => {
  return (
    <div className="container">
      <h1> Item List </h1>
      <Details pname="Mouse" price="800" brand="Logitech" qty="50" seller="Logitech" />
      <Details pname="Keyboard" price="1200" brand="Logitech" qty="50" seller="Logitech" />
      <Details pname="Monitor" price="22000" brand="Lenovo" qty="25" seller="Lenovo" />
      <Details pname="Speaker" price="8000" brand="iBall" qty="30" seller="iBall" />
      <Details pname="Display" price="12000" brand="Dell" qty="12" seller="Dell" />
      <Details pname="Headset" price="4000" brand="JBL" qty="28" seller="JBL" />
      <Details pname="SSD" price="5500" brand="Sandisk" qty="32" seller="Sandisk" />
      <Details pname="RAM" price="7500" brand="NVIDIA" qty="48" seller="NVIDIA" />
    </div>
  );
};

export default Items;
