
const submit = (event) => {
  event.preventDefault();
  const obj = { data: event.target[0].value, distance: event.target[0].value };
  setList((prev) => prev.push(obj))
  event.target.reset();
};

export default submit;
