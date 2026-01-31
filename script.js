// ===== المتغيرات العامة =====
let currentPhotoIndex = 0;
let musicPlaying = false;
let slideshowInterval = null;
const audio = document.getElementById('backgroundMusic');

// بيانات الصور
const photos = [
    {
        src: 'https://i.postimg.cc/90Hj5f3J/01K39A2MG2C6PGM7QQS3RX6CGN.jpg',
        caption: 'من أجمل اللحظات اللي عشناها سوا ❤️'
    },
    {
        src: 'https://i.postimg.cc/C5CpFVYP/01K399MW4936BB4TJPP53PHVSG.jpg',
        caption: 'كل يوم معاكي بيكون أحلى من اللي قبله 🌟'
    },
    {
        src: 'https://i.postimg.cc/VLBzwXkF/01K399D6KJCXSGPV7TZTHSHV8T.jpg',
        caption: 'ذكريات مش هنساها أبداً... أنتي كل حياتي 💕'
    },
    {
        src: 'https://i.postimg.cc/4yvRJTsR/01K111R8AHJS5G8S9ZY6V23MPX.jpg',
        caption: 'بحبك أكتر من أي كلام... وبشكر ربنا كل يوم إنك نصيبي 🌹'
    }
];

// بيانات الرسائل
const messages = {
    1: {
        title: '💖 من قلبي ليكي',
        body: `منتي يا حب قلبي 💕
مش عارف أبدأ منين ولا أقول إيه، بس كل اللي متأكد منه إنك أحلى نعمة ربنا رزقني بيها 🥹🤍
من أول ما عرفتك وأنا حاسس إن قلبي لقى بيته 🏠❤️
ضحكتك بترجعلي روحي، وكلامك بيطمني، ووجودك في حياتي مخلي الدنيا أحن وأجمل 🌍✨
أنتي مش بس خطيبتي…
أنتي صاحبتي 👭، وأماني 🤲، وسندي 💪، ونصي التاني اللي كنت دايمًا مستنيه 🧩💞
معاكي بحس إن أي حاجة صعبة بتعدي، وأي هم بيهون 😌🌸
بحبك حب مالوش حدود ❤️🔥
حب بيكبر كل يوم، وبيزيد مع كل لحظة، وكل نظرة، وكل كلمة منك 💌🥰
ربنا ما يحرمنيش منك أبداً، ويديمك في حياتي، ويجمعني بيكي دايمًا على خير 🤍🤲
بحبك يا منتي أكتر ما الكلام يوصف 💋💖
وبوعدك أفضل جنبك دايمًا، في أي وقت وفي أي حال 💍❤️✨`
    },
    2: {
        title: '🌙 بمناسبة رمضان المبارك',
        body: `رمضان كريم يا أجمل نعمة في حياتي 🌙🤍
رمضان 2026 ده مختلف عن أي رمضان فات،
عشان ده أول رمضان يجمعني بيكي يا منتي 🥹💖
وأنا صايم السنة دي قلبي شبعان بيكي ❤️
دعائي كله بقى ليكي، في كل فطار 🌅، وكل سحور 🌌،
وفي كل ركعة بدعي ربنا ما يحرمنيش منك أبداً 🤲✨
منتي، وجودك في حياتي خلّى رمضان أحن 🌙🌸
خلّاني أستنى الأذان وأنا مبتسم 😊
وأحس بالراحة وأنا بدعي،
وأقول الحمد لله على نعمة اسمها منتي 💞
يا رب يكون ده أول رمضان،
وتبقى كل الرمضانات الجاية وإحنا مع بعض 💍❤️
نصوم سوا، نفطر سوا، ونكبر في حبنا سنة ورا سنة 🌙👫
رمضان كريم يا حبيبتي 💕
ربنا يديمك ليا، ويحفظك، ويجمعني بيكي دايمًا على خير 🤍🤲
بحبك حب مالوش آخر ❤️🔥
وأجمل حاجة في رمضان السنة دي… إنك معايا فيه يا منتي 🌙💖✨`
    },
    3: {
        title: '💍 وعد مني ليكي',
        body: `حبيبتي الغالية ❤️
النهارده حابب أسيبلك شوية وعود طالعة من قلبي قبل لساني 🤍
🤍 بوعدك أكون جنبك دايمًا
في ضحكتك قبل دموعك، وفي قوتك قبل ضعفك،
وأفضل سندك وأمانك مهما الدنيا لفّت بينا 🤝✨
🌱 بوعدك أشتغل على نفسي كل يوم
عشان أبقى الراجل اللي يفرّحك،
ويصون قلبك، ويقدّر الحب الكبير اللي في عيونك 💪❤️
🏠 بوعدك إن بيتنا يبقى مكان للراحة
مكان نضحك فيه من قلبنا،
ونعدّي فيه أي تعب،
ونصنع ذكريات حلوة تشبهنا 🕊️💞
👨‍👩‍👧‍👦 بوعدك إننا نربي أولادنا على الطيبة
وعلى حب ربنا، والاحترام،
ونكون ليهم ظهر وأمان قبل أي حاجة 🤲✨
♾️ وبوعدك إن حبي ليكي يفضل ثابت
لا يكسّرُه وقت ولا تغيّره ظروف،
بل يزيد يوم عن يوم، وعمر عن عمر ❤️🔥
دي مش مجرد كلام…
دي نية صادقة، ووعود قدّام ربنا 🤍
وأشهد الله إنك أغلى اختيار اخترته في حياتي ❤️✨`
    },
    4: {
        title: '♾️ حبك للأبد',
        body: `يا أغلى حبيبة على قلبي ❤️
ويا أجمل عطية ربنا اختارهالي من غير ما أطلب 🤍
حابة تعرفي إن حبي ليكي
مش كلام بيتقال…
ده إحساس ساكن جوايا،
بيكبر مع كل يوم ومع كل نفس 🌿💖
✨ أنتي السبب في ابتسامتي
والدافع اللي مخلّيني دايمًا أحاول أكون أحسن،
عشان أبقى على قدّ حبك
وعلى قدّ المكانة اللي واخداها في قلبي 🌟❤️
🌹 مفيش يوم بيعدّي
غير وأنا بحمد ربنا عليك،
وبدعيله يحفظك، ويطوّل في عمرك،
ويخلّيك دايمًا من نصيبي 🤲🤍
💫 معاكي فهمت يعني إيه حب بجد
وعرفت إن الدنيا لسه فيها أمل،
ولسه فيها حاجات حلوة تستاهل نعيش عشانها 🌍✨
🔐 قلبي بقى ملكك
وحياتي مفتوحة ليكي من غير شروط،
ومهما الأيام عدّت،
حبي ليكي هيكبر ويقوى أكتر ❤️♾️
يمكن ما بعرفش أرتّب الكلام
بس إحساسي صادق،
ووعدي حقيقي…
بحبك بكل معنى الكلمة، ومن كل قلبي 💖
بحبك يا روحي…
يا حياتي…
ويا أجمل قدر في عمري ❤️✨`
    }
};

