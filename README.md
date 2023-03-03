# Squade

## Table of contents


## General description
A command line application to compute roots of square equations:\
`a * x^2 + b * x + c = 0, where a, b, and c - real numbers, a ≠ 0`\
Виконаний як лабораторна робота №1 з предмету "МТРПЗ" Миць Вікторією, група ІМ-12.

## Setup and usage
To run this project, first clone it onto your local machine.\
Proceed to install dependencies:\
`npm i`

### Interactive mode
Run the package.json "start" script with no arguments:\
`npm run start`\
The program will interactively prompt you numbers, expecting a decimal finite value.

### Noninteractive mode
Use absolute or relative path to sample file as an argument to trigger noninteractive mode:\
`npm run start -- ./examples/example.txt`

**The file has to conform to a defined format, specified below:**
`<a>\s<b>\s<c>\n`\
where angle brackets mean variable insertion, and a, b, c are decimal finite numbers.
Example:
`1\s0\s0\n`\
See [examples](https://github.com/MytsV/squade/tree/master/examples) folder for more examples.

### Revert commit

Fixed bad update of identifiers by [this](https://github.com/MytsV/squade/commit/b447a7ce7aa5d15afee024484c56031c3d86f746) commit with aa2ebf4b79ed7d51b39633de46916ba8fa8bd1b7 hash.
