function analyze(data) {
  const object = {};

  let sum = 0;
  let min = data[0];
  let max = data[0];

  for (let i = 0; i < data.length; i++) {
    if (data[i] === undefined || data[i] === null) continue;
    if (data[i] < min) min = data[i];
    if (data[i] > max) max = data[i];

    sum += data[i];
  }

  object.average = sum / data.length;
  object.min = min;
  object.max = max;
  object.length = data.length;

  console.log(object);
  return object;
}
export default analyze;
