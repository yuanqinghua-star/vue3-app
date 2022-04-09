let utils = {
  isEmpty: (str: string) => {
    let result:boolean = true;
    if (str != null && str.trim().length > 0) {
      result = false;
    }
    return result
  }
}
export default utils