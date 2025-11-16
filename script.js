// --- اینجا اطلاعات غرفه‌ها را بر اساس بخش‌ها وارد کنید ---
// هر بخش (A, B, C, ...) یک آرایه از کسب‌وکارها دارد.
// هر کسب‌وکار یک نام و یک توضیح کوتاه (اختیاری) دارد.
const zoneData = {
    "A": [
        { name: "نگهبانی", details: "حفاظت فیزیکی" },
    ],
    "B": [
        { name: "سرویس بهداشتی", details: "" },
    ],
    "C": [
        { name: "باسکول", details: "باسکول 60 تنی" },
    ],
    "D": [
        { name: "اموال و انبار", details: "انبار شهرداری کاشان" },
    ],
    "E": [
        { name: "ساختمان مرکزی", details: "مدیریت ، عمران ، تاسیسات" },
    ],
    "F": [
        { name: " کشاورزی بانک", details: "دستگاه خودپرداز" },
    ],
    "G": [
        { name: "دفتر اتحادیه صنف میوه و تره بار", details: "دفتر مرکزی" },
    ],
    "H": [
        { name: "مسجد", details: "" },
    ],
    "I": [
        { name: "سرویس بهداشتی و حمام", details: "" },
    ],
    "J": [
        { name: "مغازه لبنیاتی", details: "" },
   
    ],
    "K": [
        { name: "رستوران", details: "" },
    ],
    "L": [
        { name: "خوابگاه", details: "" },
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
