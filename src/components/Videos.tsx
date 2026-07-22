"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, X, Clock } from "lucide-react";
import { videos } from "@/lib/data";

function getYouTubeEmbedUrl(url: string): string | null {
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  const longMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  const id = shortMatch?.[1] ?? longMatch?.[1];
  return id
    ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`
    : null;
}

export default function Videos() {
  const [active, setActive] = useState<number | null>(null);
  const activeVideo = active !== null ? videos[active] : null;
  const embedUrl = activeVideo?.url
    ? getYouTubeEmbedUrl(activeVideo.url)
    : null;

  return (
    <section id="videos" className="py-28 md:py-36 border-t border-line">
      <div className="section-shell">
        <div className="mb-14 max-w-lg">
          <p className="eyebrow mb-4">Video Editing</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
            Motion work behind the campaigns | Editing Works.
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-6">
          {videos.map((video, i) => {
            const isPortrait = video.orientation === "portrait";
            const hasVideo = Boolean(video.url);

            return (
              <motion.button
                key={video.title}
                onClick={() => {
                  if (!hasVideo) return;

                  // Open Instagram Reels in a new tab
                  if (video.url?.includes("instagram.com")) {
                    window.open(
                      video.url,
                      "_blank",
                      "noopener,noreferrer"
                    );
                    return;
                  }

                  // Keep existing YouTube popup behavior
                  setActive(i);
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={hasVideo ? { scale: 1.015 } : undefined}
                className={`group relative overflow-hidden rounded-2xl border border-line bg-surface text-left ${
                  isPortrait
                    ? "w-full sm:w-64 aspect-[9/16]"
                    : "w-full sm:flex-1 aspect-video"
                } ${!hasVideo ? "cursor-default" : ""}`}
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes={
                    isPortrait
                      ? "256px"
                      : "(max-width: 640px) 100vw, 50vw"
                  }
                  className={`object-cover transition-transform duration-500 ${
                    hasVideo ? "group-hover:scale-105" : "opacity-70"
                  }`}
                />

                <div
                  className={`absolute inset-0 bg-black/40 transition-colors duration-300 ${
                    hasVideo ? "group-hover:bg-black/55" : ""
                  }`}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  {hasVideo ? (
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-signal text-black transition-transform duration-300 group-hover:scale-110">
                      <Play size={20} fill="black" />
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 rounded-full border border-line bg-black/70 px-4 py-2 text-xs text-paper">
                      <Clock size={14} className="text-signal" />
                      Coming soon
                    </span>
                  )}
                </div>

                <p className="absolute bottom-4 left-4 text-sm text-paper">
                  {video.title}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-line bg-black"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close video"
                className="absolute right-4 top-4 z-10 rounded-full bg-black/70 p-2 text-paper"
              >
                <X size={18} />
              </button>

              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={activeVideo.title}
                  className="aspect-video w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : activeVideo.url ? (
                <video
                  src={activeVideo.url}
                  controls
                  autoPlay
                  className="aspect-video w-full"
                />
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}