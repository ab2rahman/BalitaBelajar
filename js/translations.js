/**
 * Balita Belajar - Translation Data
 * Supports: Indonesian (id), English (en), Arabic (ar)
 * 12 Animal variations with transparent PNG cartoon illustrations & real audio sound recordings.
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
      { id: 'kucing', name: 'Kucing', sound: 'Kucing', image: 'images/kucing.png' },
      { id: 'anjing', name: 'Anjing', sound: 'Anjing', image: 'images/anjing.png' },
      { id: 'sapi', name: 'Sapi', sound: 'Sapi', image: 'images/sapi.png' },
      { id: 'ayam', name: 'Ayam', sound: 'Ayam', image: 'images/ayam.png' },
      { id: 'bebek', name: 'Bebek', sound: 'Bebek', image: 'images/bebek.png' },
      { id: 'singa', name: 'Singa', sound: 'Singa', image: 'images/singa.png' },
      { id: 'gajah', name: 'Gajah', sound: 'Gajah', image: 'images/gajah.png' },
      { id: 'harimau', name: 'Harimau', sound: 'Harimau', image: 'images/harimau.png' },
      { id: 'kambing', name: 'Kambing', sound: 'Kambing', image: 'images/kambing.png' },
      { id: 'kuda', name: 'Kuda', sound: 'Kuda', image: 'images/kuda.png' },
      { id: 'monyet', name: 'Monyet', sound: 'Monyet', image: 'images/monyet.png' },
      { id: 'burung', name: 'Burung', sound: 'Burung', image: 'images/burung.png' }
    ],
    colors_data: [
      { name: 'Merah', hex: '#FF6B6B', sound: 'Warna, Merah' },
      { name: 'Kuning', hex: '#FFD93D', sound: 'Warna, Kuning' },
      { name: 'Biru', hex: '#4D96FF', sound: 'Warna, Biru' },
      { name: 'Hijau', hex: '#6BCB77', sound: 'Warna, Hijau' },
      { name: 'Oranye', hex: '#FFB347', sound: 'Warna, Oranye' },
      { name: 'Ungu', hex: '#C084FC', sound: 'Warna, Ungu' },
      { name: 'Pink', hex: '#F472B6', sound: 'Warna, Pink' },
      { name: 'Coklat', hex: '#A0522D', sound: 'Warna, Cokelat' }
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
      { id: 'kucing', name: 'Cat', sound: 'Cat', image: 'images/kucing.png' },
      { id: 'anjing', name: 'Dog', sound: 'Dog', image: 'images/anjing.png' },
      { id: 'sapi', name: 'Cow', sound: 'Cow', image: 'images/sapi.png' },
      { id: 'ayam', name: 'Chicken', sound: 'Chicken', image: 'images/ayam.png' },
      { id: 'bebek', name: 'Duck', sound: 'Duck', image: 'images/bebek.png' },
      { id: 'singa', name: 'Lion', sound: 'Lion', image: 'images/singa.png' },
      { id: 'gajah', name: 'Elephant', sound: 'Elephant', image: 'images/gajah.png' },
      { id: 'harimau', name: 'Tiger', sound: 'Tiger', image: 'images/harimau.png' },
      { id: 'kambing', name: 'Goat', sound: 'Goat', image: 'images/kambing.png' },
      { id: 'kuda', name: 'Horse', sound: 'Horse', image: 'images/kuda.png' },
      { id: 'monyet', name: 'Monkey', sound: 'Monkey', image: 'images/monyet.png' },
      { id: 'burung', name: 'Bird', sound: 'Bird', image: 'images/burung.png' }
    ],
    colors_data: [
      { name: 'Red', hex: '#FF6B6B', sound: 'Color, Red' },
      { name: 'Yellow', hex: '#FFD93D', sound: 'Color, Yellow' },
      { name: 'Blue', hex: '#4D96FF', sound: 'Color, Blue' },
      { name: 'Green', hex: '#6BCB77', sound: 'Color, Green' },
      { name: 'Orange', hex: '#FFB347', sound: 'Color, Orange' },
      { name: 'Purple', hex: '#C084FC', sound: 'Color, Purple' },
      { name: 'Pink', hex: '#F472B6', sound: 'Color, Pink' },
      { name: 'Brown', hex: '#A0522D', sound: 'Color, Brown' }
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
      { id: 'kucing', name: 'قطة', sound: 'قطة', image: 'images/kucing.png' },
      { id: 'anjing', name: 'كلب', sound: 'كلب', image: 'images/anjing.png' },
      { id: 'sapi', name: 'بقرة', sound: 'بقرة', image: 'images/sapi.png' },
      { id: 'ayam', name: 'دجاجة', sound: 'دجاجة', image: 'images/ayam.png' },
      { id: 'bebek', name: 'بطة', sound: 'بطة', image: 'images/bebek.png' },
      { id: 'singa', name: 'أسد', sound: 'أسد', image: 'images/singa.png' },
      { id: 'gajah', name: 'فيل', sound: 'فيل', image: 'images/gajah.png' },
      { id: 'harimau', name: 'نمر', sound: 'نمر', image: 'images/harimau.png' },
      { id: 'kambing', name: 'ماعز', sound: 'ماعز', image: 'images/kambing.png' },
      { id: 'kuda', name: 'حصان', sound: 'حصان', image: 'images/kuda.png' },
      { id: 'monyet', name: 'قرد', sound: 'قرد', image: 'images/monyet.png' },
      { id: 'burung', name: 'طائر', sound: 'طائر', image: 'images/burung.png' }
    ],
    colors_data: [
      { name: 'أحمر', hex: '#FF6B6B', sound: 'لون، أحمر' },
      { name: 'أصفر', hex: '#FFD93D', sound: 'لون، أصفر' },
      { name: 'أزرق', hex: '#4D96FF', sound: 'لون، أزرق' },
      { name: 'أخضر', hex: '#6BCB77', sound: 'لون، أخضر' },
      { name: 'برتقالي', hex: '#FFB347', sound: 'لون، برتقالي' },
      { name: 'بنفسجي', hex: '#C084FC', sound: 'لون، بنفسجي' },
      { name: 'وردي', hex: '#F472B6', sound: 'لون، وردي' },
      { name: 'بني', hex: '#A0522D', sound: 'لون، بني' }
    ]
  }
};
