"use client";

import { ContactPage } from "@/app/payload-types";
import { Loader2, SendHorizonal } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const inputBase =
  "block w-full rounded-sm bg-[#111814] text-white shadow-sm sm:text-sm py-3 px-4 " +
  "focus:border-primary focus:ring-0 " +
  "focus-visible:outline focus-visible:outline-1 focus-visible:outline-primary/50";

export function ContactForm({ form }: { form: ContactPage["form"] }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/contact-submissions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
          }),
        }
      );
      if (!res.ok) {
        const error = await res.json();
        console.log(error);
      }
      await res.json();
      toast.success(
        "Thank you for your message!. We will get back to you soon."
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.", {
        duration: 5000,
      });
    } finally {
      setLoading(false);
      form.reset();
    }
  }

  return (
    <div className="lg:col-span-7 xl:col-span-8">
      <div className="rounded-2xl bg-surface-dark p-6 sm:p-10 shadow-sm border border-primary/30 dark:border-border-dark">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-slate-200"
                htmlFor="name"
              >
                {form.name?.label}
              </label>
              <input
                className={inputBase}
                id="name"
                name="name"
                placeholder={form.name?.placeholder || "Enter your name..."}
                type="text"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-slate-200"
                htmlFor="email"
              >
                {form.email?.label}
              </label>
              <input
                className={inputBase}
                id="email"
                name="email"
                placeholder={form.email?.placeholder || "Enter your email..."}
                type="email"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-slate-200"
              htmlFor="subject"
            >
              {form.subject?.label}
            </label>

            <div className="relative">
              <select
                className={`${inputBase} appearance-none pr-10`}
                id="subject"
                name="subject"
              >
                {form.subject?.options?.map((option) => (
                  <option key={option.id}>{option.label}</option>
                ))}
              </select>

              {/* Custom Chevron */}
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-slate-200"
              htmlFor="message"
            >
              {form.message?.label}
            </label>
            <textarea
              className={`${inputBase} resize-none`}
              id="message"
              name="message"
              placeholder={form.message?.placeholder || "Enter your message..."}
              rows={6}
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              disabled={loading}
              className="inline-flex w-full md:w-auto items-center justify-center rounded-sm bg-primary px-8 py-3.5 text-sm font-bold text-slate-900 shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-primary transition-all duration-200"
              type="submit"
            >
              {loading ? "Sending..." : form.submit}
              <span className="ml-2">
                {loading ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : (
                  <SendHorizonal size={16} />
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
