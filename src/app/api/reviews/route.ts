import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_PHOTOS = 5;
const MAX_FILE_SIZE = 8 * 1024 * 1024;
const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"]);

function cleanText(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function safeFileName(value: string) {
  return value.replace(/[^a-zA-Z0-9._-]/g, "-").replace(/-+/g, "-").slice(0, 120);
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = cleanText(formData.get("name"));
  const email = cleanText(formData.get("email"));
  const projectType = cleanText(formData.get("projectType"));
  const rating = cleanText(formData.get("rating"));
  const review = cleanText(formData.get("review"));
  const permission = cleanText(formData.get("permission"));
  const photos = formData.getAll("photos").filter((entry): entry is File => entry instanceof File && entry.size > 0);

  if (!name || !email || !projectType || !rating || !review || !permission) {
    return NextResponse.json({ message: "Please complete all required review fields." }, { status: 400 });
  }

  if (photos.length > MAX_PHOTOS) {
    return NextResponse.json({ message: "Please attach no more than 5 photos." }, { status: 400 });
  }

  for (const photo of photos) {
    if (!allowedTypes.has(photo.type)) {
      return NextResponse.json({ message: "Please attach image files only." }, { status: 400 });
    }

    if (photo.size > MAX_FILE_SIZE) {
      return NextResponse.json({ message: "Each photo must be smaller than 8 MB." }, { status: 400 });
    }
  }

  const reviewId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const storageRoot = path.join(process.cwd(), "storage", "reviews");
  const reviewDir = path.join(storageRoot, reviewId);
  await mkdir(reviewDir, { recursive: true });

  const savedPhotos = await Promise.all(
    photos.map(async (photo, index) => {
      const extension = path.extname(photo.name) || ".jpg";
      const fileName = `${String(index + 1).padStart(2, "0")}-${safeFileName(path.basename(photo.name, extension))}${extension}`;
      const filePath = path.join(reviewDir, fileName);
      const bytes = Buffer.from(await photo.arrayBuffer());
      await writeFile(filePath, bytes);

      return {
        originalName: photo.name,
        savedName: fileName,
        size: photo.size,
        type: photo.type,
      };
    }),
  );

  const reviewRecord = {
    id: reviewId,
    submittedAt: new Date().toISOString(),
    name,
    email,
    projectType,
    rating,
    review,
    permission,
    photos: savedPhotos,
    status: "pending-review",
  };

  await writeFile(path.join(reviewDir, "review.json"), JSON.stringify(reviewRecord, null, 2));

  return NextResponse.json({ ok: true, id: reviewId });
}

export function GET() {
  return NextResponse.json({ ok: true, endpoint: "reviews" });
}
