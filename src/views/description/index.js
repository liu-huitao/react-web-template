/*
 * @Author: liuhuitao
 * @Date: 2020-01-22 09:15:26
 * @Last Modified by: liuhuitao
 * @Last Modified time: 2020-01-22 09:58:10
 * @desc 引导页
 */
import React, { Component } from "react";
import "./index.less";
import styled from "styled-components";
var classNames = require("classnames");
const Aa = styled.p`
  color: #ccc;
`;

export class Description extends Component {
  render() {
    return (
      <>
        <div>
          <h3>修改样式</h3>
          <Aa>1. styled-components 修改样式</Aa>
          <p className={classNames("a", { c: true })}>2.classNames 设置样式</p>
          <p className="outer">
            3.外部引用文件修改 <span className="inner">样式</span>
          </p>
        </div>
      </>
    );
  }
}

export default Description;
