import type { WikiEnv } from "./env";

// Rendered Markdown, kept for reuse. Parsing a text, typesetting its math (KaTeX) and turning the
// tree into React elements is most of a research page's server time, and the texts change far less
// often than they are read. The output is a pure function of the text, the options and the env, so
// the elements can be reused as they are: React never mutates them.
//
// An env takes part only when its host vouched for it with `memoEnv`: the key then stands for
// everything the env resolves (the site's envs are plain lookups over the pages and demos they
// were built from). Any other env, a copy made by spreading one included, is never memoized.

const envKeys = new WeakMap<WikiEnv, string>();

/** Marks `env` as resolving exactly what `key` describes, so text rendered with it can be reused. */
export function memoEnv<E extends WikiEnv>(env: E, key: string): E {
  envKeys.set(env, key);
  return env;
}

/** The env's part of a memo key: "" without an env, null when the env can't be memoized. */
export function envKey(env: WikiEnv | undefined): string | null {
  return env ? (envKeys.get(env) ?? null) : "";
}

/** A least-recently-used map whose keys together hold at most `budget` characters. */
export function createMemo<V>(budget: number) {
  const map = new Map<string, V>();
  let size = 0;
  return {
    /** The value for `key`, made by `make` (and kept, unless the key alone is over a tenth of the budget) when it isn't kept yet. */
    get(key: string, make: () => V): V {
      const hit = map.get(key);
      if (hit !== undefined) {
        map.delete(key);
        map.set(key, hit);
        return hit;
      }
      const v = make();
      if (key.length <= budget / 10) {
        map.set(key, v);
        size += key.length;
        for (const k of map.keys()) {
          if (size <= budget) break;
          map.delete(k);
          size -= k.length;
        }
      }
      return v;
    },
    get size() {
      return map.size;
    },
    clear() {
      map.clear();
      size = 0;
    },
  };
}
