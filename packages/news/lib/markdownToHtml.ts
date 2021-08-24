import markdown from 'markdown-it'

const md = markdown({
  html: true,
  linkify: true,
  typographer: true,
})

export default function markdownToHtml(markdowninput: string): string {
  return md.render(markdowninput)
}
