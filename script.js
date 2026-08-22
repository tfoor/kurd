/* ============ إعدادات ============ */
const WHATSAPP_NUMBERS = {
  iq: "9647511429970", // خدمات في كردستان/العراق
  sy: "963984959066",  // خدمات في سوريا — تأكد من الرقم الكامل بصيغة دولية (كود سوريا 963)
};
// ⚠️ بدّل الروابط تحت بروابط حسابات الانستغرام الحقيقية متاعك (نفس الروابط موجودة أيضاً بملف index.html بقسم contactModal)
const INSTAGRAM_LINKS = {
  iq: "https://www.instagram.com/style__roj/",
  sy: "https://www.instagram.com/awar.teter/",
};
const CURRENCY = "$";
const ORDERS_ENABLED = true; // غيّرها إلى false.true لتفعيل إرسال الطلبات عبر واتساب من جديد

let selectedCountry = "iq";
function selectCountry(code) {
  selectedCountry = code;
  document.querySelectorAll(".country-opt").forEach(b => {
    b.classList.toggle("active", b.dataset.country === code);
  });
}
document.querySelectorAll(".country-opt").forEach(btn => {
  btn.onclick = () => selectCountry(btn.dataset.country);
});

/* ============ نظام اللغات (عربي / إنكليزي / كرمانجي) ============ */
const translations = {
  ar: {
    marq1: "🚚 شحن مجاني لأول طلب", marq2: "🔥 خصومات تصل ٤٠٪", marq3: "🆕 قطع جديدة أسبوعياً", marq4: "💬 اطلب مباشرة عبر واتساب",
    nav_shop: "تسوّق", nav_deals: "عروض", nav_about: "من نحن", nav_contact: "تواصل معنا",
    editbar_text: "🔓 وضع تعديل الأسعار مفعّل — عدّل السعر بالبطاقة مباشرة", editbar_save: "حفظ التعديلات", editbar_cancel: "إلغاء",
    hero_eyebrow: "تشكيلة ٢٠٢٦", hero_title: "ستايلك يبدأ<br>من هون",
    hero_desc: "مئات القطع المختارة بعناية بأسعار تناسبك، وطلب سهل عبر واتساب بضغطة واحدة.",
    hero_cta1: "تسوّق الآن", hero_cta2: "شاهد العروض", hero_tag: "الأكثر طلباً 🔥",
    cat_men: "رجالي", cat_women: "حريمي", cat_girls: "بناتي", cat_acc: "إكسسوارات", cat_all: "الكل",
    cat_kids: "أطفال", cat_shoes: "أحذية", cat_makeup: "مكياج", cat_home: "أدوات منزلية",
    sub_top: "ملابس علوية", sub_sets: "أطقم منسقة", sub_bottom: "ملابس سفلية", sub_denim: "ملابس دينيم",
    sub_dresses: "فساتين", sub_skirts: "تنانير", sub_girls: "بناتي", sub_boys: "أولادي",
    sub_sandals: "صنادل", sub_heels: "كعوب", sub_classic: "كلاسيك", sub_kidshoes: "أطفال",
    sub_hair: "شعر مستعار", sub_bags: "جنط", sub_jewelry: "مجوهرات",
    sub_makeup: "مكياج", sub_nailcare: "عناية بالأظافر", sub_beautytools: "أدوات تجميل", sub_skincare: "عناية بالبشرة",
    sub_phoneacc: "إكسسوارات موبايل", sub_sunglasses: "نظارات", sub_watches: "ساعات", sub_socks: "جوارب", sub_hairacc: "إكسسوارات شعر",
    promo1_t: "خصم يصل إلى ٤٠٪", promo1_d: "على القطع المختارة هذا الأسبوع",
    promo2_t: "اشترِ ٢ واحصل على الثالثة هدية", promo2_d: "على تشكيلة الإكسسوارات",
    promo3_t: "توصيل مجاني", promo3_d: "للطلبات فوق ٥٠$",
    gal_eyebrow: "المعرض", gal_title: "اكتشف تشكيلتنا",
    sort_default: "الترتيب: افتراضي", sort_asc: "السعر: من الأقل للأعلى", sort_desc: "السعر: من الأعلى للأقل",
    sig_title: "ستايلك، قرارك", sig_desc: "في ستايل روج منختار كل قطعة بعين تهتم بالتفاصيل، ونوصلها لباب بيتك بأسهل طريقة. جودة تستمر، وأسعار تناسب الكل.",
    footer_brand: "ستايل روج", footer_brand_desc: "تسوّق أزياء رجالي، حريمي، وبناتي بأسلوب عصري وخدمة طلب مباشرة عبر واتساب.",
    footer_links: "روابط سريعة", footer_contact: "تواصل معنا", footer_wa: "واتساب:", footer_country: "العراق", footer_country2: "سوريا",
    footer_bottom: "© 2026 ستايل روج – جميع الحقوق محفوظة",
    cart_title: "سلة المشتريات", cart_total: "الإجمالي", cart_wa_btn: "إرسال الطلب عبر واتساب",
    cart_note: "سيتم فتح واتساب مع تفاصيل الفاتورة وروابط صور القطع المختارة لتأكيد الطلب.",
    cart_empty: "سلة التسوق فارغة<br>ابدأ بإضافة قطعتك المفضلة", add_btn: "🛍️ أضف للسلة", added_btn: "أُضيفت ✓",
    remove_btn: "إزالة", no_results: "😕 ما في نتائج مطابقة للبحث", edit_btn_title: "تعديل الأسعار",
    pwd_prompt: "أدخل كلمة سر تعديل الأسعار:", pwd_wrong: "كلمة السر غير صحيحة", saved_msg: "تم حفظ الأسعار الجديدة ✅",
    search_placeholder: "🔍 بحث برقم المنتج أو الاسم",
    service_off_title: "🚧 الخدمة متوقفة مؤقتاً", service_off_msg: "هذه صفحة تجريبية، وقريباً رح تتوفر جميع الخدمات.", service_off_ok: "تم",
    country_iq: "العراق", country_sy: "سوريا",
    footer_owner: "المالك:", footer_admin: "المسؤول  :",
    bnav_home: "الرئيسية", bnav_contact: "تواصل", bnav_camera: "بحث بالصورة", bnav_language: "لغة",
    contact_title: "تواصل معنا", contact_wa_group: " واتساب", contact_ig_group: " انستغرام",
    contact_ig_iq: "حساب ستايل روج", contact_ig_sy: "حساب دعم فني",
    camera_title: "🔎 دوّر بالصورة",
    camera_hint: "صوّر القطعة أو ارفع صورتها، ورح نلقالك أقرب القطع الموجودة بمتجرنا. (مطابقة تقريبية حسب الألوان والشكل العام)",
    camera_take: "التقاط صورة", camera_upload: "رفع من المعرض",
    camera_analyzing: "🔄 جاري تحليل الصورة ومطابقتها بمنتجاتنا...",
    camera_found: "✨ هاي أقرب القطع اللي لقيناها", camera_none: "😕 ما لقينا قطع مشابهة، جرّب صورة أوضح",
    camera_error: "⚠️ صار خطأ بقراءة الصورة، جرّب مرة ثانية",
    settings_title: "الإعدادات", settings_language: "اللغة",
  },
  en: {
    marq1: "🚚 Free shipping on your first order", marq2: "🔥 Discounts up to 40%", marq3: "🆕 New pieces weekly", marq4: "💬 Order directly via WhatsApp",
    nav_shop: "Shop", nav_deals: "Deals", nav_about: "About", nav_contact: "Contact",
    editbar_text: "🔓 Price edit mode on — edit the price on the card directly", editbar_save: "Save Changes", editbar_cancel: "Cancel",
    hero_eyebrow: "2026 Collection", hero_title: "Your style starts<br>right here",
    hero_desc: "Hundreds of carefully picked pieces at prices that suit you, with easy ordering via WhatsApp in one tap.",
    hero_cta1: "Shop Now", hero_cta2: "View Deals", hero_tag: "Best Seller 🔥",
    cat_men: "Men", cat_women: "Women", cat_girls: "Girls", cat_acc: "Accessories", cat_all: "All",
    cat_kids: "Kids", cat_shoes: "Shoes", cat_makeup: "Makeup", cat_home: "Home & Tools",
    sub_top: "Tops", sub_sets: "Matching Sets", sub_bottom: "Bottoms", sub_denim: "Denim",
    sub_dresses: "Dresses", sub_skirts: "Skirts", sub_girls: "Girls", sub_boys: "Boys",
    sub_sandals: "Sandals", sub_heels: "Heels", sub_classic: "Classic", sub_kidshoes: "Kids",
    sub_hair: "Wigs & Hair", sub_bags: "Bags", sub_jewelry: "Jewelry",
    sub_makeup: "Makeup", sub_nailcare: "Nail Care", sub_beautytools: "Beauty Tools", sub_skincare: "Skincare",
    sub_phoneacc: "Phone Accessories", sub_sunglasses: "Sunglasses", sub_watches: "Watches", sub_socks: "Socks", sub_hairacc: "Hair Accessories",
    promo1_t: "Up to 40% off", promo1_d: "On selected pieces this week",
    promo2_t: "Buy 2 get the 3rd free", promo2_d: "On the accessories collection",
    promo3_t: "Free delivery", promo3_d: "On orders over $50",
    gal_eyebrow: "Gallery", gal_title: "Discover Our Collection",
    sort_default: "Sort: Default", sort_asc: "Price: Low to High", sort_desc: "Price: High to Low",
    sig_title: "Your Style, Your Choice", sig_desc: "At Style Rouge we pick every piece with an eye for detail, and deliver it to your door the easy way. Lasting quality, prices for everyone.",
    footer_brand: "Style Rouge", footer_brand_desc: "Shop men's, women's, and girls' fashion with a modern style and direct WhatsApp ordering.",
    footer_links: "Quick Links", footer_contact: "Contact Us", footer_wa: "WhatsApp:", footer_country: "Iraq", footer_country2: "Syria",
    footer_bottom: "© 2026 Style Rouge – All rights reserved",
    cart_title: "Shopping Cart", cart_total: "Total", cart_wa_btn: "Send Order via WhatsApp",
    cart_note: "WhatsApp will open with the invoice details and photo links of the selected pieces to confirm your order.",
    cart_empty: "Your cart is empty<br>Start adding your favorite piece", add_btn: "🛍️ Add to Cart", added_btn: "Added ✓",
    remove_btn: "Remove", no_results: "😕 No matching results", edit_btn_title: "Edit Prices",
    pwd_prompt: "Enter the price-edit password:", pwd_wrong: "Incorrect password", saved_msg: "New prices saved ✅",
    search_placeholder: "🔍 Search by product number or name",
    service_off_title: "🚧 Service Temporarily Unavailable", service_off_msg: "This is a demo page. All services will be available soon.", service_off_ok: "OK",
    country_iq: "Iraq", country_sy: "Syria",
    footer_owner: "Owner:", footer_admin: "Page Admin:",
    bnav_home: "Home", bnav_contact: "Contact", bnav_camera: "Visual Search", bnav_language: "Language",
    contact_title: "Contact Us", contact_wa_group: " WhatsApp", contact_ig_group: " Instagram",
    contact_ig_iq: "Style Rouge Account", contact_ig_sy: "Technical Support Account",
    camera_title: "🔎 Search by Photo",
    camera_hint: "Take or upload a photo of the item, and we'll find the closest matches in our store. (Approximate match based on colors and general shape)",
    camera_take: "Take Photo", camera_upload: "Upload from Gallery",
    camera_analyzing: "🔄 Analyzing your photo and matching it to our products...",
    camera_found: "✨ Here are the closest matches we found", camera_none: "😕 No similar items found, try a clearer photo",
    camera_error: "⚠️ Something went wrong reading the image, please try again",
    settings_title: "Settings", settings_language: "Language",
  },
  ku: {
    marq1: "🚚 Barkirina belaş bo siparîşa yekem", marq2: "🔥 Daşandin heta 40%", marq3: "🆕 Perçeyên nû hefteyane", marq4: "💬 Rasterast bi WhatsApp siparîş bike",
    nav_shop: "Kirîn", nav_deals: "Pêşkêşî", nav_about: "Der barê me", nav_contact: "Têkilî",
    editbar_text: "🔓 Moda guherandina biha çalak e — bihayê li ser kartê rasterast biguherîne", editbar_save: "Guherîn Tomar Bike", editbar_cancel: "Betal",
    hero_eyebrow: "Koleksiyona 2026", hero_title: "Şêwaza te ji vir<br>dest pê dike",
    hero_desc: "Bi sedan perçeyên bi baldarî hilbijartî bi rexneyên li gorî te, û siparîşkirin bi hêsanî bi rêya WhatsApp bi yek pêl.",
    hero_cta1: "Niha Bikire", hero_cta2: "Pêşkêşiyan Bibîne", hero_tag: "Herî Zêde Tê Xwestin 🔥",
    cat_men: "Mêr", cat_women: "Jin", cat_girls: "Keç", cat_acc: "Aksesûar", cat_all: "Hemû",
    cat_kids: "Zarok", cat_shoes: "Sol", cat_makeup: "Make-up", cat_home: "Malzemeyên Malê",
    sub_top: "Kincên Jorîn", sub_sets: "Setên Hevgirtî", sub_bottom: "Kincên Jêrîn", sub_denim: "Cins",
    sub_dresses: "Fistan", sub_skirts: "Îtek", sub_girls: "Keç", sub_boys: "Kur",
    sub_sandals: "Sandal", sub_heels: "Sole Bilind", sub_classic: "Klasîk", sub_kidshoes: "Zarok",
    sub_hair: "Porê Çêkirî", sub_bags: "Çente", sub_jewelry: "Zêr û Zîv",
    sub_makeup: "Make-up", sub_nailcare: "Lênêrîna Neynûkan", sub_beautytools: "Amûrên Ciwanîyê", sub_skincare: "Lênêrîna Çermê",
    sub_phoneacc: "Aksesûarên Mobîlê", sub_sunglasses: "Berçavk", sub_watches: "Seet", sub_socks: "Gore", sub_hairacc: "Aksesûarên Porê",
    promo1_t: "Daşandin heta 40%", promo1_d: "Li ser perçeyên vê heftê hilbijartî",
    promo2_t: "2 Bikire, ya 3an belaş", promo2_d: "Li ser koleksiyona aksesûaran",
    promo3_t: "Gihandina belaş", promo3_d: "Bo siparîşên ji 50$ zêdetir",
    gal_eyebrow: "Galerî", gal_title: "Koleksiyona Me Bibîne",
    sort_default: "Rêzkirin: Standard", sort_asc: "Biha: Ji Kêm bo Zêde", sort_desc: "Biha: Ji Zêde bo Kêm",
    sig_title: "Şêwaza Te, Biryara Te", sig_desc: "Li style Roj em her perçeyek bi baldarî hilbijartin, û bi hêsanî radigihînin ber deriyê te. Kalîteyeke domdar, û rexneyên bo her kesî.",
    footer_brand: "style Roj", footer_brand_desc: "Cilûbergên mêr, jin û keçan bi şêwazeke nûjen û xizmeta siparîşkirinê rasterast bi WhatsApp bikire.",
    footer_links: "Girêdanên Bilez", footer_contact: "Têkilî Bi Me", footer_wa: "WhatsApp:", footer_country: "Iraq", footer_country2: "Sûriye",
    footer_bottom: "© 2026 style Roj – Hemû mafên parastî ne",
    cart_title: "Selika Kirînê", cart_total: "Giştî", cart_wa_btn: "Siparîşê bi WhatsApp Bişêne",
    cart_note: "WhatsApp wê bi hûrguliyên fatûre û lînkên wêneyên perçeyên hilbijartî vebe da ku siparîş were piştrastkirin.",
    cart_empty: "Selika te vala ye<br>Dest pê bike û perçeya xweya xweştirîn zêde bike", add_btn: "🛍️ Zêde Bike Selikê", added_btn: "Zêde Bû ✓",
    remove_btn: "Rake", no_results: "😕 Encamek li gorî lêgerînê nehat dîtin", edit_btn_title: "Bihayan Biguherîne",
    pwd_prompt: "Şîfreya guherandina biha binivîse:", pwd_wrong: "Şîfre şaş e", saved_msg: "rexneyên nû hatin tomarkirin ✅",
    search_placeholder: "🔍 Li gorî hejmar an navê hilberê bigere",
    service_off_title: "🚧 Xizmet Demildî Sekinî ye", service_off_msg: "Ev rûpelek ceribandinê ye. Bi zûtirîn dem hemû xizmet berdest dibin.", service_off_ok: "Baş e",
    country_iq: "Iraq", country_sy: "Sûriye",
    footer_owner: "Xwedan:", footer_admin: "Rêvebirê Rûpelê:",
    bnav_home: "Serekî", bnav_contact: "Têkilî", bnav_camera: "Lêgerîn bi Wêne", bnav_language: "Ziman",
    contact_title: "Têkilî Bi Me", contact_wa_group: " WhatsApp", contact_ig_group: " Instagram",
    contact_ig_iq: "Hesabê style_roj", contact_ig_sy: "Hesabê Piştgiriya teknîkî",
    camera_title: "🔎 Bi Wêne Bigere",
    camera_hint: "Wêneyê perçeyê bikişîne an barbike, em ê nêzîktirîn perçeyên li dikana me bibînin. (Lihevkirineke nêzîkî li gorî reng û şeklê giştî)",
    camera_take: "Wêne Bikişîne", camera_upload: "Ji Galeriyê Barbike",
    camera_analyzing: "🔄 Wêne tê analîzkirin û bi hilberên me tê berhevdan...",
    camera_found: "✨ Ev in nêzîktirîn perçeyên ku me dîtin", camera_none: "😕 Tu perçeyên dişibin nehatin dîtin, wêneyeke zelaltir biceribîne",
    camera_error: "⚠️ Xeletiyek çêbû di xwendina wêne de, dîsa biceribîne",
    settings_title: "Sazkarî", settings_language: "Ziman",
  },
  tr: {
    marq1: "🚚 İlk siparişte ücretsiz kargo", marq2: "🔥 %40'a varan indirim", marq3: "🆕 Her hafta yeni parçalar", marq4: "💬 WhatsApp'tan doğrudan sipariş ver",
    nav_shop: "Alışveriş", nav_deals: "Fırsatlar", nav_about: "Hakkımızda", nav_contact: "İletişim",
    editbar_text: "🔓 Fiyat düzenleme modu açık — fiyatı kart üzerinde doğrudan düzenleyin", editbar_save: "Değişiklikleri Kaydet", editbar_cancel: "İptal",
    hero_eyebrow: "2026 Koleksiyonu", hero_title: "Tarzın burada<br>başlıyor",
    hero_desc: "Sana uygun fiyatlarla özenle seçilmiş yüzlerce parça, tek dokunuşla WhatsApp üzerinden kolay sipariş.",
    hero_cta1: "Şimdi Alışveriş Yap", hero_cta2: "Fırsatları Gör", hero_tag: "En Çok Satan 🔥",
    cat_men: "Erkek", cat_women: "Kadın", cat_girls: "Kız Çocuk", cat_acc: "Aksesuar", cat_all: "Tümü",
    cat_kids: "Çocuk", cat_shoes: "Ayakkabı", cat_makeup: "Makyaj", cat_home: "Ev & Aletler",
    sub_top: "Üst Giyim", sub_sets: "Takımlar", sub_bottom: "Alt Giyim", sub_denim: "Kot",
    sub_dresses: "Elbiseler", sub_skirts: "Etekler", sub_girls: "Kız Çocuk", sub_boys: "Erkek Çocuk",
    sub_sandals: "Sandalet", sub_heels: "Topuklu", sub_classic: "Klasik", sub_kidshoes: "Çocuk",
    sub_hair: "Peruk & Saç", sub_bags: "Çantalar", sub_jewelry: "Takı",
    sub_makeup: "Makyaj", sub_nailcare: "Tırnak Bakımı", sub_beautytools: "Güzellik Aletleri", sub_skincare: "Cilt Bakımı",
    sub_phoneacc: "Telefon Aksesuarları", sub_sunglasses: "Güneş Gözlüğü", sub_watches: "Saatler", sub_socks: "Çoraplar", sub_hairacc: "Saç Aksesuarları",
    promo1_t: "%40'a varan indirim", promo1_d: "Bu hafta seçili parçalarda",
    promo2_t: "2 Al 3.sü Bedava", promo2_d: "Aksesuar koleksiyonunda",
    promo3_t: "Ücretsiz kargo", promo3_d: "50$ üzeri siparişlerde",
    gal_eyebrow: "Galeri", gal_title: "Koleksiyonumuzu Keşfedin",
    sort_default: "Sıralama: Varsayılan", sort_asc: "Fiyat: Düşükten Yükseğe", sort_desc: "Fiyat: Yüksekten Düşüğe",
    sig_title: "Tarzın, Seçimin", sig_desc: "Style Güneş'te her parçayı özenle seçiyor, en kolay şekilde kapına kadar getiriyoruz. Kalıcı kalite, herkese uygun fiyatlar.",
    footer_brand: "Style Güneş", footer_brand_desc: "Modern bir tarzla erkek, kadın ve kız çocuk modası alışverişi, WhatsApp üzerinden doğrudan sipariş.",
    footer_links: "Hızlı Bağlantılar", footer_contact: "Bize Ulaşın", footer_wa: "WhatsApp:", footer_country: "Irak", footer_country2: "Suriye",
    footer_bottom: "© 2026 Style Güneş – Tüm hakları saklıdır",
    cart_title: "Alışveriş Sepeti", cart_total: "Toplam", cart_wa_btn: "Siparişi WhatsApp'tan Gönder",
    cart_note: "Siparişi onaylamak için fatura detayları ve seçilen parçaların fotoğraf bağlantılarıyla WhatsApp açılacaktır.",
    cart_empty: "Sepetiniz boş<br>Favori parçanızı eklemeye başlayın", add_btn: "🛍️ Sepete Ekle", added_btn: "Eklendi ✓",
    remove_btn: "Kaldır", no_results: "😕 Eşleşen sonuç yok", edit_btn_title: "Fiyatları Düzenle",
    pwd_prompt: "Fiyat düzenleme şifresini girin:", pwd_wrong: "Yanlış şifre", saved_msg: "Yeni fiyatlar kaydedildi ✅",
    search_placeholder: "🔍 Ürün numarasına veya adına göre ara",
    service_off_title: "🚧 Hizmet Geçici Olarak Kullanılamıyor", service_off_msg: "Bu bir deneme sayfasıdır. Tüm hizmetler yakında kullanıma sunulacaktır.", service_off_ok: "Tamam",
    country_iq: "Irak", country_sy: "Suriye",
    footer_owner: "Sahibi:", footer_admin: "Sayfa Yöneticisi:",
    bnav_home: "Ana Sayfa", bnav_contact: "İletişim", bnav_camera: "Fotoğrafla Ara", bnav_language: "Dil",
    contact_title: "Bize Ulaşın", contact_wa_group: " WhatsApp", contact_ig_group: " Instagram",
    contact_ig_iq: "Style roj Hesabı", contact_ig_sy: "Teknik Destek Hesabı",
    camera_title: "🔎 Fotoğrafla Ara",
    camera_hint: "Ürünün fotoğrafını çek ya da yükle, mağazamızdaki en yakın parçaları bulalım. (Renk ve genel şekle göre yaklaşık eşleşme)",
    camera_take: "Fotoğraf Çek", camera_upload: "Galeriden Yükle",
    camera_analyzing: "🔄 Fotoğraf analiz ediliyor ve ürünlerimizle eşleştiriliyor...",
    camera_found: "✨ Bulduğumuz en yakın parçalar", camera_none: "😕 Benzer ürün bulunamadı, daha net bir fotoğraf dene",
    camera_error: "⚠️ Fotoğraf okunurken bir hata oluştu, tekrar dene",
    settings_title: "Ayarlar", settings_language: "Dil",
  }
};

