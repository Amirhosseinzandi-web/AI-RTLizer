
// *********************For claude ai************************
const claudeObserver = new MutationObserver((mutations) => {
    const elements = document.querySelectorAll(".grid-cols-1, .ProseMirror, .whitespace-pre-wrap");
    if (elements) {
        elements.forEach(el => {
            el.style.setProperty('direction', 'rtl', 'important');
        });
    }
});

claudeObserver.observe(document.body, {
    childList: true,
    subtree: true
});




// *********************For Copilot ai************************


const copilotObserver = new MutationObserver((mutations) => {
    const elementOne = document.querySelectorAll(".break-words");
    const elementTwo = document.querySelectorAll("pre");
    if (elementOne && elementTwo) {
        elementOne.forEach(el => {
            el.style.setProperty('direction', 'rtl', 'important');
            el.style.setProperty('text-align', 'right', 'important');
        });
        elementTwo.forEach(el => {
            el.style.setProperty('direction', 'ltr', 'important');
            el.style.setProperty('text-align', 'left', 'important');
        });
    }

});
copilotObserver.observe(document.body, {
    childList: true,
    subtree: true
});


// *********************For Imarena ai************************

const ArenaObserver = new MutationObserver((mutations) => {
    // const elementOne = document.querySelectorAll(".prose");
    const elementOne = document.querySelectorAll("textarea.svelte-1ax2u5d");
    const elementTwo = document.querySelectorAll("pre");
    const elementThree = document.querySelectorAll(".prose.chatbot.md");
    const elementFour = document.querySelectorAll("input.svelte-1f354aw.svelte-1f354aw, textarea.svelte-1f354aw.svelte-1f354aw");
    if (elementOne && elementTwo && elementThree && elementFour) {
        elementOne.forEach(el => {
            el.style.setProperty('direction', 'rtl', 'important');
            el.style.setProperty('text-align', 'right', 'important');
        });
        elementTwo.forEach(el => {
            el.style.setProperty('direction', 'ltr', 'important');
            el.style.setProperty('text-align', 'left', 'important');
        });
        elementThree.forEach(el => {
            el.style.setProperty('direction', 'rtl', 'important');
            el.style.setProperty('text-align', 'right', 'important');
        });

        elementFour.forEach(el => {
            el.style.setProperty('direction', 'rtl', 'important');
            el.style.setProperty('text-align', 'right', 'important');
        });
    }

});
ArenaObserver.observe(document.body, {
    childList: true,
    subtree: true
});



// *********************For ChatGPT ai************************


const chatGPTObserver = new MutationObserver((mutations) => {
    const elementOne = document.querySelectorAll("._prosemirror-parent_cy42l_1 .ProseMirror[contenteditable]");
    if (elementOne) {
        elementOne.forEach(el => {
            el.style.setProperty('direction', 'rtl', 'important');
            el.style.setProperty('text-align', 'right', 'important');
        });
    }

});
chatGPTObserver.observe(document.body, {
    childList: true,
    subtree: true
});


// *********************For ChatDeepSeek ai************************


const deepSeekObserver = new MutationObserver((mutations) => {
    const elementOne = document.querySelectorAll(".cefa5c26 .fad49dec");
    const elementTwo = document.querySelectorAll(".ds-markdown");
    const elementThree = document.querySelectorAll(".katex-display>.katex>.katex-html");
    if (elementOne && elementTwo && elementThree) {
        elementOne.forEach(el => {
            el.style.setProperty('direction', 'rtl', 'important');
            el.style.setProperty('text-align', 'right', 'important');
        });
        elementTwo.forEach(el => {
            el.style.setProperty('direction', 'rtl', 'important');
            el.style.setProperty('text-align', 'right', 'important');
        });
        elementThree.forEach(el => {
            el.style.setProperty('direction', 'ltr', 'important');
        });
    }

});
deepSeekObserver.observe(document.body, {
    childList: true,
    subtree: true
});