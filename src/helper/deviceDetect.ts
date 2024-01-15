function deviceDetect() {
  let deviceInfo = {
    os: "",
    browser: "",
  };
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf("Win") !== -1) {
    deviceInfo.os = "Windows";
  } else if (userAgent.indexOf("Mac") !== -1) {
    deviceInfo.os = "MacOS";
  } else if (userAgent.indexOf("Linux") !== -1) {
    deviceInfo.os = "Linux";
  } else if (userAgent.indexOf("Android") !== -1) {
    deviceInfo.os = "Android";
  } else if (
    userAgent.indexOf("iOS") !== -1 ||
    userAgent.indexOf("iPhone") !== -1 ||
    userAgent.indexOf("iPad") !== -1
  ) {
    deviceInfo.os = "iOS";
  } else {
    deviceInfo.os = "Unknown";
  }

  if (userAgent.indexOf("Chrome") !== -1) {
    deviceInfo.browser = "Chrome";
  } else if (userAgent.indexOf("Firefox") !== -1) {
    deviceInfo.browser = "Firefox";
  } else if (userAgent.indexOf("Safari") !== -1) {
    deviceInfo.browser = "Safari";
  } else if (
    userAgent.indexOf("Edge") !== -1 ||
    userAgent.indexOf("Edg") !== -1
  ) {
    deviceInfo.browser = "Microsoft Edge";
  } else if (
    userAgent.indexOf("MSIE") !== -1 ||
    userAgent.indexOf("Trident/") !== -1
  ) {
    deviceInfo.browser = "Internet Explorer";
  } else {
    deviceInfo.browser = "Unknown";
  }
  return deviceInfo;
}

export default deviceDetect;
