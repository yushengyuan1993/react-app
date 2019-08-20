/* eslint-disable no-undef */
import { React, ReactRouterDOM } from '../../react';

// import { Carousel, WingBlank } from 'antd-mobile';

import Tabbar from '../../components/tabbar/tabbar.js';
import Header from '../../components/header/header.js';

import productStyle from './product.module.scss';

const { withRouter } = ReactRouterDOM;
// const banner = ['static/images/course/8.png', 'static/images/course/9.png', 'static/images/course/10.png'];


function RenderContent (props) {
  let list = props.data;

  const item = list.map((el, i) => {
    let type = el.type;

    switch (type) {
      case 'one_item':
        return <RenderOneItem key={i} items={el.items} name={el.name} type={el.type} />
      
      case 'one_item_with_text':
        return <RenderOneItemWithText key={i} items={el.items} name={el.name} type={el.type} />
      
      case 'two_item':
        return <RenderTwoItem key={i} items={el.items} name={el.name} type={el.type} />

      case 'ad':
        return <RenderAdItem key={i} items={el.items} name={el.name} type={el.type} />

      default:
        return null;
    }
  })

  return item;
}

function RenderOneItem (props) {
  return (
    <div className="one-item">
      <div className={productStyle.title}>
        <span></span>
        <strong>{props.name}</strong>
      </div>

    </div>
  )
}
function RenderOneItemWithText (props) {
  return (
    <div className="one-item-with-text">
      <div className={productStyle.title}>
        <span></span>
        <strong>{props.name}</strong>
      </div>
      
    </div>
  )
}
function RenderTwoItem (props) {
  return (
    <div className={productStyle['two-item']}>
      <div className={productStyle.title}>
        <span></span>
        <strong>{props.name}</strong>
      </div>
      <div className="clearfix">
        {
          props.items.map((el, i) => 
            <div key={i} className={i % 2 === 0 ? 'lf' : 'rt'}>
              <div>
                <span style={{background: `url(${el.icon}) no-repeat left center/auto 100%`}}></span>
                <img src={el.cover} alt="cover" />
              </div>
              <div>{el.title}</div>
              <div>{el.tags}</div>
              <div>&yen; {el.price}</div>
            </div>
          )
        }
      </div>
    </div>
  )
}
function RenderAdItem (props) {
  return (
    <div className={productStyle['ad-item']}>
      <img src={props.items[0].cover} alt="cover" />
    </div>
  )
}

