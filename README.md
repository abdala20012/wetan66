# Luxury Gift Page

مشروع Vite React جاهز لصفحة هدية رومانسية فاخرة.

## التشغيل

```bash
npm install
npm run dev
```

## أهم التعديلات

افتح `src/App.jsx` وعدّل:

```js
const DISPLAY_NAME = "مي";
const SITE_PASSWORD = "1234";
const ACQUAINTANCE_DATE = "2022-04-25T00:00:00";
const SPECIAL_DATE = "2026-05-01T00:00:00";
const MUSIC_SRC = "/love.mp3";
const VOICE_SRC = "/voice-message.mp3";
```

## ملفات public المطلوبة اختيارية

ضع الملفات التالية داخل فولدر `public`:

```txt
love.mp3
voice-message.mp3
music.jpg
1.jpg
2.jpg
3.jpg
4.jpg
5.jpg
6.jpg
7.jpg
8.jpg
9.jpg
```

لو الصور غير موجودة، سيظهر بديل Gradient تلقائيًا.


ملفات مهمة داخل public:
- profile.jpg  -> صورة البروفايل أعلى كلمة السر ومع أنيميشن الدخول
- love.mp3
- voice-message.mp3
- 1.jpg إلى 9.jpg


## حل مشكلة Vercel Permission denied

تم تعديل أمر البناء في `package.json` إلى:

```json
"build": "node ./node_modules/vite/bin/vite.js build"
```

وتمت إضافة `vercel.json` بالإعدادات المناسبة:
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
