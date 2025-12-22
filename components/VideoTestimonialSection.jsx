import React, { useEffect, useMemo, useRef, useState } from "react";

import client1 from "../src/assets/Video Testimonials/01.mp4";
import client2 from "../src/assets/Video Testimonials/02.mp4";
import client3 from "../src/assets/Video Testimonials/03.mp4";
import client4 from "../src/assets/Video Testimonials/04.mp4";
import client5 from "../src/assets/Video Testimonials/05.mp4";
import client6 from "../src/assets/Video Testimonials/06.mp4";
import client7 from "../src/assets/Video Testimonials/07.mp4";
import client8 from "../src/assets/Video Testimonials/08.mp4";
import client9 from "../src/assets/Video Testimonials/09.mp4";

export default function VideoTestimonialSection({
  title = "Your Future Transformation Starts With Stories Like These.",
  videos = [client1, client2, client3, client4, client5, client6, client7, client8,client9],
}) {
  const items = useMemo(() => videos.map((src, i) => ({ src, id: `vid-${i}` })), [videos]);

  // DESKTOP carousel state (3 visible)
  const VISIBLE_DESKTOP = 3;
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, items.length - VISIBLE_DESKTOP);
  const normalize = (next) => {
    if (maxIndex === 0) return 0;
    if (next < 0) return maxIndex;
    if (next > maxIndex) return 0;
    return next;
  };

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const stepPxRef = useRef(0);
  const hasAutoShiftedRef = useRef(false);

  /* ===========================
     ✅ MOBILE AUTO-MUTE FIX
     =========================== */
  const videoMapRef = useRef(new Map()); // id -> HTMLVideoElement
  const activeSoundIdRef = useRef(null);
  const rafRef = useRef(null);

  const isMobileNow = () =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 639px)").matches;

  const setVideoRef = (id) => (node) => {
    if (node) videoMapRef.current.set(id, node);
    else videoMapRef.current.delete(id);
  };

  const muteAllExcept = (keepId) => {
    videoMapRef.current.forEach((v, id) => {
      if (!v) return;
      if (id !== keepId) v.muted = true;
    });
  };

  const muteActiveIfOffscreen = () => {
    if (!isMobileNow()) return;

    const activeId = activeSoundIdRef.current;
    if (!activeId) return;

    const v = videoMapRef.current.get(activeId);
    if (!v) {
      activeSoundIdRef.current = null;
      return;
    }

    // If the video is fullscreen (some mobiles do this), don't auto-mute
    // iOS Safari uses webkitDisplayingFullscreen
    if (v.webkitDisplayingFullscreen) return;
    if (document.fullscreenElement && document.fullscreenElement === v) return;

    const rect = v.getBoundingClientRect();
    const vh = window.innerHeight || 0;

    // "Not visible" = completely out of viewport
    const completelyOut = rect.bottom <= 0 || rect.top >= vh;

    if (completelyOut) {
      v.muted = true;
      activeSoundIdRef.current = null;
    }
  };

  const handleVolumeChange = (id) => {
    const v = videoMapRef.current.get(id);
    if (!v) return;

    // User unmuted this video -> make it the only one with sound
    if (!v.muted) {
      activeSoundIdRef.current = id;
      muteAllExcept(id);
      return;
    }

    // If user muted the active one
    if (activeSoundIdRef.current === id) {
      activeSoundIdRef.current = null;
    }
  };

  const handlePlay = (id) => {
    const v = videoMapRef.current.get(id);
    if (!v) return;

    // If a video starts playing while unmuted, enforce "only this one has sound"
    if (!v.muted) {
      activeSoundIdRef.current = id;
      muteAllExcept(id);
    }
  };

  // ✅ Mobile: on scroll/resize, auto-mute if the unmuted video went off-screen
  useEffect(() => {
    if (typeof window === "undefined") return;

    const tick = () => {
      rafRef.current = null;
      muteActiveIfOffscreen();
    };

    const onScroll = () => {
      if (!isMobileNow()) return;
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("orientationchange", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("orientationchange", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);
  /* =========================== */

  const recalcStep = () => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector("[data-card='true']");
    if (!firstCard) return;
    const gap = parseFloat(getComputedStyle(track).gap || "0") || 0;
    const w = firstCard.getBoundingClientRect().width || 0;
    stepPxRef.current = w + gap;
  };

  const applyTransform = (idx) => {
    const track = trackRef.current;
    if (!track) return;
    if (!stepPxRef.current) recalcStep();
    track.style.transform = `translate3d(${-idx * stepPxRef.current}px, 0, 0)`;
  };

  // Desktop: init + resize
  useEffect(() => {
    const isDesktop = () =>
      typeof window !== "undefined" && !window.matchMedia("(max-width: 639px)").matches;

    if (!isDesktop()) return;

    recalcStep();
    applyTransform(index);

    const onResize = () => {
      if (!isDesktop()) return;
      recalcStep();
      applyTransform(index);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Desktop: move track on index change
  useEffect(() => {
    const isDesktop =
      typeof window !== "undefined" && !window.matchMedia("(max-width: 639px)").matches;
    if (!isDesktop) return;
    applyTransform(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // Desktop: auto shift by 3 when visible (ONLY desktop)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (isMobile) return;

    const el = viewportRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e?.isIntersecting) return;
        if (hasAutoShiftedRef.current) return;
        hasAutoShiftedRef.current = true;

        setTimeout(() => {
          setIndex((prev) => normalize(prev + 3));
        }, 350);
      },
      { threshold: 0.35 }
    );

    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex]);

  const goPrev = () => setIndex((p) => normalize(p - 1));
  const goNext = () => setIndex((p) => normalize(p + 1));

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-200/45 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-orange-300/35 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          {title}
        </h2>

        <div className="mt-10">
          {/* ✅ MOBILE: one video below another */}
          <div className="sm:hidden">
            <div className="rounded-[26px] border border-gray-200 bg-gradient-to-b from-orange-50/70 via-white to-white shadow-[0_18px_55px_rgba(0,0,0,0.10)] px-4 py-7">
              <div className="flex flex-col gap-5">
                {items.map((it) => (
                  <div key={it.id} className="w-full">
                    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                      <div className="relative aspect-[9/16] bg-gray-100">
                        <video
                          ref={setVideoRef(it.id)}
                          onVolumeChange={() => handleVolumeChange(it.id)}
                          onPlay={() => handlePlay(it.id)}
                          src={it.src}
                          className="h-full w-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                          controls
                          preload="metadata"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DESKTOP: 3 cards + arrows + auto shift */}
          <div className="hidden sm:block relative">
            <div className="relative rounded-[26px] border border-gray-200 bg-gradient-to-b from-orange-50/70 via-white to-white shadow-[0_18px_55px_rgba(0,0,0,0.10)] overflow-hidden">
              <div ref={viewportRef} className="relative overflow-hidden px-6 py-8">
                <div
                  ref={trackRef}
                  className="flex gap-5 will-change-transform transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)]"
                  style={{ transform: "translate3d(0,0,0)" }}
                >
                  {items.map((it) => (
                    <div
                      key={it.id}
                      data-card="true"
                      className="shrink-0 basis-[calc((100%-40px)/3)]"
                    >
                      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                        <div className="relative aspect-[9/16] bg-gray-100">
                          <video
                            src={it.src}
                            className="h-full w-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                            preload="metadata"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white border border-gray-200 shadow-md hover:scale-105 active:scale-95 transition grid place-items-center"
                aria-label="Previous"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white border border-gray-200 shadow-md hover:scale-105 active:scale-95 transition grid place-items-center"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
