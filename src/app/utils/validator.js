export function validator(data, config) {
  const errors = {};
  function validator(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequired": {
        if (typeof data === "boolean") {
          statusValidate = data;
        } else {
          statusValidate = !(data.trim() === "");
        }
        break;
      }
      default:
        break;
    }
    if (!statusValidate) return config.message;
  }
  for (const fieldNmae in data) {
    for (const validateMethod in config[fieldNmae]) {
      const error = validator(validateMethod, data[fieldNmae], config[fieldNmae][validateMethod]);
      if (error && !errors[fieldNmae]) errors[fieldNmae] = error;
    }
  }
  return errors;
}
