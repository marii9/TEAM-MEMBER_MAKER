const Intern = require('../lib/Intern');

describe('Intern', () => {
    let intern;
    beforeEach(() => {
        intern = new Intern('John Doe', 'ID-123', 'johndoe@email.com', 'University');
    });
    
    test('creates an intern object with a name, id, email, and school', () => {
        expect(intern.name).toBe('John Doe');
        expect(intern.id).toBe('ID-123');
        expect(intern.email).toBe('johndoe@email.com');
        expect(intern.school).toBe('University');
    });

    test('returns "Intern" as the employee role', () => {
        expect(intern.getRole()).toBe('Intern');
    });

    test('returns the intern\'s school', () => {
        expect(intern.getSchool()).toBe('University');
    });
});