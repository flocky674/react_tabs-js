import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Tabs } from './components/Tabs/Tabs';
import { tabs } from './consts';

export const App = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="section">
      <h1 className="title">Selected tab is {selectedTab.title}</h1>

      <Tabs
        tabs={tabs}
        setSelectedTab={setSelectedTab}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
