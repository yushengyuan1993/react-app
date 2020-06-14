import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { TabBar } from 'antd-mobile';

import './tabbar.scss';

// * * 图片资源 * * * * * * * * * * * * * * *
import product_default from '../../assets/images/product_default.png';
import product_selected from '../../assets/images/product_selected.png';
import study_default from '../../assets/images/study_default.png';
import study_selected from '../../assets/images/study_selected.png';
import mine_default from '../../assets/images/mine_default.png';
import mine_selected from '../../assets/images/mine_selected.png';
// * * 图片资源 * * * * * * * * * * * * * * *

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: props.tab,
      hidden: false,
    }
  }

  // 选中 `选课`
  onSelectTab(tab) {
    this.setState(() => ({
      selectedTab: tab
    }));

    this.props.history.push({
      pathname: tab,
      search: `name=${tab}`,
      state: 'oops'
    });
  }

  render() {
    return (
      <div className="component-tabbar">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#666666"
          barTintColor="#ffffff"
          hidden={this.state.hidden}
          prerenderingSiblingsNumber={0}
          noRenderContent={true}
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
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default withRouter(Footer);
