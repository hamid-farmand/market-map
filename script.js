// --- اینجا اطلاعات غرفه‌ها را بر اساس بخش‌ها وارد کنید ---
// هر بخش (A, B, C, ...) یک آرایه از کسب‌وکارها دارد.
// هر کسب‌وکار یک نام و یک توضیح کوتاه (اختیاری) دارد.
const zoneData = {
    "A": [
        { name: "میوه و تره بار رضوی", details: "واردات مستقیم مرکبات" },
        { name: "سبزیجات تازه کاشانی", details: "محصولات ارگانیک" },
        { name: "فروشگاه سیب دماوند", details: "" }
    ],
    "B": [
        { name: "انبار خشکبار آملی", details: "تخمه و آجیل" },
        { name: "پخش عمده حبوبات قم", details: "" }
    ],
    "C": [
        { name: "غرفه گل و گیاه آفتاب", details: "گیاهان آپارتمانی و زینتی" },
        { name: "گلخانه لاله", details: "گلهای شاخه بریده" }
    ],
    "D": [
        { name: "باغ مرکبات شمال", details: "پرتقال و لیمو شیرین" },
        { name: "سیب درختی ارومیه", details: "" }
    ],
    "E": [
        { name: "ماهی فروشی دریا", details: "ماهیان تازه جنوب" },
        { name: "آبزیان زنده", details: "ماهی قزل‌آلا" }
    ],
    "F": [
        { name: "گوشت قرمز دامداری", details: "گوشت تازه گوسفندی و گاوی" },
        { name: "مرغ و گوشت سفید", details: "مرغ تازه و منجمد" }
    ],
    "G": [
        { name: "لبنیات سنتی کوهستان", details: "ماست و پنیر محلی" },
        { name: "خامه و کره صبحانه", details: "" }
    ],
    "H": [
        { name: "خیار و گوجه خوزستان", details: "" },
        { name: "صیفی جات فصلی", details: "بادمجان و فلفل" }
    ],
    "I": [
        { name: "پخش میوه استوایی", details: "اناناس و موز" },
        { name: "میوه‌های سردسیری", details: "توت‌فرنگی و گیلاس" }
    ],
    "J": [
        { name: "سبزیجات برگی", details: "کاهو و اسفناج تازه" },
        { name: "پیاز و سیب‌زمینی", details: "" }
    ],
    "K": [
        { name: "انبار عمده غلات", details: "برنج و گندم" },
        { name: "ادویه و چای خاتم", details: "" }
    ],
    "L": [
        { name: "سردخانه و یخچال صنعتی", details: "خدمات انبارداری" },
        { name: "دفتر مدیریت بازار", details: "" }
    ]
};

// --- گرفتن عناصر HTML ---
const zoneSelect = document.getElementById('zone-select');
const stallSelect = document.getElementById('stall-select');
const stallLabel = document.getElementById('stall-label');
const ownerNameSpan = document.querySelector('#owner-name span');
const detailsBox = document.getElementById('details-box');

// --- پر کردن لیست اول (بخش‌ها) ---
Object.keys(zoneData).sort().forEach(zoneLetter => {
    const option = document.createElement('option');
    option.value = zoneLetter;
    option.textContent = `بخش ${zoneLetter}`;
    zoneSelect.appendChild(option);
});

// --- رویداد برای تغییر بخش ---
zoneSelect.addEventListener('change', function() {
    const selectedZone = this.value;
    // پاک کردن لیست دوم
    stallSelect.innerHTML = '<option value="">-- لطفاً انتخاب کنید --</option>';
    ownerNameSpan.textContent = '';
    detailsBox.style.display = 'none';

    if (selectedZone) {
        stallLabel.style.display = 'block';
        stallSelect.disabled = false;

        // پر کردن لیست دوم (غرفه‌های آن بخش)
        zoneData[selectedZone].forEach((stall, index) => {
            const option = document.createElement('option');
            // استفاده از یک مقدار منحصر به فرد
            option.value = `${selectedZone}-${index}`;
            option.textContent = stall.name;
            stallSelect.appendChild(option);
        });
    } else {
        stallLabel.style.display = 'none';
        stallSelect.disabled = true;
    }
});

// --- رویداد برای تغییر غرفه ---
stallSelect.addEventListener('change', function() {
    const selectedStallValue = this.value;
    
    if (selectedStallValue) {
        const [zone, index] = selectedStallValue.split('-');
        const stallInfo = zoneData[zone][parseInt(index)];
        
        ownerNameSpan.innerHTML = `${stallInfo.name} <small>${stallInfo.details}</small>`;
        detailsBox.style.display = 'flex';
    } else {
        ownerNameSpan.textContent = '';
        detailsBox.style.display = 'none';
    }
});