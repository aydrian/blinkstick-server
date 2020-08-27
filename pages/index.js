import { useState } from "react";
import { ChromePicker } from "react-color";

const Home = () => {
  const [color, setColor] = useState("#000000");

  const handleChangeComplete = (color, event) => {
    setColor(color.hex);
  };

  const handleSetColor = async (event) => {
    await fetch(`/api/color?hex=${color.replace("#", "")}`);
  };

  const handleTurnOff = async (event) => {
    await fetch(`/api/color?hex=000000`);
  };

  return (
    <div className="mx-auto mt-4 max-w-xs rounded shadow-lg bg-gray-200">
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2">BlinkStick Square</h1>
        <p className="text-gray-700 text-base mb-2">Hello, Pick a color.</p>
        <ChromePicker
          className="mx-auto"
          color={color}
          onChangeComplete={handleChangeComplete}
          disableAlpha={true}
        />
      </div>
      <div className="px-6 pt-4 pb-2 mx-auto">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
          onClick={handleSetColor}
        >
          Set Color
        </button>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleTurnOff}
        >
          Turn off
        </button>
      </div>
    </div>
  );
};

export default Home;
