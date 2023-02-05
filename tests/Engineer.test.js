const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    let engineer;
    beforeEach(() => {
        engineer = new Engineer('John Doe', '1234', 'john.doe@email.com', 'GitHubUser');
    });

    it('should set the name using the constructor argument', () => {
        expect(engineer.name).toBe('John Doe');
    });

    it('should set the id using the constructor argument', () => {
        expect(engineer.id).toBe('1234');
    });

    it('should set the email using the constructor argument', () => {
        expect(engineer.email).toBe('john.doe@email.com');
    });

    it('should set the github username using the constructor argument', () => {
        expect(engineer.github).toBe('GitHubUser');
    });

    it('should return "Engineer" as the role', () => {
        expect(engineer.getRole()).toBe('Engineer');
    });
});