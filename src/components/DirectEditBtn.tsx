import React from 'react';
import PropTypes from 'prop-types';
import { DirectEditBtnProps } from './interfaces';
import { Button, Tooltip } from '@geist-ui/react';
import { Edit, Save } from '@geist-ui/react-icons';

/**
 * Mnavbar component
 */
export const DirectEditBtn: React.FC<DirectEditBtnProps> = (props) => {
  return (
    <div className="direct-edit-btn-container">
      {!props.templateEdit 
        ? <Tooltip placement="leftStart" type="error" text={'Directly edit your resume'}><Button iconRight={<Edit />} type="error" auto size="small" onClick={() => props.setTemplateEdit(true)} /></Tooltip>
        : <Tooltip placement="leftStart" type="success" text={'Save your resume'}><Button iconRight={<Save />} type="success" auto size="small" onClick={() => props.setTemplateEdit(false)} /></Tooltip>
      }
    </div>
  );
};

DirectEditBtn.propTypes = {
  templateEdit: PropTypes.bool.isRequired,
  setTemplateEdit: PropTypes.func.isRequired
};
