import React from 'react';
import { Input, Page, Button, Collapse, Select, Divider, Note } from '@geist-ui/react';
import { allTemplateInfo, fontFamilies } from './Templates';
import PropTypes from 'prop-types';
import { ConfigInputsProps } from './interfaces';

/**
 * Footer component
 */
const ConfigInputs: React.FC<ConfigInputsProps> = (props) => {
  return (
    <Collapse shadow title="Template Settings" subtitle="Further customize your template">
      <Button size="small" type="secondary" onClick={() => props.updateConfig(allTemplateInfo[props.templateId].defaultConfig)}>
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
          <Input placeholder="12" labelRight="pt" type="number" initialValue={`${props.config.regularFontSize}`} onChange={(e) => props.updateConfig('regularFontSize', e.target.value)}></Input>
        </div>
        <div>
          <span className="variable-label">Heading Font Size:</span>
          <Input placeholder="16" labelRight="pt" type="number" initialValue={`${props.config.headingFontSize}`} onChange={(e) => props.updateConfig('headingFontSize', e.target.value)}></Input>
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
      <Divider volume={20} y={3}>ADVANCED SETTINGS</Divider>
      <Note>The following settings are by default set to industry standards, try not to change them.</Note><br/>
      <div className="variable-inputs-container">
        <div>
          <span className="variable-label">Background Color:</span>
          <Input type="color" initialValue={props.config.linkColor} style={{ minWidth: "25px" }} onChange={(e) => props.updateConfig('backgroundColor', e.target.value)}></Input>
        </div>
        <div>
          <span className="variable-label">Text Color:</span>
          <Input type="color" initialValue={props.config.linkColor} style={{ minWidth: "25px" }} onChange={(e) => props.updateConfig('textColor', e.target.value)}></Input>
        </div>
        <div>
          <span className="variable-label">Heading Color:</span>
          <Input type="color" initialValue={props.config.linkColor} style={{ minWidth: "25px" }} onChange={(e) => props.updateConfig('headingColor', e.target.value)}></Input>
        </div>
        <div>
          <span className="variable-label">Link Color:</span>
          <Input type="color" initialValue={props.config.linkColor} style={{ minWidth: "25px" }} onChange={(e) => props.updateConfig('linkColor', e.target.value)}></Input>
        </div>
        <div>
          <span className="variable-label">Page Height:</span>
          <Input placeholder="1327" labelRight="px" type="number" initialValue={`${props.config.pageHeight}`} onChange={(e) => props.updateConfig('pageHeight', e.target.value)}></Input>
        </div>
        <div>
          <span className="variable-label">Page Width:</span>
          <Input placeholder="1030" labelRight="px" type="number" initialValue={`${props.config.pageWidth}`} onChange={(e) => props.updateConfig('pageWidth', e.target.value)}></Input>
        </div>
        <div>
          <span className="variable-label">Vertical Margin:</span>
          <Input placeholder="48" labelRight="px" type="number" initialValue={`${props.config.verticalMargin}`} onChange={(e) => props.updateConfig('verticalMargin', e.target.value)}></Input>
        </div>
        <div>
          <span className="variable-label">Horizontal Margin:</span>
          <Input placeholder="48" labelRight="px" type="number" initialValue={`${props.config.horizontalMargin}`} onChange={(e) => props.updateConfig('horizontalMargin', e.target.value)}></Input>
        </div>
      </div>
    </Collapse>
  );
};

ConfigInputs.propTypes = {
  config: PropTypes.any.isRequired,
  updateConfig: PropTypes.any.isRequired,
  templateId: PropTypes.string.isRequired
};

export default ConfigInputs;
