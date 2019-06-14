import React from "react";
import { withRouter } from "react-router";

export interface ICheckProps {
  link?: string;
  title?: string;
  rightText?: string;
  rightLink?: string;
  renderRight?: Function;
}

/**
 * 公共Header
 */
class Header extends React.PureComponent<ICheckProps, any> {
  constructor(props: ICheckProps) {
    super(props);
  }
  static defaultProps = {
    title: "",
    rightText: "",
    link: "javascript:;",
    rightLink: "javascript:;",
    renderRight: ""
  };

  render() {
    const { link, title } = this.props;

    return (
      <div className="header">
        <div className="left-item">
          <a href={link} className="logo">
            <img
              src="http://www.wanmi.com/attachment/20190429/1570b39c27144a319eeaa1a16405ed62.png"
              alt=""
            />
          </a>
          <strong>{title}</strong>
        </div>
        {this._renderRight()}
      </div>
    );
  }

  /**
   * 渲染右侧区域
   * @returns {XML}
   * @private
   */
  _renderRight() {
    const { rightLink, rightText, renderRight } = this.props;
    if (renderRight) {
      return this.props.renderRight();
    } else {
      return (
        <div className="right-item">
          <a href={rightLink}>{rightText}</a>
        </div>
      );
    }
  }
}

//@ts-ignore
export default withRouter(Header);