let currentLang = localStorage.getItem("boutique_lang") || "ar";

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.ar[key] || key;
}

function applyLanguage(lang) {
  currentLang = translations[lang] ? lang : "ar";
  localStorage.setItem("boutique_lang", currentLang);
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });

  document.querySelectorAll(".lang-option").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === currentLang);
  });
  const langLabel = document.getElementById("currentLangLabel");
  if (langLabel) langLabel.textContent = currentLang.toUpperCase();

  renderFilters();
  renderGallery();
  updateCartUI();
}

/* ============ نظام المظهر (فاتح / داكن) ============ */
function applyTheme(theme) {
  const th = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", th);
  localStorage.setItem("boutique_theme", th);
  const btn = document.getElementById("themeBtn");
  if (btn) btn.textContent = th === "dark" ? "☀️" : "🌙";
}
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  applyTheme(current === "dark" ? "light" : "dark");
}
applyTheme(localStorage.getItem("boutique_theme") || "light");



/* ============ بيانات المنتجات ============ */
const products = [
  // أطفال (مثال جاهز - فعّل السطر لما توصل الصور)
  // { id: 7, name: "طقم رومبير وردي بدانتيل", cat: "أطفال", sub: "بناتي", price: 38, img: "images/children/product-romper.webp", badge: "جديد" },
  // { id: 10, name: "فستان قميصي وردي بحزام", cat: "أطفال", sub: "بناتي", price: 42, img: "images/children/product-dress.webp" },
  // { id: 11, name: "طقم بنطلون وقميص أزرق", cat: "أطفال", sub: "أولادي", price: 40, oldPrice: 52, img: "images/children/product-set.webp", badge: "خصم 20%", sale: true },
{ id: 214, name: "طقم تيشيرت وبنطلون كاروهات للأطفال", cat: "أطفال", sub: "بناتي", price: 17.34, img: "kids/1.webp" },
  { id: 215, name: "طقم تيشيرت وردي وشورت جينز Mommy is my Bestie", cat: "أطفال", sub: "بناتي", price: 7.47, img: "kids/2.webp" },
  { id: 217, name: "مجموعة بنطلون وبلوزة كاجوال للبنات", cat: "أطفال", sub: "بناتي", price: 11.89, img: "kids/4.webp" },
  
  // رجالي 
  { id: 1, name: "طقم رجالي أبيض قميص بأزرار وبنطال مريح", cat: "رجالي", sub: "أطقم منسقة", price: 19, color: "أبيض", img: "men's/1.webp", badge: "" },
  { id: 2, name: "طقم بولو رجالي 3 قطع بألوان كلاسيكية", cat: "رجالي", sub: "ملابس علوية", price: 25.23, color: "", img: "men's/2.webp", badge: "" },
  { id: 3, name: "طقم بولو رجالي 3 قطع كاجوال", cat: "رجالي", sub: "ملابس علوية", price: 23.63, color: "", img: "men's/3.webp", badge: "" },
  { id: 43, name: "طقم رياضي رجالي ابيض قطعتين", cat: "رجالي", sub: "ملابس دينيم", price: 11.95, color: "أبيض", img: "men's/4.webp", badge: "" },
  { id: 44, name: "طقم رياضي رجالي اسود قطعتين", cat: "رجالي", sub: "ملابس دينيم", price: 11.95, color: "اسود", img: "men's/5.webp", badge: "" },
  { id: 45, name: "قميص بولو رجالي أسود مضلع", cat: "رجالي", sub: "ملابس علوية", price: 14, color: "اسود", img: "men's/6.webp", badge: "" },
  { id: 46, name: "تيشيرت رجالي أبيض سادة", cat: "رجالي", sub: "ملابس علوية", price: 8.50, color: "أبيض", img: "men's/7.webp", badge: "" },
  { id: 47, name: "طقم كتان رجالي أبيض فاخر", cat: "رجالي", sub: "أطقم منسقة", price: 29.50, color: "أبيض", img: "men's/8.webp", badge: "" },
  { id: 48, name: "بلوزة رجالية بدون أكمام سوداء", cat: "رجالي", sub: "ملابس علوية", price: 6.86, color: "اسود", img: "men's/9.webp", badge: "" },
  { id: 49, name: "طقم رجالي كاجوال أبيض وكحلي", cat: "رجالي", sub: "أطقم منسقة", price: 24.50, color: "أبيض", img: "men's/10.webp", badge: "" },
  { id: 50, name: "قميص بولو رجالي أبيض بنقشة بارزة", cat: "رجالي", sub: "ملابس علوية", price: 14.05, color: "أبيض", img: "men's/11.webp", badge: "" },
  { id: 51, name: "تيشيرت رجالي أسود مضلع", cat: "رجالي", sub: "ملابس علوية", price: 14.58, color: "اسود", img: "men's/12.webp", badge: "" },
  { id: 52, name: "باك 4 تيشيرتات رجالية قطنية", cat: "رجالي", sub: "ملابس علوية", price: 24.43, color: "أبيض", img: "men's/13.webp", badge: "" },
  { id: 53, name: "طقم رجالي بيج فاخر بقماش محبوك", cat: "رجالي", sub: "أطقم منسقة", price: 10.32, color: "أبيض", img: "men's/14.webp", badge: "" },
  { id: 54, name: "تيشيرت رجالي أسود بتدرج رمادي", cat: "رجالي", sub: "ملابس علوية", price: 10.32, color: "أبيض", img: "men's/15.webp", badge: "" },
  { id: 55, name: "طقم رجالي بني مع بنطال أبيض", cat: "رجالي", sub: "أطقم منسقة", price: 19.64, color: "أبيض", img: "men's/16.webp", badge: "" },
  { id: 56, name: "طقم صيفي رجالي بيج بقميص وبنطال", cat: "رجالي", sub: "أطقم منسقة", price: 21, color: "أبيض", img: "men's/18.webp", badge: "" },
  { id: 57, name: "طقم رجالي بني أنيق بقميص ياقة صينية", cat: "رجالي", sub: "أطقم منسقة", price: 23.63, color: "أبيض", img: "men's/19.webp", badge: "" },
  { id: 58, name: "طقم رجالي صيفي أخضر فاتح (تيشيرت وشورت)", cat: "رجالي", sub: "أطقم منسقة", price: 19.90, color: "أبيض", img: "men's/20.webp", badge: "" },
  { id: 59, name: "طقم رجالي بيج فاخر بنقشة مربعات", cat: "رجالي", sub: "ملابس علوية", price: 16.71, color: "أبيض", img: "men's/21.webp", badge: "" },
  { id: 60, name: "بولو رجالي أبيض محبوك بسحاب ويا", cat: "رجالي", sub: "أطقم منسقة", price: 19.64, color: "أبيض", img: "men's/22.webp", badge: "" },
  { id: 61, name: "طقم رجالي صيفي أبيض بقماش كريب مجعد", cat: "رجالي", sub: "أطقم منسقة", price: 24.70, color: "أبيض", img: "men's/23.webp", badge: "" },
  { id: 62, name: "شورت رياضي رجالي قطعتين", cat: "رجالي", sub: "ملابس سفلية", price: 17.51, color: "أبيض", img: "men's/17.webp", badge: "" },


  // حريمي
  { id: 12, name: "تنورة طويلة بيضاء بطبقات", cat: "حريمي", sub: "تنانير", price: 15, color: "أبيض", img: "female/1.webp" },
  { id: 13, name: "تنورة طويلة مطبوعة أزرق وأبيض", cat: "حريمي", sub: "تنانير", price: 14, color: "أزرق مطبوع", img: "female/2.webp" },
  { id: 14, name: "تنورة بنطلون كحلية بحزام", cat: "حريمي", sub: "تنانير", price: 10, color: "كحلي", img: "female/3.webp" },
  { id: 15, name: "تنورة بني غامق بأزرار جانبية", cat: "حريمي", sub: "تنانير", price: 14, color: "بني غامق", img: "female/4.webp" },
  { id: 16, name: "تنورة كشمير أصفر كاروهات", cat: "حريمي", sub: "تنانير", price: 12, color: "أصفر كاروهات", img: "female/5.webp" },
  { id: 17, name: "تنورة بيضاء بحزام مطرز بألوان", cat: "حريمي", sub: "تنانير", price: 17, color: "أبيض بحزام ملون", img: "female/6.webp" },
  { id: 18, name: "تنورة طويلة بني غامق بطبقات", cat: "حريمي", sub: "تنانير", price: 12, color: "بني غامق", img: "female/7.webp" },
  { id: 19, name: "تنورة جينز أزرق فاتح", cat: "حريمي", sub: "تنانير", price: 18, color: "أزرق جينز فاتح", img: "female/8.webp" },
  { id: 20, name: "تنورة شيفون أخضر زيتي بطبقات", cat: "حريمي", sub: "تنانير", price: 15, color: "أخضر زيتي", img: "female/9.webp" },
  { id: 26, name: "فستان ساتان موف بحزام سلسلة", cat: "حريمي", sub: "فساتين", price: 26, color: "موف", img: "female/10.webp" },
  { id: 27, name: "طقم بلوزة سوداء وتنورة لفّة بيضاء", cat: "حريمي", sub: "أطقم منسقة", price: 27, color: "أسود وأبيض", img: "female/11.webp" },
  { id: 28, name: "فستان ساتان وردي مموّه بسحاب", cat: "حريمي", sub: "فساتين", price: 26, color: "وردي مموّه", img: "female/12.webp" },
  { id: 29, name: "فستان سهرة نبيتي بترتر ودانتيل", cat: "حريمي", sub: "فساتين", price: 33, color: "نبيتي", img: "female/13.webp" },
  { id: 30, name: "فستان دانتيل نبيتي بأكمام جرس", cat: "حريمي", sub: "فساتين", price: 24, color: "نبيتي", img: "female/14.webp" },
  { id: 31, name: "طقم كحلي ببلوزة وتنورة شيفون وحزام", cat: "حريمي", sub: "أطقم منسقة", price: 28, color: "كحلي", img: "female/15.webp" },
  { id: 32, name: "طقم بني دگراديه ببلوزة وتنورة شيفون", cat: "حريمي", sub: "أطقم منسقة", price: 26, color: "بني دگراديه", img: "female/16.webp" },
  { id: 33, name: "فستان سهرة أخضر فستقي بياقة مرصعة", cat: "حريمي", sub: "فساتين", price: 26, color: "أخضر فستقي", img: "female/17.webp" },
  { id: 34, name: "طقم كروب توب أسود وتنورة تاي داي", cat: "حريمي", sub: "أطقم منسقة", price: 21, color: "أسود وبرتقالي", img: "female/18.webp" },

  // حريمي (دفعة جديدة)
  { id: 158, name: "طقم بلوزة وبنطلون مطبوع أبيض وأسود", cat: "حريمي", sub: "أطقم منسقة", price: 16.52, img: "female/19.webp" },
  { id: 159, name: "بنطلون أسود واسع", cat: "حريمي", sub: "ملابس سفلية", price: 13.52, img: "female/20.webp" },
  { id: 160, name: "طقم بيج كارديجان وبنطلون", cat: "حريمي", sub: "أطقم منسقة", price: 19.79, img: "female/21.webp" },
  { id: 161, name: "كارديجان بيج", cat: "حريمي", sub: "ملابس علوية", price: 9.98, img: "female/22.webp" },
  { id: 162, name: "طقم بيج بنطلون وبلوزة", cat: "حريمي", sub: "أطقم منسقة", price: 15.70, img: "female/23.webp" },
  { id: 163, name: "طقم بيج توب وبنطلون مع شنطة", cat: "حريمي", sub: "أطقم منسقة", price: 15.70, img: "female/24.webp" },
  { id: 164, name: "تنورة سوداء طويلة", cat: "حريمي", sub: "تنانير", price: 16.25, img: "female/25.webp" },
  { id: 165, name: "طقم بني بلوزة وبنطلون", cat: "حريمي", sub: "أطقم منسقة", price: 18.15, img: "female/26.webp" },
  { id: 166, name: "فستان أبيض بأزرار", cat: "حريمي", sub: "فساتين", price: 15.43, img: "female/27.webp" },
  { id: 167, name: "طقم بلوزات أسود وليوبارد وبني", cat: "حريمي", sub: "ملابس علوية", price: 12.98, img: "female/28.webp" },
  { id: 168, name: "طقم بيج سترة وبنطلون وتوب", cat: "حريمي", sub: "أطقم منسقة", price: 16.25, img: "female/29.webp" },
  { id: 169, name: "طقم بيج توب وبنطلون", cat: "حريمي", sub: "أطقم منسقة", price: 14.61, img: "female/30.webp" },
  { id: 170, name: "طقم بلوزة وبنطلون زيتي", cat: "حريمي", sub: "أطقم منسقة", price: 15.97, img: "female/31.webp" },
  { id: 171, name: "طقم جاكيت جلد أسود وبنطلون وتنورة", cat: "حريمي", sub: "أطقم منسقة", price: 29.04, img: "female/32.webp" },
  { id: 172, name: "طقم تيشيرتات مخططة", cat: "حريمي", sub: "ملابس علوية", price: 6.72, img: "female/33.webp" },
  { id: 173, name: "جمبسوت بيج", cat: "حريمي", sub: "أطقم منسقة", price: 18.15, img: "female/34.webp" },
  { id: 174, name: "طقم بناطيل واسعة بألوان متعددة", cat: "حريمي", sub: "ملابس سفلية", price: 14.88, img: "female/35.webp" },
  { id: 175, name: "طقم بيجامة وردية منقطة", cat: "حريمي", sub: "أطقم منسقة", price: 14.89, img: "female/36.webp" },
  { id: 176, name: "طقم فستان مطبوع وكارديجان بنفسجي", cat: "حريمي", sub: "أطقم منسقة", price: 18.70, img: "female/37.webp" },
  { id: 177, name: "طقم رياضي كحلي هودي وبنطلون", cat: "حريمي", sub: "أطقم منسقة", price: 26.32, img: "female/38.webp" },
  { id: 178, name: "بنطلون جينز واسع نسائي", cat: "حريمي", sub: "ملابس سفلية", price: 23.87, img: "female/39.webp" },
  { id: 179, name: "جمبسوت أبيض", cat: "حريمي", sub: "أطقم منسقة", price: 25.77, img: "female/40.webp" },
  { id: 180, name: "بلوزة مخططة أبيض وأسود", cat: "حريمي", sub: "ملابس علوية", price: 6.99, img: "female/41.webp" },
  { id: 181, name: "طقم كارديجان بني وقميص", cat: "حريمي", sub: "أطقم منسقة", price: 13.52, img: "female/42.webp" },
  { id: 182, name: "معطف نسائي بني طويل", cat: "حريمي", sub: "ملابس علوية", price: 16.79, img: "female/43.webp" },
  { id: 183, name: "فستان أصفر طويل", cat: "حريمي", sub: "فساتين", price: 17.33, img: "female/44.webp" },
  { id: 184, name: "بلوزة مطرزة بيج وأزرق", cat: "حريمي", sub: "ملابس علوية", price: 8.09, img: "female/45.webp" },
  { id: 185, name: "جاكيت بليزر أسود", cat: "حريمي", sub: "ملابس علوية", price: 9.44, img: "female/46.webp" },
  { id: 186, name: "تنورة كاروهات بنية طويلة", cat: "حريمي", sub: "تنانير", price: 14.88, img: "female/47.webp" },
  { id: 187, name: "طقم بلوزات أساسية أبيض وأسود", cat: "حريمي", sub: "ملابس علوية", price: 12.98, img: "female/48.webp" },
  { id: 188, name: "طقم أبيض بلوزة وبنطلون", cat: "حريمي", sub: "أطقم منسقة", price: 18.70, img: "female/49.webp" },
  { id: 189, name: "بنطلون بني واسع", cat: "حريمي", sub: "ملابس سفلية", price: 13.91, img: "female/50.webp" },
  { id: 190, name: "جاكيت جلد بني", cat: "حريمي", sub: "ملابس علوية", price: 23.87, img: "female/51.webp" },
  { id: 191, name: "طقم تنانير كحلي وعنابي وبيج", cat: "حريمي", sub: "تنانير", price: 22.78, img: "female/52.webp" },
  { id: 192, name: "طقم ملابس منزلية أزرق مطبوع", cat: "حريمي", sub: "أطقم منسقة", price: 8.62, img: "female/53.webp" },
  { id: 193, name: "بنطلون جلد بني", cat: "حريمي", sub: "ملابس سفلية", price: 15.43, img: "female/54.webp" },
  { id: 194, name: "طقم توب وتنورة جينز بني", cat: "حريمي", sub: "أطقم منسقة", price: 6.44, img: "female/55.webp" },
  { id: 195, name: "بلوزة بولو بيضاء", cat: "حريمي", sub: "ملابس علوية", price: 15.43, img: "female/56.webp" },
  { id: 196, name: "بنطلون أسود واسع", cat: "حريمي", sub: "ملابس سفلية", price: 14.61, img: "female/57.webp" },
  { id: 197, name: "هودي أزرق NYC", cat: "حريمي", sub: "ملابس علوية", price: 16.52, img: "female/58.webp" },
  { id: 198, name: "بلوزة زرقاء بأكمام مطرزة", cat: "حريمي", sub: "ملابس علوية", price: 6.99, img: "female/59.webp" },
  { id: 199, name: "بنطلون أسود واسع", cat: "حريمي", sub: "ملابس سفلية", price: 14.61, img: "female/60.webp" },
  { id: 200, name: "تنورة سوداء طويلة", cat: "حريمي", sub: "تنانير", price: 17.06, img: "female/61.webp" },
  { id: 201, name: "بلوزة بيضاء واسعة", cat: "حريمي", sub: "ملابس علوية", price: 11.89, img: "female/62.webp" },

  // حريمي (دفعة جديدة 63-74)
  { id: 218, name: "قميص أزرق مخطط فضفاض", cat: "حريمي", sub: "ملابس علوية", price: 11.35, img: "female/63.webp" },
  { id: 219, name: "تيشيرت أبيض بطبعة كرز", cat: "حريمي", sub: "ملابس علوية", price: 6.44, img: "female/64.webp" },
  { id: 220, name: "طقم رمادي توب وبنطلون واسع", cat: "حريمي", sub: "أطقم منسقة", price: 15.16, img: "female/65.webp" },
  { id: 221, name: "بنطلون أبيض واسع بحزام", cat: "حريمي", sub: "ملابس سفلية", price: 18.15, img: "female/66.webp" },
  { id: 222, name: "سترة بولو كحلية بياقة بيضاء", cat: "حريمي", sub: "ملابس علوية", price: 13.80, img: "female/67.webp" },
  { id: 223, name: "طقم بيج توب وبنطلون واسع", cat: "حريمي", sub: "أطقم منسقة", price: 14.89, img: "female/68.webp" },
  { id: 224, name: "طقم بيجامة وردية مخططة ستان", cat: "حريمي", sub: "أطقم منسقة", price: 15.43, img: "female/69.webp" },
  { id: 225, name: "طقم أزرق فاتح قميص وبنطلون", cat: "حريمي", sub: "أطقم منسقة", price: 20.60, img: "female/70.webp" },
  { id: 226, name: "فستان أصفر مزهر", cat: "حريمي", sub: "فساتين", price: 25.78, img: "female/71.webp" },
  { id: 227, name: "جاكيت دانتيل كريمي", cat: "حريمي", sub: "ملابس علوية", price: 16.25, img: "female/72.webp" },
  { id: 228, name: "فستان أخضر مزهر", cat: "حريمي", sub: "فساتين", price: 25.23, img: "female/73.webp" },
  { id: 229, name: "طقم عنابي بلوزة وبنطلون", cat: "حريمي", sub: "أطقم منسقة", price: 26.86, img: "female/74.webp" },
  // أحذية
  { id: 8, name: "حذاء كلاسيك جلديشعر صناعي أحمر عنابي طويل", cat: "أحذية", sub: "كلاسيك", price: 9, img: "shoes/1.webp" },
  { id: 21, name: "صندل كعب نبيتي بفيونكة ساتان", cat: "أحذية", sub: "صنادل", price: 17, color: "نبيتي", img: "shoes/2.webp" },
  { id: 22, name: "صندل كعب نبيتي بفيونكة كبيرة", cat: "أحذية", sub: "صنادل", price: 17, color: "نبيتي", img: "shoes/3.webp" },
  { id: 23, name: "كعب مرصّع بالكريستال والورود", cat: "أحذية", sub: "كعوب", price: 17, color: "وردي مرصّع", img: "shoes/4.webp" },
  // { id: 24, name: "صندل كعب بيج بتصميم كروشيه", cat: "أحذية", sub: "صنادل", price: 13, color: "بيج", img: "shoes/5.webp" },

  // إكسسوارات (مثال جاهز - فعّل السطر لما توصل الصور)
  { id: 40, name: "     لشعر مستعار نبيتي", cat: "إكسسوارات", sub: "شعر مستعار", price: 9, color: "لون خمري", img: "accessories/1.webp" },
  { id: 41, name: "شنطة يد سوداء كبيرة", cat: "إكسسوارات", sub: "جنط", price: 7.53, img: "accessories/13.webp" },
  { id: 42, name: "طقم مجوهرات وساعة في علبة هدية", cat: "إكسسوارات", sub: "مجوهرات", price: 2.91, img: "accessories/34.webp" },

  // إكسسوارات (دفعة جديدة)
  { id: 63, name: "ساعة يد نسائية كلاسيك بسوار ذهبي", cat: "إكسسوارات", sub: "ساعات", price: 4.54, img: "accessories/2.webp" },
  { id: 64, name: "كفر آيفون أبيض بنقشة ورد", cat: "إكسسوارات", sub: "اكسسوارات موبايل", price: 2.91, img: "accessories/3.webp" },
  { id: 65, name: "شنطة يد بيضاء بتفاصيل مطرزة", cat: "إكسسوارات", sub: "جنط", price: 14.7, img: "accessories/4.webp" },
  { id: 72, name: "كفر آيفون وردي مع حبل حمل", cat: "إكسسوارات", sub: "اكسسوارات موبايل", price: 5.8, img: "accessories/5.webp" },
  { id: 73, name: "كفر آيفون فوشيا", cat: "إكسسوارات", sub: "اكسسوارات موبايل", price: 5.8, img: "accessories/6.webp" },
 // { id: 76, name: "طقم مجوهرات فاخر مع صندوق عرض", cat: "إكسسوارات", sub: "مجوهرات", price: 0.00, img: "accessories/7.webp" ,badge: "منتهي" },
  { id: 77, name: "طقم جوارب رمادي وأسود", cat: "إكسسوارات", sub: "جوارب", price: 2.91, img: "accessories/8.webp" },
  { id: 78, name: "طقم ساعة فضي وذهبي", cat: "إكسسوارات", sub: "ساعات", price: 19.24, img: "accessories/9.webp" },
  { id: 79, name: "طقم أساور ذهبية معلقة", cat: "إكسسوارات", sub: "مجوهرات", price: 2.63, img: "accessories/10.webp" },
  { id: 81, name: "شنطة يد سوداء بتفصيل وشاح", cat: "إكسسوارات", sub: "جنط", price: 7.26, img: "accessories/11.webp" },
  { id: 83, name: "سوار انفينتي ذهبي", cat: "إكسسوارات", sub: "مجوهرات", price: 2.63, img: "accessories/12.webp" },
  { id: 93, name: "شنطة قش بيضاء بزهرة", cat: "إكسسوارات", sub: "جنط", price: 8.71, img: "accessories/14.webp" },
  { id: 94, name: "مشابك شعر خشبية متنوعة", cat: "إكسسوارات", sub: "إكسسوارات شعر", price: 2.36, img: "accessories/15.webp" },
  { id: 98, name: "شنطة كتف سوداء بفيونكة", cat: "إكسسوارات", sub: "جنط", price: 15.16, img: "accessories/16.webp" },
  { id: 99, name: "جوارب متوسطة الطول للأطفال/البنات 20", cat: "إكسسوارات", sub: " جوارب", price: 5.36, img: "accessories/17.webp" },
  { id: 100, name: "طقم أساور ذهبية 10 قطع", cat: "إكسسوارات", sub: "مجوهرات", price: 3.45, img: "accessories/18.webp" },
  { id: 101, name: "طقم نظارات شمسية 6 أزواج", cat: "إكسسوارات", sub: "نظارات", price: 8.35, img: "accessories/19.webp" },
  { id: 107, name: "طقم شنط قش قطعتين", cat: "إكسسوارات", sub: "جنط", price: 8.8, img: "accessories/20.webp" },
  { id: 108, name: "كفر آيفون أسود بقلب وسلسلة", cat: "إكسسوارات", sub: "اكسسوارات موبايل", price: 3.18, img: "accessories/21.webp" },
  { id: 230, name: "كفر آيفون أزرق بنقشة فراشات", cat: "إكسسوارات", sub: "اكسسوارات موبايل", price: 4.27, img: "accessories/42.webp" },
  { id: 231, name: "شنطة يد بيج بحزام أسود", cat: "إكسسوارات", sub: "جنط", price: 7.26, img: "accessories/43.webp" },
  { id: 232, name: "مجموعة ربطات شعر متنوعة", cat: "إكسسوارات", sub: "إكسسوارات شعر", price: 3.18, img: "accessories/44.webp" },
  { id: 112, name: "شنطة يد جلد بني", cat: "إكسسوارات", sub: "جنط", price: 8.36, img: "accessories/22.webp" },
  { id: 119, name: "بونيه ساتان للشعر", cat: "إكسسوارات", sub: "إكسسوارات شعر", price: 2.36, img: "accessories/23.webp" },
  { id: 120, name: "ساعة يد ذهبية", cat: "إكسسوارات", sub: "ساعات", price: 5.36, img: "accessories/24.webp" },
  { id: 122, name: "طقم نظارتين شمسيتين", cat: "إكسسوارات", sub: "نظارات", price: 1.82, img: "accessories/25.webp" },
  { id: 126, name: "طقم خرز DIY لصناعة الإكسسوارات", cat: "إكسسوارات", sub: "مجوهرات", price: 1.84, img: "accessories/26.webp" },
  { id: 134, name: "قطعة حامل هاتف سيليكون بكوب شفط", cat: "إكسسوارات", sub: "اكسسوارات موبايل", price: 2.36, img: "accessories/27.webp" },
  { id: 135, name: "حامل هاتف بتصميم أرنب", cat: "إكسسوارات", sub: "اكسسوارات موبايل", price: 2.9, img: "accessories/28.webp" },
  { id: 139, name: "طقم جوارب قصيرة 5 إلى 10 أزواج", cat: "إكسسوارات", sub: "جوارب", price: 4.81, img: "accessories/29.webp" },
  { id: 140, name: "طقم جوارب نسائية متنوعة", cat: "إكسسوارات", sub: "جوارب", price: 5.36, img: "accessories/30.webp" },
  { id: 141, name: "طقم جوارب بيضاء بتفاصيل دانتيل", cat: "إكسسوارات", sub: "جوارب", price: 2.63, img: "accessories/31.webp" },
  { id: 142, name: "طقم جوارب أسود وأبيض 30 زوج", cat: "إكسسوارات", sub: "جوارب", price: 2.36, img: "accessories/32.webp" },
  { id: 144, name: "سوار خرز ملون", cat: "إكسسوارات", sub: "مجوهرات", price: 2.91, img: "accessories/33.webp" },
  { id: 145, name: "طقم جوارب أطفال 5 إلى 10 أزواج", cat: "إكسسوارات", sub: "جوارب", price: 7.53, img: "accessories/35.webp" },
  { id: 147, name: "طقم مشابك شعر ملونة 12 قطعة", cat: "إكسسوارات", sub: "إكسسوارات شعر", price: 2.36, img: "accessories/36.webp" },
  { id: 148, name: "حامل ربطات شعر دوار 6 قطع", cat: "إكسسوارات", sub: "إكسسوارات شعر", price: 2.9, img: "accessories/37.webp" },
  { id: 150, name: "طقم ساعة وسوار هدية", cat: "إكسسوارات", sub: "ساعات", price: 2.63, img: "accessories/38.webp" },
  { id: 151, name: "سوار خرز فضي وأزرق", cat: "إكسسوارات", sub: "مجوهرات", price: 2.9, img: "accessories/39.webp" },
  { id: 153, name: "طقم ساعة ومجوهرات 5 قطع", cat: "إكسسوارات", sub: "ساعات", price: 3.72, img: "accessories/40.webp" },
  { id: 154, name: "طقم مشابك شعر وردية 100 قطعة", cat: "إكسسوارات", sub: "إكسسوارات شعر", price: 2.9, img: "accessories/41.webp" },

  // مكياج (قسم جديد)
  { id: 66, name: "طقم مكياج عيون مسكرا وآيلاينر 3 قطع ", cat: "مكياج", sub: "مكياج", price: 7.26, img: "makeup/1.webp" },
  { id: 67, name: "لوس باودر ", cat: "مكياج", sub: "مكياج", price: 7.26, img: "makeup/2.webp" },
  { id: 68, name: "شنطة تجميل مبطنة متعددة الأقسام", cat: "مكياج", sub: "أدوات تجميل", price: 6.17, img: "makeup/3.webp" },
  { id: 69, name: "ظل عيون كريمي بعلبتين بني وذهبي", cat: "مكياج", sub: "مكياج", price: 5.63, img: "makeup/4.webp" },
  { id: 70, name: "طقم عناية بالبشرة برايمر وبخاخ", cat: "مكياج", sub: "عناية بالبشرة", price: 15.70, img: "makeup/5.webp" },
  { id: 71, name: "اظافر زينة للقدم120 قطعة ", cat: "مكياج", sub: "عناية بالأظافر", price: 3.45, img: "makeup/6.webp" },
  { id: 74, name: "طقم فرش مكياج 8 قطع", cat: "مكياج", sub: "أدوات تجميل", price: 11.7, img: "makeup/7.webp" },
  { id: 75, name: "قلم آيلاينر مزدوج الرأس", cat: "مكياج", sub: "مكياج", price: 5.8, img: "makeup/8.webp" },
  { id: 80, name: "جهاز صنفرة أظافر كهربائي", cat: "مكياج", sub: "عناية بالأظافر", price: 3.72, img: "makeup/9.webp" },
  { id: 82, name: "طقم عناية بالأظافر أخضر", cat: "مكياج", sub: "عناية بالأظافر", price: 3.45, img: "makeup/10.webp" },
  { id: 84, name: "بالت ظلال عيون ملونة", cat: "مكياج", sub: "مكياج", price: 8.62, img: "makeup/11.webp" },
  { id: 85, name: "بالت ظلال عيون ", cat: "مكياج", sub: "مكياج", price: 6.17, img: "makeup/12.webp" },
  { id: 86, name: "طلاء أظافر بغطاء ذهبي", cat: "مكياج", sub: "عناية بالأظافر", price: 4.54, img: "makeup/13.webp" },
  { id: 87, name: "طقم أقلام تحديد شفاه", cat: "مكياج", sub: "مكياج", price: 3.99, img: "makeup/14.webp" },
  { id: 88, name: "طقم ومرطب شفاه نود ", cat: "مكياج", sub: "مكياج", price: 7.26, img: "makeup/15.webp" },
  { id: 89, name: "قلم تصحيح كونسيلر", cat: "مكياج", sub: "مكياج", price: 7.52, img: "makeup/16.webp" },
  { id: 90, name: "كونسيلر تغطية عالية", cat: "مكياج", sub: "مكياج", price: 7.26, img: "makeup/17.webp" },
  { id: 91, name: "مسكارا وآيلاينر ووتربروف أسود", cat: "مكياج", sub: "مكياج", price: 9.71, img: "makeup/18.webp" },
  { id: 92, name: "جهاز تجفيف جل و اكليرك", cat: "مكياج", sub: "عناية بالأظافر", price: 5.8, img: "makeup/19.webp" },
  { id: 95, name: "أظافر ضغط جاهزة تصاميم داكنة 10 قطع", cat: "مكياج", sub: "عناية بالأظافر", price: 3.18, img: "makeup/20.webp" },
  { id: 96, name: "أظافر ضغط جاهزة نيود ووردي", cat: "مكياج", sub: "عناية بالأظافر", price: 3.99, img: "makeup/21.webp" },
  { id: 97, name: "طلاء جل أظافر 288 قطعة", cat: "مكياج", sub: "عناية بالأظافر", price: 4.54, img: "makeup/22.webp" },
  { id: 102, name: "بالت ظلال عيون", cat: "مكياج", sub: "مكياج", price: 10.26, img: "makeup/23.webp" },
  { id: 103, name: "طلاء جل أظافر 36 لون", cat: "مكياج", sub: "عناية بالأظافر", price: 2.63, img: "makeup/24.webp" },
  //{ id: 104, name: "طلاء جل أظافر 36 لون - تشكيلة ثانية", cat: "مكياج", sub: "عناية بالأظافر", price: 0, img: "makeup/25.webp" },
  { id: 105, name: "طقم مقص أظافر مغناطيسي", cat: "مكياج", sub: "عناية بالأظافر", price: 2.9, img: "makeup/26.webp" },
  { id: 106, name: "طقم قوالب أظافر مطبقة", cat: "مكياج", sub: "عناية بالأظافر", price: 3.72, img: "makeup/27.webp" },
  { id: 109, name: "طقم شفاه 2 في 1 لاينر ولمعان", cat: "مكياج", sub: "مكياج", price: 7.72, img: "makeup/28.webp" },
  { id: 110, name: "مجموعة بيوتي بلاندر 50 قطعة تشمل 10 اشكال", cat: "مكياج", sub: "أدوات تجميل", price: 2.63, img: "makeup/29.webp" },
  { id: 111, name: "عصا بلاش شفافة", cat: "مكياج", sub: "مكياج", price: 7.26, img: "makeup/30.webp" },
  { id: 113, name: "طقم احمر شفاه لامع", cat: "مكياج", sub: "مكياج", price: 8.8, img: "makeup/31.webp" },
  { id: 114, name: "طقم فرش مكياج 15 قطعة مع حافظة", cat: "مكياج", sub: "أدوات تجميل", price: 9.44, img: "makeup/32.webp" },
  { id: 115, name: "عصا هايلايتر", cat: "مكياج", sub: "مكياج", price: 7.26, img: "makeup/33.webp" },
  { id: 116, name: "طقم مجموعة أنامل مكون من خواتم 21/64", cat: "إكسسوارات", sub: "مجوهرات", price: 3.72, img: "makeup/34.webp" },
  { id: 117, name: "طقم تينت قابل للتقشير", cat: "مكياج", sub: "مكياج", price: 5.8, img: "makeup/35.webp" },
  { id: 118, name: "مجموعة أدوات الرموش والحواجب", cat: "مكياج", sub: "أدوات تجميل", price: 3.18, img: "makeup/36.webp" },
  { id: 121, name: "جل تصفيف الحواجب", cat: "مكياج", sub: "مكياج", price: 5.8, img: "makeup/37.webp" },
  { id: 123, name: "منظم فرش مكياج للطاولة", cat: "مكياج", sub: "أدوات تجميل", price: 3.72, img: "makeup/38.webp" },
  //{ id: 125, name: "طقم عناية بالجسم صابون وفرشاة تدليك", cat: "مكياج", sub: "عناية بالبشرة", price: 0, img: "makeup/39.webp" },
  { id: 128, name: "قفازات حمام رقيقة مقشرة", cat: "مكياج", sub: "عناية بالبشرة", price: 2.91, img: "makeup/40.webp" },
  { id: 130, name: "قناع نوم على شكل باندا", cat: "مكياج", sub: "عناية بالبشرة", price: 2.91, img: "makeup/41.webp" },
  { id: 132, name: "مجوعة ادوات للعناية بالبشرة", cat: "مكياج", sub: "أدوات تجميل", price: 2.9, img: "makeup/42.webp" },
  { id: 133, name: "عبوة ماء بلاستيك و مقاوم للحارة", cat: "مكياج", sub: "عناية بالبشرة", price: 6.17, img: "makeup/43.webp" },
  { id: 143, name: "طقم فرش مكياج بحافظة فيونكة", cat: "مكياج", sub: "أدوات تجميل", price: 1.82, img: "makeup/44.webp" },

  // أدوات منزلية (قسم جديد)
  { id: 124, name: "خفاقة حليب كهربائية للقهوة", cat: "أدوات منزلية", sub: "", price: 3.72, img: "home/1.webp" },
  { id: 127, name: "طقم مناشف فاخرة 4 إلى 8 قطع", cat: "أدوات منزلية", sub: "", price: 6.17, img: "home/2.webp" },
  { id: 129, name: "مرآة مكياج كبيرة بإضاءة", cat: "أدوات منزلية", sub: "", price: 6.17, img: "home/3.webp" },
  { id: 131, name: "طقم أكواب حرارية ملونة", cat: "أدوات منزلية", sub: "", price: 3.18, img: "home/4.webp" },
  { id: 136, name: "صندوق تنظيم مكياج ومستحضرات", cat: "أدوات منزلية", sub: "", price: 5.36, img: "home/5.webp" },
  { id: 137, name: "طقم حقائب تخزين ملابس", cat: "أدوات منزلية", sub: "", price: 2.36, img: "home/6.webp" },
  { id: 138, name: "آلة خياطة محمولة صغيرة", cat: "أدوات منزلية", sub: "", price: 1.82, img: "home/7.webp" },
  { id: 146, name: "حافظة اقلام أبداعية بسعة كبير", cat: "أدوات منزلية", sub: "", price: 5.26, img: "home/8.webp" },
  { id: 155, name: "جهاز اغلاق حراري محمول", cat: "أدوات منزلية", sub: "", price: 3.18, img: "home/13.webp" },
  { id: 152, name: "كوب حراري بتصميم كرز", cat: "أدوات منزلية", sub: "", price: 14.88, img: "home/9.webp" },
  { id: 156, name: "طقم أغطية مخدات ساتان فاخرة", cat: "أدوات منزلية", sub: "", price: 2.91, img: "home/10.webp" },
  { id: 157, name: "جهاز إزالة وبر الأقمشة قابل للشحن", cat: "أدوات منزلية", sub: "", price: 7.26, img: "home/11.webp" },
  { id: 233, name: "منظم مكتبي متعدد الأدراج", cat: "أدوات منزلية", sub: "", price: 4.86, img: "home/12.webp" },

  // أحذية (إضافة أطفال)
  { id: 149, name: "طقم أحذية أطفال دونات 4 قطع", cat: "أحذية", sub: "أطفال", price: 6.17, img: "shoes/17.webp" },
];

