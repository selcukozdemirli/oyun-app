const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");
const path = require("path");

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

const BACKUP_DIR = path.join(__dirname, "..", "notion-backup");

// Kritik sayfalar
const PAGES = [
  { id: "306f6fd86490818ba695d0f5e36163e5", name: "CORE_CONTEXT" },
  { id: "2faf6fd86490812daaf0f3aa61349881", name: "Stratejik_Kararlar" },
];

// Veritabanları (JSON olarak yedek)
const DATABASES = [
  { id: "f653109da03b4ccf9399c336dc0c2456", name: "Proje_Gorevleri" },
  { id: "692907b1e1784886bb40838a2024ff3c", name: "Kartlar" },
  { id: "3267d3ba5c1744e68b73b1ba8694f8d0", name: "Senaryolar" },
];

async function backupPage(pageInfo) {
  try {
    const mdBlocks = await n2m.pageToMarkdown(pageInfo.id);
    const mdString = n2m.toMarkdownString(mdBlocks);
    const content = mdString.parent || mdString;

    const filePath = path.join(BACKUP_DIR, "pages", `${pageInfo.name}.md`);
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Sayfa: ${pageInfo.name}`);
  } catch (err) {
    console.error(`❌ Sayfa hatası (${pageInfo.name}):`, err.message);
  }
}

async function backupDatabase(dbInfo) {
  try {
    const rows = [];
    let cursor = undefined;

    do {
      const response = await notion.databases.query({
        database_id: dbInfo.id,
        start_cursor: cursor,
        page_size: 100,
      });

      for (const page of response.results) {
        const props = {};
        for (const [key, val] of Object.entries(page.properties)) {
          props[key] = extractValue(val);
        }
        rows.push({
          id: page.id,
          created: page.created_time,
          updated: page.last_edited_time,
          ...props,
        });
      }

      cursor = response.has_more ? response.next_cursor : undefined;
    } while (cursor);

    const filePath = path.join(BACKUP_DIR, "databases", `${dbInfo.name}.json`);
    fs.writeFileSync(filePath, JSON.stringify(rows, null, 2), "utf8");
    console.log(`✅ DB: ${dbInfo.name} (${rows.length} kayıt)`);
  } catch (err) {
    console.error(`❌ DB hatası (${dbInfo.name}):`, err.message);
  }
}

function extractValue(prop) {
  switch (prop.type) {
    case "title":
      return prop.title?.map((t) => t.plain_text).join("") || "";
    case "rich_text":
      return prop.rich_text?.map((t) => t.plain_text).join("") || "";
    case "number":
      return prop.number;
    case "select":
      return prop.select?.name || null;
    case "multi_select":
      return prop.multi_select?.map((s) => s.name) || [];
    case "date":
      return prop.date?.start || null;
    case "checkbox":
      return prop.checkbox;
    case "url":
      return prop.url;
    case "email":
      return prop.email;
    case "phone_number":
      return prop.phone_number;
    case "people":
      return prop.people?.map((p) => p.name || p.id) || [];
    case "created_time":
      return prop.created_time;
    case "last_edited_time":
      return prop.last_edited_time;
    default:
      return null;
  }
}

async function main() {
  // Klasörleri oluştur
  fs.mkdirSync(path.join(BACKUP_DIR, "pages"), { recursive: true });
  fs.mkdirSync(path.join(BACKUP_DIR, "databases"), { recursive: true });

  console.log("🔄 Notion backup başlıyor...\n");

  // Sayfaları yedekle
  for (const page of PAGES) {
    await backupPage(page);
  }

  // Veritabanlarını yedekle
  for (const db of DATABASES) {
    await backupDatabase(db);
  }

  // Timestamp dosyası
  const ts = new Date().toISOString();
  fs.writeFileSync(
    path.join(BACKUP_DIR, "LAST_BACKUP.txt"),
    `Son yedek: ${ts}\n`,
    "utf8"
  );

  console.log(`\n📸 Backup tamamlandı: ${ts}`);
}

main().catch(console.error);
