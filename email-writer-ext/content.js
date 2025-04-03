console.log("Email Writer Extension - Content Script Loaded");

function getEmailContent() {
    const selectors = [
        '.h7',
        '.a3s.aiL',
        'gmail_quote',
        '[role="presentation"]'
    ];
    for (const selector of selectors) {
        const content = document.querySelector(selector);
        if (content) {
            return content.innerText.trim();
        }
    }
    return '';
}

function findComposeToolbar() {
    const selectors = [
        '.btC',
        '.aDh',
        '[role="toolbar"]',
        '.gU.Up'
    ];
    for (const selector of selectors) {
        const toolbar = document.querySelector(selector);
        if (toolbar) {
            return toolbar;
        }
    }
    return null;
}

function createAIDropdown() {
    const dropdown = document.createElement('select');

    dropdown.className = 'T-J J-J5-Ji ao0 v7 T-I-atl L3'; // Applying same class as button
    dropdown.style.marginRight = '8px';
    dropdown.style.padding = '0 10px';
    dropdown.style.height = '36px';
    dropdown.style.borderRadius = '4px';
    dropdown.style.border = '1px solid #d3d3d3';
    dropdown.style.backgroundColor = '#f1f3f4';
    dropdown.style.color = '#3c4043';
    dropdown.style.fontSize = '14px';
    dropdown.style.cursor = 'pointer';

    const tones = ['Professional', 'Casual', 'Friendly', 'Formal'];
    tones.forEach(tone => {
        const option = document.createElement('option');
        option.value = tone.toLowerCase();
        option.textContent = tone;
        dropdown.appendChild(option);
    });

    return dropdown;
}

function createAIButton() {
    const button = document.createElement('div');
    button.className = 'T-J J-J5-Ji ao0 v7 T-I-atl L3'; // Applying same class as dropdown
    button.style.marginRight = '8px';
    button.innerHTML = 'AI Reply';
    button.setAttribute('role', 'button');
    button.setAttribute('data-tooltip', 'Generate AI Reply');
    return button;
}

function injectButton() {

    const existingButton = document.querySelector('.ai-reply-button');
    if (existingButton) existingButton.remove();

    const toolbar = findComposeToolbar();
    if (!toolbar) {
        console.log("Toolbar not found");
        return;
    }
    console.log("Toolbar found, creating AI button and dropdown");

    const dropdown = createAIDropdown();
    toolbar.insertBefore(dropdown, toolbar.firstChild);

    const button = createAIButton();
    button.classList.add('ai-reply-button'); //r

    button.addEventListener('click', async () => {
        try {
            button.innerHTML = 'Generating...';
            button.disabled = true;

            const emailContent = getEmailContent();
            const selectedTone = dropdown.value;

            const response = await fetch('http://localhost:8080/api/email/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    emailContent: emailContent,
                    tone: selectedTone
                })
            });

            if (!response.ok) {
                throw new Error('API Request Failed');
            }
            const generatedReply = await response.text();
            const composeBox = document.querySelector('[role="textbox"][g_editable="true"]');

            if (composeBox) {
                composeBox.focus();
                document.execCommand('insertText', false, generatedReply);
            } else {
                console.error('ComposeBox was not found');
            }

        } catch (error) {
            console.error(error);
            alert('Failed to generate reply');
        } finally {
            button.innerHTML = 'AI Reply';
            button.disabled = false;
        }
    });

    toolbar.insertBefore(button, toolbar.firstChild);
}

const observer = new MutationObserver((mutations) => {

    for (const mutation of mutations) {
        const addedNodes = Array.from(mutation.addedNodes);
        const hasComposeElements = addedNodes.some(node =>
            node.nodeType === Node.ELEMENT_NODE &&
            (node.matches('.aDh, .btC, [role="dialog"]') || node.querySelector('.aDh, .btC, [role="dialog"]'))
        );

        if (hasComposeElements) {
            console.log("Compose Window Detected");
            setTimeout(injectButton, 500);
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});