// رسائل التحميل
const loadingMessages = [
    'بحضرلك حاجة خاصة جداً... ❤️',
    'بجهز الذكريات الجميلة... 📸',
    'بكتب رسائل الحب... 💌',
    'بحضر المفاجآت... 🎁',
    'تقريباً خلصنا... 💕'
];

// ===== تحميل الصفحة =====
window.addEventListener('load', function() {
    startLoadingAnimation();
    initializeAudio();
});

// ===== تهيئة الصوت =====
function initializeAudio() {
    if (audio) {
        audio.volume = 0.5;
        audio.load();
    }
}

// ===== رسوم التحميل =====
function startLoadingAnimation() {
    let progress = 0;
    let messageIndex = 0;
    const progressBar = document.getElementById('loadingProgress');
    const percentage = document.getElementById('loadingPercentage');
    const messageElement = document.getElementById('loadingMessage');
    
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 12 + 5;
        
        if (progress > 100) {
            progress = 100;
        }
        
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
        
        if (percentage) {
            percentage.textContent = Math.floor(progress) + '%';
        }
        
        // تغيير الرسالة
        if (progress > messageIndex * 20 && messageIndex < loadingMessages.length && messageElement) {
            messageElement.textContent = loadingMessages[messageIndex];
            messageIndex++;
        }
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                const loadingScreen = document.getElementById('loadingScreen');
                const passwordScreen = document.getElementById('passwordScreen');
                
                if (loadingScreen) {
                    loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        loadingScreen.classList.add('hidden');
                        if (passwordScreen) {
                            passwordScreen.classList.remove('hidden');
                        }
                    }, 500);
                }
            }, 500);
        }
    }, 150);
}

// ===== فحص كلمة المرور =====
function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const errorMsg = document.getElementById('errorMsg');
    
    if (!passwordInput) return;
    
    const password = passwordInput.value.trim();
    
    // كلمات المرور الصحيحة
    const correctPasswords = [
        '18/02/2026',
        '18/2/2026',
        '18022026',
        '18-02-2026',
        '18-2-2026'
    ];
    
    if (correctPasswords.includes(password)) {
        successfulUnlock();
    } else {
        showError();
    }
}

