import React, { Component } from 'react';
import eventBus from './utils/event-bus';

export class HomeBanner extends Component {
  prevClick() {
    console.log('上一个');

    eventBus.emit('bannerPrev', 'why', 18, 1.88);
    eventBus.emit('sendMsg', '我是发送的信息prevClick');
  }

  nextClick() {
    console.log('下一个');
    eventBus.emit('bannerNext', { nickname: 'kobe', level: 99 });
    eventBus.emit('sendMsg', '我是发送的信息nextClick');
  }

  render() {
    return (
      <div>
        <h2>HomeBanner</h2>
        <button onClick={(e) => this.prevClick()}>上一个</button>
        <button onClick={(e) => this.nextClick()}>下一个</button>
      </div>
    );
  }
}

export default HomeBanner;
