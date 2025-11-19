// --- داده‌های غرفه‌ها ---
// کلید (عدد) باید با ID در فایل SVG مطابقت داشته باشد (مثلا stall-1).
const stallData = {
    "1": { name: "امیر فدوی کاشانی", number: "غرفه 1" },
    "2": { name: "اصغر و حسین جعفری آزاد", number: "غرفه 2" },
    "3": { name: "مجید فدوی کاشانی (عباس)", number: "غرفه 3" },
    "4": { name: "رحمت اله فدوی کاشانی", number: "غرفه 4" },
    "5": { name: "محمد ابراهیم شویدیان", number: "غرفه 5" },
    "6": { name: "عباسعلی کاوه راوندی", number: "غرفه 6" },
    "7": { name: "احمد گیلاسی", number: "غرفه 7" },
    "7.1": { name: "احمد گیلاسی", number: "غرفه 7.1" },
    "8": { name: "عباسعلی گیلاسی", number: "غرفه 8" },
    "9": { name: "اصغر گیلاسی", number: "غرفه 9" },
    "10": { name: "مرتضی و محمود ابوالحسنی", number: "غرفه 10" },
    "11": { name: "امیر سحرخوان", number: "غرفه 11" },
    "12": { name: "علی همایونی - عباس و علی محمدی", number: "غرفه 12" },
    "13": { name: "اصغر و احمد ابوالحسنی", number: "غرفه 13" },
    "14": { name: "ناصر قانع - علی زاهد", number: "غرفه 14" },
    "15": { name: "حسین همایونی", number: "غرفه 15" },
    "16": { name: "داود بدیعی نژاد", number: "غرفه 16" },
    "17": { name: "سید اصغر قپانی", number: "غرفه 17" },
    "17.1": { name: "علی صحرایی مشکانی", number: "غرفه 17.1" },
    "18": { name: "علی رضا ابوالحسنی - امیرحسین هاشمی نسب", number: "غرفه 18" },
    "19": { name: "عباس رحمانی پور", number: "غرفه 19" },
    "20": { name: "هاشم رحمانی پور", number: "غرفه 20" },
    "21": { name: "عباس و رضا و جواد صادق زاده", number: "غرفه 21" },
    "22": { name: "امیر و سعید جعفری- بهرام لقبی", number: "غرفه 22" },
    "23": { name: "مرتضی خداوردیان - مسعودحیدریان - علی همایونی", number: "غرفه 23" },
    "24": { name: "علی حمیدی - مجتبی مشتاق (وهب)", number: "غرفه 24" },
    "25": { name: "هادی دهی", number: "غرفه 25" },
    "26": { name: "ابوالفضل باقی", number: "غرفه 26" },
    "27": { name: "رحمت باقی - رحمت حاجتمند", number: "غرفه 27" },
    "27.1": { name: "رضا محمدی - احمد گرمکی", number: "غرفه 27.1" },
    "28": { name: "سلمان کاظمی - حاج رمضان محسنی", number: "غرفه 28" },
    "29": { name: "بهرام اریسمانی - ماشالله جووی", number: "غرفه 29" },
    "30": { name: "علی اربابی", number: "غرفه 30" },
    "31": { name: "حسن باقی – محمد حسین حسین پور", number: "غرفه 31" },
    "32": { name: "علی نقی ریحانکار", number: "غرفه 32" },
    "33": { name: "جواد زارع حسن آبادی – حسین رحیمیان", number: "غرفه 33" },
    "34": { name: "امیر نصیری - اکبر افراشته", number: "غرفه 34" },
    "35": { name: "حاج رضا فدوی", number: "غرفه 35" },
    "36": { name: "حسین ستایش فر - سید اکبر لحمی", number: "غرفه 36" },
    "37": { name: "حاج محسن زارع", number: "غرفه 37" },
    "38": { name: "حاج مهدی تجلیان مفرد", number: "غرفه 38" },
    "39": { name: "حاج اکبر و محسن رجبعلی", number: "غرفه 39" },
    "40": { name: "مهدی و محمد علی اصغر زاده", number: "غرفه 40" },
    "41": { name: "سید حسین و سید امیرمهدی آقایی پور - علی زائر نجف", number: "غرفه 41" },
    "42": { name: "علی محمدی", number: "غرفه 42" },
    "43": { name: "ماشاله نصیری - اصغر قپانی - علی صحرائی", number: "غرفه 43" },
    "44": { name: "ماشاله نصیری - اصغر قپانی - علی صحرائی", number: "غرفه 44" },
    "45": { name: "فرشچی", number: "غرفه 45" },
    "46": { name: "امیر مازوچی - حسین دشتبانی - حاج اصغر اکبرزاده", number: "غرفه 46" },
    "47": { name: "علی اکبر منصوری راوندی", number: "غرفه 47" },
    "48": { name: "مجید منصوری راوندی - مرتضی منصوری", number: "غرفه 48" },
    "49": { name: "سید حسین و سید عباس زعیمی", number: "غرفه 49" },
    "50": { name: "سید حسین و سید عباس و سید علی زعیمی", number: "غرفه 50" },
    "51": { name: "سید حسین و سید عباس و سید علی زعیمی", number: "غرفه 51" },
    "52": { name: "محمد علمدار - ابوالفضل علمدار", number: "غرفه 52" },
    "53": { name: "محمد عظیم پور برزکی", number: "غرفه 53" },
    "54": { name: "طیبه طیبی مفرد کاشانی", number: "غرفه 54" },
    "55": { name: "سید محمد طباطبایی نیا", number: "غرفه 55" },
    "56": { name: "مهدی حیدریان", number: "غرفه 56" },
    "57": { name: "حسن و امیر حسین شکرریز - فاطمه نسیمی", number: "غرفه 57" },
    "58": { name: "محسن صادق زاده", number: "غرفه 58" },
    "59": { name: "رضا و حسین زارع حسن آبادی", number: "غرفه 59" },
    "60": { name: "محسن صادق زاده - عباس بهمنی", number: "غرفه 60" },
    "61": { name: "عباس و رسول شکاری", number: "غرفه 61" },
    "62": { name: "عباس بهمنی - اسماعیل و محسن صادق زاده", number: "غرفه 62" },
    "63": { name: "اسماعیل صادق زاده", number: "غرفه 63" },
    "64": { name: "حسینعلی صالحی", number: "غرفه 64" },
    "65": { name: "میثم خیران", number: "غرفه 65" },
    "66": { name: "شرکت سفال بتن صانع", number: "غرفه 66" },
    "67": { name: "شرکت هنگان نیروی پارس", number: "غرفه 67" },
    "68": { name: "شرکت یازیافت", number: "غرفه 68" },
    "69": { name: "محمد فرزاد بنایی - سید رسول محمدی - محمدعلی زارعی ده آبادی", number: "غرفه 69" },
    "70": { name: "شرکت بنا ساختمان فاطر", number: "غرفه 70" },
    "71": { name: "شرکت طاق پوشان فجر", number: "غرفه 71" },
    "72": { name: "رضا اصغری زده", number: "غرفه 72" },
    "73": { name: "سعید چلوئی حسن آبادی", number: "غرفه 73" },
    "74": { name: "سید مرتضی صادقیان", number: "غرفه 74" },
    "75": { name: "نام مشخص نیست", number: "غرفه 75" },
    "76": { name: "ماشااله و ناصر اصغری زاده", number: "غرفه 76" },
    "77": { name: "نام مشخص نیست", number: "غرفه 77" },
    "78": { name: "ابوالفضل چلوئی حسن آبادی - میلاد پورشیخعلی", number: "غرفه 78" },
    "79": { name: "مصطفی ابوالحسنی - حسام بهره دار", number: "غرفه 79" },
    "80": { name: "علی گیلاسی", number: "غرفه 80" },
    "81": { name: "عباس علیدوست", number: "غرفه 81" },
    "82": { name: "علی اکبر حسینی - مسعود گیلاسی", number: "غرفه 82" },
    "83": { name: "علی عصمتی - اصغر اکبرزاده محمد آبادی", number: "غرفه 83" },
    "84": { name: "مسعود توکلی کاشانی", number: "غرفه 84" },
    "85": { name: "شرکت هنگان نیروی پارس", number: "غرفه 85" },
    "86": { name: "مهدی خدائی جوشقانی - احسان حفیظیان", number: "غرفه 86" },
    "87": { name: "مصطفی ساربانی", number: "غرفه 87" },
    "88": { name: "نرگس سادات خوارزمی", number: "غرفه 88" },
    "89": { name: "محمدعلی اسماعیلی طاهری", number: "غرفه 89" },
    "90": { name: "مهدی خدائی جوشقانی", number: "غرفه 90" },
    "91": { name: "محمد‌علی اسماعیلی طاهری - اسماعیل سقاباشی جوشقانی", number: "غرفه 91" },
    "92": { name: "حمید افراشته - ابوالفضل حکیمیان", number: "غرفه 92" },
    "93": { name: "علی‌محمد شاهسون - سید تقی و سید حسن معبودی", number: "غرفه 93" },
    "94": { name: "عباس اربابی", number: "غرفه 94" },
    "95": { name: "محمد و مصطفی ابوالحسنی", number: "غرفه 95" },
    "96": { name: "فاطمه میرپنجی - امیر رئوفی نیا", number: "غرفه 96" },
    "97": { name: "حاج سید سعید نظام طاهری", number: "غرفه 97" },
    "98": { name: "احمد افراشته - اصغر افراشته - حاج جواد افراشته", number: "غرفه 98" },
    "99": { name: "حاج علی سراجی - حاج احمد حمامی", number: "غرفه 99" },
    "100": { name: "احمد پیام", number: "غرفه 100" },
    "101": { name: "یزدان آور", number: "غرفه 101" },
    "102": { name: "مهدی ایلیاتی - حسین جعفری آزاد", number: "غرفه 102" },
    "103": { name: "حاج اصغر خاری زاده - حسین خداوردیان", number: "غرفه 103" },
};

