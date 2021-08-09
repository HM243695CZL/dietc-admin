var PLATFORM_CONFIG = {};
PLATFORM_CONFIG.baseUrl = 'http://192.168.3.125:8761/';

var SERVERS_NAME = {
// 工训理论系统
  THEORY_TRAIN:  'theory-server/theory/',
  // 安全教育系统
  SAFETY_EDU:  'safety-edu-server/safety-edu/',
  // 平台管理
  SECURITY_SERVER: 'security-server/dietc/',
  // 耗材管理系统
  LAB_SERVER: 'laboratory-server/laboratory/',
  // 图片URL
  IMAGE_URL: 'security-server/dietc',
  // 文件上传资源
  UPLOAD_URL: 'security-server/dietc/sys/source/upload',
  // word转换html
  UPLOAD_DOC: 'security-server/dietc/sys/word/import',
  // 工作流程操作
  ACTIVITI_SERVER: 'activiti-server/',
  // 绩效管理系统
  PERSONAL_SERVER: 'performance-server/performance/',
  // 预约管理系统
  SUBSCRIPTION_SERVER: 'subscription-server/subscription/',
  // 试验课程管理系统
  LAB_COURSE_SERVER: 'lab-courses-server/courses/',
  // 工训课程管理系统
  TECH_COURSE_SERVER: 'tech-courses-server/courses/',
  // 课程管理系统
  COURSE_SERVER: 'course-server/course/',
  // 基础设置模块
  EXPERIMENTAL_SERVER: 'experimental-server/experimental/',
  // 设备管理系统
  EQUIPMENT_SERVER: 'equipment-server/equipment/',
  // 物联集控管理系统
  GATE_SERVER: 'gate-server/gate/',
  // 保存成绩定时器时间
  // TIMER = 180000
  TIMER: 10000
};
