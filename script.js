// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript file loaded successfully!");
    
    // Add event listener to calculate button
    document.getElementById('calculateButton').addEventListener('click', calculateNumerology);
    
    // Set max date for birth date input
    document.getElementById('birthDate').max = new Date().toISOString().split('T')[0];
    
    // Initialize loading animation
    initializeLoadingAnimation();
});

// Loading Animation
function initializeLoadingAnimation() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    setTimeout(() => {
        loadingIndicator.style.display = 'none';
    }, 3000);
}

function calculateDestinyNumber(name) {
    const numerologyValue = {
        'a': 1, 'j': 1, 's': 1,
        'b': 2, 'k': 2, 't': 2,
        'c': 3, 'l': 3, 'u': 3,
        'd': 4, 'm': 4, 'v': 4,
        'e': 5, 'n': 5, 'w': 5,
        'f': 6, 'o': 6, 'x': 6,
        'g': 7, 'p': 7, 'y': 7,
        'h': 8, 'q': 8, 'z': 8,
        'i': 9, 'r': 9
    };

    const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');
    let sum = 0;
    
    for (let char of cleanName) {
        sum += numerologyValue[char] || 0;
    }
    
    return reduceToSingleDigit(sum);
}

function calculateLifePathNumber(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    const sum = reduceToSingleDigit(day) + 
                reduceToSingleDigit(month) + 
                reduceToSingleDigit(year);
    
    return reduceToSingleDigit(sum);
}

function calculateSoulNumber(name) {
    const vowels = {'a': 1, 'e': 5, 'i': 9, 'o': 6, 'u': 3};
    const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');
    let sum = 0;
    
    for (let char of cleanName) {
        if (vowels[char]) {
            sum += vowels[char];
        }
    }
    
    return reduceToSingleDigit(sum);
}

