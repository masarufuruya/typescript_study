function greeter(person: number[]) {
  return 'Hello, ' + person;
}

var user = [0, 1, 2];

document.body.innerHTML = greeter(user);
