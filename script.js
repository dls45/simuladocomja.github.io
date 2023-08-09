window.onload = function() {
    const answerKey = {
        1: 'a',
        2: 'b',
        // continue até 32, como 3: 'c', etc.
    };

    for (let question in answerKey) {
        let option = document.querySelector(`.question:nth-child(${question}) .options span[data-option="${answerKey[question]}"]`);
        if (option) {
            option.classList.add('correct-answer');
        }
    }
};
