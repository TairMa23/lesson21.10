let family = { parents: {}, children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] };
function logThirdChild(a) {
    let names=""
    console.log(a.children[2].name);
    for (let child of family.children) {
        names+=(child.name+", ");
    }
    console.log(names);
}
logThirdChild(family)