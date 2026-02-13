# Oyun App

7-12 yaş çocuklar + aileleri için hibrit kutu oyunu. React Native app.

## Yapı

```
oyun-app/
├── .github/workflows/     # GitHub Actions (Notion backup)
├── scripts/               # Yardımcı scriptler
│   └── notion-backup.js   # Günlük Notion → GitHub yedek
├── notion-backup/         # Otomatik yedek (bot tarafından güncellenir)
│   ├── pages/             # Kritik sayfalar (Markdown)
│   └── databases/         # Veritabanları (JSON)
└── src/                   # (yakında) React Native app kodu
```

## Notion Backup

Her gün 06:00 TR'de GitHub Actions otomatik çalışır:
- Kritik Notion sayfalarını Markdown olarak yedekler
- Veritabanlarını JSON olarak yedekler
- `notion-backup/` klasörüne commit atar

Manuel tetikleme: Actions → Notion Backup → Run workflow
