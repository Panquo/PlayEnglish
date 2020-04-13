"use strict";

let f = require('file-system');
let count = 0;
let temp = "";
let dictionary = []

let englishWords = `to abuse
to achieve
actually
to assist
bachelor
caution
chance
character
to deceive
deception
delay
to demand
dispute
engaged
eventually
evidence
to evince
figure
hazard
issue
lecture
library
motto
novel
petrol
phrase
to prevent
to regard
to relieve
rest
to resume
resumé
rude
sensible
sympathetic
vacation
`;
let frenchWords = `insulter
réaliser
en réalité
aider
célibataire
prudence
hasard
personnage
tromper, duper
tromperie
retard
exiger
conflit
fiancé
finalement
preuve
montrer clairement
chiffre / silhouette
danger
édition / sujet à traiter
conférence
bibliothèque
devise
roman
essence
expression
empêcher
considérer
soulager
repos
reprendre
CV
grossier
raisonnable
compatissant
vacances
`;
let frenchFF = `abuser
achever
actuellement
assister
bachelier
caution
chance
caractère
décevoir
déception
délai
demander
dispute
engagé
éventuellement
évidence
évincer
figure
hasard
issue
lecture
librairie
moto
nouvelle
pétrole
phrase
pévenir
regarder
relever
rester
résumer
résumé
rude
sensible
sympathique
vacation
`;
let fFEnglishTranslation = `to take advantage
to complete, to finish
currently
to attend
graduated
guarantee
luck
nature, personality
to disappoint
disappointment
dead line
to ask
quarrel
committed
possibly
obviousness
to evict
piece of art, art work
chance
exit, way out
reading
bookshop
motorbike
short story
oil
sentence
to warn
to look
to raise
to stay
to sum up
summary
rough
sensitive
nice, friendly
session
`;

for (let i = 0; i < englishWords.length; i++) {
    if (englishWords[i] === '\n'){
        let objTemp = {
            "id": count,
            "engWord": temp
        };

        dictionary.push(objTemp);

        temp = "";
        count++;
    }
    else {
        temp += englishWords[i];
    }
}
count = 0;

for (var i = 0; i < frenchWords.length; i++) {
    if (frenchWords[i] === '\n') {
        dictionary[count].frWord = temp;
        temp = "";
        count++;
    } else {
        temp += frenchWords[i];
    }
}
count = 0;

for (var i = 0; i < frenchFF.length; i++) {
    if (frenchFF[i] === '\n') {
        dictionary[count].frFF = temp;
        temp = "";
        count++;
    } else {
        temp += frenchFF[i];
    }
}
count = 0;

for (var i = 0; i < fFEnglishTranslation.length; i++) {
    if (fFEnglishTranslation[i] === '\n') {
        dictionary[count].engFF = temp;
        temp = "";
        count++;
    } else {
        temp += fFEnglishTranslation[i];
    }
}

//console.log(dictionary);

f.writeFile("falseFriendsWords.json", JSON.stringify(dictionary), function(err) {});
