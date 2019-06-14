import React from "react";
const noop = () => {};

export interface ICheckProps {
  checked?: boolean;
  onCheck?: Function;
  style?: any;
  disable?: boolean;
  defaultChecked?: boolean;
  className?: string;
}

/**
 * 公共check
 */
export default class Check extends React.PureComponent<ICheckProps, any> {
  constructor(props: ICheckProps) {
    super(props);
  }
  static defaultProps = {
    checked: false,
    onCheck: noop,
    style: {},
    disable: false,
    defaultChecked: false,
    className: ""
  };

  render() {
    const {
      checked,
      onCheck,
      style,
      disable,
      defaultChecked,
      className
    } = this.props;

    return (
      <div
        className={className}
        style={style}
        onClick={() => !disable && onCheck()}
      >
        <div
          className={`check ${checked ? "checked" : ""} ${
            disable ? "checked-disable" : ""
          } ${defaultChecked ? "checked-default" : ""}`}
        >
          <i className="iconfont icon-check" />
        </div>
      </div>
    );
  }
}
