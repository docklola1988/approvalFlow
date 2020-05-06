export const formConf = {
  formRef: 'elForm',
  formModel: 'formData',
  size: 'small',
  labelPosition: 'right',
  labelWidth: 100,
  formRules: 'rules',
  gutter: 15,
  disabled: false,
  span: 24,
  formBtns: true
}

export const inputComponents = [{
  label: '单行文本',
  tag: 'el-input',
  tagIcon: 'input',
  placeholder: '请输入',
  defaultValue: undefined,
  span: 24,
  labelWidth: null,
  style: { width: '100%' },
  clearable: true,
  prepend: '',
  append: '',
  'prefix-icon': '',
  'suffix-icon': '',
  maxlength: null,
  'show-word-limit': false,
  readonly: false,
  disabled: false,
  required: false,
  regList: [],
  changeTag: true,
  proCondition: false,
  asSummary: false
},
{
  label: '多行文本',
  tag: 'el-input',
  tagIcon: 'textarea',
  type: 'textarea',
  placeholder: '请输入',
  defaultValue: undefined,
  span: 24,
  labelWidth: null,
  autosize: {
    minRows: 4,
    maxRows: 4
  },
  style: { width: '100%' },
  maxlength: null,
  'show-word-limit': false,
  readonly: false,
  disabled: false,
  required: false,
  regList: [],
  changeTag: true,
  proCondition: false,
  asSummary: false
},
//   {
//     label: '密码',
//     tag: 'el-input',
//     tagIcon: 'password',
//     placeholder: '请输入',
//     defaultValue: undefined,
//     span: 24,
//     'show-password': true,
//     labelWidth: null,
//     style: { width: '100%' },
//     clearable: true,
//     prepend: '',
//     append: '',
//     'prefix-icon': '',
//     'suffix-icon': '',
//     maxlength: null,
//     'show-word-limit': false,
//     readonly: false,
//     disabled: false,
//     required: false,
//     regList: [],
//     changeTag: true,
// proCondition: false,
// asSummary: false
//   },
{
  label: '计数',
  tag: 'el-input-number',
  tagIcon: 'number',
  placeholder: '',
  defaultValue: undefined,
  span: 24,
  labelWidth: null,
  min: undefined,
  max: undefined,
  step: undefined,
  'step-strictly': false,
  precision: undefined,
  'controls-position': 'right',
  disabled: false,
  required: false,
  regList: [],
  changeTag: true,
  proCondition: true

}
]

