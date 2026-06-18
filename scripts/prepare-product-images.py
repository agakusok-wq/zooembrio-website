"""Prepare product and production images for the site."""
from pathlib import Path

from PIL import Image

ASSETS = Path(
    r"C:\Users\Guest\.cursor\projects\c-Users-Guest-Documents-zooembrio-website\assets"
)
OUT_PRODUCTS = Path(__file__).resolve().parent.parent / "public" / "images" / "products"
OUT_PRODUCTION = Path(__file__).resolve().parent.parent / "public" / "images" / "production"

FILES = {
    "wash": "c__Users_Guest_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_100___Wash-3211b69f-2dce-4493-b22c-3a8cad3114a9.png",
    "vit": "c__Users_Guest_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_5___Vit1_2-c43e2db9-bd7a-4e36-b103-0040748230fb.png",
    "wam": "c__Users_Guest_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_5___WaM1_2-e2b3299a-3508-416d-9b97-ba94e7f60997.png",
    "facility": "c__Users_Guest_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_2026-06-18_13-46-53-44711ec5-b3e5-41a5-9471-a7527d44bfd0.png",
}


def trim_transparent(im: Image.Image) -> Image.Image:
    if im.mode != "RGBA":
        im = im.convert("RGBA")
    bbox = im.getbbox()
    return im.crop(bbox) if bbox else im


def save_jpg(im: Image.Image, path: Path, quality: int = 92) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    rgb = Image.new("RGB", im.size, (245, 245, 245))
    if im.mode == "RGBA":
        rgb.paste(im, mask=im.split()[3])
    else:
        rgb.paste(im)
    rgb.save(path, "JPEG", quality=quality, optimize=True)


def extract_vial_only(path: Path) -> Image.Image:
    """Legacy helper — kept for reference; combined photos are used directly."""
    im = trim_transparent(Image.open(path))
    w, h = im.size
    return im.crop((int(w * 0.29), int(h * 0.02), int(w * 0.475), int(h * 0.96)))


def combine_horizontal(
    images: list[Image.Image],
    output: Path,
    target_height: int = 520,
    gap: int = 24,
) -> None:
    resized = []
    for im in images:
        ratio = target_height / im.height
        resized.append(im.resize((int(im.width * ratio), target_height), Image.Resampling.LANCZOS))
    total_w = sum(im.width for im in resized) + gap * (len(resized) - 1)
    canvas = Image.new("RGBA", (total_w, target_height), (245, 245, 245, 255))
    x = 0
    for im in resized:
        canvas.paste(im, (x, 0), im)
        x += im.width + gap
    save_jpg(canvas, output)


def main() -> None:
    src = {key: ASSETS / name for key, name in FILES.items()}
    for key, path in src.items():
        if not path.exists():
            raise FileNotFoundError(f"Missing asset: {key} -> {path}")

    save_jpg(trim_transparent(Image.open(src["wash"])), OUT_PRODUCTS / "wash.jpg")
    save_jpg(trim_transparent(Image.open(src["vit"])), OUT_PRODUCTS / "vit.jpg")
    save_jpg(trim_transparent(Image.open(src["wam"])), OUT_PRODUCTS / "wam.jpg")
    save_jpg(trim_transparent(Image.open(src["facility"])), OUT_PRODUCTION / "facility.jpg")

    print("Done:")
    for folder in (OUT_PRODUCTS, OUT_PRODUCTION):
        for f in sorted(folder.glob("*.jpg")):
            print(f"  {f.name} ({f.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
