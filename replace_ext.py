import os
import re

def replace_extensions(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.html')):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace .png, .jpg, .jpeg with .webp
                new_content = re.sub(r'\.png|\.jpg|\.jpeg', '.webp', content, flags=re.IGNORECASE)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {filepath}")

replace_extensions('./src')
replace_extensions('./public')
