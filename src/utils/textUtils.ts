/**
 * auto pad [ -csdn] suffix
 * @param text
 * @returns if exist, return undefined
 */
function autoPadSuffix(text?: string | null) {
  if (!text) {
    return undefined;
  }

  const filter = "-csdn";
  const suffix = " " + filter;

  let val = text.trim();
  if (!val.endsWith(suffix)) {
    if (val.endsWith(filter)) {
      // 尾部紧接-csdn时，去掉-csdn
      val = val.slice(0, -filter.length);
    }

    val += suffix;

    return val;
  }
  return undefined;
}

export { autoPadSuffix };