// --- تابع هایلایت کردن غرفه (با افکت زوم) ---
function highlightStall(stallId) {
    const previousHighlight = document.querySelector('.stall-highlight');
    if (previousHighlight) {
        previousHighlight.classList.remove('stall-highlight');
    }

    const svgElement = document.querySelector('.map-container svg');
    // خروج از حالت زوم قبلی
    if (svgElement) {
        svgElement.classList.remove('zoomed');
    }

    if (stallId) {
        const stallElement = document.getElementById(`stall-${stallId}`);
        
        if (stallElement && svgElement) {
            // اضافه کردن کلاس هایلایت با انیمیشن نئون
            stallElement.classList.add('stall-highlight');

            // --- شروع منطق زوم ---
            // گرفتن کادر عنصر غرفه در داخل SVG
            const bbox = stallElement.getBBox();
            const centerX = bbox.x + bbox.width / 2;
            const centerY = bbox.y + bbox.height / 2;

            // گرفتن viewBox اصلی SVG
            const viewBox = svgElement.viewBox.baseVal;

            // محاسبه نقطه شروع زوم به صورت درصد
            const originX = (centerX / viewBox.width) * 100;
            const originY = (centerY / viewBox.height) * 100;

            // اعمال زوم
            svgElement.style.transformOrigin = `${originX}% ${originY}%`;
            svgElement.classList.add('zoomed');

            // تنظیم تایمر برای خروج از زوم بعد از 1 ثانیه
            setTimeout(() => {
                if (svgElement) {
                    svgElement.classList.remove('zoomed');
                }
            }, 1000); // 1000 میلی‌ثانیه = 1 ثانیه
        }
    }
}

