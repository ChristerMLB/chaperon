//bestemmer hvilket filformat alle bildene har

const filFormat = "jpg";

// bestemmer hvorvidt alt-teksten skal vises under bildet

const showDescription = false;

// Her kommer alle bildene, se docs for detaljer (her: ), men kort oppsummert:
//
// ["filnavn", "filnavn på bildet det følger", "alt-tekst",
// [[positive betingelser, eller], [og]], [[negative betingelser, eller],[og]] ]

const bildene = [

    ["farhjemme", false, "I en stue på den franske landsbygda har en liten jente kledd på seg sin fineste røde hette, for hun skal ut på ærend. Av sin far får hun en kurv med litt mat og drikke å å ta med seg til sin bestemor som bor i skogen.", 
    [[]],[[]] ],

    ["gaskog", "farhjemme", "Jenten med den røde hetten vandrer gjennom skogen.",
    [[]],[[]] ],

    ["gaskog", "farhjemme", "Jenten med den røde hetten vandrer gjennom skogen.",
    [[]],[[]] ],

    ["gaskog", "farhjemme", "Jenten med den røde hetten vandrer gjennom skogen.",
    [[]],[[]] ],

    ["finnehytte", "gaskog", "Omsider finner lille Rødhette frem til bestemor sitt hus.", 
    [[]],[[]] ],

];

export {bildene, filFormat, showDescription};