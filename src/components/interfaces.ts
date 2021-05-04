export interface MheaderProps {
  title: string;
}

export interface MnavbarProps {
  theme: 'light' | 'dark';
  page: string;
}

export interface FavoriteBtnProps {
  userInfo: any;
  templateId: string;
  updateUserFunc: any;
  requestSignInFunc?: any;
}

export interface TemplateCardProps {
  info: any;
  userInfo: any;
  updateUserFunc: any;
}

export interface UserInfo {
  // To be generalized
}

export interface ListStyleConfig {
  display: string;
  listStyleType: string;
  paddingInlineStart: string;
  marginBottom: string;
  lineHeight: string;
}

export interface TemplateConfig {
  pageHeight: string;
  pageWidth: string;
  verticalMargin: string;
  horizontalMargin: string;
  regularFont: string;
  regularFontSize: string;
  regularFontWeight: string;
  boldFontWeight: string;
  headingFont: string;
  headingFontSize: string;
  listConfig: ListStyleConfig;
  userInfo: any;
}

export interface ConfigInputsProps {
  config: TemplateConfig;
  updateConfig: Function;
}