export const selectComponents = [{
  label: '下拉选择',
  tag: 'el-select',
  tagIcon: 'select',
  placeholder: '请选择',
  defaultValue: undefined,
  span: 24,
  labelWidth: null,
  style: { width: '100%' },
  clearable: true,
  disabled: false,
  required: false,
  filterable: false,
  multiple: false,
  options: [{
    label: '选项一',
    value: '选项一'
  }, {
    label: '选项二',
    value: '选项二'
  }],
  regList: [],
  changeTag: true,
  proCondition: true
},
{
  label: '级联选择',
  tag: 'el-cascader',
  tagIcon: 'cascader',
  placeholder: '请选择',
  defaultValue: [],
  span: 24,
  labelWidth: null,
  style: { width: '100%' },
  props: {
    props: {
      multiple: false
    }
  },
  'show-all-levels': true,
  disabled: false,
  clearable: true,
  filterable: false,
  required: false,
  options: [{
    id: 1,
    value: '选项1',
    label: '选项1',
    children: [{
      id: 2,
      value: '选项1-1',
      label: '选项1-1'
    }]
  }],
  dataType: 'static',
  labelKey: 'label',
  valueKey: 'value',
  childrenKey: 'children',
  separator: '/',
  regList: [],
  changeTag: true,
  proCondition: false,
  asSummary: false
},
{
  label: '单选框组',
  tag: 'el-radio-group',
  tagIcon: 'radio',
  defaultValue: undefined,
  span: 24,
  labelWidth: null,
  style: {},
  optionType: 'default',
  border: false,
  size: 'medium',
  disabled: false,
  required: false,
  options: [{
    label: '选项一',
    value: '选项一'
  }, {
    label: '选项二',
    value: '选项二'
  }],
  regList: [],
  changeTag: true,
  proCondition: true
},
{
  label: '多选框组',
  tag: 'el-checkbox-group',
  tagIcon: 'checkbox',
  defaultValue: [],
  span: 24,
  labelWidth: null,
  style: {},
  optionType: 'default',
  border: false,
  size: 'medium',
  disabled: false,
  required: false,
  options: [{
    label: '选项一',
    value: '选项一'
  }, {
    label: '选项二',
    value: '选项二'
  }],
  regList: [],
  changeTag: true,
  proCondition: false,
  asSummary: false
},
//   {
//     label: '开关',
//     tag: 'el-switch',
//     tagIcon: 'switch',
//     defaultValue: false,
//     span: 24,
//     labelWidth: null,
//     style: {},
//     disabled: false,
//     required: false,
//     'active-text': '',
//     'inactive-text': '',
//     'active-color': null,
//     'inactive-color': null,
//     'active-value': true,
//     'inactive-value': false,
//     regList: [],
//     changeTag: true,
// proCondition: false,
// asSummary: false
//   },
{
  label: '滑块',
  tag: 'el-slider',
  tagIcon: 'slider',
  defaultValue: null,
  span: 24,
  labelWidth: null,
  disabled: false,
  required: false,
  min: 0,
  max: 100,
  step: 1,
  'show-stops': false,
  range: false,
  regList: [],
  changeTag: true,
  proCondition: false,
  asSummary: false
},
{
  label: '时间选择',
  tag: 'el-time-picker',
  tagIcon: 'time',
  placeholder: '请选择',
  defaultValue: null,
  span: 24,
  labelWidth: null,
  style: { width: '100%' },
  disabled: false,
  clearable: true,
  required: false,
  'picker-options': {
    selectableRange: '00:00:00-23:59:59'
  },
  format: 'HH:mm:ss',
  'value-format': 'HH:mm:ss',
  regList: [],
  changeTag: true,
  proCondition: false,
  asSummary: false
},
{
  label: '时间范围',
  tag: 'el-time-picker',
  tagIcon: 'time-range',
  defaultValue: null,
  span: 24,
  labelWidth: null,
  style: { width: '100%' },
  disabled: false,
  clearable: true,
  required: false,
  'is-range': true,
  'range-separator': '至',
  'start-placeholder': '开始时间',
  'end-placeholder': '结束时间',
  format: 'HH:mm:ss',
  'value-format': 'HH:mm:ss',
  regList: [],
  changeTag: true,
  proCondition: false,
  asSummary: false
},
{
  label: '日期选择',
  tag: 'el-date-picker',
  tagIcon: 'date',
  placeholder: '请选择',
  defaultValue: null,
  type: 'date',
  span: 24,
  labelWidth: null,
  style: { width: '100%' },
  disabled: false,
  clearable: true,
  required: false,
  format: 'yyyy-MM-dd',
  'value-format': 'yyyy-MM-dd',
  readonly: false,
  regList: [],
  changeTag: true,
  proCondition: false,
  asSummary: false
},
{
  label: '日期范围',
  tag: 'el-date-picker',
  tagIcon: 'date-range',
  defaultValue: null,
  span: 24,
  labelWidth: null,
  style: { width: '100%' },
  type: 'daterange',
  'range-separator': '至',
  'start-placeholder': '开始日期',
  'end-placeholder': '结束日期',
  disabled: false,
  clearable: true,
  required: false,
  format: 'yyyy-MM-dd',
  'value-format': 'yyyy-MM-dd',
  readonly: false,
  regList: [],
  changeTag: true,
  proCondition: false,
  asSummary: false
},
//   {
//     label: '评分',
//     tag: 'el-rate',
//     tagIcon: 'rate',
//     defaultValue: 0,
//     span: 24,
//     labelWidth: null,
//     style: {},
//     max: 5,
//     'allow-half': false,
//     'show-text': false,
//     'show-score': false,
//     disabled: false,
//     required: false,
//     regList: [],
//     changeTag: true,
// proCondition: false,
// asSummary: false
//   },
//   {
//     label: '颜色选择',
//     tag: 'el-color-picker',
//     tagIcon: 'color',
//     defaultValue: null,
//     labelWidth: null,
//     'show-alpha': false,
//     'color-format': '',
//     disabled: false,
//     required: false,
//     size: 'medium',
//     regList: [],
//     changeTag: true,
// proCondition: false,
// asSummary: false
//   },
{
  label: '上传',
  tag: 'el-upload',
  tagIcon: 'upload',
  action: 'https://jsonplaceholder.typicode.com/posts/',
  defaultValue: null,
  labelWidth: null,
  disabled: false,
  required: false,
  accept: '',
  name: 'file',
  'auto-upload': true,
  showTip: false,
  buttonText: '点击上传',
  fileSize: 2,
  sizeUnit: 'MB',
  'list-type': 'text',
  multiple: false,
  regList: [],
  changeTag: true,
  proCondition: false,
  asSummary: false
}
]

