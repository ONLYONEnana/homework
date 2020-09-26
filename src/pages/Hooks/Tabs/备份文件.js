import React, { Component } from 'react';
import { connect } from 'dva';
import { Modal } from 'antd';
import _ from 'lodash';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { LayoutHelper, EditTabs as Tabs } from '@/components';
import Siderbar from './TreeMenu';
import Home from './Home';

import BatchExtract from './BatchExtract';
import SingleAndTDC from './SingleAndTDC';
import Custom from './Custom';
import RealTime from './RealTime';

import styles from './index.less';

const { TabPane } = Tabs;
const { Sider, Content } = LayoutHelper;
@DragDropContext(HTML5Backend)
@connect(({ dataSync, processData, custom, loading }) => ({
  dataSync,
  processData,
  custom,
  loading,
}))
class OffLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabList: [],
      activeKey: 'home',
    };
    this.homeRef = React.createRef();
    this.treeRef = React.createRef();
  }

  addTab = (type, task) => {
    const { tabList } = this.state;
    const { dispatch, processData } = this.props;
    // tabList 未更新
    if (tabList.length > 9) {
      Modal.info({
        title: '最多打开10个任务!',
        okText: '知道了',
      });
      return;
    }
    // 新建tab type又是他的key
    if (tabList.some(item => (task ? item.key === task.id : item.key === type))) {
      this.setState(
        {
          activeKey: task ? task.id : type,
        },
        () => {
          this.treeRef.current.setSelectedKeys([task ? task.id : '']);
        },
      );
    } else if (type === '') {
      // 已有页面
      const { tasktype } = task;
      const dataType =
        tasktype === 0
          ? 'editCustomTaskData'
          : tasktype < 3
          ? 'editSingleTaskData'
          : 'editBatchTaskData';
      const dispatchType =
        tasktype === 0
          ? 'getEditCustomData'
          : tasktype < 3
          ? 'getEditSingleTaskData'
          : 'getEditBatchTaskData';

      dispatch({
        type: `processData/${dispatchType}`,
        payload: processData[dataType].concat(task.data),
      }).then(() => {
        const taskType = tasktype === 0 ? 'custom' : tasktype < 3 ? 'single' : 'batch';
        this.addNewOrCreatedTab(taskType, task);
      });
    } else {
      //  新建页面
      this.addNewOrCreatedTab(type);
    }
  };

  addNewOrCreatedTab = (type, task = {}) => {
    let content = '';
    const { tabList } = this.state;

    const isCreated = !!Object.keys(task).length;
    const newTitle = {
      single: '新建单表采集',
      batch: '新建批量采集',
      tdc: '新建落地采集',
      custom: '新建自定义采集',
      realtime: '新建实时采集',
    };
    const title = isCreated ? `${task.name}(${task.dirname})` : newTitle[type];
    // 单例抽取的props
    const getType = (isEdit, obj) => {
      if (isEdit) {
        return obj.data.tdcload === '落地抽取' ? 'tdc' : 'single';
      } else {
        return type;
      }
    };
    const singleProps = {
      isEdit: isCreated,
      type: getType(isCreated, task),
      task: isCreated ? task.data : {},
      tabKey: isCreated ? task.id : type,
    };
    const customAndBatchProps = {
      treeRef: this.treeRef,
      homeRef: this.homeRef,
      task: isCreated ? task.data : {},
    };
    switch (type) {
      case 'single':
        content = <SingleAndTDC {...singleProps} />;
        break;
      case 'tdc':
        content = <SingleAndTDC {...singleProps} />;
        break;
      case 'batch':
        content = <BatchExtract {...customAndBatchProps} />;
        break;
      case 'custom':
        content = <Custom {...customAndBatchProps} />;
        break;
      case 'realtime':
        content = <RealTime tabKey={0} />;
        break;
      default:
        break;
    }

    this.setState(
      {
        tabList: [
          {
            title,
            key: isCreated ? task.id : type,
            content,
          },
          ...tabList,
        ],
        activeKey: isCreated ? task.id : type,
      },
      () => {
        if (!isCreated) {
          this.treeRef.current.setSelectedKeys(['']);
        } else {
          this.treeRef.current.setSelectedKeys([task.id]);
        }
      },
    );
  };

  changeTabName = (key, newName, newTask) => {
    const { tabList } = this.state;
    const changedTab = tabList.filter(item => item.key === key);
    changedTab[0].title = newName;
    changedTab[0].key = newTask.id;
    changedTab[0].hasEdit = false;
    const singleProps = {
      isEdit: true,
      type: newTask.tasktype,
      tabKey: newTask.id,
      task: newTask,
    };
    const customAndBatchProps = {
      treeRef: this.treeRef,
      homeRef: this.homeRef,
      task: newTask,
    };
    switch (newTask.tasktype) {
      case 0:
        changedTab[0].content = <Custom {...customAndBatchProps} />;
        break;
      case 1 || 2:
        changedTab[0].content = <SingleAndTDC {...singleProps} />;
        break;
      case 3:
        changedTab[0].content = <BatchExtract {...customAndBatchProps} />;
        break;
      default:
        break;
    }
    this.updateEditTask(newTask).then(() =>
      this.setState({ tabList, activeKey: newTask.id }, () => {
        if (newTask.tasktype === 1 || newTask.tasktype === 2) {
          this.clearNewSingleCatch(key);
        }
        this.treeRef.current.setSelectedKeys([newTask.id]);
      }),
    );
  };

  clearNewSingleCatch = key => {
    // 新建完成后需要更新tabKey
    const {
      dispatch,
      processData: { extractData, storeData, mappingData, saveData },
    } = this.props;
    const tempExtractData = extractData.filter(v => v.key !== key);
    dispatch({
      type: 'processData/getExtractData',
      payload: tempExtractData,
    });
    const tempStoreData = storeData.filter(v => v.key !== key);
    dispatch({
      type: 'processData/getStoreData',
      payload: tempStoreData,
    });

    const tempMappingData = mappingData.filter(v => v.key !== key);
    dispatch({
      type: 'processData/getMappingData',
      payload: tempMappingData,
    });
    const tempSaveData = saveData.filter(v => v.key !== key);
    dispatch({
      type: 'processData/getSaveData',
      payload: tempSaveData,
    });
  };

  updateEditTask = newTask => {
    const { tasktype } = newTask;
    const { dispatch, processData } = this.props;
    const dataType =
      tasktype === 0
        ? 'editCustomTaskData'
        : tasktype < 3
        ? 'editSingleTaskData'
        : 'editBatchTaskData';
    const dispatchType =
      tasktype === 0
        ? 'getEditCustomData'
        : tasktype < 3
        ? 'getEditSingleTaskData'
        : 'getEditBatchTaskData';
    const isExist = processData[dataType].filter(item => item.id === newTask.id).length;
    if (isExist) {
      const existIndex = _.findIndex(processData[dataType], item => item.id === newTask.id);
      processData[dataType][existIndex] = newTask;
    }
    const payload = isExist ? processData[dataType] : processData[dataType].concat(newTask);
    return dispatch({
      type: `processData/${dispatchType}`,
      payload,
    });
  };

  changeTab = activeKey => {
    this.setState({ activeKey });
    const defaultKeyArr = ['single', 'batch', 'tdc', 'custom'];
    if (activeKey === 'home') {
      this.treeRef.current.setSelectedKeys([this.props.dataSync.folderId || 'allAll']);
    } else if (defaultKeyArr.every(item => item !== activeKey)) {
      this.treeRef.current.setSelectedKeys([activeKey]);
    } else {
      this.treeRef.current.setSelectedKeys(['']);
    }
  };

  changeEditStatus = (key, hasEdit) => {
    const { tabList } = this.state;
    const newTabList = tabList.map(item => {
      if (item.key === key) item.hasEdit = hasEdit;
      return item;
    });
    this.setState({ tabList: newTabList });
  };

  deleteTab = (targetKey, action = 'remove') => {
    if (action === 'remove') {
      // 新建页面的4个key 已有页面编辑 需要提示
      const { processData, dispatch } = this.props;
      const { tabList } = this.state;
      const tempList = _.cloneDeep(tabList);
      const tempTab = tempList.filter(v => v.key === targetKey)[0];
      const tempType = tempTab.content.props.type;

      this.deleteTabList(targetKey);
      if (targetKey === 'custom' || targetKey === 'batch' || targetKey === 'realtime') {
        return false;
      } else if (
        targetKey === 'tdc' ||
        targetKey === 'single' ||
        tempType === 'single' ||
        tempType === 'tdc' ||
        tempType === 1 ||
        tempType === 2
      ) {
        this.clearNewSingleCatch(targetKey);
      } else {
        const dispatchObj = [
          {
            dispatchType: 'getEditCustomData',
            dataType: 'editCustomTaskData',
          },
          {
            dispatchType: 'getEditBatchTaskData',
            dataType: 'editBatchTaskData',
          },
        ].filter(
          item => processData[item.dataType].filter(value => value.id === targetKey).length,
        )[0];
        _.remove(processData[dispatchObj.dataType], item => item.id === targetKey);

        dispatch({
          type: `processData/${dispatchObj.dispatchType}`,
          payload: processData[dispatchObj.dataType],
        });
        if (dispatchObj.dataType === 'editCustomTaskData') {
          // 自定义采集任务需要删除日志
          dispatch({
            type: 'custom/deleteScriptLog',
            payload: targetKey,
          });
        }
      }
    }
  };

  deleteTabList = targetKey => {
    const { tabList } = this.state;
    _.remove(tabList, item => item.key === targetKey);
    this.setState(
      {
        tabList,
        activeKey: tabList.length ? _.last(tabList).key : 'home',
      },
      () => {
        const { activeKey } = this.state;
        const defaultKeyArr = ['single', 'batch', 'tdc', 'custom'];
        if (activeKey === 'home') {
          this.treeRef.current.setSelectedKeys([this.props.dataSync.folderId || 'allAll']);
        } else if (defaultKeyArr.every(item => item !== activeKey)) {
          this.treeRef.current.setSelectedKeys([activeKey]);
        } else {
          // 新建任务无选中项
          this.treeRef.current.setSelectedKeys(['']);
        }
      },
    );
  };

  // 刷新树组件
  refreshTreeData = () => {
    const {
      treeRef: { current: treeCurrent },
      homeRef: { current: homeCurrent },
    } = this;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    treeCurrent && treeCurrent.getFolderList();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    homeCurrent && homeCurrent.getTableList();
  };

  changeTabStaus = (task, isOnLine) => {
    const { tabList } = this.state;
    const changedTab = tabList.find(item => item.key === task.id);
    if (changedTab) {
      const singleProps = {
        ...changedTab.content.props,
        isOnLine,
      };
      const customAndBatchProps = {
        ...changedTab.content.props,
        isOnLine,
      };
      switch (task.tasktype) {
        case 0:
          changedTab.content = <Custom {...customAndBatchProps} />;
          break;
        case 1 || 2:
          changedTab.content = <SingleAndTDC {...singleProps} />;
          break;
        case 3:
          changedTab.content = <BatchExtract {...customAndBatchProps} />;
          break;
        default:
          break;
      }
      this.setState({ tabList });
    }
  };

  render() {
    const { tabList, activeKey } = this.state;
    return (
      <LayoutHelper>
        <Sider isResize>
          <Siderbar homeRef={this.homeRef} ref={this.treeRef} addTab={this.addTab} />
        </Sider>
        <Content style={{ padding: 0 }}>
          <div className={styles.wrappedTabs}>
            <Tabs
              hideAdd
              type="editable-card"
              activeKey={activeKey}
              onChange={this.changeTab}
              onClose={this.deleteTab}
              homeTab={
                <TabPane>
                  <div className={styles.contentWrap}>
                    <Home
                      tabList={tabList}
                      ref={this.homeRef}
                      treeRef={this.treeRef}
                      addTab={this.addTab}
                      changeTabStaus={this.changeTabStaus}
                      refreshTreeData={this.refreshTreeData}
                    />
                  </div>
                </TabPane>
              }
            >
              {tabList.map(item => (
                <TabPane tab={item.title} key={item.key} {...item} isEdit={item.hasEdit}>
                  {renderAlert =>
                    React.cloneElement(item.content, {
                      renderAlert,
                      changeTabName: this.changeTabName,
                      changeEditStatus: this.changeEditStatus,
                      refreshTreeData: this.refreshTreeData,
                      deleteTab: this.deleteTab,
                    })
                  }
                </TabPane>
              ))}
            </Tabs>
          </div>
        </Content>
      </LayoutHelper>
    );
  }
}

export default OffLine;
