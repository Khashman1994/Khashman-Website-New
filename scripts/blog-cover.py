"""Erzeugt ein Titelbild (1536x1024, WebP) im Design von khashman-webdesign.de.

Aufruf:  python3 scripts/blog-cover.py <slug> "<Titel>"
Ergebnis: public/blog/<slug>.webp
Braucht nur Pillow (pip install pillow). Schriften liegen in scripts/fonts (OFL).
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1536, 1024
ROOT = Path(__file__).resolve().parent.parent
FONTS = Path(__file__).resolve().parent / "fonts"
BG = (5, 6, 10)          # --ink-950 (dunkel)
FG = (255, 255, 255)
MUTED = (255, 255, 255, 150)
ACCENT = (91, 140, 255)  # --color-accent
ACCENT_SOFT = (143, 176, 255)
MARGIN = 120


def wrap(draw, text, font, max_width):
    lines, line = [], ""
    for word in text.split():
        test = f"{line} {word}".strip()
        if draw.textlength(test, font=font) <= max_width:
            line = test
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def main(slug: str, title: str) -> Path:
    img = Image.new("RGB", (W, H), BG)

    # Weiche Lichtflächen in der Akzentfarbe
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    g = ImageDraw.Draw(glow)
    g.ellipse((W - 760, -360, W + 260, 560), fill=ACCENT + (95,))
    g.ellipse((-420, H - 380, 420, H + 360), fill=ACCENT_SOFT + (45,))
    glow = glow.filter(ImageFilter.GaussianBlur(170))
    img.paste(glow, (0, 0), glow)

    # Feines Raster
    grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(grid)
    for x in range(0, W, 64):
        gd.line([(x, 0), (x, H)], fill=(255, 255, 255, 10))
    for y in range(0, H, 64):
        gd.line([(0, y), (W, y)], fill=(255, 255, 255, 10))
    img.paste(grid, (0, 0), grid)

    d = ImageDraw.Draw(img, "RGBA")
    label = ImageFont.truetype(str(FONTS / "Geist-Medium.ttf"), 30)
    d.rounded_rectangle((MARGIN, MARGIN, MARGIN + 18, MARGIN + 18), radius=4, fill=ACCENT)
    d.text((MARGIN + 34, MARGIN - 8), "KHASHMAN WEBDESIGN  ·  BLOG", font=label, fill=MUTED)

    # Titel: Schriftgröße so wählen, dass er in höchstens 4 Zeilen passt
    max_w = W - 2 * MARGIN
    for size in (112, 100, 90, 80, 72, 64):
        font = ImageFont.truetype(str(FONTS / "InstrumentSerif-Regular.ttf"), size)
        lines = wrap(d, title, font, max_w)
        if len(lines) <= 4:
            break
    line_h = int(size * 1.12)
    block_h = line_h * len(lines)
    y = H - MARGIN - 70 - block_h
    for ln in lines:
        d.text((MARGIN, y), ln, font=font, fill=FG)
        y += line_h

    d.line([(MARGIN, H - MARGIN - 20), (MARGIN + 140, H - MARGIN - 20)], fill=ACCENT, width=5)
    url = ImageFont.truetype(str(FONTS / "Geist-Medium.ttf"), 28)
    d.text((MARGIN + 170, H - MARGIN - 38), "khashman-webdesign.de", font=url, fill=MUTED)

    out = ROOT / "public" / "blog" / f"{slug}.webp"
    out.parent.mkdir(parents=True, exist_ok=True)
    img.save(out, "WEBP", quality=82, method=6)
    return out


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit('Aufruf: python3 scripts/blog-cover.py <slug> "<Titel>"')
    print(main(sys.argv[1], sys.argv[2]))
