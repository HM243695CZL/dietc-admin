export const inputComponents = [
  {
    __config__: {
      label: '单行文本',
      labelWidth: null,
      showLabel: true,
      tag: 'input',
      tagIcon: 'input',
      defaultValue: undefined,
      required: true,
      layout: 'colFormItem',
      sm: 3,
      regList: []
    },
    placeholder: '请输入'
  },
  {
    __config__: {
      label: '多行文本',
      labelWidth: null,
      showLabel: true,
      tag: 'textarea',
      tagIcon: 'textarea',
      defaultValue: undefined,
      required: true,
      layout: 'colFormItem',
      sm: 3,
      regList: []
    },
    placeholder: '请输入',
    minRow: 3,
    maxRow: 5
  }
];