function reduceToSingleDigit(num) {
    while (num > 9) {
        num = String(num).split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
    return num;
}

function getNumerologyMeaning(destinyNumber, lifePathNumber, soulNumber) {
    const numbers = {
        personalityTraits: {
            1: {
                traits: "Natural born leader, independent, ambitious, and innovative",
                careers: "Entrepreneur, Executive, Manager, or Independent Consultant",
                lucky: {
                    colors: "Red and Yellow",
                    days: "Sunday and Monday",
                    numbers: "1, 10, 19, and 28",
                    stones: "Ruby and Garnet"
                },
                pros: "Strong willpower, creativity, and determination",
                cons: "Can be dominating, stubborn, and self-centered",
                characteristics: "Original, inventive, and determined"
            },
            2: {
                traits: "Diplomatic, cooperative, sensitive, and peaceful",
                careers: "Counselor, Mediator, Teacher, or Relationship Therapist",
                lucky: {
                    colors: "White and Cream",
                    days: "Monday and Friday",
                    numbers: "2, 11, 20, and 29",
                    stones: "Pearl and Moonstone"
                },
                pros: "Excellent mediator, supportive, and intuitive",
                cons: "Can be oversensitive, indecisive, and dependent",
                characteristics: "Diplomatic, intuitive, and harmonious"
            },
            3: {
                traits: "Creative, expressive, joyful, and sociable",
                careers: "Artist, Writer, Performer, or Public Speaker",
                lucky: {
                    colors: "Yellow and Orange",
                    days: "Wednesday and Thursday",
                    numbers: "3, 12, 21, and 30",
                    stones: "Yellow Sapphire and Citrine"
                },
                pros: "Artistic talent, optimism, and charm",
                cons: "Can be scattered, superficial, and attention-seeking",
                characteristics: "Expressive, optimistic, and creative"
            },
            4: {
                traits: "Practical, organized, reliable, and hardworking",
                careers: "Engineer, Architect, Accountant, or Project Manager",
                lucky: {
                    colors: "Green and Blue",
                    days: "Saturday",
                    numbers: "4, 13, 22, and 31",
                    stones: "Emerald and Green Jade"
                },
                pros: "Dependable, methodical, and strong work ethic",
                cons: "Can be rigid, stubborn, and too conventional",
                characteristics: "Stable, practical, and trustworthy"
            },
            5: {
                traits: "Adventurous, versatile, freedom-loving, and progressive",
                careers: "Journalist, Travel Agent, Marketing Executive, or Sales Representative",
                lucky: {
                    colors: "Light Blue and Gray",
                    days: "Wednesday",
                    numbers: "5, 14, and 23",
                    stones: "Turquoise and Aquamarine"
                },
                pros: "Adaptability, versatility, and communication skills",
                cons: "Can be restless, inconsistent, and prone to addictions",
                characteristics: "Adventurous, dynamic, and freedom-loving"
            },
            6: {
                traits: "Nurturing, responsible, loving, and harmonious",
                careers: "Teacher, Counselor, Healthcare Worker, or Interior Designer",
                lucky: {
                    colors: "Pink and Purple",
                    days: "Friday and Sunday",
                    numbers: "6, 15, and 24",
                    stones: "Diamond and Rose Quartz"
                },
                pros: "Caring nature, responsibility, and artistic abilities",
                cons: "Can be anxious, meddling, and self-sacrificing",
                characteristics: "Nurturing, responsible, and artistic"
            },
            7: {
                traits: "Analytical, spiritual, intellectual, and mysterious",
                careers: "Researcher, Scientist, Analyst, or Spiritual Teacher",
                lucky: {
                    colors: "Purple and Silver",
                    days: "Monday and Friday",
                    numbers: "7, 16, and 25",
                    stones: "Amethyst and Purple Sapphire"
                },
                pros: "Deep thinking, wisdom, and research abilities",
                cons: "Can be distant, critical, and socially awkward",
                characteristics: "Analytical, spiritual, and introspective"
            },
            8: {
                traits: "Powerful, ambitious, successful, and materialistic",
                careers: "Business Owner, Financial Advisor, CEO, or Real Estate Agent",
                lucky: {
                    colors: "Blue and Black",
                    days: "Saturday",
                    numbers: "8, 17, and 26",
                    stones: "Blue Sapphire and Lapis Lazuli"
                },
                pros: "Leadership skills, material success, and organization",
                cons: "Can be workaholic, controlling, and power-hungry",
                characteristics: "Ambitious, authoritative, and successful"
            },
            9: {
                traits: "Humanitarian, compassionate, spiritual, and wise",
                careers: "Non-profit Director, Social Worker, Artist, or Healer",
                lucky: {
                    colors: "Gold and Red",
                    days: "Tuesday and Thursday",
                    numbers: "9, 18, and 27",
                    stones: "Red Coral and Ruby"
                },
                pros: "Generosity, wisdom, and artistic talents",
                cons: "Can be aloof, emotional, and self-martyring",
                characteristics: "Compassionate, humanitarian, and wise"
            }
        }
    };

    const destinyInfo = numbers.personalityTraits[destinyNumber];
    const lifePathInfo = numbers.personalityTraits[lifePathNumber];
    const soulInfo = numbers.personalityTraits[soulNumber];

    return `
        <div class="numerology-reading">
            <section class="reading-section">
                <h2 class="section-title">🎯 Your Destiny Number ${destinyNumber}</h2>
                <p class="traits">Your destiny reveals: ${destinyInfo.traits}</p>
                <div class="info-box">
                    <h4>💼 Career Paths:</h4>
                    <p>${destinyInfo.careers}</p>
                    <h4>✨ Lucky Elements:</h4>
                    <ul>
                        <li>🎨 Colors: ${destinyInfo.lucky.colors}</li>
                        <li>📅 Days: ${destinyInfo.lucky.days}</li>
                        <li>🔢 Numbers: ${destinyInfo.lucky.numbers}</li>
                        <li>💎 Stones: ${destinyInfo.lucky.stones}</li>
                    </ul>
                </div>
            </section>

            <section class="reading-section">
                <h2 class="section-title">🛣️ Your Life Path Number ${lifePathNumber}</h2>
                <p class="traits">Life journey indicates: ${lifePathInfo.traits}</p>
                <div class="characteristics">
                    <div class="pros">
                        <h4>💫 Strengths:</h4>
                        <p>${lifePathInfo.pros}</p>
                    </div>
                    <div class="cons">
                        <h4>⚠️ Growth Areas:</h4>
                        <p>${lifePathInfo.cons}</p>
                    </div>
                </div>
            </section>

            <section class="reading-section">
                <h2 class="section-title">💫 Your Soul Number ${soulNumber}</h2>
                <p class="traits">Your inner self yearns for: ${soulInfo.traits}</p>
                <div class="characteristics">
                    <p>${soulInfo.characteristics}</p>
                </div>
            </section>

            <section class="reading-section">
                <h2 class="section-title">🌟 Synthesis</h2>
                <p>Your unique combination of numbers suggests a powerful life purpose. The interplay between your 
                ${destinyNumber} Destiny number and ${lifePathNumber} Life Path number creates a dynamic tension that 
                can drive you toward achieving significant goals.</p>
                
                <div class="final-advice">
                    <h4>🎯 Key Life Lessons:</h4>
                    <p>Focus on balancing your ${destinyInfo.characteristics} nature with your soul's desire for 
                    ${soulInfo.characteristics} experiences. Your life path suggests success through 
                    ${lifePathInfo.characteristics} approaches.</p>
                </div>
            </section>
        </div>
    `;
}

function calculateNumerology() {
    console.log("Calculate function called");
    const fullName = document.getElementById('fullName').value;
    const birthDate = document.getElementById('birthDate').value;
    
    if (!fullName || !birthDate) {
        alert('Please enter both your name and birth date.');
        return;
    }
    
    // Add loading effect
    document.body.style.cursor = 'wait';
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.disabled = true;
    calculateButton.textContent = 'Calculating...';
    
    // Simulate calculation time for better UX
    setTimeout(() => {
        const destinyNumber = calculateDestinyNumber(fullName);
        const lifePathNumber = calculateLifePathNumber(birthDate);
        const soulNumber = calculateSoulNumber(fullName);
        
        // Update number displays with animation
        animateNumber('destinyNumber', destinyNumber);
        animateNumber('lifePathNumber', lifePathNumber);
        animateNumber('soulNumber', soulNumber);
        
        // Update detailed reading
        document.getElementById('numerologyMeaning').innerHTML = 
            getNumerologyMeaning(destinyNumber, lifePathNumber, soulNumber);
        
        // Reset button and cursor
        document.body.style.cursor = 'default';
        calculateButton.disabled = false;
        calculateButton.innerHTML = '<span class="btn-icon">🔮</span>Calculate Your Numbers';
        
        // Scroll to results
        document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
    }, 1500);
}

function animateNumber(elementId, finalNumber) {
    const element = document.getElementById(elementId);
    let current = 0;
    const increment = 1;
    const animationDuration = 1000; // 1 second
    const steps = Math.ceil(animationDuration / (1000 / 60)); // 60 FPS
    const stepValue = finalNumber / steps;
    
    function updateNumber() {
        current += stepValue;
        if (current >= finalNumber) {
            element.textContent = finalNumber;
        } else {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateNumber);
        }
    }
    
    updateNumber();
}