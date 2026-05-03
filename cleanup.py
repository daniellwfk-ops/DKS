import os

def cleanup_old_images(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                filepath = os.path.join(root, file)
                name, ext = os.path.splitext(filepath)
                webp_path = f"{name}.webp"
                if os.path.exists(webp_path):
                    os.remove(filepath)
                    print(f"Removed {filepath}")

cleanup_old_images('./public')
