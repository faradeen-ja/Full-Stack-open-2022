const handleChange = function (func) {
  return (event) => {
    func(event.target.value);
  };
};

export { handleChange };
