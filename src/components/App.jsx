import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

import Book from "./Book";
import CheckDigit from "./CheckDigit";
import Logo from "./Logo";

function App() {
  const [activeTab, setActiveTab] = useState("CHECK_DIGIT");

  const changeActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const tabs = {
    CHECK_DIGIT: <CheckDigit />,
    FIND_BOOK: <Book />,
  };

  return (
    <div className="w-9/12 mx-auto justify-left py-6">
      <Logo />
      <div>
        <div>
          <Menu pointing>
            <Menu.Item
              name="ISBN13 check digit"
              active={activeTab === "CHECK_DIGIT"}
              onClick={() => changeActiveTab("CHECK_DIGIT")}
            />
            <Menu.Item
              name="Find Book"
              active={activeTab === "FIND_BOOK"}
              onClick={() => changeActiveTab("FIND_BOOK")}
            />
          </Menu>
          {tabs[activeTab]}
        </div>
      </div>
    </div>
  );
}

export default App;
