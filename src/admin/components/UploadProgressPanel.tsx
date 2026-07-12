import { CheckCircle2, ImageUp } from 'lucide-react'
import type { UploadProgressState } from '@/admin/hooks/useFileUpload'

interface UploadProgressPanelProps {
  progress: UploadProgressState
  isComplete?: boolean
}

export function UploadProgressPanel({
  progress,
  isComplete = false,
}: UploadProgressPanelProps) {
  const roundedPercent = Math.round(progress.percent)
  const visiblePercent = Math.min(100, Math.max(0, progress.percent))
  const imageCountText =
    progress.totalFiles > 0
      ? `${progress.completedFiles} av ${progress.totalFiles} bilder`
      : 'Förbereder bilder'

  return (
    <div
      className="w-full rounded-2xl border border-black/6 bg-white p-4 shadow-[0_18px_45px_-36px_rgba(31,41,55,0.35)]"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <div className="mt-0.5 rounded-full bg-[#f8f8f5] p-2 text-textPrimary">
            {isComplete ? (
              <CheckCircle2 className="h-5 w-5 text-success" />
            ) : (
              <ImageUp className="h-5 w-5" />
            )}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-textPrimary">
              {progress.currentStep || 'Laddar upp'}
            </p>
            <p className="truncate text-sm text-textSecondary">
              {progress.currentFileName || imageCountText}
            </p>
          </div>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-lg font-semibold tabular-nums text-textPrimary">
            {roundedPercent}%
          </p>
          <p className="text-xs text-textSecondary">{imageCountText}</p>
        </div>
      </div>
      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-[#f1f1ee]">
        <div
          className="h-full rounded-full bg-highlight transition-[width] duration-300 ease-out"
          style={{ width: `${visiblePercent}%` }}
        />
      </div>
    </div>
  )
}
