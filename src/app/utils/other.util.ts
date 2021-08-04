/**
 *  其他常用工具类
 */
export class OtherUtil {
  /**
   * 判断系统中某些输入框输入空格判断提示
   */
  public static isSpaceBlank(configValue: any): boolean {
    let key = false;
    // 转化成数组
    const arr = Array.from(configValue.target.value);
    arr.forEach(T => {
      T === ' ' ? key = true : key = false;
    });
    return key;
  }

  /**
   * 判断是否为未定义
   * @param obj 待判断的对象
   */
  public static isUndefined(obj: any): boolean {
    return obj === undefined;
  }

  /**
   * 处理post参数传递问题
   */
  public static dealUrlParam(obj: any): string {
    const paramArr = [];
    for (const key of Object.keys(obj)) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] || obj[key] != null) {
          // 说明对象是有值的，那么就需要处理成字符串get请求
          paramArr.push(key + '=' + obj[key]);
        }
      }
    }
    if (paramArr.length > 0) {
      return '?' + paramArr.join('&').replace(/ /g, '%20');
    }
    return '';
  }

  /**
   * 生产随机数
   * @param size 长度
   */
  public static randomPassword(size: number) {
    const password = {
      arr: [],
      str: ''
    };
    const seed = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'p', 'Q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
      '2', '3', '4', '5', '6', '7', '8', '9'
    ];
    // 数组长度
    const seedlength = seed.length;
    for (let i = 0; i < size; i++) {
      const j = Math.floor(Math.random() * seedlength);
      // @ts-ignore
      password.arr.push(seed[j]);
      password.str += seed[j];
    }
    return password;
  }

  /**
   * @author leihfei
   * @description 计算得到多选删除的ids
   * @param mapOfCheckedId ng-zorro的数据
   */
  public static deleteIds(mapOfCheckedId: { [key: string]: boolean }): Array<string> {
    const ids: Array<string> = [];
    for (const val in mapOfCheckedId) {
      if (mapOfCheckedId[val]) {
        ids[ids.length] = val;
      }
    }
    return ids;
  }

  /**
   * @author leihfei
   * @description 移除需要删除的选择中的数据
   * @param mapOfCheckedId ng-zorro的数据
   * @param id id
   */
  public static removeDeleteIds(mapOfCheckedId: { [key: string]: boolean }, id: string): { [key: string]: boolean } {
    for (const val in mapOfCheckedId) {
      if (val === id) {
        delete mapOfCheckedId[val];
      }
    }
    return mapOfCheckedId;
  }

  /**
   * @author leihfei
   * @description 计算乘法时出现错误
   * @param arg1 参数1
   * @param arg2 参数2
   */
  public static accMul(arg1: number, arg2: number) {
    let m = 0;
    const s1 = arg1.toString();
    const s2 = arg2.toString();
    try {
      m += s1.split('.')[1].length;
    } catch (e) {
    }
    try {
      m += s2.split('.')[1].length;
    } catch (e) {
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
  }

  /**
   * @author leihfei
   * @description 除法
   * @param num1 参数1
   * @param num2 参数2
   */
  public static accDivision(num1: number, num2: number) {
    num1 = Number(num1);
    num2 = Number(num2);
    let t1 = 0;
    let t2 = 0;
    let dec1;
    let dec2;
    try {
      t1 = this.countDecimals(num1);
    } catch (e) {
    }
    try {
      t2 = this.countDecimals(num2);
    } catch (e) {
    }
    dec1 = this.convertToInt(num1);
    dec2 = this.convertToInt(num2);
    const result = this.accMul((dec1 / dec2), Math.pow(10, t2 - t1));
    return this.getCorrectResult(num1, num2, result);
  }

  public static countDecimals(num: number): number {
    let len = 0;
    try {
      num = Number(num);
      let str = num.toString().toUpperCase();
      if (str.split('E').length === 2) { // scientific notation
        let isDecimal = false;
        if (str.split('.').length === 2) {
          str = str.split('.')[1];
          if (Number.parseInt(str.split('E')[0], 10) !== 0) {
            isDecimal = true;
          }
        }
        const x = str.split('E');
        if (isDecimal) {
          len = x[0].length;
        }
        len -= Number.parseInt(x[1], 10);
      } else if (str.split('.').length === 2) { // decimal
        if (parseInt(str.split('.')[1], 10) !== 0) {
          len = str.split('.')[1].length;
        }
      }
    } catch (e) {
      throw e;
    } finally {
      if (isNaN(len) || len < 0) {
        len = 0;
      }
    }
    return len;
  }

  public static convertToInt(num: number) {
    num = Number(num);
    let newNum = num;
    const times = this.countDecimals(num);
    const tempNum = num.toString().toUpperCase();
    if (tempNum.split('E').length === 2) {
      newNum = Math.round(num * Math.pow(10, times));
    } else {
      newNum = Number(tempNum.replace('.', ''));
    }
    return newNum;
  }


  public static getCorrectResult(num1: number, num2: number, result: number) {
    const tempResult = num1 / num2;
    if (Math.abs(result - tempResult) > 1) {
      return tempResult;
    }
    return result;
  }

  /**
   * 对数据进行四舍五入
   * @param num 数据
   * @param fix 舍入的长度
   */
  public static round(num: any, fix = 2): string {
    if (num == null) {
      return '0';
    }
    try {
      return num.toFixed(fix);
    } catch (e) {
      return num;
    }
  }

  /**
   * @author zhouxin
   * 转换大写中文
   * @param textIndex 下标
   */
  public static numberToUpperCase(textIndex: number): string {
    let newString = '';
    const newTextIndex = textIndex + '';

    function sum(value: string | number, index: number) {
      let newValue = '';
      const isSeat = (~~textIndex > 9 && ~~textIndex <= 19);
      switch (~~value) {
        case 1:
          newValue = !index ? (isSeat ? '' : '一') : '十一';
          break;
        case 2:
          newValue = !index ? (isSeat ? '' : '二') : '十二';
          break;
        case 3:
          newValue = !index ? (isSeat ? '' : '三') : '十三';
          break;
        case 4:
          newValue = !index ? (isSeat ? '' : '四') : '十四';
          break;
        case 5:
          newValue = !index ? (isSeat ? '' : '五') : '十五';
          break;
        case 6:
          newValue = !index ? (isSeat ? '' : '六') : '十六';
          break;
        case 7:
          newValue = !index ? (isSeat ? '' : '七') : '十七';
          break;
        case 8:
          newValue = !index ? (isSeat ? '' : '八') : '十八';
          break;
        case 9:
          newValue = !index ? (isSeat ? '' : '九') : '十九';
          break;
        case 0:
          newValue = '十';
          break;
        default:
          break;
      }
      return newValue;
    }

    for (let i = 0; i < newTextIndex.length; i++) {
      newString += sum(newTextIndex.substring(i, i + 1), i);
    }
    return newString;
  }

  /**
   * 学期转换
   * @param semester 学期编号
   */
  public static transportSemester(semester: any): string {
    let str = '';
    if (semester === 0 || semester === '0') {
      str = '第一学期';
    } else if (semester === 1 || semester === '1') {
      str = '第二学期';
    } else {
      str = '小学期';
    }
    return str;
  }

  /**
   * 课节
   */
  public static classPeriod() {
    return ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
  }
}
