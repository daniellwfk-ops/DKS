import re

with open('src/app/v2/page.tsx', 'r') as f:
    content = f.read()

# Replace liquid-glass-strong with clean Apple-style glass
content = content.replace('liquid-glass-strong', 'bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/5')

# Replace heavy uppercase headings with sleek medium tracking-tight
content = content.replace('font-heading uppercase font-black', 'font-heading font-medium tracking-[-0.03em]')
content = content.replace('font-heading uppercase font-bold', 'font-heading font-medium tracking-[-0.02em]')

# Fix specific giant headers to not be italic and uppercase unless explicitly needed, and reduce weight
content = content.replace('font-heading font-black italic', 'font-heading font-medium tracking-tight')
content = content.replace('font-heading italic font-black', 'font-heading font-medium tracking-tight')
content = content.replace('font-heading uppercase font-black text-[clamp(46px,8vw,120px)]', 'font-heading font-semibold text-[clamp(46px,8vw,120px)] tracking-[-0.04em]')

# Clean pill badges from liquid-glass to subtle bg
content = content.replace('liquid-glass rounded-full px-4 py-1.5 text-xs text-[#D4AF37] font-bold tracking-widest uppercase border border-[#D4AF37]/20 bg-[#D4AF37]/5', 'rounded-full px-4 py-1.5 text-xs text-neutral-400 font-medium tracking-widest uppercase border border-white/10 bg-white/5')

# Make body text more legible (white/60 to neutral-400)
content = content.replace('text-white/60', 'text-neutral-400')
content = content.replace('text-white/50', 'text-neutral-500')

with open('src/app/v2/page.tsx', 'w') as f:
    f.write(content)
