export default function slugify(str: string): string {
  let tempStr = str
  tempStr = tempStr.replace(/^\s+|\s+$/g, '')
  tempStr = tempStr.toLowerCase()
  tempStr = tempStr.replace(/[^a-z0-9 -]/g, '')
  tempStr = tempStr.replace(/\s+/g, '_')
  tempStr = tempStr.replace(/-+/g, '-')

  return tempStr
}
