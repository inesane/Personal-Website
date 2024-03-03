// Wait for it

console.log(`
                            *     .--.
                                / /  \`
               +               | |
                      '         \\ \\__,
                  *          +   '--'  *
                      +   /\\
         +              .'  '.   *
                *      /======\\      +
                      ;\:.  _   ;
                      |\:. (_)  |
                      |\:.  _   |
            +         |\:. (_)  |          *
                      ;\:.      ;
                    .' \\\:.    / \`.
                   / .-''\:._.'\`-. \\
                   |/    /||\\    \\|
             jgs _..--"""\`\`\`\`"""--.._
           _.-'\`\`                    \`\`'-._
         -'                                '-

            Obviously I haven't made this ;P
Taken from http://www.ascii-art.de/ascii/pqr/rockets.txt
         `);


const stuff = [
    "It is okay to not jumble '>', '<', '>=' and '<=' once in a while",
    "It is okay to make an ironman suit once in a while",
    "It is okay to hack stuff once in a while",
    "It is okay to get an AC in one go once in a while",
    "It is okay to not miss the semi-colon after coding Python once in a while",
    "It is okay to not add the #include in Python once in a while",
    "It is okay to not write C in Python once in a while",
    "It is okay to not put the curly braces in Python once in a while",
    "It is okay to not get a TLE once in a while",
    "It is okay to not use a single letter variable name once in a while",
    "It is okay to leave a blank line after the code once in a while",
    "It is okay to get an AC after a thousand WAs once in a while",
    "It is okay to not miss the deadlines once in a while",
    "It is okay to not copy-paste from Stack Overflow once in a while",
    "It is okay to say syntaxes instead of syntices once in a while",
    "It is okay to write no-nonsense commit messages once in a while",
    "It is okay to write neat code once in a while",
    "It is okay to use tabs instead of spaces once in a while"
];

let id = Math.ceil(Math.random() * (stuff.length - 1));
document.getElementById('main').textContent = stuff[id];