const categories = ["الكل", "رجالي", "حريمي", "أطفال", "أحذية", "إكسسوارات", "مكياج", "أدوات منزلية"];
const catKeyMap = { "الكل": "cat_all", "رجالي": "cat_men", "حريمي": "cat_women", "أطفال": "cat_kids", "أحذية": "cat_shoes", "إكسسوارات": "cat_acc", "مكياج": "cat_makeup", "أدوات منزلية": "cat_home" };

/* ============ التصنيفات الفرعية لكل فئة رئيسية ============ */
const subcatsByCat = {
  "رجالي": ["ملابس علوية", "أطقم منسقة", "ملابس سفلية", "ملابس دينيم"],
  "حريمي": ["تنانير", "فساتين", "أطقم منسقة", "ملابس علوية", "ملابس سفلية"],
  "أطفال": ["بناتي", "أولادي"],
  "أحذية": ["صنادل", "كعوب", "كلاسيك", "أطفال"],
  "إكسسوارات": ["جنط", "مجوهرات", "ساعات", "اكسسوارات موبايل", "نظارات", "جوارب", "إكسسوارات شعر", "شعر مستعار"],
  "مكياج": ["مكياج", "عناية بالأظافر", "أدوات تجميل", "عناية بالبشرة"],
};
const subKeyMap = {
  "ملابس علوية": "sub_top", "أطقم منسقة": "sub_sets", "ملابس سفلية": "sub_bottom", "ملابس دينيم": "sub_denim",
  "فساتين": "sub_dresses", "تنانير": "sub_skirts", "بناتي": "sub_girls", "أولادي": "sub_boys",
  "صنادل": "sub_sandals", "كعوب": "sub_heels", "كلاسيك": "sub_classic", "أطفال": "sub_kidshoes",
  "شعر مستعار": "sub_hair", "جنط": "sub_bags", "مجوهرات": "sub_jewelry",
  "مكياج": "sub_makeup", "عناية بالأظافر": "sub_nailcare", "أدوات تجميل": "sub_beautytools", "عناية بالبشرة": "sub_skincare",
  "اكسسوارات موبايل": "sub_phoneacc", "نظارات": "sub_sunglasses", "ساعات": "sub_watches", "جوارب": "sub_socks", "إكسسوارات شعر": "sub_hairacc",
};
let activeCat = "الكل";
let activeSub = "الكل";
let cart = []; // {id, qty}