// --- منطق جستجو بر اساس شماره غرفه ---
const stallSelect = document.getElementById('stall-select');
const ownerNameSpan = document.querySelector('#owner-name span');

Object.keys(stallData).sort((a, b) => {
    return parseFloat(a) - parseFloat(b);
}).forEach(stallId => {
    const option = document.createElement('option');
    option.value = stallId;
    option.textContent = stallData[stallId].number;
    stallSelect.appendChild(option);
});

stallSelect.addEventListener('change', function() {
    const selectedStallId = this.value;
    if (selectedStallId) {
        const ownerName = stallData[selectedStallId].name;
        ownerNameSpan.textContent = ownerName;
        highlightStall(selectedStallId);
    } else {
        ownerNameSpan.textContent = "";
        highlightStall(null);
    }
});

// --- منطق جستجوی خودکار بر اساس نام ---
const ownerSearchInput = document.getElementById('owner-search');
const suggestionsList = document.getElementById('owner-suggestions-list');
const stallNumberResultSpan = document.querySelector('#stall-number-result span');
const autocompleteContainer = document.querySelector('.autocomplete-container');

ownerSearchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    suggestionsList.innerHTML = '';

    if (searchTerm.length < 1) {
        suggestionsList.classList.remove('active');
        stallNumberResultSpan.textContent = "";
        return;
    }

    const matchingOwners = [];
    for (const [stallId, stallInfo] of Object.entries(stallData)) {
        if (stallInfo.name.toLowerCase().includes(searchTerm)) {
            matchingOwners.push({ id: stallId, name: stallInfo.name });
        }
    }

    if (matchingOwners.length > 0) {
        matchingOwners.forEach(owner => {
            const li = document.createElement('li');
            li.textContent = owner.name;
            li.dataset.stallId = owner.id;
            suggestionsList.appendChild(li);
        });
        suggestionsList.classList.add('active');
    } else {
        suggestionsList.classList.remove('active');
    }
});

