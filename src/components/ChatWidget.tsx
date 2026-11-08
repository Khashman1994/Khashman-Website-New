"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { submitChatLead, type ChatState } from "@/app/actions/chat";
import { CHAT_FAQ, type FaqEntry } from "@/lib/chat-faq";

type Message = { id: number; from: "bot" | "user"; text: string; link?: FaqEntry["link"] };
type View = "faq" | "form" | "done";

const initialState: ChatState = { status: "idle", message: "" };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("faq");
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, from: "bot", text: "Hallo! Ich beantworte gern die häufigsten Fragen. Was möchtest du wissen?" },
  ]);
  const [topic, setTopic] = useState("");
  const nextId = useRef(1);
  const panelRef = useRef<HTMLDivElement>(null);
  const [state, formAction, pending] = useActionState(submitChatLead, initialState);

  // Escape schließt den Chat, Fokus bleibt im Panel
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (state.status === "success") setView("done");
  }, [state.status]);

  const push = (message: Omit<Message, "id">) => {
    setMessages((prev) => [...prev, { ...message, id: nextId.current++ }]);
  };

  const askFaq = (entry: FaqEntry) => {
    push({ from: "user", text: entry.question });
    push({ from: "bot", text: entry.answer, link: entry.link });
  };

  const startForm = (text?: string) => {
    if (text) setTopic(text);
    push({ from: "bot", text: "Super, dann schreib mir kurz, wie ich dich erreichen kann." });
    setView("form");
  };

  const restart = () => {
    setMessages([{ id: nextId.current++, from: "bot", text: "Gern! Was möchtest du noch wissen?" }]);
    setView("faq");
    setTopic("");
  };

  const fieldError = (key: keyof NonNullable<ChatState["errors"]>) => state.errors?.[key];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? "Chat schließen" : "Chat öffnen"}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ink-950 shadow-lg shadow-accent/30 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
          </svg>
        )}
      </button>

      {open && (
        <div
          id="chat-panel"
          ref={panelRef}
          tabIndex={-1}
          role="dialog"
          aria-label="Fragen an Khashman Webdesign"
          className="fixed bottom-24 right-5 z-50 flex max-h-[min(70vh,560px)] w-[min(360px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-fg/10 bg-ink-900 text-fg shadow-2xl outline-none"
        >
          <div className="flex items-center justify-between border-b border-fg/10 px-4 py-3">
            <div>
              <p className="text-sm font-semibold">Khashman Webdesign</p>
              <p className="text-xs text-fg/60">Antwort in der Regel innerhalb eines Tages</p>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            {messages.map((m) => (
              <div key={m.id} className={m.from === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={
                    m.from === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-sm bg-accent px-3.5 py-2 text-sm text-ink-950"
                      : "max-w-[85%] rounded-2xl rounded-bl-sm bg-ink-800 px-3.5 py-2 text-sm text-fg/90"
                  }
                >
                  {m.text}
                  {m.link && (
                    <a
                      href={m.link.href}
                      target={m.link.href.startsWith("http") ? "_blank" : undefined}
                      rel={m.link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-2 block text-accent-soft underline underline-offset-4"
                    >
                      {m.link.label} →
                    </a>
                  )}
                </div>
              </div>
            ))}

            {view === "faq" && (
              <div className="grid gap-2 pt-1">
                {CHAT_FAQ.map((entry) => (
                  <button
                    key={entry.id}
                    type="button"
                    onClick={() => askFaq(entry)}
                    className="rounded-xl border border-fg/10 px-3.5 py-2 text-left text-sm text-fg/80 transition-colors hover:border-accent hover:text-fg focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    {entry.question}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => startForm()}
                  className="rounded-xl bg-accent/15 px-3.5 py-2 text-left text-sm font-semibold text-accent-soft hover:bg-accent/25"
                >
                  Anderes Anliegen → Nachricht senden
                </button>
              </div>
            )}

            {view === "form" && (
              <form action={formAction} className="space-y-3 pt-1" noValidate>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <input type="hidden" name="topic" value={topic} />

                <Field label="Name" name="name" error={fieldError("name")} autoComplete="name" defaultValue={state.values?.name} />
                <Field label="E-Mail" name="email" type="email" error={fieldError("email")} autoComplete="email" defaultValue={state.values?.email} />
                <Field label="Telefon (optional)" name="phone" type="tel" error={fieldError("phone")} autoComplete="tel" defaultValue={state.values?.phone} />
                <div>
                  <label htmlFor="chat-message" className="mb-1 block text-xs text-fg/60">Deine Nachricht</label>
                  <textarea
                    id="chat-message"
                    name="message"
                    rows={3}
                    maxLength={2000}
                    required
                    className="w-full rounded-lg border border-fg/15 bg-ink-950 px-3 py-2 text-sm text-fg focus-visible:outline-2 focus-visible:outline-accent"
                    defaultValue={state.values?.message ?? (topic ? `Ich habe eine Frage zu: ${topic}\n\n` : "")}
                  />
                  {fieldError("message") && <p className="mt-1 text-xs text-red-400">{fieldError("message")}</p>}
                </div>

                {state.status === "error" && <p className="text-xs text-red-400">{state.message}</p>}

                <button
                  type="submit"
                  disabled={pending}
                  className="w-full rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-ink-950 disabled:opacity-60"
                >
                  {pending ? "Wird gesendet …" : "Anfrage senden"}
                </button>
                <p className="text-[11px] leading-relaxed text-fg/60">
                  Ich verwende deine Angaben nur, um dir zu antworten. Details in der{" "}
                  <a href="/datenschutz" className="underline">Datenschutzerklärung</a>.
                </p>
              </form>
            )}

            {view === "done" && (
              <div className="space-y-3">
                <p className="text-sm text-fg/90">{state.message}</p>
                <button type="button" onClick={restart} className="text-sm text-accent-soft underline underline-offset-4">
                  Noch eine Frage stellen
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  autoComplete,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
  defaultValue?: string;
}) {
  const id = `chat-${name}`;
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs text-fg/60">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        className="w-full rounded-lg border border-fg/15 bg-ink-950 px-3 py-2 text-sm text-fg focus-visible:outline-2 focus-visible:outline-accent"
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
