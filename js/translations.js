/**
 * Balita Belajar - Translation Data
 * Supports: Indonesian (id), English (en), Arabic (ar)
 * 20 Animal variations with high-quality real studio photos (.jpg).
 * 10 Color variations with real example objects (.jpg).
 */

const TRANSLATIONS = {
  id: {
    greeting: 'Halo Adik! 👋',
    choose: 'Mau Belajar Apa?',
    animals: '🐾 Belajar Hewan',
    colors: '🎨 Belajar Warna',
    back: '← Kembali',
    langName: 'Indonesia',
    animalsTitle: '🐾 Belajar Hewan',
    colorsTitle: '🎨 Belajar Warna',
    speechLang: 'id-ID',
    flag: '🇮🇩',
    animals_data: [
      { id: 'kucing', name: 'Kucing', sound: 'Kucing', image: 'images/kucing.jpg', video: 'videos/kucing.mp4' },
      { id: 'anjing', name: 'Anjing', sound: 'Anjing', image: 'images/anjing.jpg' },
      { id: 'sapi', name: 'Sapi', sound: 'Sapi', image: 'images/sapi.jpg' },
      { id: 'ayam', name: 'Ayam', sound: 'Ayam', image: 'images/ayam.jpg' },
      { id: 'bebek', name: 'Bebek', sound: 'Bebek', image: 'images/bebek.jpg' },
      { id: 'singa', name: 'Singa', sound: 'Singa', image: 'images/singa.jpg' },
      { id: 'gajah', name: 'Gajah', sound: 'Gajah', image: 'images/gajah.jpg' },
      { id: 'harimau', name: 'Harimau', sound: 'Harimau', image: 'images/harimau.jpg' },
      { id: 'kambing', name: 'Kambing', sound: 'Kambing', image: 'images/kambing.jpg' },
      { id: 'kuda', name: 'Kuda', sound: 'Kuda', image: 'images/kuda.jpg' },
      { id: 'monyet', name: 'Monyet', sound: 'Monyet', image: 'images/monyet.jpg' },
      { id: 'burung', name: 'Burung', sound: 'Burung', image: 'images/burung.jpg' },
      { id: 'kelinci', name: 'Kelinci', sound: 'Kelinci', image: 'images/kelinci.jpg' },
      { id: 'beruang', name: 'Beruang', sound: 'Beruang', image: 'images/beruang.jpg' },
      { id: 'panda', name: 'Panda', sound: 'Panda', image: 'images/panda.jpg' },
      { id: 'jerapah', name: 'Jerapah', sound: 'Jerapah', image: 'images/jerapah.jpg' },
      { id: 'katak', name: 'Katak', sound: 'Katak', image: 'images/katak.jpg' },
      { id: 'lumba_lumba', name: 'Lumba-lumba', sound: 'Lumba-lumba', image: 'images/lumba_lumba.jpg' },
      { id: 'serigala', name: 'Serigala', sound: 'Serigala', image: 'images/serigala.jpg' },
      { id: 'burung_hantu', name: 'Burung Hantu', sound: 'Burung Hantu', image: 'images/burung_hantu.jpg' }
    ],
    colors_data: [
      { name: 'Merah', hex: '#FF6B6B', sound: 'Warna, Merah', objectImage: 'images/colors/merah.jpg', objectLabel: '🍎 Apel' },
      { name: 'Kuning', hex: '#FFD93D', sound: 'Warna, Kuning', objectImage: 'images/colors/kuning.jpg', objectLabel: '🍌 Pisang' },
      { name: 'Biru', hex: '#4D96FF', sound: 'Warna, Biru', objectImage: 'images/colors/biru.jpg', objectLabel: '🦋 Kupu-kupu' },
      { name: 'Hijau', hex: '#6BCB77', sound: 'Warna, Hijau', objectImage: 'images/colors/hijau.jpg', objectLabel: '🍃 Daun' },
      { name: 'Oranye', hex: '#FFB347', sound: 'Warna, Oranye', objectImage: 'images/colors/oranye.jpg', objectLabel: '🍊 Jeruk' },
      { name: 'Ungu', hex: '#C084FC', sound: 'Warna, Ungu', objectImage: 'images/colors/ungu.jpg', objectLabel: '🍇 Anggur' },
      { name: 'Pink', hex: '#F472B6', sound: 'Warna, Pink', objectImage: 'images/colors/pink.jpg', objectLabel: '🌹 Mawar' },
      { name: 'Cokelat', hex: '#A0522D', sound: 'Warna, Cokelat', objectImage: 'images/colors/cokelat.jpg', objectLabel: '🍫 Cokelat' },
      { name: 'Hitam', hex: '#2B2D42', sound: 'Warna, Hitam', objectImage: 'images/colors/hitam.jpg', objectLabel: '🐱 Kucing Hitam' },
      { name: 'Putih', hex: '#FFFFFF', sound: 'Warna, Putih', objectImage: 'images/colors/putih.jpg', objectLabel: '🐰 Kelinci Putih' }
    ]
  },

  en: {
    greeting: 'Hi There! 👋',
    choose: 'What Do You Want to Learn?',
    animals: '🐾 Learn Animals',
    colors: '🎨 Learn Colors',
    back: '← Back',
    langName: 'English',
    animalsTitle: '🐾 Learn Animals',
    colorsTitle: '🎨 Learn Colors',
    speechLang: 'en-US',
    flag: '🇬🇧',
    animals_data: [
      { id: 'kucing', name: 'Cat', sound: 'Cat', image: 'images/kucing.jpg', video: 'videos/kucing.mp4' },
      { id: 'anjing', name: 'Dog', sound: 'Dog', image: 'images/anjing.jpg' },
      { id: 'sapi', name: 'Cow', sound: 'Cow', image: 'images/sapi.jpg' },
      { id: 'ayam', name: 'Chicken', sound: 'Chicken', image: 'images/ayam.jpg' },
      { id: 'bebek', name: 'Duck', sound: 'Duck', image: 'images/bebek.jpg' },
      { id: 'singa', name: 'Lion', sound: 'Lion', image: 'images/singa.jpg' },
      { id: 'gajah', name: 'Elephant', sound: 'Elephant', image: 'images/gajah.jpg' },
      { id: 'harimau', name: 'Tiger', sound: 'Tiger', image: 'images/harimau.jpg' },
      { id: 'kambing', name: 'Goat', sound: 'Goat', image: 'images/kambing.jpg' },
      { id: 'kuda', name: 'Horse', sound: 'Horse', image: 'images/kuda.jpg' },
      { id: 'monyet', name: 'Monkey', sound: 'Monkey', image: 'images/monyet.jpg' },
      { id: 'burung', name: 'Bird', sound: 'Bird', image: 'images/burung.jpg' },
      { id: 'kelinci', name: 'Rabbit', sound: 'Rabbit', image: 'images/kelinci.jpg' },
      { id: 'beruang', name: 'Bear', sound: 'Bear', image: 'images/beruang.jpg' },
      { id: 'panda', name: 'Panda', sound: 'Panda', image: 'images/panda.jpg' },
      { id: 'jerapah', name: 'Giraffe', sound: 'Giraffe', image: 'images/jerapah.jpg' },
      { id: 'katak', name: 'Frog', sound: 'Frog', image: 'images/katak.jpg' },
      { id: 'lumba_lumba', name: 'Dolphin', sound: 'Dolphin', image: 'images/lumba_lumba.jpg' },
      { id: 'serigala', name: 'Wolf', sound: 'Wolf', image: 'images/serigala.jpg' },
      { id: 'burung_hantu', name: 'Owl', sound: 'Owl', image: 'images/burung_hantu.jpg' }
    ],
    colors_data: [
      { name: 'Red', hex: '#FF6B6B', sound: 'Color, Red', objectImage: 'images/colors/merah.jpg', objectLabel: '🍎 Apple' },
      { name: 'Yellow', hex: '#FFD93D', sound: 'Color, Yellow', objectImage: 'images/colors/kuning.jpg', objectLabel: '🍌 Banana' },
      { name: 'Blue', hex: '#4D96FF', sound: 'Color, Blue', objectImage: 'images/colors/biru.jpg', objectLabel: '🦋 Butterfly' },
      { name: 'Green', hex: '#6BCB77', sound: 'Color, Green', objectImage: 'images/colors/hijau.jpg', objectLabel: '🍃 Leaf' },
      { name: 'Orange', hex: '#FFB347', sound: 'Color, Orange', objectImage: 'images/colors/oranye.jpg', objectLabel: '🍊 Orange' },
      { name: 'Purple', hex: '#C084FC', sound: 'Color, Purple', objectImage: 'images/colors/ungu.jpg', objectLabel: '🍇 Grapes' },
      { name: 'Pink', hex: '#F472B6', sound: 'Color, Pink', objectImage: 'images/colors/pink.jpg', objectLabel: '🌹 Rose' },
      { name: 'Brown', hex: '#A0522D', sound: 'Color, Brown', objectImage: 'images/colors/cokelat.jpg', objectLabel: '🍫 Chocolate' },
      { name: 'Black', hex: '#2B2D42', sound: 'Color, Black', objectImage: 'images/colors/hitam.jpg', objectLabel: '🐱 Black Cat' },
      { name: 'White', hex: '#FFFFFF', sound: 'Color, White', objectImage: 'images/colors/putih.jpg', objectLabel: '🐰 White Rabbit' }
    ]
  },

  ar: {
    greeting: '!مرحباً 👋',
    choose: 'ماذا تريد أن تتعلم؟',
    animals: '🐾 تعلم الحيوانات',
    colors: '🎨 تعلم الألوان',
    back: 'رجوع →',
    langName: 'العربية',
    animalsTitle: '🐾 تعلم الحيوانات',
    colorsTitle: '🎨 تعلم الألوان',
    speechLang: 'ar-SA',
    flag: '🇸🇦',
    animals_data: [
      { id: 'kucing', name: 'قطة', sound: 'قطة', image: 'images/kucing.jpg', video: 'videos/kucing.mp4' },
      { id: 'anjing', name: 'كلب', sound: 'كلب', image: 'images/anjing.jpg' },
      { id: 'sapi', name: 'بقرة', sound: 'بقرة', image: 'images/sapi.jpg' },
      { id: 'ayam', name: 'دجاجة', sound: 'دجاجة', image: 'images/ayam.jpg' },
      { id: 'bebek', name: 'بطة', sound: 'بطة', image: 'images/bebek.jpg' },
      { id: 'singa', name: 'أسد', sound: 'أسد', image: 'images/singa.jpg' },
      { id: 'gajah', name: 'فيل', sound: 'فيل', image: 'images/gajah.jpg' },
      { id: 'harimau', name: 'نمر', sound: 'نمر', image: 'images/harimau.jpg' },
      { id: 'kambing', name: 'ماعز', sound: 'ماعز', image: 'images/kambing.jpg' },
      { id: 'kuda', name: 'حصان', sound: 'حصان', image: 'images/kuda.jpg' },
      { id: 'monyet', name: 'قرد', sound: 'قرد', image: 'images/monyet.jpg' },
      { id: 'burung', name: 'طائر', sound: 'طائر', image: 'images/burung.jpg' },
      { id: 'kelinci', name: 'أرنب', sound: 'أرنب', image: 'images/kelinci.jpg' },
      { id: 'beruang', name: 'دب', sound: 'دب', image: 'images/beruang.jpg' },
      { id: 'panda', name: 'باندا', sound: 'باندا', image: 'images/panda.jpg' },
      { id: 'jerapah', name: 'زرافة', sound: 'زرافة', image: 'images/jerapah.jpg' },
      { id: 'katak', name: 'ضفدع', sound: 'ضفدع', image: 'images/katak.jpg' },
      { id: 'lumba_lumba', name: 'دلفين', sound: 'دلفين', image: 'images/lumba_lumba.jpg' },
      { id: 'serigala', name: 'ذئب', sound: 'ذئب', image: 'images/serigala.jpg' },
      { id: 'burung_hantu', name: 'بومة', sound: 'بومة', image: 'images/burung_hantu.jpg' }
    ],
    colors_data: [
      { name: 'أحمر', hex: '#FF6B6B', sound: 'لون، أحمر', objectImage: 'images/colors/merah.jpg', objectLabel: '🍎 تفاحة' },
      { name: 'أصفر', hex: '#FFD93D', sound: 'لون، أصفر', objectImage: 'images/colors/kuning.jpg', objectLabel: '🍌 موز' },
      { name: 'أزرق', hex: '#4D96FF', sound: 'لون، أزرق', objectImage: 'images/colors/biru.jpg', objectLabel: '🦋 فراشة' },
      { name: 'أخضر', hex: '#6BCB77', sound: 'لون، أخضر', objectImage: 'images/colors/hijau.jpg', objectLabel: '🍃 ورقة' },
      { name: 'برتقالي', hex: '#FFB347', sound: 'لون، برتقالي', objectImage: 'images/colors/oranye.jpg', objectLabel: '🍊 برتقال' },
      { name: 'بنفسجي', hex: '#C084FC', sound: 'لون، بنفسجي', objectImage: 'images/colors/ungu.jpg', objectLabel: '🍇 عنب' },
      { name: 'وردي', hex: '#F472B6', sound: 'لون، وردي', objectImage: 'images/colors/pink.jpg', objectLabel: '🌹 وردة' },
      { name: 'بني', hex: '#A0522D', sound: 'لون، بني', objectImage: 'images/colors/cokelat.jpg', objectLabel: '🍫 شوكولاتة' },
      { name: 'أسود', hex: '#2B2D42', sound: 'لون، أسود', objectImage: 'images/colors/hitam.jpg', objectLabel: '🐱 قط أسود' },
      { name: 'أبيض', hex: '#FFFFFF', sound: 'لون، أبيض', objectImage: 'images/colors/putih.jpg', objectLabel: '🐰 أرنب أبيض' }
    ]
  }
};
