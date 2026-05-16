# Brainiac Context — i18n messages (English)
# Sourced by hook scripts. Default language.
# To switch: set BRAINIAC_LANG=pt-BR in .claude/settings.json env block.

# --- Common ---
MSG_HEADER="[Brainiac Clean Code Gate]"

# --- Gate: Banned filenames ---
MSG_BANNED_FILENAME="Banned filename pattern detected (No Limbo Rule)."
MSG_BANNED_FILENAME_HINT="Rename the file with a meaningful, domain-specific name. Forbidden prefixes: wip-, temp-, old-, unused-, legacy-."

# --- Gate: File size ---
MSG_FILE_TOO_LARGE="File exceeds 500 lines in product code."
MSG_FILE_TOO_LARGE_HINT="Split by responsibility, or add 'brainiac-allow-large reason=\"...\"' marker in the first 10 lines if splitting would fragment the domain."

# --- Gate: any without justification ---
MSG_ANY_FORBIDDEN="Use of \`: any\` without inline justification."
MSG_ANY_FORBIDDEN_HINT="Replace 'any' with an explicit type. If genuinely needed (e.g., parsing boundary), add '// brainiac:any-ok reason=\"...\"' comment on the same line."

# --- Gate: SEC-1 token/secret leak ---
MSG_SEC1_TOKEN_LEAK="Token/secret pattern detected (SEC-1 from SECURITY_STANDARDS)."
MSG_SEC1_TOKEN_LEAK_HINT="Remove the literal token immediately. Three steps: (1) rotate at provider (revoke/regenerate), (2) replace in code with env var reference (e.g., process.env.GITHUB_TOKEN), (3) audit blast radius at provider. There is NO exemption for SEC-1 — '// security-allow' markers do not apply here."

# --- Gate: Canonical protection (since v1.15.0) ---
MSG_CANONICAL_HEADER="[Brainiac Canonical Gate]"
MSG_CANONICAL_BLOCKED="Edit blocked: target is a framework canonical under context/agents/brainiac/."
MSG_CANONICAL_HINT_1="Preferred: refactor the change as a Project Extension under context/agents/project/ via /brainiac-context-agent."
MSG_CANONICAL_HINT_2="Official path: run /brainiac-context-update to evolve canonicals."
MSG_CANONICAL_HINT_3="Justified bypass: include the marker brainiac-canonical-edit reason=\"...\" inside the Edit/Write payload so the reviewer can audit later."

# --- Gate: Context Hygiene / PostCompact (since v1.20.0, Iron Law 7) ---
MSG_POST_COMPACT_HEADER="=== Brainiac post-compact reload (Iron Law 7) ==="
MSG_POST_COMPACT_LINE_TRIGGER="Compact completed, trigger"
MSG_POST_COMPACT_LINE_FRAMEWORK="Framework spec has been re-injected via @AGENTS.md -> @context/.brainiac-context-framework.md (import chain)."
MSG_POST_COMPACT_LINE_CRITICAL="Before critical work (Build / Learn / framework update / migration / refactor / complex bugfix):"
MSG_POST_COMPACT_STEP1="Confirm access to Iron Laws 1-7 (framework spec loaded)."
MSG_POST_COMPACT_STEP2="Re-read the active intent (feature-*.md / bug-*.md / refactor-*.md)."
MSG_POST_COMPACT_STEP3="Re-read ADRs referenced in the intent's Related section."
MSG_POST_COMPACT_STEP4="Check .brainiac/last-compact-state.json for handoff."
MSG_POST_COMPACT_STEP5="Run /context — if >=60%, continuing critical work without a new /compact or /clear is a Brainiac violation (Iron Law 7.5)."
MSG_POST_COMPACT_FOOTER="If it is a simple continuation, the summary is sufficient."

# --- Gate: Context Hygiene / PreCompact (since v1.20.0, Iron Law 7) ---
MSG_PRE_COMPACT_HEADER="[Brainiac pre-compact]"
MSG_PRE_COMPACT_BODY="Compact starting. Iron Law 7: handoff saved to .brainiac/last-compact-state.json. post-compact.sh will inject the reload checklist. If this compact is a response to a scope-switch, consider /clear instead (Iron Law 7.4)."
MSG_PRE_COMPACT_BLOCKED_REASON="Auto-compact blocked by BRAINIAC_BLOCK_AUTOCOMPACT=1 (opt-in). Run /compact manually to confirm, or unset the env var to allow."

# --- Gate: Scope-switch (since v1.20.0, Iron Law 7.4) ---
MSG_SCOPE_SWITCH_HEADER="[Brainiac context-hygiene]"
MSG_SCOPE_SWITCH_BODY="Scope switch detected. Iron Law 7.4: never start a new scope at or above 40%.

Actions:
- Run /context to see current usage.
- If >=40%, /clear is required before proceeding (do not use /compact for scope switch).
- /compact only preserves the same task; detailed history is lost.
- After /clear, framework spec is re-injected via @import chain (CLAUDE.md -> @AGENTS.md -> @context/.brainiac-context-framework.md)."
