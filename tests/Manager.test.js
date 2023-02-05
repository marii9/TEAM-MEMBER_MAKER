const Manager = require('../lib/Manager');

describe('Manager', () => {
    let manager;
    beforeEach(() => {
        manager = new Manager('John Doe', '1', 'johndoe@example.com', '123');
    });

    test('gets name', () => {
        expect(manager.getName()).toBe('John Doe');
    });

    test('gets ID', () => {
        expect(manager.getId()).toBe('1');
    });

    test('gets email', () => {
        expect(manager.getEmail()).toBe('johndoe@example.com');
    });

    test('gets office number', () => {
        expect(manager.getOfficeNumber()).toBe('123');
    });

    test('gets role', () => {
        expect(manager.getRole()).toBe('Manager');
    });
});