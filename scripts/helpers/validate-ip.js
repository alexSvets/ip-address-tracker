export function validatIp(ip) {
  if (
    /^(([1-9]?\d|1\d\d|2[0-5][0-5]|2[0-4]\d)\.){3}([1-9]?\d|1\d\d|2[0-5][0-5]|2[0-4]\d)$/.test(
      ip
    )
  ) {
    return true;
  }
  alert("You have to enter a valid IP address");
  return false;
}
