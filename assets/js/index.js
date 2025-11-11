let isCardOpened = false;

function openCard() {
    const card = document.getElementById('friendshipCard');
    card.classList.toggle('opened');
    isCardOpened = !isCardOpened;
    
    if (isCardOpened) {
        setTimeout(() => {
            createDataParticles();
        }, 1000);
    }
}
        
function createDataParticles() {
    const particlesContainer = document.getElementById('dataParticles');
            
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.classList.add('data-particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 2 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 6) + 's';
            
            particlesContainer.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 9000);
        }, i * 300);
    }
}
        
function playFuturisticSound(event) {
    event.stopPropagation();
            
    // Create futuristic cyber sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
    // Create multiple oscillators for layered sound
    const createBeep = (freq, delay, duration) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
                
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime + delay);
        oscillator.frequency.exponentialRampToValueAtTime(freq * 0.5, audioContext.currentTime + delay + duration);
            
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + delay);
        gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + delay + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + delay + duration);
                
        oscillator.start(audioContext.currentTime + delay);
        oscillator.stop(audioContext.currentTime + delay + duration);
    };
            
    // Play futuristic beep sequence
    createBeep(800, 0, 0.2);
    createBeep(600, 0.1, 0.2);
    createBeep(400, 0.2, 0.3);
            
    // Visual feedback
    event.target.style.transform = 'scale(0.95)';
    event.target.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.8)';
    setTimeout(() => {
        event.target.style.transform = 'scale(1.05)';
        event.target.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)';
    }, 100);
    setTimeout(() => {
        event.target.style.transform = 'scale(1)';
        event.target.style.boxShadow = '';
    }, 300);
}
        
// Continuous particle generation
setInterval(() => {
    if (isCardOpened && Math.random() > 0.6) {
        createDataParticles();
    }
}, 4000);
        
// Keyboard interaction
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
        openCard();
    }
});
        
// Hover effects
document.querySelector('.card-container').addEventListener('mouseenter', () => {
    if (!isCardOpened) {
        document.querySelector('.hologram').style.transform = 'scale(1.1) rotateY(10deg)';
    }
});
        
document.querySelector('.card-container').addEventListener('mouseleave', () => {
    if (!isCardOpened) {
        document.querySelector('.hologram').style.transform = 'scale(1) rotateY(0deg)';
    }
});
        
// Add random glitch effect
setInterval(() => {
    const glitchElements = document.querySelectorAll('.glitch-text');
    glitchElements.forEach(el => {
        if (Math.random() > 0.8) {
            el.style.animation = 'none';
            setTimeout(() => {
                el.style.animation = '';
            }, 100);
        }
    });
}, 3000);