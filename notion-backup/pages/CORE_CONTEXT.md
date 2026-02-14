> **Çalışma adı: Oyun Projesi** — Oyunun henüz ismi yok. Anlatıcı maskot karakter belirlenince isim ondan gelecek.
> Bu sayfa ChatGPT/Claude Projects'e yüklenen knowledge files'ın tek gerçek kaynağıdır.
> Sprint sonunda bu sayfadan kopyalanıp Projects'e yüklenir.
> **Son güncelleme:** 2026-02-13

---


## Proje Özeti

- 7-12 yaş çocuklar + aileleri için hibrit kutu oyunu
- 54 kart + 2 zar + 1 tahta = 57 fiziksel bileşen + React Native app
- Türkçe sesli anlatım, hikaye odaklı macera
- Türkiye pazarı öncelikli, tamamen offline

## Fiziksel Bileşenler

- Lokasyon kartları: 12 (QR'lı, tarot boyut)
- Karakter kartları: 10 (QR'lı, modüler — 4'ü oyuncu karakteri: Tilki/Yılan/Turna/Boğa, 6'sı senaryo bazlı NPC)
- Eşya kartları: 20 (QR'lı, yarım kart)
- Modifier kartlar: 12 (QR yok — 4 Şans, 4 Tekrar, 4 Koruma)
- Zar: 2 adet D6
- Tahta: 1 adet, 12 lokasyon alanı
- **Toplam:** 54 kart (42 QR'lı) + 2 zar + 1 tahta = 57 fiziksel bileşen

## Dallanma Modeli — Göbeklitepe


**Model:** Kum Saati + Hub & Spoke hibrit


**Yapı:**

- 0-2 dk: Tutorial + karakter tanıtımı (beraber)
- 2-7 dk: Büyük Seçim 1 → 3 ana dal ayrımı (Yarık/Tünel/Kapı)
- 7-17 dk: Dal yolculukları + küçük seçimler (her dalda 1 alt seçim = 6 mini-yol)
- 17-18 dk: Birleşme → Merkez Oda (4 oyuncu beraber bulmaca)
- 18-23 dk: Sıralama Bulmacası (60 sn müzakere)
- 23-28 dk: Büyük Seçim 2 → Final kilidi (3 yol: Güç/Hile/Takım)
- 28-30 dk: Ending + MVP açıklaması

**Sonuçlar:** 3 büyük dal → 6 mini-yol → 1 birleşme → 3 final yolu → **5 major ending**


**Ses dosyası:** ~450-500 dosya/senaryo

> Diğer senaryolar için dallanma modeli ayrıca belirlenecek.

## Karakter Sistemi

- **4 Oyuncu Karakteri:** Tilki/Yılan/Turna/Boğa
    - Her karakter: 1 özel yetenek + uzmanlık alanında zar bonusu (+1)
    - Her dalda farklı karakter öne çıkar (Yarık→Tilki, Tünel→Yılan, Kapı→Boğa, Bulmaca→Turna)
- **NPC'ler:** Modüler kart sistemiyle senaryo bazlı değişir

## Karakter Ses Tonları

> ⚠️ Henüz kesinleşmedi. Aşağıdaki tablo taslaktır.
- **Ana Anlatıcı:** Doğal, sıcak, hikayeci → Sadece temizleme
- **Yaşlı Bilge:** Yavaş, alçak, sakin → Deep + reverb
- **Çocuk NPC:** Enerjik, neşeli → Child/Helium hafif
- **Gizemli Karakter:** Fısıltı, meraklı → Ghost veya Echo
- **Mağara Sakini:** Normal, yankılı → Cave efekti

## Gizli Görev Sistemi (Sadece Seviye 2)

- Oyun başında app her oyuncuya gizli görev verir
- App sessizce takip eder
- Oyun sonunda MVP + kişisel mesaj
- Seviye 1'de bu sistem YOK

## Modüler Kart Sistemi


Aynı fiziksel kart, farklı senaryoda farklı anlam. Karakter/lokasyon yazarken kartın görselinden bağımsız düşün. App QR okuyunca aktif senaryoya göre içerik gösterir.


## Yasaklar

- Jump scare, gerçekçi şiddet, karanlık temalar
- TTS — sadece Aycan'ın sesi
- Ağır/uzun metinler — çocuklar dinleyecek
- Tek doğrusal yol — dallanma şart
- Ebeveynin pasif kalacağı sahne
- Çocuk verisi toplama (profil, analytics, hesap yok)

---


--- Değişiklik: 2026-02-13 — Fiziksel bileşenler güncellendi (54 kart, Yara/Durum kartları iptal). Dallanma modeli güncellendi (Kum Saati+Hub&Spoke hibrit, 5 ending, ~450-500 ses). Karakter sistemi netleştirildi (4 oyuncu + NPC'ler). Ses tonları TBD olarak işaretlendi.

