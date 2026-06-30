"use client";

/**
 * Premium Web Audio sound effects — no external files needed.
 * All sounds are synthesized in real-time using the Web Audio API.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  // Resume if suspended (autoplay policy)
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * ECG Heartbeat beep — a clean medical monitor pulse.
 * Two short tones (like a real cardiac monitor: "beep-beep").
 */
export function playHeartbeatSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // First beep
    playBeep(ctx, now, 880, 0.12, 0.3);
    // Second beep (slightly lower, slightly softer)
    playBeep(ctx, now + 0.18, 660, 0.1, 0.2);
  } catch (e) {
    // Silently fail if audio is blocked
  }
}

function playBeep(ctx: AudioContext, startTime: number, freq: number, duration: number, volume: number) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, startTime);

  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(volume, startTime + 0.01);
  gain.gain.setValueAtTime(volume, startTime + duration - 0.02);
  gain.gain.linearRampToValueAtTime(0, startTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(startTime);
  osc.stop(startTime + duration);
}

/**
 * Welcome burst — a rising shimmer/sparkle effect.
 * Multiple ascending tones that create a "magical reveal" feel.
 */
export function playWelcomeBurstSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      const start = now + i * 0.08;
      const dur = 0.4 - i * 0.05;

      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.15, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start + dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(start);
      osc.stop(start + dur);
    });
  } catch (e) {
    // Silently fail
  }
}

/**
 * Knock notification — a warm wooden knock sound.
 * Uses noise burst shaped to mimic a knock on wood.
 */
export function playKnockSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Knock 1
    createKnock(ctx, now, 0.25);
    // Knock 2 (softer)
    createKnock(ctx, now + 0.15, 0.18);
  } catch (e) {
    // Silently fail
  }
}

function createKnock(ctx: AudioContext, startTime: number, volume: number) {
  // Use a short burst of shaped oscillator for "knock"
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(150, startTime);
  osc.frequency.exponentialRampToValueAtTime(60, startTime + 0.08);

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(800, startTime);
  filter.frequency.exponentialRampToValueAtTime(200, startTime + 0.08);

  gain.gain.setValueAtTime(volume, startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.1);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  osc.start(startTime);
  osc.stop(startTime + 0.12);

  // Add a click transient for realism
  const click = ctx.createOscillator();
  const clickGain = ctx.createGain();

  click.type = "square";
  click.frequency.setValueAtTime(400, startTime);

  clickGain.gain.setValueAtTime(volume * 0.6, startTime);
  clickGain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.015);

  click.connect(clickGain);
  clickGain.connect(ctx.destination);

  click.start(startTime);
  click.stop(startTime + 0.02);
}

/**
 * Ambient ECG line drawing tone — a subtle continuous beep that follows the ECG drawing.
 */
export function playECGDrawSound(): () => void {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(440, now);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);

    // Return a stop function
    return () => {
      const t = ctx.currentTime;
      gain.gain.linearRampToValueAtTime(0, t + 0.3);
      osc.stop(t + 0.35);
    };
  } catch (e) {
    return () => {};
  }
}
