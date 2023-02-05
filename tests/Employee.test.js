const Employee = require('../lib/Employee');
describe('Employee', () => {
    let employee;
    beforeEach(() => {
        employee = new Employee('John Doe', 123, 'john.doe@example.com');
    });

    it('creates an instance of Employee', () => {
        expect(employee).toBeInstanceOf(Employee);
    });

    it('has a name', () => {
        expect(employee.getName()).toBe('John Doe');
    });

    it('has an id', () => {
        expect(employee.getId()).toBe(123);
    });

    it('has an email', () => {
        expect(employee.getEmail()).toBe('john.doe@example.com');
    });

    it('has a role', () => {
        expect(employee.getRole()).toBe('Employee');
    });
});