from PIL import Image

img = Image.open('public/dks-logo-white.jpg').convert('RGBA')
datas = img.getdata()

new_data = []
for item in datas:
    # item is (R, G, B, A)
    r, g, b = item[0], item[1], item[2]
    # White background -> transparent
    if r > 200 and g > 200 and b > 200:
        new_data.append((255, 255, 255, 0))
    # Black text -> white
    elif r < 80 and g < 80 and b < 80:
        new_data.append((255, 255, 255, 255))
    else:
        new_data.append(item)

img.putdata(new_data)
img.save('public/dks-logo-transparent.png', 'PNG')
print("Image processed successfully!")
