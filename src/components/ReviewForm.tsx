"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, ImagePlus, Loader2, Star } from "lucide-react";
import type { Locale } from "@/lib/content";

const reviewFormCopy = {
  fr: {
    projectTypes: [
      "Rénovation de cuisine",
      "Rénovation de salle de bain",
      "Rénovation intérieure",
      "Finition de sous-sol",
      "Gypse / Joints",
      "Peinture",
      "Plancher / Ceramique",
      "Autre",
    ],
    permissions: [
      "Oui, RenoPrime peut publier cet avis avec mon prenom.",
      "Oui, mais publiez-le anonymement.",
      "Non, gardez cet avis privé.",
    ],
    labels: {
      name: "Nom",
      email: "Courriel",
      projectType: "Type de projet",
      rating: "Note",
      review: "Votre avis",
      permission: "Permission de publication",
      photos: "Photos du projet",
      attach: "Ajouter jusqu'à 5 photos du travail terminé ou des détails du projet",
      submit: "Envoyer l'avis",
      submitting: "Envoi en cours",
      privateNote:
        "Les avis et photos sont d'abord soumis de façon privée afin de confirmer la permission du client et les détails du projet avant toute publication.",
    },
    placeholders: {
      name: "Votre nom",
      email: "Utilisé seulement pour vérifier l'avis",
      review: "Parlez-nous des travaux, de la communication, de la propreté, de l'échéancier et du résultat final.",
    },
    stars: ["5 étoiles", "4 étoiles", "3 étoiles", "2 étoiles", "1 étoile"],
    error: "L'avis n'a pas pu être envoyé. Veuillez réessayer.",
    success: "Merci. Votre avis a été reçu et sera vérifié avant publication.",
  },
  en: {
    projectTypes: [
      "Kitchen Renovation",
      "Bathroom Renovation",
      "Interior Renovation",
      "Basement Finishing",
      "Drywall / Taping",
      "Painting",
      "Flooring / Tile",
      "Other",
    ],
    permissions: [
      "Yes, RenoPrime may publish this review with my first name.",
      "Yes, but please publish it anonymously.",
      "No, please keep this feedback private.",
    ],
    labels: {
      name: "Name",
      email: "Email",
      projectType: "Project Type",
      rating: "Rating",
      review: "Your Review",
      permission: "Publishing Permission",
      photos: "Project Photos",
      attach: "Attach up to 5 photos of the finished work or project details",
      submit: "Submit Review",
      submitting: "Submitting",
      privateNote:
        "Reviews and photos are submitted privately first, so client permission and project details can be confirmed before anything is published.",
    },
    placeholders: {
      name: "Your name",
      email: "Used only to verify the review",
      review: "Tell us about the work, communication, cleanliness, timing, and final result.",
    },
    stars: ["5 stars", "4 stars", "3 stars", "2 stars", "1 star"],
    error: "The review could not be submitted. Please try again.",
    success: "Thank you. Your review was received and will be reviewed before publishing.",
  },
};