/* ============ عرض الفلاتر (رئيسية + فرعية) ============ */
const filtersEl = document.getElementById("filters");
const subfiltersEl = document.getElementById("subfilters");
function buildFilters() {
  filtersEl.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === activeCat ? " active" : "");
    btn.textContent = t(catKeyMap[cat] || cat);
    btn.dataset.cat = cat;
    btn.onclick = () => { activeCat = cat; activeSub = "الكل"; renderFilters(); renderGallery(); };
    filtersEl.appendChild(btn);
  });
  buildSubFilters();
}
function buildSubFilters() {
  if (!subfiltersEl) return;
  const subs = subcatsByCat[activeCat];
  if (!subs || !subs.length) {
    subfiltersEl.innerHTML = "";
    subfiltersEl.style.display = "none";
    return;
  }
  subfiltersEl.style.display = "flex";
  subfiltersEl.innerHTML = "";
  const allBtn = document.createElement("button");
  allBtn.className = "subfilter-btn" + (activeSub === "الكل" ? " active" : "");
  allBtn.textContent = t("cat_all");
  allBtn.onclick = () => { activeSub = "الكل"; renderFilters(); renderGallery(); };
  subfiltersEl.appendChild(allBtn);
  subs.forEach(sub => {
    const btn = document.createElement("button");
    btn.className = "subfilter-btn" + (sub === activeSub ? " active" : "");
    btn.textContent = t(subKeyMap[sub] || sub);
    btn.onclick = () => { activeSub = sub; renderFilters(); renderGallery(); };
    subfiltersEl.appendChild(btn);
  });
}
function renderFilters() {
  buildFilters();
}

