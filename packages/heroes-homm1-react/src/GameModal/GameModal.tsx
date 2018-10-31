import { Col, Row } from "antd";
import * as React from "react";

export interface GameModalProps {
  size: number;
}

export class GameModal extends React.Component<GameModalProps> {
  public static defaultProps = {
    size: 1,
  };

  public render() {
    const style: React.CSSProperties = {
      height: 77 + this.props.size * 45 + 48,
      position: "relative",
      width: 143 * 2,
    };

    const contentStyle: React.CSSProperties = {
      left: 0,
      padding: "45px 20px 30px 20px",
      position: "absolute",
      top: 0,
    };

    return (
      <div style={style}>
        {this.renderBackground(this.props.size)}
        <div style={contentStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }

  private renderBackground(size: number) {
    return (
      <div>
        {this.renderHeader()}
        {[...new Array(size).keys()].map(() => this.renderBody())}
        {this.renderFooter()}
      </div>
    );
  }

  private renderHeader() {
    const style: React.CSSProperties = {
      background: "url('assets/ui/game-modal/header.png')",
      height: 77,
    };

    return (
      <Row>
        <Col style={{ ...style, transform: "scaleX(-1)" }} span={12} />
        <Col style={style} span={12} />
      </Row>
    );
  }

  private renderBody() {
    const style: React.CSSProperties = {
      background: "url('assets/ui/game-modal/body.png')",
      backgroundRepeat: "no-repeat",
      height: 45,
    };

    return (
      <Row>
        <Col style={{ ...style, transform: "scaleX(-1)" }} span={12} />
        <Col style={style} span={12} />
      </Row>
    );
  }

  private renderFooter() {
    const style: React.CSSProperties = {
      background: "url('assets/ui/game-modal/footer.png')",
      backgroundRepeat: "no-repeat",
      height: 48,
    };

    return (
      <Row>
        <Col style={{ ...style, transform: "scaleX(-1)" }} span={12} />
        <Col style={style} span={12} />
      </Row>
    );
  }
}
