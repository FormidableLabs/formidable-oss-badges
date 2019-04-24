const abbreviationYAxisFn = abb => {
  /*  For letters with descenders (part of a letter that extends below the font's baseline), 
      we need more space below the letter to stop overlap with the rest of the SVG */
  const doesAbbrContainDescender = RegExp(`[gjpqy]`).test(abb);

  return doesAbbrContainDescender ? "50%" : "52%";
};

export default abbreviationYAxisFn;
