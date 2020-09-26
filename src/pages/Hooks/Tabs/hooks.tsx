import { Reducer } from 'react';
import { TabPaneProps } from 'antd/lib/tabs/index.d';

interface TabPaneCustom extends TabPaneProps {
  tab: string;
  key: 'index' | string;
  type: 'newly' | 'edit' | 'detail';
}

export interface GlobalState {
  activeKey: 'index' | string;
  tabs: TabPaneCustom[];
}

type CaseActiveKey = { type: 'SET_ACTIVEKEY'; payload?: string };
type CaseTabADD = { type: 'ADD_TAB'; payload: TabPaneCustom };

type Actions = CaseActiveKey | CaseTabADD;

const reducer: Reducer<GlobalState, Actions> = (state, action) => {
  switch (action.type) {
    case 'ADD_TAB':
      return {
        ...state,
        tabs: [...state.tabs, action.payload],
        activeKey: action.payload.key,
      };
    case 'SET_ACTIVEKEY':
      return { ...state, activeKey: action.payload || 'index' };
    default:
      return state;
  }
};

export default {};
export { reducer };