class Product extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      list: null
    }

    KZ.setRootClassName('active-product');
  }

  componentWillMount () {
    const list = [
      {
        "items": [
          {
            "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-08-14/9cf1f4f6-81af-4fee-862c-a42e0e9cfae2.png",
            "price": 39.9,
            "icon": "http://public-1254368367.file.myqcloud.com/kms/2019-08-14/678a3490-45af-400d-8e84-2fc855681c5e.png",
            "title": "十大科学家",
            "tags": "10节|802人在学习",
            "product_id": 3000096
          },
          {
            "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-07-31/e5ac39a6-f63e-4050-a213-0940ce5cfd5f.png",
            "price": 29.9,
            "icon": "http://public-1254368367.file.myqcloud.com/kms/2019-08-14/2778de01-2238-42de-b0f1-7cb6e5d41a9d.png",
            "title": "地球生命史",
            "tags": "12节|6525人在学习",
            "product_id": 3000077
          },
          {
            "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-08-12/9f3271ed-9b08-4a2f-b14b-e56347ef8c5a.png",
            "price": 16.9,
            "icon": "http://public-1254368367.file.myqcloud.com/kms/2019-08-14/b5ed3081-dee1-4300-9d02-6c1a876b9c3d.png",
            "title": "封神演义",
            "tags": "21节|7220人在学习",
            "product_id": 3000094
          },
          {
            "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-07-31/a286a7f2-b0c3-4ada-8608-50369aba1b89.png",
            "price": 0,
            "icon": "http://public-1254368367.file.myqcloud.com/kms/2019-08-14/5c39e655-7579-4e15-9acc-c6c63dc41208.png",
            "title": "成语故事",
            "tags": "21节|19683人在学习",
            "product_id": 3000046
          }
        ],
        "name": "精品推荐",
        "type": "two_item",
        "sort": 10
      },
      {
        "items": [
        {
          "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-08-01/ce5bdca0-b5d6-4957-a798-232d02d122eb.png",
          "link": "https://keep.kuaizaixuetang.com/purchase?product_id=3000086&activity_id=10041049&activity_type=link"
        }
        ],
        "name": "",
        "type": "ad",
        "sort": 20
        },
      {
      "items": [
      {
      "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-07-31/bc315ef9-e168-42e2-a23b-fc856cc3d582.png",
      "icon": "http://public-1254368367.file.myqcloud.com/kms/2019-08-01/739de0f1-c8a2-431e-887b-fa8be901dea3.png",
      "tags": "360节 | 全面提升语文能力",
      "product_id": 3000032,
      "join_number": "44432人在学"
      },
      {
      "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-07-31/83bda957-482c-45e0-8f2a-0afdea558ad0.png",
      "icon": "http://public-1254368367.file.myqcloud.com/kms/2019-08-14/8e518fea-5462-44e2-b361-abe424e62615.png",
      "tags": "紧扣新课标 | 名师讲得透",
      "product_id": 3000039,
      "join_number": null
      },
      {
      "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-07-31/7bc2a9a7-0f7b-4b01-9e58-3fc8ee7bfa8f.png",
      "icon": "",
      "tags": "趣味故事 | 学习经典古诗文",
      "product_id": 3000049,
      "join_number": "19473人在学"
      }
      ],
      "name": "国学经典",
      "type": "one_item",
      "sort": 50
      },
      {
      "items": [
      {
      "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-07-31/a3478faa-a103-42e0-891f-949fc02ca68e.png",
      "title": "魔法作文课",
      "tag1": [
      "写人技巧",
      "特级教师",
      "趣味动画"
      ],
      "tag2": [
      "10节",
      "39574人已学"
      ],
      "product_id": 3000069
      },
      {
      "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-08-05/f46de7ea-a8d2-4dbe-b051-5c7a2554460d.jpg",
      "title": "作文大冒险",
      "tag1": [
      "记事技巧",
      "趣味动画",
      "活学活用"
      ],
      "tag2": [
      "10节",
      "11362人已学"
      ],
      "product_id": 3000091
      },
      {
      "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-07-31/7dc15517-524d-47a2-a0ad-92d0c980d89c.png",
      "title": "恐龙世界大探秘",
      "tag1": [
      "跨学科启蒙",
      "恐龙知识",
      "科学思维"
      ],
      "tag2": [
      "10节",
      "3538人已学"
      ],
      "product_id": 3000088
      },
      {
      "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-07-31/13684e16-d10b-490b-ac5e-ef23b410f946.png",
      "title": "国宝故事",
      "tag1": [
      "CCTV团队",
      "历史探索",
      "趣味动画"
      ],
      "tag2": [
      "10节",
      "5241人已学"
      ],
      "product_id": 3000072
      },
      {
      "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-07-31/8c18f8a6-06c1-47d7-a86f-f1b2e10a0093.png",
      "title": "汉字故事",
      "tag1": [
      "文化简史",
      "汉字启蒙",
      "国学识字"
      ],
      "tag2": [
      "20节",
      "9368人已学"
      ],
      "product_id": 3000085
      },
      {
      "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-07-31/0c805207-56c0-42f3-b89d-7e4e4728f939.png",
      "title": "看图写话三步法",
      "tag1": [
      "名师授课",
      "首创直播",
      "一对一批改"
      ],
      "tag2": [
      "3节",
      "50718人已学"
      ],
      "product_id": 3000037
      },
      {
      "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-07-31/68217ed7-6aaf-4d37-a989-6174b8f6d864.png",
      "title": "少年世界史",
      "tag1": [
      "人文素养",
      "历史探索",
      "全球视野 "
      ],
      "tag2": [
      "10节",
      "7653人已学"
      ],
      "product_id": 3000079
      },
      {
      "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-07-31/861b3d05-6002-4f2e-a55d-48b4d7e2b689.png",
      "title": "《百家姓》识字课",
      "tag1": [
      "国学诵读",
      "易学好记",
      "科学识字"
      ],
      "tag2": [
      "21节",
      "4465人已学"
      ],
      "product_id": 3000087
      },
      {
      "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-08-07/aad8f57c-7519-4753-a131-752fcbb3e759.png",
      "title": "拼音动画课",
      "tag1": [
      "语言能力",
      "人文素养",
      "幼小衔接 "
      ],
      "tag2": [
      "20节",
      "1966人已学"
      ],
      "product_id": 3000093
      }
      ],
      "name": "优选必学",
      "type": "one_item_with_text",
      "sort": 100
      },
      {
      "items": [
      {
      "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-07-31/9e716cf4-6b2f-4989-97f6-cf6df8b84b4d.png",
      "icon": "",
      "tags": "精选名家 | 诗人生平 | 语文素养",
      "product_id": 3000082,
      "join_number": "4934人在学"
      },
      {
      "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-08-01/394771e6-3081-40c5-8e6b-d672b14b74fd.png",
      "icon": "",
      "tags": "AI智能课程 | 经典名著 | 传统文化",
      "product_id": 3000074,
      "join_number": "10121人在学"
      },
      {
      "cover": "http://public-1254368367.file.myqcloud.com/kms/2019-07-31/70812073-6365-4004-8953-2ea8ed4b326e.png",
      "icon": "",
      "tags": "国学启蒙 | 历史故事 | 素养提升",
      "product_id": 3000075,
      "join_number": "8784人在学"
      }
      ],
      "name": "经典诵读",
      "type": "one_item",
      "sort": 150
      }
    ]
    // ajax
    this.setState({
      list: list
    })
  }

  render () {
    return (
      <div className={productStyle.product}>
        <Header />

        <div className="content">
          <RenderContent data={this.state.list} />
        </div>

        <Tabbar tab="product" />
      </div>
    )
  }
}

export default withRouter(Product);
