> **Çalışma adı: Oyun Projesi** — Oyunun henüz ismi yok. Anlatıcı maskot karakter belirlenince isim ondan gelecek.
> Bu sayfa ChatGPT/Claude Projects'e yüklenen knowledge files'ın tek gerçek kaynağıdır.
> Sprint sonunda bu sayfadan kopyalanıp Projects'e yüklenir.
> **Son güncelleme:** 2026-02-13

---


## Proje Özeti

- 7-12 yaş çocuklar + aileleri için hibrit kutu oyunu
- 57 fiziksel kart + React Native app
- Türkçe sesli anlatım, hikaye odaklı macera
- Türkiye pazarı öncelikli, tamamen offline

## Fiziksel Bileşenler

- Lokasyon kartları: 12 (QR'lı, tarot boyut)
- Karakter kartları: 10 (QR'lı, modüler)
- Eşya kartları: 20 (QR'lı, yarım kart)
- Modifier kartlar: 12 (QR yok — 4 Şans, 4 Tekrar, 4 Koruma)
- Zar: 2 adet D6
- Tahta: 1 adet, 12 lokasyon alanı

## Dallanma Şemaları (3 finalist)

1. **Hub & Spoke:** Merkezden 5 lokasyona keşif, 2'sini ziyaret et → 10 ending
2. **Kum Saati:** Birlikte başla → ayrıl → birleş → final → 8-9 ending
3. **Örgü/Matris:** 3 kavşak, yollar bazen kesişir → 8-10 ending

## Karakter Ses Tonları

- **Ana Anlatıcı:** Doğal, sıcak, hikayeci → Sadece temizleme
- **Yaşlı Bilge:** Yavaş, alçak, sakin → Deep + reverb
- **Çocuk NPC:** Enerjik, neşeli → Child/Helium hafif
- **Gizemli Karakter:** Fısıltı, meraklı → Ghost veya Echo
- **Mağara Sakini:** Normal, yankılı → Cave efekti

## Göbeklitepe Durumu

- Bölüm 1: YAZILDI
- Tema: "Sırayı anlamak" — Tilki/Yılan/Turna/Boğa
- Merkez soru: "Herkes en önde olmak isterse, birlikte hareket etmek mümkün olur mu?"

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
