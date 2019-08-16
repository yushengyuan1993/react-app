/* eslint-disable no-undef */
import { React, ReactRouterDOM } from '../../react';

import Product from './product';
import Study from './study';
import Mine from './mine';

import { TabBar } from 'antd-mobile';

import './index.scss';

// * * 图片资源 * * * * * * * * * * * * * * *
import product_default from '../../assets/images/product_default.png';
import product_selected from '../../assets/images/product_selected.png';
import study_default from '../../assets/images/study_default.png';
import study_selected from '../../assets/images/study_selected.png';
import mine_default from '../../assets/images/mine_default.png';
import mine_selected from '../../assets/images/mine_selected.png';
// * * 图片资源 * * * * * * * * * * * * * * *

const { withRouter } = ReactRouterDOM;

let tab = KZ.getParam('tab') ? KZ.getParam('tab') : 'mine';

class Index extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedTab: tab,
      hidden: false,
      fullScreen: false,
    }
  }

  // 选中 `选课`
  onSelectTab (tab) {
    this.setState(() => ({
      selectedTab: tab
    }));

    this.props.history.push({
      pathname: 'index',
      search: `tab=${tab}`,
      state: 'oops'
    });
  }

  // 内容
  renderContent (type) {
    let content = null;
    switch (type) {
      case 'product':
        content = <Product />;
        break;
      case 'study':
        content = <Study />;
        break;
      case 'mine':
        content = <Mine />;
        break;
      default:
        break;
    }

    return (
      <div className={type}>
        {content}
      </div>
    )
  }

  render () {
    return (
      <div className="index">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#666666"
          barTintColor="#ffffff"
          hidden={this.state.hidden}
          prerenderingSiblingsNumber={0}
        >
          <TabBar.Item
            title="选课"
            key="选课"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${product_default}) center center / 21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${product_selected}) center center / 21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'product'}
            onPress={() => this.onSelectTab('product')}
          >
          <div className="content">{this.renderContent(this.state.selectedTab)}</div>
          </TabBar.Item>
          <TabBar.Item
            title="学习"
            key="学习"
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${study_default}) center center / 21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${study_selected}) center center / 21px 21px no-repeat` }}
              />
            }
            selected={this.state.selectedTab === 'study'}
            onPress={() => this.onSelectTab('study')}
          >
          <div className="content">{this.renderContent(this.state.selectedTab)}</div>
          </TabBar.Item>
          <TabBar.Item
            title="我的"
            key="我的"
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${mine_default}) center center / 21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${mine_selected}) center center / 21px 21px no-repeat` }}
              />
            }
            selected={this.state.selectedTab === 'mine'}
            onPress={() => this.onSelectTab('mine')}
          >
          <div className="content">{this.renderContent(this.state.selectedTab)}</div>
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default withRouter(Index);
