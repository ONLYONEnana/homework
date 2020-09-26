import React, { useReducer } from 'react';
import { Tabs, Button } from 'antd';
import Bar from './Bar';
import { reducer } from './hooks';

const { TabPane } = Tabs;

const Page = () => {
  const [state, dispatch] = useReducer(reducer, { activeKey: 'index', tabs: [] });
  const panes = [{ tab: 'Tab 1', content: <Bar addTabs={dispatch} />, key: '1', closable: false }];

  console.log(state);
  const newPanes = panes.concat(state.tabs);

  console.log(newPanes);
  return (
    <Tabs type="editable-card">
      {newPanes.map(pane => (
        <TabPane tab={pane.tab} key={pane.key} closable={pane.closable}>
          {pane.content}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default Page;
