const CoreUtils = class {
  static generateGUID = () => {
    function S4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return S4() + S4();
  };

  static range = (len) => {
    const arr = [];
      for (let i = 0; i < len; i++) {
        arr.push(i);
      }
      return arr;
  }
};

export default CoreUtils;
