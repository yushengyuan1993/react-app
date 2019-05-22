// import React from 'react';
import { React, ReactRouter, ReactRouterDOM } from '../config.js';
import { TabBar } from 'antd-mobile';
import './tabbar.scss';

// * * 路由集合 * * * * * * * * * * * * * * *
import Routes from '../router.js';

// * * 路由集合 * * * * * * * * * * * * * * *

// * * 图片资源 * * * * * * * * * * * * * * *
import product_default from '../assets/images/product_default.png';
import product_selected from '../assets/images/product_selected.png';
import study_default from '../assets/images/study_default.png';
import study_selected from '../assets/images/study_selected.png';
import mine_default from '../assets/images/mine_default.png';
import mine_selected from '../assets/images/mine_selected.png';
// * * 图片资源 * * * * * * * * * * * * * * *

const { BrowserRouter, Route, Link, withRouter } = ReactRouterDOM;
// const BrowserHistory = ReactRouter.browserHistory;

class KzTabBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedTab: 'study',
      hidden: false,
      fullScreen: false,
    }

    this.onSelectProducts = this.onSelectProducts.bind(this);
    this.onSelectStudy = this.onSelectStudy.bind(this);
    this.onSelectMine = this.onSelectMine.bind(this);
  }

  // 选中 `选课`
  onSelectProducts () {
    // this.setState(() => ({
    //   selectedTab: 'products'
    // }));
    console.log(withRouter);
    // ReactRouter.StaticRouter.navigateTo(Routes[0].path);
    withRouter(Routes[0]);
  }

  // 选中 `学习`
  onSelectStudy () {
    this.setState(() => ({
      selectedTab: 'study'
    }));
  }

  // 选中 `我的`
  onSelectMine () {
    this.setState(() => ({
      selectedTab: 'mine'
    }));
  }

  // 内容
  renderContent (page) {
    return (
      <div>{page}</div>
    )
  }

  render () {
    return (
      <div className="tabbar-wrap">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#666666"
          barTintColor="#ffffff"
          hidden={this.state.hidden}
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
            selected={this.state.selectedTab === 'products'}
            onPress={this.onSelectProducts}
          >
            {this.renderContent('products')}
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
            onPress={this.onSelectStudy}
          >
            {this.renderContent('study')}
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
            onPress={this.onSelectMine}
          >
            {this.renderContent('mine')}
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default KzTabBar;