suggestionsList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        const selectedStallId = e.target.dataset.stallId;
        const selectedOwnerName = e.target.textContent;

        ownerSearchInput.value = selectedOwnerName;
        stallNumberResultSpan.textContent = stallData[selectedStallId].number;
        suggestionsList.classList.remove('active');
        highlightStall(selectedStallId);
    }
});

document.addEventListener('click', function(e) {
    if (!autocompleteContainer.contains(e.target)) {
        suggestionsList.classList.remove('active');
    }
});

// --- منطق ساعت و تاریخ زنده ---

// تابع کمکی برای تبدیل تاریخ میلادی به شمسی
function toJalaali(gy, gm, gd) {
    var g_d_m, jy, jm, jd, gy2, days;
    g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    if (gy > 1600) {
        jy = 979;
        gy -= 1600;
    } else {
        jy = 0;
        gy -= 621;
    }
    if (gm > 2) {
        gy2 = gy + 1;
    } else {
        gy2 = gy;
    }
    days = (365 * gy) + ((parseInt((gy2 + 3) / 4))) - ((parseInt((gy2 + 99) / 100))) + ((parseInt((gy2 + 399) / 400))) - 80 + gd + g_d_m[gm - 1];
    jy += 33 * parseInt(days / 12053);
    days %= 12053;
    jy += 4 * parseInt(days / 1461);
    days %= 1461;
    if (days > 365) {
        jy += parseInt((days - 1) / 365);
        days = (days - 1) % 365;
    }
    jm = (days < 186) ? 1 + parseInt(days / 31) : 7 + parseInt((days - 186) / 30);
    jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));
    return [jy, jm, jd];
}

// تابع کمکی برای اضافه کردن صفر به اعداد تک رقمی
function padZero(num) {
    return (num < 10 ? '0' : '') + num;
}

// تابع اصلی برای آپدیت تاریخ و زمان
function updateDateTime() {
    const now = new Date();
    const gregorianYear = now.getFullYear();
    const gregorianMonth = now.getMonth() + 1; // ماه‌ها از 0 شروع می‌شوند
    const gregorianDay = now.getDate();

    const [jalaaliYear, jalaaliMonth, jalaaliDay] = toJalaali(gregorianYear, gregorianMonth, gregorianDay);

    const hours = now.getHours();
    const minutes = now.getMinutes();

    const dateStr = `${jalaaliYear}/${padZero(jalaaliMonth)}/${padZero(jalaaliDay)}`;
    const timeStr = `${padZero(hours)}:${padZero(minutes)}`;

    document.getElementById('current-date').textContent = dateStr;
    document.getElementById('current-time').textContent = timeStr;
}

// شروع ساعت پس از بارگذاری کامل صفحه
document.addEventListener('DOMContentLoaded', function() {
    updateDateTime(); // یک بار فورا اجرا می‌شود
    setInterval(updateDateTime, 1000); // سپس هر ثانیه اجرا می‌شود
});