function successfulUnlock() {
    const passwordScreen = document.getElementById('passwordScreen');
    const giftContainer = document.getElementById('giftContainer');
    const musicPlayer = document.getElementById('musicPlayer');
    
    // إضافة تأثير الكونفيتي
    createConfetti();
    
    if (passwordScreen) {
        passwordScreen.style.opacity = '0';
        passwordScreen.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            passwordScreen.classList.add('hidden');
            
            if (giftContainer) {
                giftContainer.classList.remove('hidden');
            }
            
            if (musicPlayer) {
                musicPlayer.classList.remove('hidden');
            }
            
            // بدء الموسيقى تلقائياً
            setTimeout(() => {
                playMusic();
            }, 1000);
            
            // بدء العدادات
            startCounters();
            updateCurrentDate();
            
            // بدء القلوب المتساقطة
            startFallingHearts();
        }, 500);
    }
}

function showError() {
    const errorMsg = document.getElementById('errorMsg');
    const passwordInput = document.getElementById('passwordInput');
    
    if (errorMsg && passwordInput) {
        errorMsg.classList.remove('hidden');
        passwordInput.value = '';
        passwordInput.style.animation = 'shake 0.5s';
        
        setTimeout(() => {
            passwordInput.style.animation = '';
            errorMsg.classList.add('hidden');
        }, 3000);
    }
}

// دعم الضغط على Enter
const passwordInput = document.getElementById('passwordInput');
if (passwordInput) {
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
}

// ===== إغلاق رسالة الترحيب =====
function closeWelcome() {
    const welcomeModal = document.getElementById('welcomeModal');
    
    if (welcomeModal) {
        welcomeModal.style.opacity = '0';
        welcomeModal.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            welcomeModal.style.display = 'none';
        }, 500);
    }
}

// ===== تحديث التاريخ =====
function updateCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    
    if (!dateElement) return;
    
    const now = new Date();
    const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const months = ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو', 
                    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();
    
    dateElement.textContent = `${dayName}، ${day} ${monthName} ${year}`;
}

// ===== العدادات =====
function startCounters() {
    const engagementDate = new Date('2026-02-18T00:00:00').getTime();
    
    function updateCounters() {
        const now = new Date().getTime();
        const distance = now - engagementDate;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = days;
        if (hoursEl) hoursEl.textContent = hours;
        if (minutesEl) minutesEl.textContent = minutes;
        if (secondsEl) secondsEl.textContent = seconds;
        
        // حساب نبضات القلب (70 نبضة/دقيقة)
        const heartbeats = Math.floor((distance / 1000 / 60) * 70);
        const heartbeatsEl = document.getElementById('heartbeats');
        if (heartbeatsEl) {
            heartbeatsEl.textContent = heartbeats.toLocaleString();
        }
        
        // حساب الرسائل
        const messagesCount = Math.floor(days * 10 + hours);
        const messagesEl = document.getElementById('messages');
        if (messagesEl) {
            messagesEl.textContent = messagesCount.toLocaleString();
        }
    }
    
    updateCounters();
    setInterval(updateCounters, 1000);
}

// ===== فتح الرسائل =====
function openMessage(messageId) {
    const modal = document.getElementById('messageModal');
    const message = messages[messageId];
    
    if (!modal || !message) return;
    
    const messageTitle = document.getElementById('messageTitle');
    const messageBody = document.getElementById('messageBody');
    
    if (messageTitle) messageTitle.textContent = message.title;
    if (messageBody) messageBody.textContent = message.body;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // تأثيرات القلوب عند فتح الرسالة
    createLoveHearts();
}

function closeMessage() {
    const modal = document.getElementById('messageModal');
    
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// ===== عارض الصور =====
function openPhotoViewer(index) {
    currentPhotoIndex = index;
    updatePhotoDisplay();
    
    const modal = document.getElementById('photoModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closePhotoViewer() {
    const modal = document.getElementById('photoModal');
    
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
    
    if (slideshowInterval) {
        stopSlideshow();
    }
}

function updatePhotoDisplay() {
    const photo = photos[currentPhotoIndex];
    
    const photoImage = document.getElementById('photoImage');
    const photoCaption = document.getElementById('photoCaption');
    const photoCounter = document.getElementById('photoCounter');
    
    if (photoImage) photoImage.src = photo.src;
    if (photoCaption) photoCaption.textContent = photo.caption;
    if (photoCounter) photoCounter.textContent = `${currentPhotoIndex + 1} / ${photos.length}`;
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updatePhotoDisplay();
}

function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updatePhotoDisplay();
}

// العرض التلقائي
function startSlideshow() {
    if (slideshowInterval) {
        stopSlideshow();
        return;
    }
    
    openPhotoViewer(0);
    slideshowInterval = setInterval(() => {
        nextPhoto();
    }, 3000);
}

function stopSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
}

