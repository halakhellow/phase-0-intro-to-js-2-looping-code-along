function writeCards(names, eventName) {
    let cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return cards;
}
