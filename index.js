const inquirer = require('inquirer');
const fs = require('fs');

const generatedReadMe = ({ projecttitle, description, installation, usage, test, credits, license, guidelines, gituser, email }) =>
`
# ${projecttitle}

![GitHub](https://img.shields.io/badge/license-${license}-yellow.svg)

## Description
${description}.

## Table Of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [Credits](#credits)
* [License](#license)
* [Contributions](#contributions)
* [Questions](#questionscontact)

## Installation
${installation}

## Usage
${usage}

## Testing
${test}

## Credits
${credits}

## License
This repository is licensed by ${license}.

## Contributions
Please follow these guidelines when contribution to this repostory: ${guidelines}.

## Questions
To see my other projects, please visit my GitHub profile [${gituser}](https://github.com/${gituser}).
For furhter information, or questions relating to this repository, email me at ${email}.
`;

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the Title of the Project?',
            name: 'projecttitle',
        },
        {
            type: 'input',
            message: 'Please Enter a Description for the Project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please Enter Installation Instructions for the Project',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Are there any Usage Requirements or Furhter Information for the Project?',
            name: 'usage',
        },
        {
            type: 'checkbox',
            message: 'What License does the Project Have?',
            name: 'license',
            choices: ['MIT', 'Apache', 'GNU 3.0', 'None'],
        },
        {
            type: 'input',
            message: 'Are there any Contribution Guidelines a User Must Follow when Using this Repository?',
            name: 'guidelines',
        },
        {
            type: 'input',
            message: 'How does a User Test the Application/Project?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What is Your Github username?',
            name: 'gituser',
        },
        {
            type: 'input',
            message: 'What is Your Email Address?',
            name: 'email',
        },
    ])
    .then((answers) => {
        const readMeInputs = generatedReadMe(answers);
    
        fs.writeFile('README.md', readMeInputs, (err) =>
          err ? console.log(err) : console.log('Successfully created ReadMe!')
        );
      });