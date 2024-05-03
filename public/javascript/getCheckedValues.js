function getCheckedValues(name) {
    let checkboxes = document.getElementsByName(name);
    let values = [];
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        values.push(checkbox.value);
      }
    });
    return values;
  }