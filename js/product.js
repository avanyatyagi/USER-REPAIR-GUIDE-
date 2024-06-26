// JSON data
const products = [
    {
        "name": "iPhone 12",
        "description": "The iPhone 12 is a flagship smartphone known for its sleek design, powerful performance, and advanced camera capabilities.",
        "repair_instructions": [
            "Power off the device.",
            "Use a Pentalobe screwdriver to remove the screws at the bottom of the phone.",
            "Carefully separate the display assembly from the rest of the phone using a suction cup and plastic opening tools.",
            "Disconnect the battery, display, camera, and other relevant connectors.",
            "Replace the faulty component (e.g., screen, battery) with a new one.",
            "Reassemble the phone in reverse order and test functionality."
        ]
    },
    {
        "name": "Dell XPS 13",
        "description": "The Dell XPS 13 is a premium ultrabook known for its slim profile, high-resolution display, and powerful performance.",
        "repair_instructions": [
            "Power off the laptop and disconnect all cables.",
            "Use a screwdriver to remove the screws securing the bottom cover.",
            "Lift off the bottom cover and locate the component that needs repair (e.g., battery, RAM, SSD).",
            "Unscrew and remove the faulty component.",
            "Install the new component and reassemble the laptop.",
            "Power on the laptop and test functionality."
        ]
    },
    {
        "name": "Apple Watch Series 6",
        "description": "The Apple Watch Series 6 is a feature-rich smartwatch with health and fitness tracking, customizable watch faces, and seamless integration with iOS devices.",
        "repair_instructions": [
            "Power off the Apple Watch.",
            "Use a special watch repair kit to open the casing.",
            "Disconnect the battery and other internal connectors.",
            "Replace the faulty component (e.g., screen, battery).",
            "Reconnect all internal components and close the casing.",
            "Power on the Apple Watch and test functionality."
        ]
    },
    {
        "name": "Amazon Echo Dot",
        "description": "The Amazon Echo Dot is a compact smart speaker with built-in Alexa voice assistant, capable of playing music, answering questions, and controlling smart home devices.",
        "repair_instructions": [
            "Unplug the Echo Dot and remove the outer casing.",
            "Locate the speaker unit and disconnect it from the main board.",
            "Check for any visible damage or loose connections.",
            "If the speaker is faulty, replace it with a new one.",
            "Reconnect the new speaker to the main board and reassemble the Echo Dot.",
            "Plug in the device and test the audio output."
        ]
    },
    {
        "name": "Canon EOS Rebel T7i",
        "description": "The Canon EOS Rebel T7i is a versatile DSLR camera known for its high-quality image capture, fast autofocus system, and intuitive controls.",
        "repair_instructions": [
            "Remove the battery and memory card from the camera.",
            "Use a small Phillips screwdriver to remove the screws securing the outer casing.",
            "Carefully detach the casing to access the internal components.",
            "Identify the faulty component (e.g., lens, sensor).",
            "Replace the component with a new one and reassemble the camera.",
            "Insert the battery and memory card, power on the camera, and test functionality."
        ]
    },
    {
        "name": "Samsung Galaxy Tab S7",
        "description": "The Samsung Galaxy Tab S7 is a high-end Android tablet with a stunning display, powerful processor, and S Pen support for enhanced productivity.",
        "repair_instructions": [
            "Power off the tablet and disconnect any charging cables.",
            "Use a heat gun or hairdryer to soften the adhesive around the edges of the screen.",
            "Carefully pry off the screen using a plastic opening tool.",
            "Disconnect the battery and other internal connectors.",
            "Replace the faulty component (e.g., screen, battery).",
            "Reconnect all internal components, reapply adhesive if necessary, and reattach the screen.",
            "Power on the tablet and test functionality."
        ]
    },
    {
        "name": "PlayStation 5",
        "description": "The PlayStation 5 is a next-generation gaming console from Sony, featuring cutting-edge graphics, lightning-fast load times, and a diverse library of games.",
        "repair_instructions": [
            "Power off the console and unplug all cables.",
            "Use a Phillips screwdriver to remove the screws securing the outer casing.",
            "Carefully remove the casing to access the internal components.",
            "Identify the faulty component (e.g., Blu-ray drive, power supply).",
            "Replace the component with a new one and reassemble the console.",
            "Plug in the console and test functionality."
        ]
    },
    {
        "name": "TP-Link Archer AX6000",
        "description": "The TP-Link Archer AX6000 is a high-performance Wi-Fi 6 router, offering blazing-fast wireless speeds, extensive coverage, and advanced security features.",
        "repair_instructions": [
            "Power off the router and disconnect it from the power source.",
            "Use a Phillips screwdriver to remove the screws securing the outer casing.",
            "Carefully remove the casing to access the internal components.",
            "Identify the faulty component (e.g., antennas, circuit board).",
            "Replace the component with a new one and reassemble the router.",
            "Reconnect the router to the power source and test functionality."
        ]
    },
    {
        "name": "Samsung QLED Q80T",
        "description": "The Samsung QLED Q80T is a premium 4K television known for its vibrant colors, high contrast ratio, and immersive viewing experience.",
        "repair_instructions": [
            "Power off the TV and unplug it from the power source.",
            "Use a Phillips screwdriver to remove the screws securing the back panel.",
            "Carefully remove the back panel to access the internal components.",
            "Identify the faulty component (e.g., power supply board, LED strips).",
            "Replace the component with a new one and reassemble the TV.",
            "Plug in the TV and test functionality."
        ]
    },
    {
        "name": "Sony WH-1000XM4",
        "description": "The Sony WH-1000XM4 is a premium pair of wireless headphones known for their industry-leading noise cancellation, exceptional sound quality, and long battery life.",
        "repair_instructions": [
            "Power off the headphones and remove any cables.",
            "Use a prying tool to carefully remove the ear pads.",
            "Locate the screws securing the housing and remove them.",
            "Carefully separate the housing to access the internal components.",
            "Identify the faulty component (e.g., battery, speaker driver).",
            "Replace the component with a new one and reassemble the headphones.",
            "Power on the headphones and test functionality, including noise cancellation and audio playback."
        ]
    }
];

// Function to display products
function displayProducts(products) {
    const productSection = document.getElementById('product-details');
    products.forEach(product => {
        // Create product container
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');

        // Create product name element
        const productName = document.createElement('h3');
        productName.textContent = `Product: ${product.name}`;
        productDiv.appendChild(productName);

        // Create product description element
        const productDescription = document.createElement('p');
        productDescription.innerHTML = `<strong>Description:</strong> ${product.description}`;
        productDiv.appendChild(productDescription);

        // Create repair instructions element
        const repairInstructionsTitle = document.createElement('h4');
        repairInstructionsTitle.textContent = 'Repair Instructions';
        productDiv.appendChild(repairInstructionsTitle);

        const repairInstructionsList = document.createElement('ol');
        product.repair_instructions.forEach(instruction => {
            const listItem = document.createElement('li');
            listItem.textContent = instruction;
            repairInstructionsList.appendChild(listItem);
        });
        productDiv.appendChild(repairInstructionsList);

        // Append product to section
        productSection.appendChild(productDiv);
    });
}

// Display the products
displayProducts(products);
