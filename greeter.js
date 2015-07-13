var Student = (function () {
    function Student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + ' ' + middleinitial + ' ' + lastname;
    }
    return Student;
})();
function greeter(person) {
    return 'Hello, ' + person.middleinitial + ' ' + person.firstname + ' ' + person.lastname;
}
// インタフェース
/*var user = {firstname: 'Jane', lastname: 'User'};*/
var user = new Student('Masaru', 'Mr.', 'Furuya');
document.body.innerHTML = greeter(user);
