import os
from PIL import Image

def convert_to_webp(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                file_path = os.path.join(root, file)
                name, ext = os.path.splitext(file_path)
                webp_path = f"{name}.webp"
                
                if not os.path.exists(webp_path):
                    try:
                        with Image.open(file_path) as img:
                            # Convert to RGB if it's RGBA and saving as JPEG-like webp (though webp supports alpha)
                            img.save(webp_path, 'webp', quality=80)
                            print(f"Converted {file_path} to {webp_path}")
                            # optionally remove original to save space
                            os.remove(file_path)
                    except Exception as e:
                        print(f"Error converting {file_path}: {e}")

convert_to_webp('./public/images')