export const layoutComponents = [{
  layout: 'rowFormItem',
  tagIcon: 'row',
  type: 'default',
  justify: 'start',
  align: 'top',
  label: '行容器',
  layoutTree: true,
  children: [],
}]

export const commonComponents = [...inputComponents, ...selectComponents, ...layoutComponents]
  .map( t => Object.assign( { cmpType: 'common' }, t ) )

// 定制组件添加cmpType = custom
export const customMadeComponents = [{
  "cmpType": "custom",
  "layout": "rowFormItem",
  "tagIcon": "row",
  "type": "default",
  "justify": "start",
  "align": "top",
  "label": "请假组件",
  "layoutTree": true,
  "children": [
    {
      "cmpType": "common",
      "label": "请假类型",
      "tag": "el-select",
      "tagIcon": "select",
      "placeholder": "请选择请假类型",
      "span": 24,
      "labelWidth": null,
      "style": {
        "width": "100%"
      },
      "clearable": true,
      "disabled": false,
      "required": true,
      "filterable": false,
      "multiple": false,
      "options": [
        {
          "label": "病假",
          "value": "病假"
        },
        {
          "label": "事假",
          "value": "事假"
        },
        {
          "label": "婚假",
          "value": "婚假"
        },
        {
          "label": "丧假",
          "value": "丧假"
        },
        {
          "label": "产假",
          "value": "产假"
        },
        {
          "label": "年假",
          "value": "年假"
        }
      ],
      "regList": [],
      "changeTag": true,
      "proCondition": true,
      "layout": "colFormItem",
    },
    {
      "cmpType": "common",
      "label": "日期范围",
      "tag": "el-date-picker",
      "tagIcon": "date-range",
      "defaultValue": null,
      "span": 24,
      "labelWidth": null,
      "style": {
        "width": "100%"
      },
      "type": "datetimerange",
      "range-separator": "至",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期",
      "disabled": false,
      "clearable": true,
      "required": true,
      "format": "yyyy-MM-dd HH:mm:ss",
      "value-format": "yyyy-MM-dd HH:mm:ss",
      "readonly": false,
      "regList": [],
      "changeTag": true,
      "proCondition": false,
      "asSummary": false,
      "layout": "colFormItem",
    }
  ]
},
{
  "cmpType": "custom",
  "layout": "rowFormItem",
  "tagIcon": "row",
  "type": "default",
  "justify": "start",
  "align": "top",
  "label": "出差组件",
  "layoutTree": true,
  "children": [
    {
      "cmpType": "common",
      "label": "出差事由",
      "tag": "el-input",
      "tagIcon": "textarea",
      "type": "textarea",
      "placeholder": "请输入出差事由",
      "span": 24,
      "labelWidth": null,
      "autosize": {
        "minRows": 4,
        "maxRows": 4
      },
      "style": {
        "width": "100%"
      },
      "maxlength": null,
      "show-word-limit": false,
      "readonly": false,
      "disabled": false,
      "required": true,
      "regList": [],
      "changeTag": true,
      "proCondition": false,
      "asSummary": false,
      "layout": "colFormItem",
    },
    {
      "cmpType": "common",
      "label": "交通工具",
      "tag": "el-select",
      "tagIcon": "select",
      "placeholder": "请选择交通工具",
      "span": 24,
      "labelWidth": null,
      "style": {
        "width": "100%"
      },
      "clearable": true,
      "disabled": false,
      "required": true,
      "filterable": false,
      "multiple": false,
      "options": [
        {
          "label": "火车",
          "value": "火车"
        },
        {
          "label": "飞机",
          "value": "飞机"
        },
        {
          "label": "汽车",
          "value": "汽车"
        },
        {
          "label": "其他",
          "value": "其他"
        }
      ],
      "regList": [],
      "changeTag": true,
      "proCondition": true,
      "layout": "colFormItem",
    },
    {
      "cmpType": "common",
      "label": "单程往返",
      "tag": "el-select",
      "tagIcon": "select",
      "placeholder": "请选择单程往返",
      "span": 24,
      "labelWidth": null,
      "style": {
        "width": "100%"
      },
      "clearable": true,
      "disabled": false,
      "required": true,
      "filterable": false,
      "multiple": false,
      "options": [
        {
          "label": "单程",
          "value": "单程"
        },
        {
          "label": "往返",
          "value": "往返"
        }
      ],
      "regList": [],
      "changeTag": true,
      "proCondition": true,
      "layout": "colFormItem",
    },
    {
      "cmpType": "common",
      "label": "出发城市",
      "tag": "el-input",
      "tagIcon": "input",
      "placeholder": "请输入出发城市",
      "span": 24,
      "labelWidth": null,
      "style": {
        "width": "100%"
      },
      "clearable": true,
      "prepend": "",
      "append": "",
      "prefix-icon": "",
      "suffix-icon": "",
      "maxlength": null,
      "show-word-limit": false,
      "readonly": false,
      "disabled": false,
      "required": true,
      "regList": [],
      "changeTag": true,
      "proCondition": false,
      "asSummary": false,
      "layout": "colFormItem",
    },
    {
      "cmpType": "common",
      "label": "目的城市",
      "tag": "el-input",
      "tagIcon": "input",
      "placeholder": "请输入目的城市",
      "span": 24,
      "labelWidth": null,
      "style": {
        "width": "100%"
      },
      "clearable": true,
      "prepend": "",
      "append": "",
      "prefix-icon": "",
      "suffix-icon": "",
      "maxlength": null,
      "show-word-limit": false,
      "readonly": false,
      "disabled": false,
      "required": true,
      "regList": [],
      "changeTag": true,
      "proCondition": false,
      "asSummary": false,
      "layout": "colFormItem",
    },
    {
      "cmpType": "common",
      "label": "日期范围",
      "tag": "el-date-picker",
      "tagIcon": "date-range",
      "defaultValue": null,
      "span": 24,
      "labelWidth": null,
      "style": {
        "width": "100%"
      },
      "type": "daterange",
      "range-separator": "至",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期",
      "disabled": false,
      "clearable": true,
      "required": true,
      "format": "yyyy-MM-dd",
      "value-format": "yyyy-MM-dd",
      "readonly": false,
      "regList": [],
      "changeTag": true,
      "proCondition": false,
      "asSummary": false,
      "layout": "colFormItem",
    },
    {
      "cmpType": "common",
      "label": "出差备注",
      "tag": "el-input",
      "tagIcon": "textarea",
      "type": "textarea",
      "placeholder": "请输入出差备注",
      "span": 24,
      "labelWidth": null,
      "autosize": {
        "minRows": 4,
        "maxRows": 4
      },
      "style": {
        "width": "100%"
      },
      "maxlength": null,
      "show-word-limit": false,
      "readonly": false,
      "disabled": false,
      "required": false,
      "regList": [],
      "changeTag": true,
      "proCondition": false,
      "asSummary": false,
      "layout": "colFormItem",
    },
    {
      "cmpType": "common",
      "label": "同行人",
      "tag": "el-input",
      "tagIcon": "input",
      "placeholder": "请输入同行人",
      "span": 24,
      "labelWidth": null,
      "style": {
        "width": "100%"
      },
      "clearable": true,
      "prepend": "",
      "append": "",
      "prefix-icon": "",
      "suffix-icon": "",
      "maxlength": null,
      "show-word-limit": false,
      "readonly": false,
      "disabled": false,
      "required": false,
      "regList": [],
      "changeTag": true,
      "proCondition": false,
      "asSummary": false,
      "layout": "colFormItem",
    }
  ]
}]
// .map( t => Object.assign( { cmpType: 'custom', t } ) )

// 组件rule的触发方式，无触发方式的组件不生成rule
export const trigger = {
  'el-input': 'blur',
  'el-input-number': 'blur',
  'el-select': 'change',
  'el-radio-group': 'change',
  'el-checkbox-group': 'change',
  'el-cascader': 'change',
  'el-time-picker': 'change',
  'el-date-picker': 'change',
  'el-rate': 'change'
}