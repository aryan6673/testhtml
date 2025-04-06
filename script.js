// Keep existing functions and update the getNumerologyMeaning function:

function getNumerologyMeaning(destinyNumber, lifePathNumber, soulNumber) {
    // Keep existing numbers object...

    const destinyInfo = numbers.personalityTraits[destinyNumber];
    const lifePathInfo = numbers.personalityTraits[lifePathNumber];
    const soulInfo = numbers.personalityTraits[soulNumber];

    return `
        <h1 class="section-title">🌟 Your Detailed Numerology Reading 🌟</h1>

        <h2 class="subsection-title">
            <span class="emoji-icon">🎯</span> Destiny Number 
            <span class="number-badge">${destinyNumber}</span>
        </h2>
        <div class="info-box">
            <p>This number reveals your life's purpose and the talents you're meant to develop. You are 
            <span class="highlight-text">${destinyInfo.traits}</span>.</p>
            
            <p class="list-title">💼 Career Paths:</p>
            <p>${destinyInfo.careers}</p>

            <div class="lucky-elements">
                <div class="lucky-item">
                    <p class="list-title">🎨 Lucky Colors:</p>
                    <p>${destinyInfo.lucky.colors}</p>
                </div>
                <div class="lucky-item">
                    <p class="list-title">📅 Lucky Days:</p>
                    <p>${destinyInfo.lucky.days}</p>
                </div>
                <div class="lucky-item">
                    <p class="list-title">🔢 Lucky Numbers:</p>
                    <p>${destinyInfo.lucky.numbers}</p>
                </div>
                <div class="lucky-item">
                    <p class="list-title">💎 Lucky Stones:</p>
                    <p>${destinyInfo.lucky.stones}</p>
                </div>
            </div>

            <div class="pros-cons-grid">
                <div class="pros-cons-box">
                    <p class="list-title">✨ Strengths:</p>
                    <p>${destinyInfo.pros}</p>
                </div>
                <div class="pros-cons-box">
                    <p class="list-title">⚠️ Challenges:</p>
                    <p>${destinyInfo.cons}</p>
                </div>
            </div>
        </div>

        <div class="divider"></div>

        <h2 class="subsection-title">
            <span class="emoji-icon">🛣️</span> Life Path Number 
            <span class="number-badge">${lifePathNumber}</span>
        </h2>
        <div class="info-box">
            <p>This number indicates your life's journey and natural abilities. As a Life Path ${lifePathNumber}, you express 
            <span class="highlight-text">${lifePathInfo.traits}</span>.</p>
            
            <p class="list-title">💼 Ideal Careers:</p>
            <p>${lifePathInfo.careers}</p>

            <div class="pros-cons-grid">
                <div class="pros-cons-box">
                    <p class="list-title">✨ Strengths:</p>
                    <p>${lifePathInfo.pros}</p>
                </div>
                <div class="pros-cons-box">
                    <p class="list-title">⚠️ Areas for Growth:</p>
                    <p>${lifePathInfo.cons}</p>
                </div>
            </div>
        </div>

        <div class="divider"></div>

        <h2 class="subsection-title">
            <span class="emoji-icon">💫</span> Soul Number 
            <span class="number-badge">${soulNumber}</span>
        </h2>
        <div class="info-box">
            <p>This number reveals your inner desires and true motivation. Your soul yearns for experiences that align with 
            <span class="highlight-text">${soulInfo.traits}</span>.</p>

            <div class="pros-cons-grid">
                <div class="pros-cons-box">
                    <p class="list-title">✨ Embrace:</p>
                    <p>${soulInfo.pros}</p>
                </div>
                <div class="pros-cons-box">
                    <p class="list-title">⚠️ Be Mindful Of:</p>
                    <p>${soulInfo.cons}</p>
                </div>
            </div>
        </div>

        <div class="divider"></div>

        <h2 class="subsection-title">
            <span class="emoji-icon">🌈</span> Synthesis & Recommendations
        </h2>
        <div class="info-box">
            <p class="list-title">💼 Career Synthesis:</p>
            <p>Your numbers suggest you would excel in careers that combine 
            <span class="highlight-text">${destinyInfo.careers}</span> with elements of 
            <span class="highlight-text">${lifePathInfo.careers}</span>.</p>

            <p class="list-title">❤️ Relationship Dynamics:</p>
            <p>You bring ${destinyInfo.pros} to relationships, while your soul number indicates a deep need for connections 
            that honor your ${soulInfo.traits} nature.</p>

            <p class="list-title">🎓 Life Lessons:</p>
            <p>Your numerological combination suggests your key life lessons involve balancing 
            <span class="highlight-text">${destinyInfo.traits}</span> with 
            <span class="highlight-text">${lifePathInfo.traits}</span>, while honoring your soul's desire for 
            <span class="highlight-text">${soulInfo.traits}</span>.</p>
        </div>
    `;
}