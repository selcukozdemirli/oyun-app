
Bu sayfa, projede kesinleşmiş ve tartışmaya kapalı kararları içerir. Tüm çalışmalar bu çerçeve içinde yapılmalıdır.


## 📑 Alt Sayfalar


## ✅ Temel Kararlar (Özet)

## Oyun Tasarımı

- **Ana Mekanik:** Stop Thief (ses) + Kids Chronicles (QR) + Zar-Kart
- **Yaş:** 7-9 yaş (Seviye 1: Rehberli) / 10-12 yaş (Seviye 2: Stratejik)
- **Süre:** 20-30 dk
- **Oyuncu:** 2-4 kişi
- **Fiziksel:** 57 bileşen (42 QR'lı kart)

## App & Teknoloji

- **App Rolü:** Anlatıcı + Hakem (masal tonu)
- **Tech:** React Native, tamamen offline
- **Seslendirme:** İnsan sesi (eş) + AI post-production
- **Geliştirme:** Claude Code ile vibe coding

## Ticari Model

- **Fiyat:** 999 TL
- **Gelir:** Base kutu + App DLC (mini hikayeler) + Fiziksel Exp
- **DLC Fiyat:** TBD
- **Satış:** Web sitesi → Pazaryerleri → Fiziki mağazalar
- **Pazarlama:** Pedagog onaylı ("eğitici" değil)

## Üretim & Kaynak

- **Grafik:** AI araçları (Nano Banana Pro, Veo3, Gemini)
- **Prototip:** Matbaa (karton) + 3D printer (objeler)
- **NeoTroy:** Hayır - bağımsız yayıncılık
- **Kickstarter:** Hayır (şimdilik)

## Değişmezler


❌ **Yapılmayacaklar:** Uzun döngü, çoklu telefon, login/sosyal, kopya, BT/RFID, sunucu bağımlı, "eğitici" pazarlama, TTS


✅ **Zorunlular:** 5-7dk kural öğrenimi, tek telefon, çocuklar bağımsız oynayabilmeli, pro Türkçe ses, offline, COPPA/KVKK


## Referans Oyunlar

- **Stop Thief!** → Ses-tabanlı dedektiflik
- **Kids Chronicles** → QR ile etkileşim, tutorial sistemi
- **Genel Masa Oyunu** → Zar (D6) + El kartları

_Karar Tarihi: 1 Şubat 2025_


## 🎲 Mekanik Detay (v2.0)

## Oyun Döngüsü


**KOLAY MOD (7-9 yaş) – 4 adım:**

1. QR tara
2. Ses dinle
3. Zar at
4. Sonuç

**ZOR MOD (10-12 yaş) – 5 adım:**

1. QR tara
2. Ses dinle
3. Zar at
4. Modifier düşün/kullan
5. Sonuç

## Modifier Kart Sistemi (Hibrit Model)


**KOLAY MOD:**

- Modifier kartlar APP TETİKLER
- Örnek: "İyice zorlandınız! Şans Perisi size yardım ediyor! 🌟"
- Fiziksel kart masaya konur ama app verir
- Amaç: Bilişsel yükü minimize etme

**ZOR MOD:**

- Modifier kartlar OYUNCU ELİNDE
- Oyun başında her oyuncu 2 kart alır (kör çeker)
- İstediği anda kullanabilir, kullanınca masaya geri verir
- Amaç: Strateji ve karar anları

## Zar Mekanizması


**KOLAY MOD:** Basit eşik → 1-3 başarısız, 4-6 başarılı


**ZOR MOD:** Değişken eşik → "5+ gerekli", "6 şart" gibi


## Gizli Görev Sistemi (Zor Mod)


App Otomatik Takip:

- Oyun başında app gizli görev verir (sadece sen görürsün)
- Oyun sırasında app sessizce sayar
- Oyun sonunda app sonuçları açıklar ve MVP belirler
- ✅ Hile riski sıfır, baskı hissi yok, objektif puanlama

## Dallanma Optimizasyonu


**8 Varyasyon:**

- 4 "Büyük Dal" → farklı final, farklı lokasyonlar, farklı eşyalar
- 4 "Küçük Dal" → aynı final, farklı eşya kombinasyonları

**Ses Dosyası Hesabı:**

- Ortak: 60 + Büyük dal: 15 + Küçük dal: 5 = 80 dosya/senaryo
- 4 senaryo × 80 = 320 dosya (MAKUL)

## El Kartları (3 Tür)

- ⭐ Şans (4 adet): Zar sonucuna +2
- 🔄 Tekrar (4 adet): Zarı tekrar at
- 🛡️ Koruma (4 adet): Başarısızlık etkisini iptal et

**Kart Ekonomisi:** Oyun başı herkes 2 kart alır. Doğru lokasyon bulunca +1 kart. Modifier kartlarda QR YOK, sadece görsel sembol + app'te buton.


## Güncellenmiş Fiziksel Bileşenler


| Bileşen           | Adet   | QR           | Not                            |
| ----------------- | ------ | ------------ | ------------------------------ |
| Ana tahta         | 1      | Hayır        | Tek taraflı, 12 lokasyon alanı |
| Lokasyon kartları | 12     | Evet (tarot) | Her senaryoda farklı anlam     |
| Karakter kartları | 10     | Evet (tarot) | Modüler sistem                 |
| Eşya kartları     | 20     | Evet (yarım) | Modüler sistem                 |
| Modifier kartlar  | 12     | HAYIR        | 4 Şans + 4 Tekrar + 4 Koruma   |
| Zar (D6)          | 2      | -            | Fiziksel                       |
| **TOPLAM**        | **57** | **42 QR'lı** |                                |


## Kids Chronicles Karşılaştırma


| Özellik         | Kids Chronicles     | Bizim Oyun           |
| --------------- | ------------------- | -------------------- |
| 3D Sahne        | Zorunlu (gyroscope) | YOK (sadece ses)     |
| Backtracking    | Sorunlu (3 tarama)  | Fast travel butonu   |
| Rastlantısallık | Yok (deterministik) | Zar + Modifier       |
| Zorluk          | Tek (kolay)         | İki (7-9 / 10-12)    |
| Ekrana Bakma    | Orta-Yüksek         | Minimum              |
| Sesli Anlatım   | %30-40              | %80-90               |
| Tekrar Değeri   | Düşük               | Yüksek (8 varyasyon) |


**KC'den Alınanlar:** QR teknolojisi, App-hakem felsefesi, ipucu karakteri, sıfır kural kitapçığı, modüler kart sistemi


## Bilişsel Yük Referansları

- Kids Chronicles: 6 adım
- Unlock! Kids: 4 adım
- Stop Thief!: 3 adım
- Bizim Kolay Mod: 4 adım ✅
- Bizim Zor Mod: 5 adım ✅

_Karar Tarihi: 2 Şubat 2026 | Durum: ✅ Kesinleşti_


_Not: Bu mekanik final versiyondur. Playtest sonrası sadece parametre ayarı yapılabilir._


## 🎙️ Seslendirme Detay

## Temel Felsefe


İnsan sesi ana malzeme, AI sadece post-production. TTS (ElevenLabs vb.) KULLANILMAYACAK.


## Neden Yapay Ses Değil?

- Türkçe kalitesi yetersiz (aksan/vurgu)
- Çocuklar için "uncanny valley" riski
- Duygusal tonlama doğal gelmiyor
- Maliyet: $22-99/ay + karakter limitleri

## AI Araçları (Sadece Post-Production)


| Araç          | İşlev                         | Fiyat                  |
| ------------- | ----------------------------- | ---------------------- |
| Adobe Podcast | Gürültü temizleme ("Enhance") | Ücretsiz               |
| Voicemod      | Karakter efektleri            | Ücretsiz + $45/yıl Pro |
| Audacity      | Kayıt ve düzenleme            | Ücretsiz               |
| Auphonic      | Final mastering               | 2 saat/ay ücretsiz     |


## Karakter Sesleri


| Karakter         | Kayıt Tonu   | Efekt                  |
| ---------------- | ------------ | ---------------------- |
| Ana Anlatıcı     | Doğal, sıcak | Yok (sadece temizleme) |
| Yaşlı Bilge      | Yavaş, alçak | Deep + reverb          |
| Çocuk NPC        | Enerjik      | Child/Helium hafif     |
| Gizemli Karakter | Fısıltı      | Ghost veya Echo        |
| Mağara Sakini    | Normal       | Cave                   |


## İş Akışı


Kayıt → Adobe Podcast (temizleme) → Voicemod (efekt) → Audacity (birleştirme) → Auphonic (mastering)


## Ses Ton Rehberi


❌ Kötü (Bilgi Odaklı): "Ormana vardınız. Burada üç eşya var. Eşyalardan birini seçin."


✅ İyi (Duygu Odaklı): "Oooh, ormanın içi ne kadar karanlık! 🌲 [Rüzgar sesi] Uzaktan bir şey parıldıyor... Acaba ne olabilir?"


**Kural:** Eşin her cümleyi "anlatıyor" değil "yaşatıyor" olmalı.


## Eğitim Planı

- 7 günlük başlangıç programı hazırlandı
- Pratik metinler ve ton egzersizleri dahil
- Hedef: Hafta sonunda demo senaryo üretilebilir seviye

_Karar Tarihi: 1 Şubat 2025 | Durum: ✅ Kesinleşti_


## 🎯 Yaş Segmentasyonu & Pazarlama

## Yaş Segmentasyonu


| Yaş  | Rol                             | Platform                  | İçerik                              |
| ---- | ------------------------------- | ------------------------- | ----------------------------------- |
| 4-7  | Masal Dinleyicisi (Lead Gen)    | Sosyal Medya (IG/YouTube) | Doğrusal masallar, karakter tanıtım |
| 7-9  | Oyuncu (Seviye 1)               | Oyun + Sosyal Medya       | Basit kararlar, hikaye dallanması   |
| 9-12 | Oyuncu (Seviye 2)               | Oyun (ağırlıklı)          | Karmaşık mantık, derin hikaye       |
| 12+  | Ziyaretçi (Ebeveyn/Abla/Ağabey) | Oyun (destek rolü)        | "Sıkılmadan eşlik"                  |


## Sosyal Medya Funnel


[4-7 yaş] Instagram/YouTube Masalları


    → Karakterlere aşinalık + Marka tanıma


        → [7 yaş dönümü] "Artık sen karar verebilirsin" geçiş kampanyası


            → [7-12 yaş] Oyun satışı


**Kritik İçgörü:** Masal içerikleri = lead generation aracı. Oyun satışı 2-3 yıl önceden başlayan yatırımın sonucu.


## Zorluk Seviyeleri


| Seviye   | Yaş                   | App Tonu                        | Başarı Eşiği | Karmaşıklık |
| -------- | --------------------- | ------------------------------- | ------------ | ----------- |
| Seviye 1 | 7-9 (optimal: 7-8)    | "Beraber düşünelim" + bol ipucu | %70+         | 2/5         |
| Seviye 2 | 9-12 (optimal: 10-12) | "Senin kararların belirliyor"   | %40-60       | 4/5         |


## 12+ "Ziyaretçi" Rolü Tasarımı


**Sorun:** 12+ hedef değil ama sıkılmadan eşlik edebilmeli.


**Çözümler:**

- **Gizli Bilgi Sistemi:** App bazı ipuçlarını sadece 12+ "danışmana" verir
- **Meta-Oyun:** 12+ kişi hikaye tutarlılığını değerlendirir, çocuğa sorgulama yaptırır
- **Tempo Yönetimi:** 12+ kişi zamanlama rolünde, gerginlik ekler

**Anti-Patern:** 12+ kişiyi sessiz izleyici yapmak → telefonda oynar, oyundan kopar


## Stratejik Etki

- Sosyal medya = oyun satışının 2-3 yıl öncesinden başlayan hunisi
- 12+ tasarım = anlamlı katılım şart
- Marka kimliği = karakterler 4 yaşında tanınır, 12 yaşında nostalji olur

_Karar Tarihi: 3 Şubat 2026 | Durum: ✅ Kesinleşti_


_Değişmezlik: Bu segmentasyon tüm içerik üretimi, zorluk tasarımı ve pazarlamada sabit kalacak._


## 📦 İçerik Genişleme Modeli

## Netflix + Fiziksel Hibrit Modeli


| Bileşen                   | Sıklık             | Fiyat      | Amaç              |
| ------------------------- | ------------------ | ---------- | ----------------- |
| Ücretsiz Bonus Senaryolar | 6 haftada 1        | Ücretsiz   | Retention         |
| Premium Dijital Paketler  | 3 ayda 1           | 29-49 TL   | Gelir akışı       |
| Fiziksel Genişleme        | Yılda 2            | 150-200 TL | Koleksiyon değeri |
| Community Content         | 2. yıldan itibaren | Ücretsiz   | Sonsuz içerik     |


## Modüler Kart Sistemi (KRİTİK)


**Prensip:** Kartlar "sabit karakterler" DEĞİL, "modüler şablonlar" olmalı.


**Örnek:** "Kırmızı Kapı" Kartı (QR: #042)

- Senaryo 1: Ejderhanın Mağarası Girişi
- Senaryo 2: Okul Müdürünün Ofisi
- Senaryo 3: Sihirli Kütüphanenin Gizli Odası
- Senaryo 4: Dedektif Bürosunun Kasası

App QR kodu okuyunca aktif senaryoya göre içerik gösterir.


_Karar Tarihi: 1 Şubat 2026 | Durum: ✅ Kesinleşti_


---


_Son güncelleme: 2026-02-07 (Yapısal refactor: İçerik 6 alt sayfaya bölündü)_