// دعم لوحة المفاتيح
document.addEventListener('keydown', function(e) {
    const photoModal = document.getElementById('photoModal');
    
    if (photoModal && !photoModal.classList.contains('hidden')) {
        if (e.key === 'ArrowRight') {
            prevPhoto();
        } else if (e.key === 'ArrowLeft') {
            nextPhoto();
        } else if (e.key === 'Escape') {
            closePhotoViewer();
        }
    }
    
    const messageModal = document.getElementById('messageModal');
    if (messageModal && !messageModal.classList.contains('hidden')) {
        if (e.key === 'Escape') {
            closeMessage();
        }
    }
});

// دعم التمرير باللمس
let touchStartX = 0;
let touchEndX = 0;

const photoModal = document.getElementById('photoModal');
if (photoModal) {
    photoModal.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    photoModal.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handlePhotoSwipe();
    });
}

function handlePhotoSwipe() {
    if (touchEndX < touchStartX - 50) {
        nextPhoto();
    }
    if (touchEndX > touchStartX + 50) {
        prevPhoto();
    }
}

// ===== حفظ الأمنية =====
function saveWish() {
    const wishInput = document.getElementById('userWish');
    const savedMsg = document.getElementById('wishSaved');
    
    if (!wishInput) return;
    
    const wishText = wishInput.value.trim();
    
    if (wishText) {
        localStorage.setItem('userWish', wishText);
        localStorage.setItem('wishDate', new Date().toISOString());
        
        if (savedMsg) {
            savedMsg.classList.remove('hidden');
            wishInput.disabled = true;
            
            createConfetti();
            
            setTimeout(() => {
                savedMsg.classList.add('hidden');
                wishInput.disabled = false;
            }, 5000);
        }
    }
}

// تحميل الأمنية المحفوظة
window.addEventListener('DOMContentLoaded', function() {
    const savedWish = localStorage.getItem('userWish');
    const wishInput = document.getElementById('userWish');
    
    if (savedWish && wishInput) {
        wishInput.value = savedWish;
    }
});

// ===== المفاجأة =====
function openSurprise() {
    const surpriseBox = document.getElementById('surpriseBox');
    const surpriseRevealed = document.getElementById('surpriseRevealed');
    
    if (surpriseBox) surpriseBox.classList.add('hidden');
    if (surpriseRevealed) surpriseRevealed.classList.remove('hidden');
    
    createConfetti();
    createLoveHearts();
}

function closeSurprise() {
    const surpriseBox = document.getElementById('surpriseBox');
    const surpriseRevealed = document.getElementById('surpriseRevealed');
    
    if (surpriseRevealed) surpriseRevealed.classList.add('hidden');
    if (surpriseBox) surpriseBox.classList.remove('hidden');
}

// ===== الكونفيتي =====
function createConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#ffd700', '#e6b3ff', '#ffb3d9', '#00d4aa'];
    const shapes = ['circle', 'square'];
    const confettiCount = 150;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            const isCircle = shapes[Math.floor(Math.random() * shapes.length)] === 'circle';
            
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-20px';
            confetti.style.width = (Math.random() * 12 + 6) + 'px';
            confetti.style.height = (Math.random() * 12 + 6) + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = isCircle ? '50%' : '0';
            confetti.style.opacity = Math.random().toString();
            confetti.style.zIndex = '10000';
            confetti.style.pointerEvents = 'none';
            confetti.style.boxShadow = '0 0 10px rgba(255, 105, 180, 0.5)';
            
            document.body.appendChild(confetti);
            
            const duration = Math.random() * 3 + 2;
            const rotation = Math.random() * 720 - 360;
            const xMovement = Math.random() * 200 - 100;
            
            confetti.animate([
                { 
                    transform: 'translateY(0) translateX(0) rotate(0deg)',
                    opacity: confetti.style.opacity
                },
                { 
                    transform: `translateY(100vh) translateX(${xMovement}px) rotate(${rotation}deg)`,
                    opacity: '0'
                }
            ], {
                duration: duration * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }, i * 15);
    }
}

