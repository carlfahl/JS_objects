var Bootcamp = require('./bootcamp');

var ourBootcamp = new Bootcamp('BigSkyCodeAcademy', 'Bozeman');

ourBootcamp.addStudent('Pony');
ourBootcamp.addStudent('Tyler');
ourBootcamp.addStudent('Spensor');

ourBootcamp.addInstructor('Doug');
ourBootcamp.addInstructor('Carl');

console.log(ourBootcamp.students);

ourBootcamp.students[0].sayname();

ourBootcamp.instructors[0].sayname();
