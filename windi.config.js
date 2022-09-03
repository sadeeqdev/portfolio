import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    colors: {
      'white': '#fff',
      'black': '#000',
      'dark':'#151515',
      'sub-white':'#777',
      'sub-dark': '#0F0E0E',
      'grey':'#161616',
      'purple-dark':'#2D132C',
      'midnight-blue':'#202040',
      'midnight-green':'#003545',
      'maroon':'#3D0000',
      'red':'#AF0404',
      'blue':'#142850',
      'green':'#3B5249',
      'purple':'#160F30', 
      'brown-dark':'#272121',
      'color-1':'#0096FF',
      'color-2':'#EB4747',
      'color-3':'#FBB454',
      'color-4':'#DE6B35',
      'color-5':'#242F9B',
      'color-6':'#7D1E6A',
      'color-7':'#F66B0E',
      'color-8':'#9900F0',
      'color-9':'#247881',
      'color-10':'#332FD0',
      'color-11':'#332FD0',
      'color-12':'#FF1818',
      'color-13':'#008E89',
      'color-14':'#607EAA',
      'color-15':'#F14A16',
      'color-16':'#FC9918',
    },
  },
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  
})