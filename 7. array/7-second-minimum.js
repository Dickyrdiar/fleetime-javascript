function secondMinimum(values) {
  min = Number.MAX_SAFE_INTEGER;
  sndMin = Number.MAX_SAFE_INTEGER;

  for (value of values) {
    if (value != min) {
      if (value < min) {
        sndMin = min;
        min = value;
      } else if (value < sndMin) {
        sndMin = value;
      }
    }
  }

  return sndMin;
}