/* ============ تفعيل الفلترة من مربعات الفئات بالأعلى ============ */
document.querySelectorAll(".cat-tile").forEach(tile => {
  tile.onclick = () => {
    activeCat = tile.dataset.cat;
    activeSub = "الكل";
    renderFilters();
    renderGallery();
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
  };
});

/* ============ عرض المعرض ============ */
const shuffleRank = {};
[...products].sort(() => Math.random() - 0.5).forEach((p, i) => { shuffleRank[p.id] = i; });

const galleryEl = document.getElementById("gallery-grid");
function renderGallery() {
  galleryEl.innerHTML = "";
  let list = activeCat === "الكل" ? [...products] : products.filter(p => p.cat === activeCat);
  if (activeSub !== "الكل") list = list.filter(p => p.sub === activeSub);

  const searchInput = document.getElementById("globalSearchInput");
  const searchVal = searchInput ? searchInput.value.trim() : "";
  if (searchVal) {
    const q = searchVal.toLowerCase();
    list = list.filter(p =>
      String(p.id).includes(q) ||
      p.name.toLowerCase().includes(q)
    );
  }

  const sortVal = document.getElementById("sortSelect") ? document.getElementById("sortSelect").value : "default";
  if (sortVal === "price-asc") list.sort((a, b) => a.price - b.price);
  else if (sortVal === "price-desc") list.sort((a, b) => b.price - a.price);
  else if (activeCat === "الكل") list.sort((a, b) => shuffleRank[a.id] - shuffleRank[b.id]); // تبويب "الكل": منتجات مخربطة
  else list.reverse(); // تبويب فئة محددة: آخر منتج تمت إضافته يطلع أول واحد

  if (list.length === 0) {
    galleryEl.innerHTML = `<div class="no-results">${t("no_results")}</div>`;
    return;
  }

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-img">
        <img src="${p.img}" alt="${p.name}" ${p.fallback ? `onerror="this.onerror=null;this.src='${p.fallback}'"` : ""} onclick="openLightbox(this.src,'${p.name.replace(/'/g, "\\'")}')">
        <span class="product-id">#${p.id}</span>
        ${p.badge ? `<span class="badge ${p.sale ? 'sale' : ''} ${p.best ? 'best' : ''}">${p.badge}</span>` : ""}
        <button class="add-btn" data-id="${p.id}" title="${t("add_btn")}">
          <span class="add-btn-icon">🛒</span>
        </button>
      </div>
      <div class="card-body">
        <div class="card-cat">${t(catKeyMap[p.cat] || p.cat)}</div>
        <h3>${p.name}</h3>
        <div class="price-row">
          <span class="price-display">${p.price}${CURRENCY}</span>
          ${p.oldPrice ? `<span class="price-old">${p.oldPrice}${CURRENCY}</span>` : ""}
        </div>
      </div>`;
    galleryEl.appendChild(card);
  });

  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      addToCart(Number(btn.dataset.id));
      const icon = btn.querySelector(".add-btn-icon");
      btn.classList.add("added");
      icon.textContent = "✓";
      setTimeout(() => { btn.classList.remove("added"); icon.textContent = "🛒"; }, 1200);
    };
  });
  requestAnimationFrame(observeCards);
}

/* ============ حركة الظهور عند التمرير ============ */
function observeCards() {
  const cards = document.querySelectorAll(".card:not(.reveal)");
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("reveal"); io.unobserve(e.target); } });
  }, { threshold: .1 });
  cards.forEach(c => io.observe(c));
  // ضمان إضافي: أي بطاقة ما ظهرت خلال ثانية (بسبب سكرول برمجي أو تغيّر بالتخطيط) تنكشف تلقائياً
  setTimeout(() => {
    cards.forEach(c => { if (!c.classList.contains("reveal")) c.classList.add("reveal"); });
  }, 900);
}

/* ============ السلة ============ */
function addToCart(id) {
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty++; } else { cart.push({ id, qty: 1 }); }
  updateCartUI();
}
function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { cart = cart.filter(c => c.id !== id); }
  updateCartUI();
}
function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}
function updateCartUI() {
  const countEl = document.getElementById("cartCount");
  const itemsEl = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const waBtn = document.getElementById("waBtn");

  const totalQty = cart.reduce((s, c) => s + c.qty, 0);
  countEl.textContent = totalQty;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty"><div>🛍️</div>${t("cart_empty")}</div>`;
    totalEl.textContent = `0${CURRENCY}`;
    waBtn.disabled = true;
    return;
  }
  waBtn.disabled = false;
  let total = 0;
  itemsEl.innerHTML = cart.map(c => {
    const p = products.find(pr => pr.id === c.id);
    const subtotal = p.price * c.qty;
    total += subtotal;
    return `
      <div class="cart-item">
        <img src="${p.img}" alt="${p.name}" ${p.fallback ? `onerror="this.onerror=null;this.src='${p.fallback}'"` : ""}>
        <div class="ci-info">
          <h4>${p.name} <span class="ci-id">#${p.id}</span></h4>
          <span class="ci-price">${p.price}${CURRENCY} × ${c.qty} = ${subtotal}${CURRENCY}</span>
          <div class="qty-row">
            <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
            <span>${c.qty}</span>
            <button class="qty-btn" onclick="changeQty(${p.id},1)">+</button>
          </div>
          <button class="remove-btn" onclick="removeFromCart(${p.id})">${t("remove_btn")}</button>
        </div>
      </div>`;
  }).join("");
  totalEl.textContent = `${total}${CURRENCY}`;
}

