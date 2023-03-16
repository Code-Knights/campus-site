export default function cn(...args: string[]): string {
  return args.filter(Boolean).join(' ');
}