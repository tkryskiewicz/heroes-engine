import { Modal as AntModal } from "antd";
import * as React from "react";

import "./Modal.scss";

export interface ModalProps {
  width?: number;
  visible?: boolean;
}

export class Modal extends React.Component<ModalProps> {
  public render() {
    return (
      <AntModal
        className="modal"
        closable={false}
        footer={null}
        width={this.props.width}
        visible={this.props.visible}
      >
        <div
          className="modal-container"
          style={{ width: this.props.width }}
        >
          {this.props.children}
        </div>
      </AntModal>
    );
  }
}
