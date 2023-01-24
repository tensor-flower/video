// @flow

import * as React from "react";
import Player from "./components/Video";

const App = (): React$Element<React$FragmentType> => {
  return (
    <>
      <div>Rest of app here</div>
      <Player />
      <div>Rest of app here</div>
    </>
  );
};

export default App;
