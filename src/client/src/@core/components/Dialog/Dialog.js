import React from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from 'store/actions/core';

const Dialog = (props) => {
  const dispatch = useDispatch();
  const {
    headerTitle,
    visible,
    confirmLoading,
    modalTitle,
    modalContent,
    okType,
    okText,
    okDisabled,
    cancelText,
    cancelDisabled,
  } = useSelector(({ core }) => core.dialog);

  return (
    <Modal
      title={headerTitle}
      visible={visible}
      confirmLoading={confirmLoading}
      onOk={props.handleOk}
      okType={okType}
      okText={okText}
      okButtonProps={{ disabled: okDisabled }}
      onCancel={(ev) => dispatch(Actions.closeDialog())}
      cancelText={cancelText}
      cancelButtonProps={{ disabled: cancelDisabled }}
    >
      <ExclamationCircleOutlined />
      <span className="ant-modal-confirm-title">{modalTitle}</span>
      <div className="ant-modal-confirm-content">{modalContent}</div>
    </Modal>
  );
};

export default Dialog;