/* ============ فتح / إغلاق صورة كاملة (Lightbox) ============ */
function openLightbox(src, alt) {
  const lb = document.getElementById("imgLightbox");
  const img = document.getElementById("lightboxImg");
  img.src = src;
  img.alt = alt || "";
  lb.classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  const lb = document.getElementById("imgLightbox");
  lb.classList.remove("show");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeLightbox(); closeContactModal(); closeCameraModal(); closeSettingsModal(); closeLanguageModal(); }
});

/* ============ فتح / إغلاق السلة ============ */
function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}

/* ============ فتح / إغلاق قائمة الموبايل ============ */
function openNav() {
  document.getElementById("nav").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}
function closeNav() {
  document.getElementById("nav").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}
function toggleNav() {
  const nav = document.getElementById("nav");
  nav.classList.contains("open") ? closeNav() : openNav();
}
function closeAllPanels() {
  closeCart();
  closeNav();
}
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", closeNav));

/* ============ شريط البحث المنسدل (أيقونة البحث بالزاوية) ============ */
function toggleSearchBar() {
  const bar = document.getElementById("searchBar");
  const opening = !bar.classList.contains("open");
  bar.classList.toggle("open");
  if (opening) {
    setTimeout(() => document.getElementById("globalSearchInput").focus(), 200);
  }
}
function handleGlobalSearch(val) {
  renderGallery();
  const gallerySection = document.getElementById("gallery");
  if (gallerySection) gallerySection.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ============ الانتقال للأعلى (زر الرئيسية بالشريط السفلي) ============ */
function scrollToTop() {
  closeCameraModal();
  closeContactModal();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============ نافذة الإعدادات + اختيار اللغة ============ */
function openSettingsModal() {
  document.getElementById("settingsModal").classList.add("show");
}
function closeSettingsModal() {
  document.getElementById("settingsModal").classList.remove("show");
}
function openLanguageModal() {
  closeSettingsModal();
  document.getElementById("languageModal").classList.add("show");
}
function closeLanguageModal() {
  document.getElementById("languageModal").classList.remove("show");
}
function selectLanguageOption(lang) {
  applyLanguage(lang);
  closeLanguageModal();
}

/* ============ نافذة "تواصل معنا" (واتساب + انستغرام) ============ */
function openContactModal() {
  document.getElementById("contactModal").classList.add("show");
}
function closeContactModal() {
  document.getElementById("contactModal").classList.remove("show");
}
// ربط روابط الانستغرام بإعدادات INSTAGRAM_LINKS تلقائياً
document.addEventListener("DOMContentLoaded", () => {
  const igLinks = document.querySelectorAll(".contact-link.ig");
  if (igLinks[0] && INSTAGRAM_LINKS.iq) igLinks[0].href = INSTAGRAM_LINKS.iq;
  if (igLinks[1] && INSTAGRAM_LINKS.sy) igLinks[1].href = INSTAGRAM_LINKS.sy;
});

/* ============ البحث بالصورة (كاميرا) — مطابقة تقريبية بالألوان والنمط العام ============ */
function openCameraModal() {
  document.getElementById("cameraModal").classList.add("show");
}
function closeCameraModal() {
  document.getElementById("cameraModal").classList.remove("show");
}

function loadImageEl(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// يحسب "بصمة لونية" بسيطة للصورة (شبكة 8×8 من متوسطات الألوان) تُستخدم للمقارنة
function computeSignature(img) {
  const canvas = document.getElementById("visionCanvas");
  const ctx = canvas.getContext("2d");
  const N = 8;
  canvas.width = N; canvas.height = N;
  ctx.clearRect(0, 0, N, N);
  ctx.drawImage(img, 0, 0, N, N);
  const data = ctx.getImageData(0, 0, N, N).data;
  const sig = [];
  for (let i = 0; i < data.length; i += 4) {
    sig.push(data[i] / 255, data[i + 1] / 255, data[i + 2] / 255);
  }
  return sig;
}

function sigDistance(a, b) {
  let s = 0;
  for (let i = 0; i < a.length; i++) { const d = a[i] - b[i]; s += d * d; }
  return s;
}

async function ensureProductSignature(p) {
  if (p.__sig) return p.__sig;
  if (p.__sig === null) return null; // فشلت قبل، ما نعيد المحاولة
  try {
    const img = await loadImageEl(p.img);
    p.__sig = computeSignature(img);
  } catch (e) {
    p.__sig = null;
  }
  return p.__sig;
}

let cameraSearchToken = 0;
async function handleCameraFile(file) {
  if (!file) return;
  const myToken = ++cameraSearchToken;
  const status = document.getElementById("cameraStatus");
  const preview = document.getElementById("cameraPreview");
  const results = document.getElementById("cameraResults");
  results.innerHTML = "";
  const url = URL.createObjectURL(file);
  preview.innerHTML = `<img src="${url}" alt="صورة القطعة">`;
  status.textContent = t("camera_analyzing");
  status.classList.add("loading");

  try {
    const img = await loadImageEl(url);
    const targetSig = computeSignature(img);
    const scored = [];
    for (const p of products) {
      if (myToken !== cameraSearchToken) return; // المستخدم رفع صورة جديدة، نلغي القديمة
      const sig = await ensureProductSignature(p);
      if (sig) scored.push({ p, dist: sigDistance(targetSig, sig) });
    }
    if (myToken !== cameraSearchToken) return;
    scored.sort((a, b) => a.dist - b.dist);
    const top = scored.slice(0, 8);
    status.textContent = top.length ? t("camera_found") : t("camera_none");
    status.classList.remove("loading");
    renderCameraResults(top);
  } catch (e) {
    if (myToken !== cameraSearchToken) return;
    status.textContent = t("camera_error");
    status.classList.remove("loading");
  }
}

function renderCameraResults(list) {
  const results = document.getElementById("cameraResults");
  if (!list.length) { results.innerHTML = ""; return; }
  results.innerHTML = list.map(({ p }) => `
    <div class="cam-result-card" onclick="goToProduct(${p.id})">
      <img src="${p.img}" alt="${p.name}">
      <div class="cam-result-info">
        <span class="cam-result-id">#${p.id}</span>
        <span class="cam-result-name">${p.name}</span>
        <span class="cam-result-price">${p.price}${CURRENCY}</span>
      </div>
    </div>`).join("");
}

function goToProduct(id) {
  closeCameraModal();
  const bar = document.getElementById("searchBar");
  const gi = document.getElementById("globalSearchInput");
  if (gi) gi.value = String(id);
  if (bar) bar.classList.add("open");
  renderGallery();
  const gallerySection = document.getElementById("gallery");
  if (gallerySection) gallerySection.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ============ نافذة "الخدمة متوقفة مؤقتاً" ============ */
function openServiceModal() {
  document.getElementById("serviceModal").classList.add("show");
}
function closeServiceModal() {
  document.getElementById("serviceModal").classList.remove("show");
}

/* ============ إرسال الطلب عبر واتساب ============ */
function sendWhatsAppOrder() {
  if (cart.length === 0) return;
  if (!ORDERS_ENABLED) { openServiceModal(); return; }
  let total = 0;
  let message = "🛍️ *طلب جديد من ستايل روج*\n\n";
  cart.forEach(c => {
    const p = products.find(pr => pr.id === c.id);
    const subtotal = p.price * c.qty;
    total += subtotal;
    message += `🔸 *${p.name}* (رقم المنتج: #${p.id} - ${p.cat})\n`;
    message += `   الكمية: ${c.qty} × ${p.price}${CURRENCY} = ${subtotal}${CURRENCY}\n`;
    message += `   📸 صورة القطعة: ${p.img}\n\n`;
  });
  message += "────────────────\n";
  message += `💰 *الإجمالي: ${total}${CURRENCY}*\n`;
  message += `عدد القطع: ${cart.reduce((s, c) => s + c.qty, 0)}\n\n`;
  message += "يرجى تأكيد الطلب وإرسال العنوان لإتمام التوصيل 🙏";

  const url = `https://wa.me/${WHATSAPP_NUMBERS[selectedCountry]}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

/* ============ تصغير الهيدر عند التمرير ============ */
window.addEventListener("scroll", () => {
  document.querySelector("header").style.boxShadow = window.scrollY > 10 ? "0 6px 20px rgba(0,0,0,.06)" : "none";
});

/* ============ تهيئة أولية ============ */
renderGallery();
updateCartUI();
applyLanguage(currentLang);