// ===== القلوب المتساقطة =====
function startFallingHearts() {
    setInterval(() => {
        createFallingHeart();
    }, 2000);
}

function createFallingHeart() {
    const heart = document.createElement('div');
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💞'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '-50px';
    heart.style.fontSize = Math.random() * 25 + 20 + 'px';
    heart.style.opacity = (Math.random() * 0.5 + 0.4).toString();
    heart.style.zIndex = '1';
    heart.style.pointerEvents = 'none';
    heart.style.textShadow = '0 0 10px rgba(255, 20, 147, 0.8)';
    
    document.body.appendChild(heart);
    
    const duration = Math.random() * 5 + 4;
    const xMovement = Math.random() * 150 - 75;
    const rotation = Math.random() * 360;
    
    heart.animate([
        { 
            transform: 'translateY(0) translateX(0) rotate(0deg)',
            opacity: heart.style.opacity
        },
        { 
            transform: `translateY(100vh) translateX(${xMovement}px) rotate(${rotation}deg)`,
            opacity: '0'
        }
    ], {
        duration: duration * 1000,
        easing: 'linear'
    });
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// قلوب إضافية عند الأحداث المهمة
function createLoveHearts() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createFallingHeart();
        }, i * 100);
    }
}

// ===== الموسيقى =====
function toggleMusic() {
    if (musicPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    if (!audio) return;
    
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            musicPlaying = true;
            updateMusicUI();
        }).catch(error => {
            console.log('خطأ في تشغيل الموسيقى:', error);
            // إظهار رسالة للمستخدم
            showMusicNotification();
        });
    }
}

function pauseMusic() {
    if (audio) {
        audio.pause();
        musicPlaying = false;
        updateMusicUI();
    }
}

function updateMusicUI() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const musicDisc = document.querySelector('.music-disc');
    
    if (playPauseBtn) {
        if (musicPlaying) {
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            if (musicDisc) musicDisc.classList.add('playing');
        } else {
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            if (musicDisc) musicDisc.classList.remove('playing');
        }
    }
}

function showMusicNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #ff69b4, #ff1493);
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(255, 20, 147, 0.4);
        z-index: 10001;
        font-family: 'Cairo', sans-serif;
        font-size: 16px;
        font-weight: 600;
        animation: slideInRight 0.5s ease-out;
        border: 2px solid rgba(255, 255, 255, 0.3);
    `;
    notification.innerHTML = `
        <i class="fas fa-music"></i>
        اضغطي على زر الموسيقى لتشغيلها 🎵
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 4000);
}

// ===== رسائل Console الرومانسية =====
console.log('%c💖 هدية رمضان الإلكترونية الرومانسية 2026 💖', 'font-size: 24px; color: #ff1493; font-weight: bold; text-shadow: 2px 2px 4px rgba(255, 20, 147, 0.5);');
console.log('%c🌙 رمضان كريم يا أغلى إنسانة 🌙', 'font-size: 18px; color: #ffd700; font-weight: bold;');
console.log('%c💝 صُنعت بكل حب خصيصاً ليكي', 'font-size: 16px; color: #ff69b4;');
console.log('%c🎵 الموسيقى: تشتغل تلقائياً عند فتح الهدية', 'font-size: 14px; color: #00d4aa;');
console.log('%c🔐 كلمة المرور: 18/02/2026', 'font-size: 14px; color: #e6b3ff;');
console.log('%c❤️ بحبك للأبد ❤️', 'font-size: 20px; color: #ff1493; font-weight: bold;');

// ===== تأثيرات إضافية =====

// تأثير الماوس
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.95) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.pageX + 'px';
        sparkle.style.top = e.pageY + 'px';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';
        sparkle.style.animation = 'fadeOut 1s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
});

// CSS للتأثيرات
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-50px);
        }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== حفظ آخر زيارة =====
window.addEventListener('beforeunload', function() {
    localStorage.setItem('lastVisit', new Date().toISOString());
});

// ===== رسالة ترحيب للزائر العائد =====
window.addEventListener('DOMContentLoaded', function() {
    const lastVisit = localStorage.getItem('lastVisit');
    
    if (lastVisit) {
        const lastDate = new Date(lastVisit);
        const now = new Date();
        const diffDays = Math.floor((now - lastDate) / (1000 * 60 * 60 * 24));
        
        if (diffDays > 0) {
            console.log(`%c💕 أهلاً بعودتك يا قلبي! آخر زيارة كانت منذ ${diffDays} يوم 💕`, 'font-size: 16px; color: #ff69b4;');
        }
    }
});