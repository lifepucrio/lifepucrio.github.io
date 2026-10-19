# Protótipo navegável — design reference

This is a design mockup created in a visual design tool, exported as a
standalone page. Treat it as a REFERENCE MOCKUP, not production code:
the markup and inline styles carry the design's precise values — colors,
font sizes, spacing, radii, shadows, layout — which an implementation
should replicate faithfully in its own components and styling system
rather than copy wholesale.

## Contents

- `Prototipo.dc.html` — the artboard (a Design Component: an `<x-dc>`
  template + a small logic class). The values to replicate live in its
  inline `style="…"` attributes and the `<helmet><style>` block.
- `Avaliacoes.dc.html` — referenced resource
- `AvaliarParceiro.dc.html` — referenced resource
- `Configuracoes.dc.html` — referenced resource
- `Conversa.dc.html` — referenced resource
- `ConversaSquad.dc.html` — referenced resource
- `CriadorAvatar.dc.html` — referenced resource
- `Foruns.dc.html` — referenced resource
- `Inicio.dc.html` — referenced resource
- `Jogo.dc.html` — referenced resource
- `MatchCirculo.dc.html` — referenced resource
- `Mensagens.dc.html` — referenced resource
- `PerfilCirculo.dc.html` — referenced resource
- `support.js`, `vendor/react*.js` — the runtime that renders the
  component in a browser; not part of the design.

## Uploaded files

Images, fonts and media uploaded to the design are written once each under
`assets/` — 0 in this export — and the exported files refer to them there. A
reference a script puts together while the page runs (for example
`"/_blob/" + id`) is not rewritten and does not load from this folder.

## Viewing

Serve the folder (e.g. `python3 -m http.server`) and open `Prototipo.dc.html`;
some browsers block the scripts over file://.
