document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.menu-item');
    const content = document.getElementById('content');

    const data = {
        finance: [
            { icon: 'books', text: 'Books', description: 'Powerful accounting platform for growing businesses.', link: 'https://www.zoho.com/in/books/' },
            { icon: 'invoice', text: 'Invoice', description: 'Invoice 100% Free invoicing solution.', link: 'https://www.zoho.com/in/invoice/' },
            { icon: 'expense', text: 'Expense', description: 'Online expense reporting platform that simplifies expense accounting.', link: 'https://www.zoho.com/in/expense/' },
            { icon: 'inventory', text: 'Inventory', description: 'Powerful stock management and inventory control software.', link: 'https://www.zoho.com/in/inventory/' },
            { icon: 'billing', text: 'Billing', description: 'End-to-end billing solution for your business.', link: 'https://www.zoho.com/in/billing/' },
            { icon: 'commerce', text: 'Commerce', description: 'eCommerce platform to manage and market your online store.', link: 'https://www.zoho.com/commerce/' },
        ],
        email: [
            { icon: 'mail', text: 'Mail', description: 'Secure email service for teams of all sizes.', link: 'https://www.zoho.com/mail/' },
            { icon: 'meeting', text: 'Meeting', description: 'Online meeting software for all your video conferencing & webinar needs.', link: 'https://www.zoho.com/meeting/' },
            { icon: 'cliq', text: 'Cliq', description: 'Stay in touch with teams no matter where you are.', link: 'https://www.zoho.com/cliq/' },
            { icon: 'workdrive', text: 'Workdrive', description: 'Online file management for teams.', link: 'https://www.zoho.com/workdrive/' },
            { icon: 'show', text: 'show', description: 'Show Create, edit, and share slides with a sleek presentation app.', link: 'https://www.zoho.com/show/' },
            { icon: 'connect', text: 'Connect', description: 'Employee experience platform to communicate, engage, and build positive employee relations.', link: 'https://www.zoho.com/connect/' },
        ],
        hr: [
            { icon: 'people', text: 'People', description: 'Organize, automate, and simplify your HR processes.', link: 'https://www.zoho.com/people/' },
            { icon: 'recruit', text: 'Recruit', description: 'Intuitive recruiting platform built to provide hiring solutions.', link: 'https://www.zoho.com/recruit/' },
            { icon: 'workerly', text: 'Workerly', description: 'Manage temporary staffing with an employee scheduling solution.', link: 'https://www.zoho.com/workerly/' },
            { icon: 'shifts', text: 'Shifts', description: 'Employee scheduling and time tracking app.', link: 'https://www.zoho.com/shifts/' },
            { icon: 'tc', text: 'Trainer Central', description: 'Create engaging online training programs to upskill your workforce.', link: 'https://www.trainercentral.com/' },
        ],
        security_and_it: [
            { icon: 'creator', text: 'Creator', description: 'Build powerful custom applications faster.', link: 'https://www.zoho.com/creator/' },
            { icon: 'vault', text: 'Vault', description: 'Online password manager for teams.', link: 'https://www.zoho.com/vault/' },
            { icon: 'oneauth', text: 'OneAuth', description: 'Secure multi-factor authenticator (MFA) for all your online accounts.', link: 'https://www.zoho.com/accounts/oneauth/' },
            { icon: 'directory', text: 'Directory', description: 'Workforce identity and access management solution for cloud businesses.', link: 'https://www.zoho.com/directory/' },
            { icon: 'assist', text: 'Assist', description: 'Remote support and unattended remote access software.', link: 'https://www.zoho.com/assist/' },
            { icon: 'lens', text: 'Lens', description: 'Interactive remote assistance software with augmented reality.', link: 'https://www.zoho.com/lens/' }
        ]
    };

    loadCards('finance');

    items.forEach(item => {
        item.addEventListener('click', () => {
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const id = item.dataset.id;
            loadCards(id);
        });
    });

    function loadCards(id) {
        content.innerHTML = '';
        if (!data[id]) return;
        data[id].forEach(d => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <span class="icon ${d.icon}"></span>
                <h3>${d.text}<h3>
                <p>${d.description}</p>
                <a href="${d.link}" target="_blank">TRY NOW <span>→</span></a>
                `;
            content.appendChild(card);
        });
    }
});