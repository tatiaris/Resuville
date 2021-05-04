import React from 'react';
import { Input, Page, Button, Collapse, Select } from '@geist-ui/react';
import { fontFamilies } from './Templates';
import PropTypes from 'prop-types';
import { ConfigInputsProps } from './interfaces';

/**
 * Footer component
 */
const ConfigInputs: React.FC<ConfigInputsProps> = (props) => {
  return (
    <Collapse shadow title="Template Settings" subtitle="Further customize your template">
      <Button size="small" type="secondary">
        Reset Settings
      </Button>
      <br />
      <br />
      <div className="variable-inputs-container">
        <div>
          <span className="variable-label">Regular Font:</span>
          <Select placeholder="Regular Font Weight" initialValue={`${props.config.regularFont}`} onChange={(v) => props.updateConfig('regularFont', v.toString())}>
            {Object.keys(fontFamilies).map((fam, i) => (
              <Select.Option key={`regular-font-select-${i}`} value={fam}>
                {fam}
              </Select.Option>
            ))}
          </Select>
        </div>
        <div>
          <span className="variable-label">Regular Font Size:</span>
          <Input placeholder="12" labelRight="pt" initialValue={`12`} onChange={(e) => props.updateConfig('regularFontSize', `${e.target.value}pt`)}></Input>
        </div>
        <div>
          <span className="variable-label">Heading Font Size:</span>
          <Input placeholder="16" labelRight="pt" initialValue={`16`} onChange={(e) => props.updateConfig('headingFontSize', `${e.target.value}pt`)}></Input>
        </div>
        <div>
          <span className="variable-label">Regular Font Weight:</span>
          <Select placeholder="Regular Font Weight" initialValue={`${props.config.regularFontWeight}`} onChange={(v) => props.updateConfig('regularFontWeight', parseInt(v.toString()))}>
            <Select.Option value="300">300</Select.Option>
            <Select.Option value="400">400</Select.Option>
            <Select.Option value="500">500</Select.Option>
            <Select.Option value="600">600</Select.Option>
            <Select.Option value="700">700</Select.Option>
          </Select>
        </div>
        <div>
          <span className="variable-label">Bold Font Weight:</span>
          <Select placeholder="Bold Font Weight" initialValue={`${props.config.boldFontWeight}`} onChange={(v) => props.updateConfig('boldFontWeight', parseInt(v.toString()))}>
            <Select.Option value="300">300</Select.Option>
            <Select.Option value="400">400</Select.Option>
            <Select.Option value="500">500</Select.Option>
            <Select.Option value="600">600</Select.Option>
            <Select.Option value="700">700</Select.Option>
          </Select>
        </div>
      </div>
    </Collapse>
  );
};

ConfigInputs.propTypes = {
  config: PropTypes.any.isRequired,
  updateConfig: PropTypes.any.isRequired
};

export default ConfigInputs;
