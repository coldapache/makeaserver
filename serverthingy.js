'use strict';

const http = require('http');
const port = 3001;
const server = http.createServer((req, res) => {
    if(req.url === '/students' && req.method === 'GET') {
        const students = [
            {
            firstName: "Mitchelliasia",
            lastName: "Ellenass"
            },
            {
                firstName: "Jamichael",
                lastName: "Jonas"
            },
            {
                firstName: "Marissississississiaaaa",
                lastName: "Soolawng"
            },
            {
                firstName: "Dovid",
                lastName: "Literallyeverysinglehouse"
            }
    ];

    const studentsJson = JSON.stringify(students);

    res.setHeader('Content-Type', 'application/json');
    res.end(studentsJson);
    
    } else if(req.url === '/instructors' && req.method === 'GET') {
        const instructors = [
            {
            firstName: "Ash",
            lastName: "From Pallet Town"
            },
            {
                firstName: "Brandon",
                lastName: "Of Atlanta"
            },
            
    ];

    const instructorsJson = JSON.stringify(instructors);

    res.setHeader('Content-Type', 'application/json');
    res.end(instructorsJson);
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('resource not found');
    }
})


server.listen(port, () => {
    console.log('Listening on port ', port);
  })