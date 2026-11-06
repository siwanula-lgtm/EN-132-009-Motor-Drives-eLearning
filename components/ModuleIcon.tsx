import {
  Activity,
  Cog,
  Cpu,
  Factory,
  Fan,
  Magnet,
  Plug,
  ToggleRight,
  Waves,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Activity,
  Cog,
  Cpu,
  Factory,
  Fan,
  Magnet,
  Plug,
  ToggleRight,
  Waves,
  Wrench,
  Zap,
};

export default function ModuleIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Cpu;
  return <Icon className={className} />;
}