export function ReviewForm({ locale = "fr" }: { locale?: Locale }) {
  const copy = reviewFormCopy[locale];
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [photoNames, setPhotoNames] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: copy.projectTypes[0],
    rating: "5",
    review: "",
    permission: copy.permissions[0],
  });

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const reviewForm = event.currentTarget;
    setStatus("submitting");
    setStatusMessage("");

    const response = await fetch("/api/reviews", {
      method: "POST",
      body: new FormData(reviewForm),
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { message?: string } | null;
      setStatus("error");
      setStatusMessage(data?.message ?? copy.error);
      return;
    }

    setStatus("success");
    setStatusMessage(copy.success);
    setForm({
      name: "",
      email: "",
      projectType: copy.projectTypes[0],
      rating: "5",
      review: "",
      permission: copy.permissions[0],
    });
    setPhotoNames([]);
    reviewForm.reset();
  }

  return (
    <form onSubmit={submitReview} className="grid min-w-0 gap-5 bg-white p-5 shadow-[0_24px_80px_rgba(0,0,0,0.12)] sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-black">
          {copy.labels.name}
          <input
            name="name"
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="h-13 w-full min-w-0 border border-black/12 bg-[#fbfaf7] px-4 text-base font-semibold normal-case tracking-normal text-black outline-none transition focus:border-[#f4c430] focus:bg-white"
            autoComplete="name"
            placeholder={copy.placeholders.name}
          />
        </label>
        <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-black">
          {copy.labels.email}
          <input
            name="email"
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="h-13 w-full min-w-0 border border-black/12 bg-[#fbfaf7] px-4 text-base font-semibold normal-case tracking-normal text-black outline-none transition focus:border-[#f4c430] focus:bg-white"
            autoComplete="email"
            placeholder={copy.placeholders.email}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-black">
          {copy.labels.projectType}
          <select
            name="projectType"
            value={form.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
            className="h-13 w-full min-w-0 border border-black/12 bg-[#fbfaf7] px-4 text-base font-semibold normal-case tracking-normal text-black outline-none transition focus:border-[#f4c430] focus:bg-white"
          >
            {copy.projectTypes.map((projectType) => (
              <option key={projectType}>{projectType}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-black">
          {copy.labels.rating}
          <select
            name="rating"
            value={form.rating}
            onChange={(event) => updateField("rating", event.target.value)}
            className="h-13 w-full min-w-0 border border-black/12 bg-[#fbfaf7] px-4 text-base font-semibold normal-case tracking-normal text-black outline-none transition focus:border-[#f4c430] focus:bg-white"
          >
            {copy.stars.map((label, index) => (
              <option key={label} value={String(5 - index)}>{label}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-black">
        {copy.labels.review}
        <textarea
          name="review"
          required
          value={form.review}
          onChange={(event) => updateField("review", event.target.value)}
          className="min-h-40 w-full min-w-0 resize-y border border-black/12 bg-[#fbfaf7] px-4 py-3 text-base font-semibold normal-case leading-7 tracking-normal text-black outline-none transition focus:border-[#f4c430] focus:bg-white"
          placeholder={copy.placeholders.review}
        />
      </label>

      <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-black">
        {copy.labels.permission}
        <select
          name="permission"
          value={form.permission}
          onChange={(event) => updateField("permission", event.target.value)}
          className="h-13 w-full min-w-0 border border-black/12 bg-[#fbfaf7] px-4 text-base font-semibold normal-case tracking-normal text-black outline-none transition focus:border-[#f4c430] focus:bg-white"
        >
          {copy.permissions.map((permission) => (
            <option key={permission}>{permission}</option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-black">
        {copy.labels.photos}
        <span className="flex min-h-28 cursor-pointer flex-col items-center justify-center gap-3 border border-dashed border-black/20 bg-[#fbfaf7] px-4 py-6 text-center transition hover:border-[#f4c430] hover:bg-white">
          <ImagePlus size={24} className="text-[#b98a12]" aria-hidden="true" />
          <span className="text-base font-semibold normal-case leading-6 tracking-normal text-[#5f5a52]">
            {copy.labels.attach}
          </span>
          <input
            name="photos"
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            onChange={(event) => {
              const selectedFiles = Array.from(event.target.files ?? []).slice(0, 5);
              setPhotoNames(selectedFiles.map((file) => file.name));
            }}
          />
        </span>
      </label>

      {photoNames.length > 0 ? (
        <div className="grid gap-2 border border-black/10 bg-white p-4 text-sm font-semibold text-[#5f5a52]">
          {photoNames.map((photoName) => (
            <span key={photoName}>{photoName}</span>
          ))}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-14 items-center justify-center gap-3 bg-black px-7 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#f4c430] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c430]"
      >
        {status === "submitting" ? copy.labels.submitting : copy.labels.submit}
        {status === "submitting" ? (
          <Loader2 size={18} className="animate-spin" aria-hidden="true" />
        ) : (
          <ArrowRight size={18} aria-hidden="true" />
        )}
      </button>

      {statusMessage ? (
        <div
          className={`border p-4 text-sm font-semibold leading-6 ${
            status === "success"
              ? "border-[#f4c430] bg-[#fff8d8] text-black"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
          role="status"
        >
          {statusMessage}
        </div>
      ) : null}

      <div className="flex items-start gap-3 border border-black/10 bg-[#fbfaf7] p-4 text-sm leading-6 text-[#5f5a52]">
        <Star className="mt-1 shrink-0 text-[#b98a12]" size={18} aria-hidden="true" />
        {copy.labels.privateNote}
      </div>
    </form>
  );
}
