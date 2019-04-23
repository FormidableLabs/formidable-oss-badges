const abbreviationYAxisFn = abb => {
  const doesAbbrContainTail = RegExp(`[gjpqy]`).test(abb);

  return doesAbbrContainTail ? "50%" : "52%";
};

export default abbreviationYAxisFn;
